import React, { useState } from 'react';
import { motion } from 'framer-motion';

const builds = [
  {
    id: 'settlement',
    role: 'Lead product designer · 2025–present',
    title: 'Voice-first settlement assessments',
    description:
      'A multilingual voice agent that guides newcomers through a 90-question government assessment — settlement workers review, score, and approve every plan before it commits.',
    phases: [
      { label: 'Discovery', status: 'done' },
      { label: 'Flows', status: 'done' },
      { label: 'Build in progress', status: 'active' },
    ],
  },
  {
    id: 'interviewer',
    role: 'Lead product designer · 2025–present',
    title: 'AI voice interviewer for hiring',
    description:
      'Real-time voice-to-voice technical interviews with live transcripts and rubric-based scoring — hiring teams keep the final call.',
    phases: [
      { label: 'Research', status: 'done' },
      { label: 'Flows', status: 'done' },
      { label: 'Build in progress', status: 'active' },
    ],
  },
  {
    id: 'political-intel',
    role: 'Lead product designer · 2026',
    title: 'Political intelligence platform',
    description:
      'Field reporting and signal dashboards that turn scattered political data into ground truth for campaign and comms teams.',
    phases: [
      { label: 'Discovery', status: 'done' },
      { label: 'User journeys', status: 'active' },
      { label: 'Prototype', status: 'next' },
    ],
  },
];

function PhaseTimeline({ phases, animate }) {
  return (
    <div className={`studio-card-phases${animate ? ' studio-card-phases--animate' : ''}`}>
      {phases.map((phase, idx) => (
        <React.Fragment key={phase.label}>
          {idx > 0 && <span className="studio-phase-sep" aria-hidden="true" />}
          <span className={`studio-phase studio-phase--${phase.status}`}>
            <span className="studio-phase-marker" aria-hidden="true">
              {phase.status === 'done' && (
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path
                    d="M1.5 5.5L4 8l4.5-6"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </span>
            {phase.label}
          </span>
        </React.Fragment>
      ))}
    </div>
  );
}

function StudioRow({ build, index }) {
  // bumping the key remounts the timeline, replaying its stagger animation
  const [replay, setReplay] = useState(0);

  return (
    <article className="studio-row" onMouseEnter={() => setReplay((k) => k + 1)}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 + index * 0.1 }}
        viewport={{ once: true }}
        onViewportEnter={() => setReplay((k) => (k === 0 ? 1 : k))}
      >
        <div className="studio-row-top">
          <span className="studio-card-role">{build.role}</span>
          <PhaseTimeline key={replay} phases={build.phases} animate={replay > 0} />
        </div>
        <h3 className="studio-card-title">{build.title}</h3>
        <p className="studio-card-description">{build.description}</p>
      </motion.div>
    </article>
  );
}

function StudioStrip() {
  return (
    <section className="studio-strip-section">
      <div className="studio-strip-container">
        <motion.div
          className="studio-strip-intro"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <span className="studio-strip-count">3 in progress</span>
          <h2 className="studio-strip-title">Currently building</h2>
          <p className="studio-strip-subtitle">
            Between research and release. Case studies to follow as each ships.
          </p>
        </motion.div>

        <div className="studio-strip-list">
          {builds.map((build, i) => (
            <StudioRow key={build.id} build={build} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default StudioStrip;
