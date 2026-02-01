import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Sidebar from './Sidebar';
import Footer from './Footer';
import './CaseStudy.css';

// Feature Panel Component
const FeaturePanel = ({ feature, isOpen, onClose }) => {
  return (
    <>
      <div
        className={`feature-panel-overlay ${isOpen ? 'open' : ''}`}
        onClick={onClose}
      />
      <div className={`feature-panel ${isOpen ? 'open' : ''}`}>
        <button className="feature-panel-close" onClick={onClose}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>

        {feature && (
          <div className="feature-panel-content">
            <span className="feature-panel-label">{feature.label}</span>
            <h2 className="feature-panel-title">{feature.title}</h2>

            <div className="feature-panel-section">
              <h3>The Challenge</h3>
              <p>{feature.challenge}</p>
            </div>

            <div className="feature-panel-section">
              <h3>Key Decisions</h3>
              <ul>
                {feature.decisions.map((decision, i) => (
                  <li key={i}>{decision}</li>
                ))}
              </ul>
            </div>

            <div className="feature-panel-section">
              <h3>Outcome</h3>
              <p className="feature-panel-outcome">{feature.outcome}</p>
            </div>

            {feature.screens && feature.screens.length > 0 && (
              <div className="feature-panel-screens">
                {feature.screens.map((screen, i) => (
                  <img key={i} src={screen.src} alt={screen.alt} />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

// Arrow Button Component
const ArrowButton = () => (
  <div className="about-arrow-button">
    <span>→</span>
  </div>
);

function JenesysCaseStudy() {
  const [selectedFeature, setSelectedFeature] = useState(null);
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const features = {
    bankRecon: {
      label: 'Feature 01',
      title: 'Bank Reconciliation',
      challenge: 'Bookkeepers spent 8+ hours weekly manually matching bank transactions to invoices. The process was error-prone, tedious, and often delayed month-end closing by days.',
      decisions: [
        'Designed an AI-powered matching engine that suggests probable matches with confidence scores',
        'Created a split-view interface showing bank statements and invoices side-by-side',
        'Built bulk actions for power users to process multiple matches at once',
        'Added "exact match" auto-reconciliation for transactions with high confidence'
      ],
      outcome: '70% of transactions now auto-reconcile. Manual matching time reduced from 8 hours to under 2 hours per client.',
      screens: [
        { src: '/images/case-studies/jenesys-reconciliation.png', alt: 'Bank Reconciliation Interface' }
      ]
    },
    chaser: {
      label: 'Feature 02',
      title: 'Invoice Chaser',
      challenge: 'Bookkeepers had no systematic way to follow up on missing documents. Client communications were scattered across email, WhatsApp, and phone calls with no audit trail.',
      decisions: [
        'Built an automated chasing system that sends reminders on a configurable schedule',
        'Created a unified inbox showing all client responses regardless of channel',
        'Designed a client-facing portal where documents could be uploaded directly',
        'Added escalation rules when clients don\'t respond after multiple attempts'
      ],
      outcome: 'Document collection time dropped from 2 weeks to 3 days average. 85% of invoices now submitted through the portal.',
      screens: [
        { src: '/images/case-studies/jenesys-chaser-list.png', alt: 'Chaser List View' },
        { src: '/images/case-studies/jenesys-chaser-dashboard.png', alt: 'Client Chaser Dashboard' }
      ]
    },
    queryManager: {
      label: 'Feature 03',
      title: 'Query Manager',
      challenge: 'When bookkeepers had questions about invoices, they\'d email clients and lose track of responses. Queries got buried in inboxes, causing reconciliation delays.',
      decisions: [
        'Created a query system tied directly to specific transactions',
        'Designed threaded conversations that live alongside the invoice',
        'Built a dashboard showing all open queries across all clients',
        'Added ability to link queries to invoices for context'
      ],
      outcome: 'Query resolution time reduced by 60%. Zero queries lost in email anymore.',
      screens: [
        { src: '/images/case-studies/jenesys-query-close.png', alt: 'Query Manager Close' },
        { src: '/images/case-studies/jenesys-query-link.png', alt: 'Link Query to Invoice' }
      ]
    },
    transactionDetails: {
      label: 'Feature 04',
      title: 'Transaction Details & AI Extraction',
      challenge: 'Users couldn\'t see how the AI categorized transactions or why. This lack of transparency led to distrust and excessive manual checking.',
      decisions: [
        'Designed a detailed transaction view showing AI reasoning and confidence',
        'Created inline editing so users could correct AI mistakes quickly',
        'Built a history timeline showing all changes and who made them',
        'Added comments system for team collaboration on complex transactions'
      ],
      outcome: 'AI trust increased significantly. Manual review dropped from 70% to 15% of transactions.',
      screens: [
        { src: '/images/case-studies/jenesys-transaction-details.png', alt: 'Transaction Details' },
        { src: '/images/case-studies/jenesys-extraction-details.png', alt: 'Extraction Details' },
        { src: '/images/case-studies/jenesys-history.png', alt: 'Transaction History' }
      ]
    },
    duplicates: {
      label: 'Feature 05',
      title: 'Duplicate Detection',
      challenge: 'Users accidentally uploaded the same invoice multiple times, causing reconciliation errors and double-counting in reports.',
      decisions: [
        'Built AI-powered duplicate detection comparing invoice numbers, amounts, and dates',
        'Designed a clear UI showing potential duplicates with similarity scores',
        'Created bulk actions to dismiss or merge duplicates',
        'Added prevention at upload time with warning modals'
      ],
      outcome: 'Duplicate errors reduced by 95%. Saved hours of manual cleanup each month.',
      screens: [
        { src: '/images/case-studies/jenesys-duplicate-detection.png', alt: 'Duplicate Detection' },
        { src: '/images/case-studies/jenesys-transactions-updates.png', alt: 'Transactions Updates' }
      ]
    },
    whatsapp: {
      label: 'Feature 06',
      title: 'WhatsApp Integration — Multi-Tenant System',
      challenge: 'Many clients in emerging markets preferred WhatsApp over email. But our power users managed multiple organisations—they needed a way to submit documents for different clients from a single WhatsApp number.',
      decisions: [
        'Designed a multi-tenant system where one user could connect to multiple organisations',
        'Built smart client selection flow—when a user sends a document, they choose which organisation it belongs to',
        'Created admin controls for managing WhatsApp connections across teams',
        'Added automatic extraction with organisation-aware routing'
      ],
      outcome: 'A huge differentiator. Users managing 10+ clients can submit documents for any of them via WhatsApp. 40% of submissions now come through this channel.',
      screens: [
        { src: '/images/case-studies/jenesys-whatsapp-multi-1.png', alt: 'WhatsApp Multi-Client Flow' },
        { src: '/images/case-studies/jenesys-whatsapp-select-client.png', alt: 'Select Client Organisation' },
        { src: '/images/case-studies/jenesys-whatsapp-multi-2.png', alt: 'WhatsApp Document Upload' },
        { src: '/images/case-studies/jenesys-whatsapp-multi-3.png', alt: 'WhatsApp Confirmation' },
        { src: '/images/case-studies/jenesys-whatsapp-add.png', alt: 'Add WhatsApp User' }
      ]
    }
  };

  const openPanel = (featureKey) => {
    setSelectedFeature(features[featureKey]);
    setIsPanelOpen(true);
  };

  const closePanel = () => {
    setIsPanelOpen(false);
    setTimeout(() => setSelectedFeature(null), 300);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (isPanelOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isPanelOpen]);

  return (
    <div className="about-page jenesys-case">
      {/* Vertical Dashed Lines */}
      <div className="vertical-line vertical-line-left"></div>
      <div className="vertical-line vertical-line-right"></div>

      {/* Global Sidebar */}
      <Sidebar />

      {/* Breadcrumb Navigation */}
      <nav className="about-nav">
        <div className="about-breadcrumb">
          <Link to="/" className="about-breadcrumb-link">Home</Link>
          <span className="about-breadcrumb-separator">/</span>
          <span className="about-breadcrumb-current">Jenesys Case Study</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="about-hero case-hero-about">
        <motion.div
          className="about-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="case-meta-pills">
            <span className="case-pill">Founding Designer</span>
            <span className="case-pill">2022 — 2025</span>
            <span className="case-pill">Fintech / AI</span>
          </div>
          <h1 className="about-headline">
            How I helped an AI bookkeeping platform reach <span className="highlight-text">$1M ARR</span> by making automation feel trustworthy
          </h1>
          <div className="case-impact-stats">
            <div className="impact-stat-item">
              <span className="stat-number">80%</span>
              <span className="stat-label">Feature adoption</span>
            </div>
            <div className="impact-stat-item">
              <span className="stat-number">3x</span>
              <span className="stat-label">User growth</span>
            </div>
            <div className="impact-stat-item">
              <span className="stat-number">$2.2M</span>
              <span className="stat-label">Funding raised</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Hero Image */}
      <motion.section
        className="case-hero-visual"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <img
          src="/images/case-studies/jenesys-dashboard.png"
          alt="Jenesys Dashboard"
          className="case-hero-screen"
        />
      </motion.section>

      {/* Context Section */}
      <section className="about-full-width">
        <motion.div
          className="about-full-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="about-text-content">
            <span className="section-label">The Context</span>
            <h2 className="about-section-title">Bookkeepers were drowning in manual work</h2>
            <p className="about-section-text">
              SME bookkeepers spent 15+ hours weekly on repetitive tasks: matching bank transactions, chasing clients for invoices, and reconciling accounts. Jenesys wanted to use AI to automate this—but users didn't trust black-box automation with their clients' finances.
            </p>
            <p className="about-section-text">
              As the founding designer, I joined to build the entire product experience from scratch—from information architecture to component library to every user flow.
            </p>
          </div>
        </motion.div>
      </section>

      {/* My Role Section */}
      <section className="about-full-width case-role-section">
        <motion.div
          className="about-full-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="about-text-content">
            <span className="section-label">My Role</span>
            <h2 className="about-section-title">End-to-end product design ownership</h2>
            <div className="role-grid">
              <div className="role-item">
                <strong>Research</strong>
                <p>25+ user interviews, competitive analysis, workflow mapping</p>
              </div>
              <div className="role-item">
                <strong>Strategy</strong>
                <p>Feature prioritization, roadmap input, stakeholder alignment</p>
              </div>
              <div className="role-item">
                <strong>Design</strong>
                <p>Information architecture, wireframes, high-fidelity UI, prototypes</p>
              </div>
              <div className="role-item">
                <strong>Systems</strong>
                <p>Built 40+ component design system used across 3 products</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Core Problem */}
      <section className="about-full-width case-problem-section">
        <motion.div
          className="about-full-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="about-text-content">
            <span className="section-label">The Core Challenge</span>
            <h2 className="about-section-title">Users didn't trust what they couldn't see</h2>
            <p className="about-section-text">
              In early testing, <strong>70% of users manually re-checked</strong> every AI decision. They weren't against automation—they just couldn't see the reasoning. "I need to know why it made that choice," one bookkeeper told me. "My reputation is on the line."
            </p>
            <p className="about-section-text">
              This insight shaped everything: transparency became our design principle. Every AI decision needed to show its work.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Features Section Header */}
      <section className="about-full-width">
        <motion.div
          className="about-full-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="about-text-content">
            <span className="section-label">What I Shipped</span>
            <h2 className="about-section-title">6 major features that transformed the workflow</h2>
            <p className="about-section-text">
              Click any feature to see the full design story—the challenge, my decisions, and the outcome.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Feature Cards - Two Column */}
      <section className="about-two-column feature-cards-section">
        <motion.div
          className="about-column about-column-bordered feature-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          onClick={() => openPanel('bankRecon')}
        >
          <span className="feature-number">01</span>
          <h2 className="about-section-title">Bank Reconciliation</h2>
          <p className="about-section-text">
            AI-powered matching that reduced reconciliation time from 8 hours to 2 hours per client.
          </p>
          <ArrowButton />
        </motion.div>

        <motion.div
          className="about-column feature-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          onClick={() => openPanel('chaser')}
        >
          <span className="feature-number">02</span>
          <h2 className="about-section-title">Invoice Chaser</h2>
          <p className="about-section-text">
            Automated follow-up system that cut document collection time from 2 weeks to 3 days.
          </p>
          <ArrowButton />
        </motion.div>
      </section>

      <section className="about-two-column feature-cards-section">
        <motion.div
          className="about-column about-column-bordered feature-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          onClick={() => openPanel('queryManager')}
        >
          <span className="feature-number">03</span>
          <h2 className="about-section-title">Query Manager</h2>
          <p className="about-section-text">
            Contextual communication system that reduced query resolution time by 60%.
          </p>
          <ArrowButton />
        </motion.div>

        <motion.div
          className="about-column feature-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          onClick={() => openPanel('transactionDetails')}
        >
          <span className="feature-number">04</span>
          <h2 className="about-section-title">Transaction Details & AI Extraction</h2>
          <p className="about-section-text">
            Transparent AI that shows its reasoning—manual review dropped from 70% to 15%.
          </p>
          <ArrowButton />
        </motion.div>
      </section>

      <section className="about-two-column feature-cards-section">
        <motion.div
          className="about-column about-column-bordered feature-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          onClick={() => openPanel('duplicates')}
        >
          <span className="feature-number">05</span>
          <h2 className="about-section-title">Duplicate Detection</h2>
          <p className="about-section-text">
            Smart detection that reduced duplicate errors by 95% and saved hours of cleanup.
          </p>
          <ArrowButton />
        </motion.div>

        <motion.div
          className="about-column feature-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          onClick={() => openPanel('whatsapp')}
        >
          <span className="feature-number">06</span>
          <h2 className="about-section-title">WhatsApp Integration</h2>
          <p className="about-section-text">
            Meet users where they are—40% of documents now submitted via WhatsApp.
          </p>
          <ArrowButton />
        </motion.div>
      </section>

      {/* Key Learnings */}
      <section className="about-full-width case-learnings-section">
        <motion.div
          className="about-full-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="about-text-content">
            <span className="section-label">Looking Back</span>
            <h2 className="about-section-title">What this project taught me</h2>
            <div className="learnings-list">
              <div className="learning-item">
                <strong>AI needs a face.</strong>
                <p>Users trust automation when they understand the reasoning, not just the output. Every confidence score and explanation we added increased adoption.</p>
              </div>
              <div className="learning-item">
                <strong>Edge cases are opportunities.</strong>
                <p>WhatsApp integration seemed niche—it became our biggest differentiator in emerging markets where email isn't the norm.</p>
              </div>
              <div className="learning-item">
                <strong>Speed to value beats feature count.</strong>
                <p>We shipped bank reconciliation before it was "complete" because the core matching saved users hours. They helped us prioritize what to build next.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Next Project */}
      <section className="about-full-width case-next-section">
        <motion.div
          className="about-full-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="about-text-content">
            <span className="section-label">Next Project</span>
            <Link to="/kaaka-case-study" className="next-case-link">
              <h2 className="about-section-title">Kaaka — AI Cooking Assistant</h2>
              <ArrowButton />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Feature Panel */}
      <FeaturePanel
        feature={selectedFeature}
        isOpen={isPanelOpen}
        onClose={closePanel}
      />

      <Footer />
    </div>
  );
}

export default JenesysCaseStudy;
