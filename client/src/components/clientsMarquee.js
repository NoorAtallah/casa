'use client';

import { useRef, useState, useLayoutEffect } from 'react';
import { motion, useMotionValue, useAnimationFrame } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

const GOLD = '#bda985';

// Casa Di Consiglio client list
const CLIENTS = [
  'Abu Dhabi Ship Building PJSC',
  'Amaryllis Polyclinic LLC',
  'Elyzee Hospital LLC',
  'Power Zone Global Advisory',
  'Dar Almashrah Management Consultancies LLC',
  'Bespoke Consultant LLC FZ',
  'Near East Investment Co LLC',
  'VHF Consultancy and Studies and Researches Legal Sciences LLC OPC',
  'خطاط الوقت ذ.م.م',
  'Rahma Al Masaood Group LLC',
  'Reach Mile Delivery Services LLC',
  'Qasr Marakish Restaurant LLC',
  'Hazza Coffee Shop',
  'Reach Investments SPV Limited',
  'Reach Employment Services LLC',
  'Doz Project Management and General Consultancy LLC',
];

const isArabic = (s) => /[؀-ۿ]/.test(s);

// Split into two rows that scroll in opposite directions
const midpoint = Math.ceil(CLIENTS.length / 2);
const ROWS = [CLIENTS.slice(0, midpoint), CLIENTS.slice(midpoint)];

function ClientPill({ name }) {
  const arabic = isArabic(name);
  return (
    <div
      className="flex items-center shrink-0 rounded-full border px-6 py-3 mx-3 bg-white transition-colors duration-300 hover:border-[#bda985]"
      style={{ borderColor: 'rgba(189,169,133,0.28)' }}
    >
      <span
        className="w-1.5 h-1.5 rounded-full mr-3 shrink-0"
        style={{ background: GOLD }}
      />
      <span
        className="text-sm font-medium text-gray-700 whitespace-nowrap"
        dir={arabic ? 'rtl' : 'ltr'}
        lang={arabic ? 'ar' : undefined}
      >
        {name}
      </span>
    </div>
  );
}

/**
 * One infinitely scrolling row.
 * The track holds two identical copies of the list; we translate it by up to
 * half its width and wrap, so the seam is never visible.
 * Driven by useAnimationFrame (not a CSS animation) so it can pause on hover
 * and resume from exactly where it stopped.
 */
function MarqueeRow({ items, direction = 1, speed = 40 }) {
  const trackRef = useRef(null);
  const x = useMotionValue(0);
  const halfWidth = useRef(0);
  const [paused, setPaused] = useState(false);

  useLayoutEffect(() => {
    const measure = () => {
      if (trackRef.current) {
        halfWidth.current = trackRef.current.scrollWidth / 2;
        // Start the reversed row at the wrap point so it scrolls into view
        if (direction < 0) x.set(-halfWidth.current);
      }
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [direction, x]);

  useAnimationFrame((_, delta) => {
    if (paused || !halfWidth.current) return;

    let next = x.get() - direction * speed * (delta / 1000);

    if (next <= -halfWidth.current) next += halfWidth.current;
    else if (next > 0) next -= halfWidth.current;

    x.set(next);
  });

  return (
    <div
      className="overflow-hidden py-2"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <motion.div ref={trackRef} className="flex w-max" style={{ x }}>
        {[...items, ...items].map((name, i) => (
          <ClientPill key={`${name}-${i}`} name={name} />
        ))}
      </motion.div>
    </div>
  );
}

export default function ClientsMarquee() {
  return (
    <section
      className="relative overflow-hidden py-20 lg:py-24"
      style={{
        background:
          'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 50%, #e2e8f0 100%)',
      }}
    >
      {/* Background grid, matching the footer treatment */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(189,169,133,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(189,169,133,0.5) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <div className="relative">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-7xl mx-auto px-6 lg:px-12 mb-12"
        >
          <div className="flex items-center gap-4 mb-5">
            <span
              className="text-[11px] font-semibold uppercase tracking-[0.25em] whitespace-nowrap"
              style={{ color: GOLD }}
            >
              Trusted By
            </span>
            <span
              className="h-px flex-1"
              style={{ background: 'rgba(189,169,133,0.3)' }}
            />
          </div>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="text-3xl md:text-4xl font-bold text-black">
              Our <span style={{ color: GOLD }}>Clients</span>
            </h2>
            <p className="text-gray-600 max-w-xl md:text-right leading-relaxed">
              Institutions, investors and growing businesses across the UAE and
              beyond rely on Casa Di Consiglio for legal, business and financial
              advisory.
            </p>
          </div>
        </motion.div>

        {/* Marquee rows with edge fades */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <MarqueeRow items={ROWS[0]} direction={1} speed={38} />
          <MarqueeRow items={ROWS[1]} direction={-1} speed={32} />

          {/* Fade the ends so items enter and leave softly */}
          <div
            className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32"
            style={{
              background:
                'linear-gradient(90deg, #f4f7fa 0%, rgba(244,247,250,0) 100%)',
            }}
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32"
            style={{
              background:
                'linear-gradient(270deg, #e8edf2 0%, rgba(232,237,242,0) 100%)',
            }}
          />
        </motion.div>

        {/* Confidentiality note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-7xl mx-auto px-6 lg:px-12 mt-12"
        >
          <p className="flex items-center gap-2 text-xs text-gray-500">
            <ShieldCheck className="w-4 h-4 shrink-0" style={{ color: GOLD }} />
            Client names are published with consent. Engagement details remain
            strictly confidential.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
