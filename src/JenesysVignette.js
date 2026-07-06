import React from 'react';
import { motion } from 'framer-motion';
import { VignetteSvg, Shadow, Cursor, enter, fadeIn } from './vignette-kit';

function JenesysVignette() {
  return (
    <VignetteSvg label="Jenesys: an invoice is approved and auto-matched to the ledger">
      <defs>
        <Shadow id="jnSh" />
      </defs>

      <motion.circle cx="600" cy="390" r="230" fill="#d3c3e6" variants={fadeIn(0, 0.6)} />

      {/* invoice card */}
      <motion.g variants={enter(0.1)} filter="url(#jnSh)">
        <rect x="50" y="40" width="300" height="320" rx="18" fill="#ffffff" />
        <text x="74" y="76" fontSize="12" fontWeight="600" letterSpacing="0.12em" fill="#8a7ba3">INVOICE</text>
        <text x="74" y="104" fontSize="21" fontWeight="700" fill="#241b35">INV-2041</text>
        <text x="326" y="76" fontSize="12" fill="#8a7ba3" textAnchor="end">Due Jul 30</text>
        <circle cx="88" cy="142" r="14" fill="#ede9fe" />
        <text x="88" y="147" fontSize="13" fontWeight="600" fill="#6d28d9" textAnchor="middle">A</text>
        <text x="112" y="139" fontSize="15" fontWeight="500" fill="#241b35">Amara Ltd</text>
        <text x="112" y="157" fontSize="12" fill="#8a7ba3">billing@amara.co</text>
        <path d="M74 178 H326" stroke="rgba(0,0,0,0.07)" />
        <text x="74" y="206" fontSize="14" fill="#463a5e">Design retainer</text>
        <text x="326" y="206" fontSize="14" fill="#463a5e" textAnchor="end">3,200</text>
        <text x="74" y="234" fontSize="14" fill="#463a5e">Cloud hosting</text>
        <text x="326" y="234" fontSize="14" fill="#463a5e" textAnchor="end">920</text>
        <path d="M74 254 H326" stroke="rgba(0,0,0,0.07)" />
        <text x="74" y="282" fontSize="15" fontWeight="700" fill="#241b35">Total</text>
        <text x="326" y="282" fontSize="15" fontWeight="700" fill="#241b35" textAnchor="end">GHS 4,120</text>

        <rect x="74" y="300" width="252" height="42" rx="12" fill="#6d28d9" />
        <text x="200" y="327" fontSize="15" fontWeight="600" fill="#ffffff" textAnchor="middle">Approve &amp; post</text>
        <motion.g variants={fadeIn(2.15)}>
          <rect x="74" y="300" width="252" height="42" rx="12" fill="#16a34a" />
          <path d="M120 321 l7 7 l13 -14" stroke="#ffffff" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <text x="212" y="327" fontSize="15" fontWeight="600" fill="#ffffff" textAnchor="middle">Matched · 98%</text>
        </motion.g>
      </motion.g>

      <Cursor from={[500, 100]} to={[210, 318]} delay={0.9} />

      {/* ledger chip */}
      <motion.g variants={enter(2.5)} filter="url(#jnSh)">
        <rect x="350" y="290" width="160" height="44" rx="22" fill="#ffffff" />
        <circle cx="376" cy="312" r="6" fill="#6d28d9" />
        <text x="392" y="318" fontSize="14" fontWeight="500" fill="#241b35">In the ledger</text>
      </motion.g>
    </VignetteSvg>
  );
}

export default JenesysVignette;
