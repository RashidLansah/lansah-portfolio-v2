import React from 'react';
import { motion } from 'framer-motion';
import { VignetteSvg, Shadow, enter, fadeIn, stamp } from './vignette-kit';

const qr = [
  [150, 150, 30], [246, 150, 30], [150, 246, 30],
  [196, 150, 12], [220, 168, 12], [196, 192, 12], [228, 200, 12],
  [150, 200, 12], [170, 216, 12], [246, 196, 12], [258, 224, 12],
  [196, 224, 12], [216, 244, 12], [246, 246, 12],
  [216, 152, 10], [232, 170, 10], [196, 178, 10], [252, 182, 10],
  [212, 212, 10], [232, 228, 10], [186, 232, 10], [258, 258, 10],
  [224, 262, 10], [196, 258, 10],
];

function TikitiVignette() {
  return (
    <VignetteSvg label="Tikiti: an event ticket QR code is scanned at the gate">
      <defs>
        <Shadow id="tkSh" />
        <clipPath id="tkTicket">
          <rect x="60" y="40" width="300" height="344" rx="20" />
        </clipPath>
      </defs>

      <motion.circle cx="600" cy="380" r="230" fill="#a9c3e8" variants={fadeIn(0, 0.6)} />

      {/* ticket */}
      <motion.g variants={enter(0.1)} filter="url(#tkSh)">
        <g clipPath="url(#tkTicket)">
          <rect x="60" y="40" width="300" height="344" fill="#ffffff" />
          <rect x="60" y="40" width="300" height="80" fill="#14243a" />
          <text x="84" y="76" fontSize="18" fontWeight="700" letterSpacing="0.02em" fill="#ffffff">AFRO BEATS LIVE</text>
          <text x="84" y="100" fontSize="13" fill="rgba(255,255,255,0.7)">Fri, Aug 1 · 7 PM · Accra</text>

          {qr.filter(([, , s]) => s > 0).map(([x, y, s], i) => (
            <rect key={i} x={x} y={y} width={s} height={s} fill="#14243a" />
          ))}
          <rect x="158" y="158" width="14" height="14" fill="#ffffff" />
          <rect x="254" y="158" width="14" height="14" fill="#ffffff" />
          <rect x="158" y="254" width="14" height="14" fill="#ffffff" />
          <rect x="162" y="162" width="6" height="6" fill="#14243a" />
          <rect x="258" y="162" width="6" height="6" fill="#14243a" />
          <rect x="162" y="258" width="6" height="6" fill="#14243a" />

          <path d="M60 316 H360" stroke="rgba(0,0,0,0.15)" strokeWidth="1.5" strokeDasharray="6 6" />
          <text x="84" y="352" fontSize="15" fontWeight="600" fill="#14243a">VIP · Gate 2</text>
          <text x="336" y="352" fontSize="14" fill="#51647f" textAnchor="end">GHS 120</text>
        </g>
        <circle cx="60" cy="316" r="10" fill="#c8d9f0" />
        <circle cx="360" cy="316" r="10" fill="#c8d9f0" />
      </motion.g>

      {/* scan beam */}
      <motion.rect
        x="76"
        width="268"
        height="5"
        rx="2.5"
        fill="#2563eb"
        variants={{
          hidden: { y: 140, opacity: 0 },
          show: { y: [140, 284], opacity: [0, 0.9, 0.9, 0], transition: { delay: 0.9, duration: 1.1, times: [0, 0.1, 0.9, 1], ease: 'easeInOut' } },
        }}
      />

      {/* scanned stamp */}
      <motion.g variants={stamp(2.1)} filter="url(#tkSh)">
        <g transform="rotate(-10 330 210)">
          <rect x="240" y="188" width="180" height="48" rx="24" fill="#16a34a" />
          <path d="M266 212 l7 7 l13 -14" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <text x="296" y="219" fontSize="16" fontWeight="700" letterSpacing="0.08em" fill="#ffffff">SCANNED</text>
        </g>
      </motion.g>

      {/* sold pill */}
      <motion.g variants={enter(0.5)} filter="url(#tkSh)">
        <rect x="380" y="60" width="130" height="44" rx="22" fill="#ffffff" />
        <path d="M400 88 l7 -9 l7 9" stroke="#16a34a" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <text x="420" y="88" fontSize="14" fontWeight="600" fill="#14243a">1,742 sold</text>
      </motion.g>
    </VignetteSvg>
  );
}

export default TikitiVignette;
