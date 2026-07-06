import React from 'react';
import { motion } from 'framer-motion';
import { VignetteSvg, Shadow, enter, fadeIn } from './vignette-kit';

const row = (y, letter, name, metrics, delay) => (
  <motion.g variants={fadeIn(delay)}>
    <rect x="74" y={y} width="36" height="36" rx="10" fill="#2e2e2e" />
    <text x="92" y={y + 24} fontSize="16" fontWeight="600" fill="#dddddd" textAnchor="middle">{letter}</text>
    <text x="124" y={y + 15} fontSize="15" fontWeight="500" fill="#eeeeee">{name}</text>
    <text x="124" y={y + 33} fontSize="12" fill="#8a8a8a">{metrics}</text>
  </motion.g>
);

function StimulirVignette() {
  return (
    <VignetteSvg label="Stimulir: the adaptive router picks the best model for a request">
      <defs>
        <Shadow id="stSh" dark />
      </defs>

      <motion.circle cx="560" cy="200" r="210" fill="rgba(201,160,122,0.09)" variants={fadeIn(0, 0.6)} />

      {/* router panel */}
      <motion.g variants={enter(0.1)} filter="url(#stSh)">
        <rect x="50" y="36" width="440" height="340" rx="20" fill="#1f1f1f" stroke="rgba(255,255,255,0.08)" />
        <text x="74" y="72" fontSize="12" fontWeight="600" letterSpacing="0.12em" fill="#9a9a9a">ADAPTIVE ROUTER</text>
        <rect x="286" y="52" width="180" height="30" rx="15" fill="#2a2a2a" stroke="#3a3a3a" />
        <text x="376" y="72" fontSize="12" fill="#cccccc" textAnchor="middle">vision → text · 4.2k tok</text>

        {row(106, 'C', 'Claude Sonnet', '142 ms · $0.0011', 0.45)}
        {row(176, 'G', 'GPT-4o', '128 ms · $0.0004', 0.6)}
        {row(246, 'L', 'Llama 3 70B', '96 ms · $0.0002', 0.75)}

        <motion.rect x="290" y="118" width="130" height="8" rx="4" fill="#3d3d3d" variants={fadeIn(0.5)} />
        <motion.rect x="290" y="188" width="150" height="8" rx="4" fill="#3d3d3d" variants={fadeIn(0.65)} />
        <motion.rect x="290" y="258" width="96" height="8" rx="4" fill="#3d3d3d" variants={fadeIn(0.8)} />

        {/* winner highlight */}
        <motion.g variants={fadeIn(1.6)}>
          <rect x="64" y="164" width="412" height="60" rx="14" fill="rgba(201,160,122,0.08)" stroke="#c9a07a" strokeWidth="1.4" />
          <motion.rect x="290" y="188" width="164" height="8" rx="4" fill="#c9a07a" variants={fadeIn(1.9)} />
          <circle cx="462" cy="177" r="5" fill="#4ade80" />
        </motion.g>

        <motion.text x="74" y="352" fontSize="13" fill="#9a9a9a" variants={fadeIn(2.2)}>
          Routed to GPT-4o · quality 0.97 · saved 64%
        </motion.text>
      </motion.g>
    </VignetteSvg>
  );
}

export default StimulirVignette;
