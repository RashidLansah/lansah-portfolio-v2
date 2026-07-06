import React from 'react';
import { motion } from 'framer-motion';
import { VignetteSvg, Shadow, enter, fadeIn } from './vignette-kit';

function ChoperlyVignette() {
  return (
    <VignetteSvg label="Choperly: a customer orders food and pays inside a WhatsApp chat">
      <defs>
        <Shadow id="chSh" />
        <clipPath id="chPanel">
          <rect x="40" y="36" width="330" height="304" rx="20" />
        </clipPath>
      </defs>

      <motion.circle cx="600" cy="390" r="230" fill="#f9c6ec" variants={fadeIn(0, 0.6)} />

      {/* WhatsApp chat panel */}
      <motion.g variants={enter(0.1)} filter="url(#chSh)">
        <g clipPath="url(#chPanel)">
          <rect x="40" y="36" width="330" height="304" fill="#ece5dd" />
          <rect x="40" y="36" width="330" height="56" fill="#075e54" />
          <circle cx="80" cy="64" r="16" fill="#ffd6f3" />
          <text x="80" y="70" fontSize="15" fontWeight="600" fill="#a8006b" textAnchor="middle">A</text>
          <text x="106" y="60" fontSize="16" fontWeight="600" fill="#ffffff">Auntie Ama's Kitchen</text>
          <text x="106" y="79" fontSize="12" fill="rgba(255,255,255,0.75)">online</text>

          <motion.g variants={fadeIn(0.4)}>
            <rect x="60" y="108" width="252" height="92" rx="14" fill="#ffffff" />
            <text x="78" y="136" fontSize="15" fontWeight="600" fill="#1a1a1a">Today's menu</text>
            <text x="78" y="160" fontSize="14" fill="#5c5c5c">Jollof rice — GHS 40</text>
            <text x="78" y="182" fontSize="14" fill="#5c5c5c">Waakye — GHS 35</text>
            <text x="296" y="192" fontSize="10.5" fill="#9aa79b" textAnchor="end">12:04</text>
          </motion.g>

          <motion.g variants={enter(1.0, 16)}>
            <rect x="168" y="212" width="184" height="46" rx="14" fill="#d9fdd3" />
            <text x="188" y="240" fontSize="15" fontWeight="500" fill="#0b3d2e">Jollof rice ×2</text>
            <text x="336" y="250" fontSize="10.5" fill="#7a9a7d" textAnchor="end">12:05</text>
          </motion.g>

          <motion.g variants={enter(1.6, 16)}>
            <rect x="168" y="270" width="184" height="46" rx="14" fill="#d9fdd3" />
            <text x="188" y="298" fontSize="15" fontWeight="500" fill="#0b3d2e">Paid · GHS 80</text>
            <motion.path
              d="M310 296 l4 4 l8 -9"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              variants={{
                hidden: { stroke: '#9aa79b' },
                show: { stroke: '#34b7f1', transition: { delay: 0.6, duration: 0.3 } },
              }}
            />
            <motion.path
              d="M318 296 l4 4 l8 -9"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              variants={{
                hidden: { stroke: '#9aa79b' },
                show: { stroke: '#34b7f1', transition: { delay: 0.6, duration: 0.3 } },
              }}
            />
          </motion.g>
        </g>
      </motion.g>

      {/* rider dispatch toast */}
      <motion.g variants={enter(2.6)} filter="url(#chSh)">
        <rect x="250" y="356" width="260" height="60" rx="18" fill="#ffffff" />
        <circle cx="282" cy="386" r="16" fill="#ff019d" />
        <path d="M274 386 l6 6 l12 -13" stroke="#ffffff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <text x="310" y="381" fontSize="15" fontWeight="600" fill="#1a1a1a">Order confirmed</text>
        <text x="310" y="402" fontSize="13" fill="#6b5c66">Rider on the way</text>
      </motion.g>
    </VignetteSvg>
  );
}

export default ChoperlyVignette;
