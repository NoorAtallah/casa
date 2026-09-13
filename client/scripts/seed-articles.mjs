// scripts/seed-articles.mjs
//
// Seeds Casa Di Consiglio articles into MongoDB on a drip schedule.
//
//   - Article metadata lives in  scripts/articles.json
//   - Each article's body HTML in scripts/articles/<slug>.html
//   - Articles are released one every RELEASE_EVERY_DAYS, starting at START_DATE
//
// Scheduling works WITHOUT a cron job: every article is seeded as `published`
// but with a future `publishedAt`. The public API only returns articles whose
// publishedAt has already passed, so each one simply appears on its day.
//
// Run from the `client` folder:
//   node scripts/seed-articles.mjs              # seed / update everything
//   node scripts/seed-articles.mjs --dry-run    # print the schedule, write nothing
//   node scripts/seed-articles.mjs --reschedule # only recompute publishedAt dates
//
// Re-running is safe: articles are matched by slug and updated, never duplicated.

import 'dotenv/config';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import mongoose from 'mongoose';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/* ------------------------------------------------------------------ *
 * Schedule
 * ------------------------------------------------------------------ */

// First article goes live on this date (YYYY-MM-DD). null = start today.
const START_DATE = null;

// One article every N days.
const RELEASE_EVERY_DAYS = 2;

// Hour of day (UTC) each article goes live. 05:00 UTC = 09:00 Gulf Standard Time.
const RELEASE_HOUR_UTC = 5;

/* ------------------------------------------------------------------ */

const args = process.argv.slice(2);
const DRY_RUN = args.includes('--dry-run');
const RESCHEDULE_ONLY = args.includes('--reschedule');

const Article = mongoose.model(
  'Article',
  new mongoose.Schema({}, { strict: false, collection: 'articles', timestamps: true })
);

const readBody = (slug) =>
  fs.readFileSync(path.join(__dirname, 'articles', `${slug}.html`), 'utf-8');

const readingTimeOf = (html) =>
  Math.max(
    1,
    Math.ceil(html.replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length / 200)
  );

function releaseDateFor(index) {
  const base = START_DATE ? new Date(`${START_DATE}T00:00:00Z`) : new Date();
  const d = new Date(
    Date.UTC(base.getUTCFullYear(), base.getUTCMonth(), base.getUTCDate(), RELEASE_HOUR_UTC)
  );
  d.setUTCDate(d.getUTCDate() + index * RELEASE_EVERY_DAYS);
  return d;
}

const fmt = (d) => `${d.toISOString().replace('T', ' ').slice(0, 16)} UTC`;

async function run() {
  const manifest = JSON.parse(
    fs.readFileSync(path.join(__dirname, 'articles.json'), 'utf-8')
  );

  console.log(
    `${manifest.length} articles · one every ${RELEASE_EVERY_DAYS} day(s) · ` +
      `first ${fmt(releaseDateFor(0))} · last ${fmt(releaseDateFor(manifest.length - 1))}\n`
  );

  if (DRY_RUN) {
    manifest.forEach((a, i) => {
      const when = releaseDateFor(i);
      const label = when <= new Date() ? 'LIVE NOW' : fmt(when);
      console.log(`${String(i + 1).padStart(2)}. ${label.padEnd(22)} ${a.slug}`);
    });
    console.log('\nDry run — nothing written.');
    return;
  }

  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.error('Missing MONGODB_URI in your environment (.env / .env.local).');
    process.exit(1);
  }

  await mongoose.connect(uri);
  console.log('Connected to MongoDB\n');

  let created = 0;
  let updated = 0;

  for (const [index, meta] of manifest.entries()) {
    const { slug, related, ...fields } = meta;
    const publishedAt = releaseDateFor(index);

    if (RESCHEDULE_ONLY) {
      const res = await Article.updateOne({ slug }, { $set: { publishedAt } });
      if (res.matchedCount) updated++;
      continue;
    }

    const content = readBody(slug);
    const doc = {
      ...fields,
      slug,
      content,
      status: 'published',
      publishedAt,
      readingTime: readingTimeOf(content),
      relatedSlugs: related || [],
    };

    const existing = await Article.findOne({ slug }).lean();

    if (existing) {
      await Article.updateOne({ slug }, { $set: doc });
      updated++;
    } else {
      await Article.create({ ...doc, views: 0 });
      created++;
    }

    const when = publishedAt <= new Date() ? 'live now' : fmt(publishedAt);
    console.log(
      `${String(index + 1).padStart(2)}. ${existing ? 'updated' : 'created'}  ` +
        `${when.padEnd(22)} ${slug}`
    );
  }

  await mongoose.disconnect();
  console.log(`\nDone. ${created} created, ${updated} updated.`);
}

run().catch(async (err) => {
  console.error(err);
  await mongoose.disconnect().catch(() => {});
  process.exit(1);
});
