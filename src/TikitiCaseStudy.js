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

function TikitiCaseStudy() {
  const [selectedFeature, setSelectedFeature] = useState(null);
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const features = {
    eventDiscovery: {
      label: 'Feature 01',
      title: 'Event Discovery & Search',
      challenge: 'Event discovery in Ghana was fragmented across WhatsApp forwards, Instagram posts, and word of mouth. Users had no single place to find all events happening near them.',
      decisions: [
        'Designed a location-aware home feed showing "Events near you"',
        'Created filter tabs: All, Live Now, Today, Tomorrow for quick browsing',
        'Built category tags (technology, music, etc.) for interest-based discovery',
        'Added search with instant results and event previews'
      ],
      outcome: 'Users browse an average of 8 events per session. "Events near you" became the most-used feature.',
      screens: [
        { src: '/images/case-studies/tikiti-screen-5.png', alt: 'Event Discovery Home' },
        { src: '/images/case-studies/tikiti-screen-6.png', alt: 'Event Details' }
      ]
    },
    ticketing: {
      label: 'Feature 02',
      title: 'Digital Tickets & QR Entry',
      challenge: 'Paper tickets were prone to fraud, and manual verification at event entry created 30+ minute queues. Organizers had no way to track attendance in real-time.',
      decisions: [
        'Designed QR code tickets stored in-app with offline access',
        'Created a ticket wallet showing Active, Attended, and Cancelled tickets',
        'Built instant confirmation screens with shareable ticket details',
        'Added "Tap to view QR code" for quick access at venue entry'
      ],
      outcome: 'Entry verification dropped from 30+ seconds to under 3 seconds per attendee. Zero reported ticket fraud since launch.',
      screens: [
        { src: '/images/case-studies/tikiti-screen-7.png', alt: 'My Tickets List' },
        { src: '/images/case-studies/tikiti-screen-8.png', alt: 'Ticket QR Code' }
      ]
    },
    organiserMode: {
      label: 'Feature 03',
      title: 'Organiser Mode & Scanner',
      challenge: 'Event organizers needed to switch between being an attendee and managing their own events. They also needed a way to scan tickets at the door without additional hardware.',
      decisions: [
        'Designed a dual-mode app: Attendee mode and Organiser mode',
        'Created a welcoming onboarding for first-time organizers',
        'Built an in-app ticket scanner with real-time validation stats',
        'Added manual entry fallback for edge cases'
      ],
      outcome: 'Organizers can manage events entirely from their phones. Scanner mode processes 50+ tickets per minute.',
      screens: [
        { src: '/images/case-studies/tikiti-screen-12.png', alt: 'Organiser Mode Welcome' },
        { src: '/images/case-studies/tikiti-screen-13.png', alt: 'Ticket Scanner' },
        { src: '/images/case-studies/tikiti-screen-14.png', alt: 'Organiser Profile' }
      ]
    },
    webDashboard: {
      label: 'Feature 04',
      title: 'Web Dashboard for Organizers',
      challenge: 'As the platform grew to 900+ App Store downloads, organizers needed more powerful tools than mobile could provide—bulk attendee management, detailed analytics, and event promotion.',
      decisions: [
        'Built a responsive web dashboard with sidebar navigation',
        'Designed analytics views: Total Events, Attendees, Tickets Sold, Growth Rate',
        'Created event management with create, edit, and archive capabilities',
        'Added organization switching for multi-brand event managers'
      ],
      outcome: 'The web dashboard is now used by 60% of active organizers. Average session time: 12 minutes.',
      screens: [
        { src: '/images/case-studies/tikiti-screen-5.png', alt: 'Mobile Home' }
      ]
    },
    notifications: {
      label: 'Feature 05',
      title: 'Smart Notifications',
      challenge: 'Users forgot about events they had tickets for, leading to no-shows. Organizers wanted a way to remind attendees without spamming them.',
      decisions: [
        'Designed event reminders that fire 1 hour before start time',
        'Created RSVP confirmations with clear event details',
        'Built a notification center with clear categorization',
        'Added push notification preferences in settings'
      ],
      outcome: 'No-show rate dropped by 35%. Users report feeling "never surprised" by event timing.',
      screens: [
        { src: '/images/case-studies/tikiti-screen-9.png', alt: 'Notifications' }
      ]
    },
    darkMode: {
      label: 'Feature 06',
      title: 'Dark Mode & Personalization',
      challenge: 'Users attending evening events often found the bright interface uncomfortable. Power users wanted more control over their experience.',
      decisions: [
        'Implemented full dark mode with one-tap toggle',
        'Designed notification preferences for granular control',
        'Added account settings accessible from profile screen',
        'Created clean settings UI with support links'
      ],
      outcome: '45% of users enable dark mode. Settings engagement increased after redesign.',
      screens: [
        { src: '/images/case-studies/tikiti-screen-10.png', alt: 'Profile Light Mode' },
        { src: '/images/case-studies/tikiti-screen-11.png', alt: 'Settings Dark Mode' }
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
    <div className="about-page tikiti-case">
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
          <span className="about-breadcrumb-current">Tikiti Case Study</span>
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
            <span className="case-pill">Side Project</span>
            <span className="case-pill">2024 — Present</span>
            <span className="case-pill">Consumer / Events</span>
          </div>
          <h1 className="about-headline">
            Making event ticketing <span className="highlight-text">seamless for Ghana</span>
          </h1>
          <div className="case-impact-stats">
            <div className="impact-stat-item">
              <span className="stat-number">900+</span>
              <span className="stat-label">App downloads</span>
            </div>
            <div className="impact-stat-item">
              <span className="stat-number">3s</span>
              <span className="stat-label">QR ticket scan</span>
            </div>
            <div className="impact-stat-item">
              <span className="stat-number">iOS</span>
              <span className="stat-label">App Store</span>
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
          src="/images/case-studies/tikiti-screen-5.png"
          alt="Tikiti App Home Screen"
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
            <h2 className="about-section-title">Event ticketing was broken in Ghana</h2>
            <p className="about-section-text">
              Ghana's events industry was fragmented. Event discovery happened through WhatsApp forwards and Instagram posts, while ticketing relied on physical purchases or error-prone manual processes. Attendees waited 30+ minutes in verification queues, and organizers had no real-time visibility into sales.
            </p>
            <p className="about-section-text">
              I built Tikiti to unify discovery, purchase, and entry into one mobile experience that works with the payment methods Ghanaians already trust—MTN MoMo and Vodafone Cash.
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
            <h2 className="about-section-title">Solo founder—design, build, ship</h2>
            <div className="role-grid">
              <div className="role-item">
                <strong>Research</strong>
                <p>User interviews with event-goers and organizers across Accra</p>
              </div>
              <div className="role-item">
                <strong>Design</strong>
                <p>End-to-end mobile UX, organizer dashboard, component library</p>
              </div>
              <div className="role-item">
                <strong>Development</strong>
                <p>React Native app, Next.js web dashboard, Firebase backend</p>
              </div>
              <div className="role-item">
                <strong>Launch</strong>
                <p>App Store submission, organizer onboarding, community growth</p>
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
            <h2 className="about-section-title">Scaling from mobile app to full platform</h2>
            <p className="about-section-text">
              The mobile app launched successfully, but organizers quickly outgrew it. They needed <strong>bulk attendee management, detailed analytics, and promotion tools</strong> that mobile couldn't efficiently provide.
            </p>
            <p className="about-section-text">
              I'm now building a web dashboard that gives organizers the power tools they need while keeping the mobile app focused on what it does best—helping attendees discover and attend events.
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
            <span className="section-label">What I Built</span>
            <h2 className="about-section-title">6 features that power Ghana's events</h2>
            <p className="about-section-text">
              Click any feature to see the design story—the challenge, decisions, and outcome.
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
          onClick={() => openPanel('eventDiscovery')}
        >
          <span className="feature-number">01</span>
          <h2 className="about-section-title">Event Discovery</h2>
          <p className="about-section-text">
            Location-aware event feed with smart filters and category browsing.
          </p>
          <ArrowButton />
        </motion.div>

        <motion.div
          className="about-column feature-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          onClick={() => openPanel('ticketing')}
        >
          <span className="feature-number">02</span>
          <h2 className="about-section-title">Digital Tickets & QR</h2>
          <p className="about-section-text">
            Secure QR tickets with instant verification—no more paper fraud.
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
          onClick={() => openPanel('organiserMode')}
        >
          <span className="feature-number">03</span>
          <h2 className="about-section-title">Organiser Mode</h2>
          <p className="about-section-text">
            In-app ticket scanner and event management for organizers on the go.
          </p>
          <ArrowButton />
        </motion.div>

        <motion.div
          className="about-column feature-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          onClick={() => openPanel('webDashboard')}
        >
          <span className="feature-number">04</span>
          <h2 className="about-section-title">Web Dashboard</h2>
          <p className="about-section-text">
            Analytics, attendee management, and event tools for power users.
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
          onClick={() => openPanel('notifications')}
        >
          <span className="feature-number">05</span>
          <h2 className="about-section-title">Smart Notifications</h2>
          <p className="about-section-text">
            Event reminders that reduced no-show rate by 35%.
          </p>
          <ArrowButton />
        </motion.div>

        <motion.div
          className="about-column feature-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          onClick={() => openPanel('darkMode')}
        >
          <span className="feature-number">06</span>
          <h2 className="about-section-title">Dark Mode</h2>
          <p className="about-section-text">
            Full dark theme and personalization settings for power users.
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
            <h2 className="about-section-title">What building Tikiti taught me</h2>
            <div className="learnings-list">
              <div className="learning-item">
                <strong>Leverage existing trust.</strong>
                <p>Integrating with MoMo patterns users already trusted dramatically reduced friction. Users said "it feels like paying for airtime"—the highest compliment.</p>
              </div>
              <div className="learning-item">
                <strong>Mobile-first, but not mobile-only.</strong>
                <p>The mobile app got us to 900 downloads, but organizers needed the web dashboard to scale. Know when to expand the platform.</p>
              </div>
              <div className="learning-item">
                <strong>QR codes are universally understood.</strong>
                <p>Zero users needed instructions for QR ticket entry. The scanning experience felt native and trustworthy immediately.</p>
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
            <span className="section-label">Related Project</span>
            <Link to="/tikiti-dashboard-case-study" className="next-case-link">
              <h2 className="about-section-title">Tikiti Dashboard — B2B Event Management</h2>
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

export default TikitiCaseStudy;
