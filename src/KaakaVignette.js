import React from 'react';
import { motion } from 'framer-motion';
import { VignetteSvg, Shadow, enter, fadeIn } from './vignette-kit';

const teeth = Array.from({ length: 10 }, (_, i) => `l12.5 14 l12.5 -14`).join(' ');

function KaakaVignette() {
  return (
    <VignetteSvg label="Kaaka: a grocery receipt is scanned and turned into meal plans">
      <defs>
        <Shadow id="kkSh" />
      </defs>

      <motion.circle cx="600" cy="390" r="230" fill="#d6c7ae" variants={fadeIn(0, 0.6)} />

      {/* receipt */}
      <motion.g variants={enter(0.1)} filter="url(#kkSh)">
        <rect x="50" y="36" width="250" height="304" rx="10" fill="#ffffff" />
        <path d={`M50 340 ${teeth} Z`} fill="#e0ddd5" />
        <g style={{ fontFamily: "'Menlo', 'SFMono-Regular', monospace" }}>
          <text x="175" y="72" fontSize="13" fontWeight="600" letterSpacing="0.14em" fill="#2b241c" textAnchor="middle">KAAKA MART</text>
          <text x="175" y="92" fontSize="11" fill="#a49a88" textAnchor="middle">receipt #3120 · 6:41 PM</text>
          <path d="M72 106 H278" stroke="rgba(0,0,0,0.12)" strokeDasharray="3 4" />
          <text x="72" y="134" fontSize="13" fill="#2b241c">Tomatoes</text>
          <text x="278" y="134" fontSize="13" fill="#2b241c" textAnchor="end">4.50</text>
          <text x="72" y="160" fontSize="13" fill="#2b241c">Rice 5kg</text>
          <text x="278" y="160" fontSize="13" fill="#2b241c" textAnchor="end">12.00</text>
          <text x="72" y="186" fontSize="13" fill="#2b241c">Chicken</text>
          <text x="278" y="186" fontSize="13" fill="#2b241c" textAnchor="end">18.90</text>
          <text x="72" y="212" fontSize="13" fill="#2b241c">Onions</text>
          <text x="278" y="212" fontSize="13" fill="#2b241c" textAnchor="end">3.20</text>
          <path d="M72 228 H278" stroke="rgba(0,0,0,0.12)" strokeDasharray="3 4" />
          <text x="72" y="256" fontSize="13" fontWeight="700" fill="#2b241c">TOTAL</text>
          <text x="278" y="256" fontSize="13" fontWeight="700" fill="#2b241c" textAnchor="end">GHS 38.60</text>
        </g>
        <g fill="#2b241c">
          <rect x="94" y="276" width="3" height="34" /><rect x="102" y="276" width="6" height="34" />
          <rect x="114" y="276" width="2" height="34" /><rect x="122" y="276" width="8" height="34" />
          <rect x="136" y="276" width="3" height="34" /><rect x="144" y="276" width="5" height="34" />
          <rect x="156" y="276" width="2" height="34" /><rect x="164" y="276" width="7" height="34" />
          <rect x="178" y="276" width="4" height="34" /><rect x="188" y="276" width="2" height="34" />
          <rect x="196" y="276" width="6" height="34" /><rect x="208" y="276" width="3" height="34" />
          <rect x="218" y="276" width="8" height="34" /><rect x="232" y="276" width="2" height="34" />
          <rect x="240" y="276" width="5" height="34" /><rect x="252" y="276" width="3" height="34" />
        </g>
      </motion.g>

      {/* scan shimmer */}
      <motion.rect
        x="50"
        width="250"
        height="5"
        rx="2.5"
        fill="#b45309"
        variants={{
          hidden: { y: 48, opacity: 0 },
          show: { y: [48, 330], opacity: [0, 0.8, 0.8, 0], transition: { delay: 0.9, duration: 1.1, times: [0, 0.1, 0.9, 1], ease: 'easeInOut' } },
        }}
      />

      {/* meal card */}
      <motion.g variants={enter(2.1)} filter="url(#kkSh)">
        <rect x="280" y="150" width="230" height="112" rx="18" fill="#ffffff" />
        <rect x="302" y="176" width="56" height="56" rx="14" fill="#c2410c" />
        <circle cx="318" cy="196" r="4" fill="#fde68a" />
        <circle cx="334" cy="206" r="4" fill="#fde68a" />
        <circle cx="322" cy="216" r="4" fill="#fde68a" />
        <text x="376" y="196" fontSize="17" fontWeight="600" fill="#2b241c">Jollof rice</text>
        <text x="376" y="220" fontSize="13" fill="#8a7f6d">25 min · 4 servings</text>
        <text x="376" y="242" fontSize="12" fontWeight="500" fill="#b45309">From your receipt</text>
      </motion.g>

      {/* second meal chip */}
      <motion.g variants={enter(2.5)} filter="url(#kkSh)">
        <rect x="280" y="286" width="180" height="44" rx="22" fill="#2b241c" />
        <text x="370" y="313" fontSize="14" fontWeight="500" fill="#ffffff" textAnchor="middle">Chicken stew</text>
      </motion.g>
    </VignetteSvg>
  );
}

export default KaakaVignette;
