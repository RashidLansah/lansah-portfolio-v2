import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export const enter = (delay, dist = 26) => ({
  hidden: { opacity: 0, y: dist, scale: 0.97 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 240, damping: 26, delay } },
});

export const stamp = (delay) => ({
  hidden: { opacity: 0, scale: 1.5 },
  show: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 320, damping: 18, delay } },
});

export const fadeIn = (delay, duration = 0.4) => ({
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { delay, duration } },
});

export const grow = (delay, y, height) => ({
  hidden: { height: 8, y: y + height - 8, opacity: 0.5 },
  show: { height, y, opacity: 1, transition: { delay, duration: 0.55, ease: 'easeOut' } },
});

export function Shadow({ id, dark }) {
  return (
    <filter id={id} x="-40%" y="-40%" width="180%" height="180%">
      <feDropShadow dx="0" dy="10" stdDeviation="14" floodOpacity={dark ? 0.45 : 0.15} />
    </filter>
  );
}

export function Cursor({ from, to, delay, dark }) {
  return (
    <>
      <motion.circle
        cx={to[0]}
        cy={to[1]}
        r="16"
        fill="none"
        stroke={dark ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.45)'}
        strokeWidth="2"
        variants={{
          hidden: { opacity: 0, scale: 0.4 },
          show: {
            opacity: [0, 0.4, 0],
            scale: [0.4, 1.5, 1.9],
            transition: { delay: delay + 1.05, duration: 0.5, ease: 'easeOut' },
          },
        }}
      />
      <motion.g
        variants={{
          hidden: { x: from[0], y: from[1], opacity: 0 },
          show: {
            x: [from[0], from[0], to[0], to[0]],
            y: [from[1], from[1], to[1], to[1]],
            opacity: [0, 1, 1, 1],
            scale: [1, 1, 1, 0.88],
            transition: { delay, duration: 1.25, times: [0, 0.12, 0.8, 1], ease: 'easeInOut' },
          },
        }}
      >
        <path
          d="M0 0 L0 26 L7 20 L12 30.5 L16.5 28.5 L11.5 18.5 L20 17.5 Z"
          fill="#111111"
          stroke="#ffffff"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      </motion.g>
    </>
  );
}

export function VignetteSvg({ label, children }) {
  const reduce = useReducedMotion();
  return (
    <motion.svg
      className="vignette-svg"
      viewBox="0 0 730 456"
      width="100%"
      height="100%"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={label}
      initial={reduce ? 'show' : 'hidden'}
      whileInView="show"
      viewport={{ once: false, amount: 0.3 }}
      variants={{ hidden: {}, show: {} }}
      style={{ fontFamily: "'Plus Jakarta Sans', -apple-system, sans-serif" }}
    >
      {children}
    </motion.svg>
  );
}
