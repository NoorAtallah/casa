// lib/mongodb.js
import mongoose from 'mongoose';

// NOTE: deliberately not throwing at module scope. A module-level throw makes
// the whole route fail to load, which surfaces as an opaque 500 with no usable
// message in production. The check happens inside dbConnect() instead, so the
// route's own try/catch can report it.


let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  const MONGODB_URI = process.env.MONGODB_URI;

  if (!MONGODB_URI) {
    throw new Error(
      'MONGODB_URI is not set in this environment. Add it to your hosting ' +
        'provider\'s environment variables (.env.local is local-only and is ' +
        'not deployed).'
    );
  }

  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
      serverSelectionTimeoutMS: 10000,
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      console.log('Connected to MongoDB');
      return mongoose;
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}

export default dbConnect;