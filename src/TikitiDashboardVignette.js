import React from 'react';
import { motion } from 'framer-motion';
import { VignetteSvg, Shadow, Cursor, enter, fadeIn, grow } from './vignette-kit';

const bars = [
  { x: 64, h: 44, fill: '#c8d9f0' },
  { x: 106, h: 66, fill: '#9db9dd' },
  { x: 148, h: 54, fill: '#7fa3cf' },
  { x: 190, h: 88, fill: '#5b83b8' },
  { x: 232, h: 108, fill: '#2b5288' },
];

function TikitiDashboardVignette() {
  return (
    <VignetteSvg label="Tikiti Dashboard: check-ins climb and an update goes out to all guests">
      <defs>
        <Shadow id="tdSh" />
      </defs>

      <motion.circle cx="610" cy="390" r="220" fill="#b5cbe6" variants={fadeIn(0, 0.6)} />

      {/* analytics panel */}
      <motion.g variants={enter(0.1)} filter="url(#tdSh)">
        <rect x="40" y="40" width="310" height="300" rx="18" fill="#ffffff" />
        <text x="64" y="74" fontSize="15" fontWeight="600" fill="#14243a">Event overview</text>
        <text x="326" y="74" fontSize="12" fill="#7d8ea6" textAnchor="end">This week</text>
        <text x="64" y="126" fontSize="34" fontWeight="700" fill="#14243a">1,204</text>
        <text x="64" y="148" fontSize="13" fill="#7d8ea6">check-ins</text>
        {bars.map((b, i) => (
          <motion.rect key={i} x={b.x} width="30" rx="6" fill={b.fill} variants={grow(0.5 + i * 0.1, 312 - b.h, b.h)} />
        ))}
      </motion.g>

      {/* send update button */}
      <motion.g variants={enter(0.6)} filter="url(#tdSh)">
        <rect x="360" y="120" width="150" height="44" rx="22" fill="#2b5288" />
        <text x="435" y="147" fontSize="15" fontWeight="600" fill="#ffffff" textAnchor="middle">Send update</text>
      </motion.g>

      <Cursor from={[520, 300]} to={[437, 140]} delay={1.0} />

      {/* sent toast */}
      <motion.g variants={enter(2.5)} filter="url(#tdSh)">
        <rect x="280" y="210" width="230" height="56" rx="16" fill="#ffffff" />
        <circle cx="306" cy="238" r="8" fill="#16a34a" />
        <text x="324" y="243" fontSize="14" fontWeight="500" fill="#14243a">Sent to 1,204 guests</text>
      </motion.g>
    </VignetteSvg>
  );
}

export default TikitiDashboardVignette;
