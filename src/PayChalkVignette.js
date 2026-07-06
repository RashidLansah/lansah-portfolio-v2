import React from 'react';
import { motion } from 'framer-motion';
import { VignetteSvg, Shadow, Cursor, enter, fadeIn } from './vignette-kit';

function PayChalkVignette() {
  return (
    <VignetteSvg label="PayChalk: a WhatsApp fee reminder is paid in the chat">
      <defs>
        <Shadow id="pcSh" />
        <clipPath id="pcPanel">
          <rect x="40" y="36" width="330" height="290" rx="20" />
        </clipPath>
      </defs>

      <motion.circle cx="600" cy="400" r="230" fill="#cfe3c1" variants={fadeIn(0, 0.6)} />

      {/* WhatsApp chat panel */}
      <motion.g variants={enter(0.1)} filter="url(#pcSh)">
        <g clipPath="url(#pcPanel)">
          <rect x="40" y="36" width="330" height="290" fill="#ece5dd" />
          <rect x="40" y="36" width="330" height="56" fill="#075e54" />
          <circle cx="80" cy="64" r="16" fill="#c9e7d4" />
          <text x="80" y="70" fontSize="15" fontWeight="600" fill="#075e54" textAnchor="middle">P</text>
          <text x="106" y="60" fontSize="16" fontWeight="600" fill="#ffffff">PayChalk</text>
          <text x="106" y="79" fontSize="12" fill="rgba(255,255,255,0.75)">online</text>

          <rect x="60" y="110" width="252" height="74" rx="14" fill="#ffffff" />
          <text x="78" y="140" fontSize="15" fontWeight="600" fill="#1a1a1a">Term 2 fees due</text>
          <text x="78" y="164" fontSize="14" fill="#5c6b5e">Kofi A. · GHS 250 by Friday</text>
          <text x="298" y="176" fontSize="10.5" fill="#9aa79b" textAnchor="end">9:41</text>

          <motion.g variants={fadeIn(0.5)}>
            <rect x="60" y="192" width="252" height="42" rx="12" fill="#ffffff" stroke="rgba(0,0,0,0.06)" />
            <text x="186" y="219" fontSize="15" fontWeight="600" fill="#128c7e" textAnchor="middle">Pay now</text>
          </motion.g>

          <motion.g variants={enter(2.2, 16)}>
            <rect x="152" y="250" width="200" height="52" rx="14" fill="#d9fdd3" />
            <text x="172" y="274" fontSize="15" fontWeight="500" fill="#0b3d2e">Paid · GHS 250</text>
            <text x="310" y="293" fontSize="10.5" fill="#7a9a7d" textAnchor="end">9:42</text>
            <path d="M315 287 l4 4 l8 -9" stroke="#34b7f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <path d="M323 287 l4 4 l8 -9" stroke="#34b7f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </motion.g>
        </g>
      </motion.g>

      <Cursor from={[500, 380]} to={[186, 213]} delay={0.9} />

      {/* receipt toast */}
      <motion.g variants={enter(2.7)} filter="url(#pcSh)">
        <rect x="250" y="330" width="260" height="84" rx="18" fill="#ffffff" />
        <circle cx="288" cy="372" r="19" fill="#16a34a" />
        <path d="M279 372 l6 6 l13 -14" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <text x="318" y="367" fontSize="16" fontWeight="600" fill="#1a1a1a">Payment received</text>
        <text x="318" y="391" fontSize="14" fill="#5c6b5e">GHS 250 · Kofi A.</text>
      </motion.g>
    </VignetteSvg>
  );
}

export default PayChalkVignette;
