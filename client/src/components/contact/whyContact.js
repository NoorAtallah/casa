'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Globe2 } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

// Equirectangular projection: x = (lon + 180) / 360, y = (90 - lat) / 180
const locations = [
  {
    country: 'United Arab Emirates',
    flag: '🇦🇪',
    city: 'Sharjah',
    lat: 25.35,
    lon: 55.42,
    color: '#e11d48',
  },
  {
    country: 'Hashemite Kingdom of Jordan',
    flag: '🇯🇴',
    city: 'Amman',
    lat: 31.95,
    lon: 35.93,
    color: '#bda985',
  },
  {
    country: 'Kingdom of Spain',
    flag: '🇪🇸',
    city: 'Madrid',
    lat: 40.42,
    lon: -3.7,
    color: '#bda985',
  },
];

const toPercent = ({ lat, lon }) => ({
  left: `${((lon + 180) / 360) * 100}%`,
  top: `${((90 - lat) / 180) * 100}%`,
});

export default function WhyContact() {
  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-br from-zinc-950 via-slate-900 to-zinc-950 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(189, 169, 133, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(189, 169, 133, 0.3) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.1 }}
          className="max-w-4xl mb-16"
        >
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="inline-flex items-center px-5 py-2.5 rounded-full bg-white/5 backdrop-blur-md border border-[#BDA985]/40 mb-6"
          >
            <span className="text-white font-bold text-xs uppercase tracking-[0.2em]">
              Why Contact Casa Di Consiglio?
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-8"
          >
            Trusted Advice Starts with{' '}
            <span className="bg-gradient-to-r from-[#BDA985] via-[#d4c4a0] to-[#BDA985] bg-clip-text text-transparent">
              a Conversation
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-base md:text-lg text-zinc-300 leading-relaxed mb-6"
          >
            Whether you are an entrepreneur building your first business, an established company
            exploring growth opportunities, or an individual seeking professional development, we
            provide personalised guidance tailored to your goals.
          </motion.p>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-lg md:text-xl text-white font-semibold pl-5 border-l-2 border-[#BDA985]"
          >
            At Casa Di Consiglio, we believe better decisions begin with the right conversation.
          </motion.p>
        </motion.div>

        {/* World map */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative rounded-3xl p-6 md:p-10 bg-gradient-to-r from-zinc-900 via-zinc-950 to-zinc-900 border border-zinc-800 shadow-2xl overflow-hidden"
        >
          <div className="flex items-center gap-3 mb-8">
            <Globe2 className="w-5 h-5 text-[#BDA985]" />
            <span className="text-white font-bold text-xs uppercase tracking-[0.2em]">
              Where We Operate
            </span>
          </div>

          <div className="relative w-full" style={{ aspectRatio: '2 / 1' }}>
            {/* Map silhouette */}
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg"
              alt="World map"
              className="absolute inset-0 w-full h-full object-contain opacity-25"
              style={{ filter: 'invert(1) sepia(1) saturate(0.6) hue-rotate(5deg)' }}
            />

            {/* Markers */}
            {locations.map((location, index) => {
              const position = toPercent(location);
              return (
                <div
                  key={location.country}
                  className="absolute -translate-x-1/2 -translate-y-1/2 group"
                  style={position}
                >
                  {/* Pulse */}
                  <motion.span
                    className="absolute inset-0 -m-4 rounded-full"
                    style={{ background: `${location.color}4d` }}
                    animate={{ scale: [1, 2.2, 1], opacity: [0.6, 0, 0.6] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeOut',
                      delay: index * 0.6,
                    }}
                  />

                  <motion.div
                    whileHover={{ scale: 1.3 }}
                    className="relative w-4 h-4 rounded-full border-2 border-white shadow-lg cursor-pointer"
                    style={{ background: location.color }}
                  />

                  {/* Label */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-6 whitespace-nowrap px-3 py-1.5 rounded-lg bg-zinc-900/90 backdrop-blur-sm border border-[#BDA985]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <span className="text-white text-xs font-bold">
                      {location.flag} {location.city}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Legend */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
            {locations.map((location, index) => (
              <motion.div
                key={location.country}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="flex items-center gap-4 p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-[#BDA985]/50 transition-colors duration-300"
              >
                <span className="text-3xl">{location.flag}</span>
                <div>
                  <p className="text-white font-bold leading-snug">{location.country}</p>
                  <p
                    className="flex items-center text-xs font-semibold mt-1"
                    style={{ color: location.color }}
                  >
                    <MapPin className="w-3 h-3 mr-1" />
                    {location.city}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}