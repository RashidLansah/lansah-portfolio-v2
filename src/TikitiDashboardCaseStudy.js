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
              <div className="feature-panel-screens feature-panel-screens-desktop">
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

function TikitiDashboardCaseStudy() {
  const [selectedFeature, setSelectedFeature] = useState(null);
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const features = {
    eventManagement: {
      label: 'Feature 01',
      title: 'Event Creation & Management',
      challenge: 'Event organizers were managing events through spreadsheets and WhatsApp groups. Creating an event meant manually coordinating across multiple platforms with no centralized system.',
      decisions: [
        'Designed a 6-step guided wizard for event creation (Basic Info → Date/Time → Location → Tickets → Program → Review)',
        'Built drag-and-drop image upload with recommended dimensions',
        'Created event status workflow: Draft → Published → Archived',
        'Added category and status filters for quick event organization'
      ],
      outcome: 'Event creation time reduced from hours of manual coordination to under 10 minutes. Organizations can now manage multiple events from one dashboard.',
      screens: [
        { src: '/images/tikiti-dashboard-organizer.png', alt: 'Event Creation' }
      ]
    },
    attendeeManagement: {
      label: 'Feature 02',
      title: 'Attendee Management & Export',
      challenge: 'Organizers had no visibility into who registered for their events. Attendance tracking was done manually at the door with paper lists, making post-event reporting impossible.',
      decisions: [
        'Designed attendee cards showing Total, Confirmed, This Month, and Active Events stats',
        'Built search and filter by event, status, name, email, or phone',
        'Added one-click CSV export for external reporting and CRM integration',
        'Created real-time sync with mobile app registrations'
      ],
      outcome: 'Organizations now have complete visibility into their attendee base. Export feature enabled seamless integration with existing CRM systems.',
      screens: [
        { src: '/images/tikiti-dashboard-attendees.png', alt: 'Attendees Management' }
      ]
    },
    analytics: {
      label: 'Feature 03',
      title: 'Analytics & Insights',
      challenge: 'After events, organizers had no data on performance. They couldn\'t tell which events worked, what categories performed best, or track revenue without manual calculations.',
      decisions: [
        'Built key metrics dashboard: Total Events, Attendees, Revenue, Upcoming Events',
        'Created Events by Status visualization (Published, Draft, Archived)',
        'Added Events by Category breakdown for performance analysis',
        'Designed Top Performing Events ranking by attendee count',
        'Included date range filters (Last 7/30/90 days) for trend analysis'
      ],
      outcome: 'Organizations can now make data-driven decisions about which event types to run and when to schedule them based on historical performance.',
      screens: [
        { src: '/images/tikiti-dashboard-analytics.png', alt: 'Analytics Dashboard' }
      ]
    },
    messaging: {
      label: 'Feature 04',
      title: 'Multi-Channel Communication',
      challenge: 'Organizers communicated with attendees through personal WhatsApp, losing professional credibility and having no delivery tracking. Updates often didn\'t reach all attendees.',
      decisions: [
        'Designed unified messaging hub supporting WhatsApp, Email, SMS, and in-app push',
        'Built audience segmentation by event, ticket type, or registration date',
        'Created message templates for common updates (reminders, changes, thank-yous)',
        'Added delivery tracking and read receipts for accountability'
      ],
      outcome: 'Communication reach improved from ~60% to 95%+ with multi-channel delivery. Organizations maintain professional brand presence.',
      screens: []
    },
    reports: {
      label: 'Feature 05',
      title: 'AI-Generated Reports',
      challenge: 'Post-event reporting took days of manual work. Organizers struggled to compile feedback, attendance data, and financials into coherent reports for stakeholders and sponsors.',
      decisions: [
        'Built one-click report generation using AI to analyze event data',
        'Compiled attendee feedback, attendance metrics, and revenue automatically',
        'Created downloadable PDF reports with professional formatting',
        'Added sponsor-ready summaries with key highlights and recommendations'
      ],
      outcome: 'Report generation time reduced from days to seconds. Organizations can now provide immediate post-event summaries to stakeholders.',
      screens: []
    },
    orgSwitcher: {
      label: 'Feature 06',
      title: 'Multi-Organization Support',
      challenge: 'Event managers often work with multiple organizations (company events, NGO programs, personal projects). Switching between accounts was cumbersome and error-prone.',
      decisions: [
        'Designed organization switcher in the sidebar for quick context switching',
        'Built separate data isolation per organization (events, attendees, analytics)',
        'Created role-based access for team collaboration within organizations',
        'Added organization branding (logo, colors) to maintain identity'
      ],
      outcome: 'Users can now manage multiple organizations from a single account. Event managers report 50% faster workflow when handling multiple clients.',
      screens: [
        { src: '/images/tikiti-dashboard-organizer.png', alt: 'Dashboard with Organization Switcher' }
      ]
    }
  };

  const openFeature = (featureKey) => {
    setSelectedFeature(features[featureKey]);
    setIsPanelOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closePanel = () => {
    setIsPanelOpen(false);
    document.body.style.overflow = 'unset';
    setTimeout(() => setSelectedFeature(null), 300);
  };

  // Scroll to top only on initial page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Cleanup body overflow on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="about-page tikiti-dashboard-case">
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
          <span className="about-breadcrumb-current">Tikiti Dashboard Case Study</span>
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
            <span className="case-pill">B2B SaaS</span>
            <span className="case-pill">2024 — Present</span>
            <span className="case-pill">Events / Productivity</span>
          </div>
          <h1 className="about-headline">
            The <span className="highlight-text">command center</span> for event organizers
          </h1>
          <div className="case-impact-stats">
            <div className="impact-stat-item">
              <span className="stat-number">3</span>
              <span className="stat-label">Orgs Piloting</span>
            </div>
            <div className="impact-stat-item">
              <span className="stat-number">6</span>
              <span className="stat-label">Core Modules</span>
            </div>
            <div className="impact-stat-item">
              <span className="stat-number">B2B</span>
              <span className="stat-label">Business Model</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Hero Image */}
      <motion.section
        className="case-hero-visual case-hero-visual-desktop"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <img
          src="/images/tikiti-dashboard-hero.png"
          alt="Tikiti Dashboard"
          className="case-hero-screen-desktop"
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
            <h2 className="about-section-title">From mobile-only to B2B platform</h2>
            <p className="about-section-text">
              After launching Tikiti mobile app and reaching 900+ downloads, a clear pattern emerged: our power users weren't individual attendees—they were <strong>NGOs, companies, and organizations</strong> running events.
            </p>
            <p className="about-section-text">
              These organizations needed more than a mobile app. They needed a command center to create events, manage attendees, send updates through multiple channels, and generate reports for stakeholders and sponsors.
            </p>
            <p className="about-section-text">
              This insight led to Tikiti's pivot to a <strong>B2B SaaS model</strong>—the mobile app for attendees to discover and attend events, and a web dashboard for organizations to manage everything behind the scenes.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Business Model Section */}
      <section className="about-full-width case-role-section">
        <motion.div
          className="about-full-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="about-text-content">
            <span className="section-label">Business Model</span>
            <h2 className="about-section-title">The two-sided platform</h2>
            <div className="role-grid">
              <div className="role-item">
                <strong>Tikiti Mobile App (Free)</strong>
                <p>Event discovery, digital tickets with QR codes, event updates and notifications, quizzes and interactive content, program lineup and RSVP</p>
                <p className="role-note">Drives downloads through organizer promotion</p>
              </div>
              <div className="role-item">
                <strong>Tikiti Dashboard (Subscription)</strong>
                <p>Event creation and management, attendee tracking and export, multi-channel messaging (WhatsApp, Email, SMS, Push), analytics and insights, AI-generated reports</p>
                <p className="role-note">Per-user subscription fee for organizations</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section className="about-full-width">
        <motion.div
          className="about-full-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="about-text-content">
            <span className="section-label">Core Features</span>
            <h2 className="about-section-title">Dashboard capabilities</h2>
          </div>
        </motion.div>
        <div className="features-grid">
          {Object.entries(features).map(([key, feature], index) => (
            <motion.div
              key={key}
              className="feature-card"
              onClick={() => openFeature(key)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <span className="feature-card-label">{feature.label}</span>
              <h3 className="feature-card-title">{feature.title}</h3>
              <ArrowButton />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pilot Program Section */}
      <section className="about-full-width">
        <motion.div
          className="about-full-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="about-text-content">
            <span className="section-label">Validation</span>
            <h2 className="about-section-title">Pilot program</h2>
            <p className="about-section-text">
              We've lined up <strong>3 organizations</strong> who have agreed to pay for a 3-month pilot of the dashboard. During this period, we will:
            </p>
            <ul className="about-list">
              <li>Fix issues and bugs at no additional cost</li>
              <li>Add features based on direct feedback from pilot users</li>
              <li>Collect data to improve the platform for general release</li>
              <li>Build case studies and testimonials for future sales</li>
            </ul>
            <p className="about-section-text">
              This approach de-risks development by validating with paying customers before scaling, while building a flywheel: more organizations = more attendees downloading the app = more organizations wanting to join.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Technical Section */}
      <section className="about-full-width case-role-section">
        <motion.div
          className="about-full-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="about-text-content">
            <span className="section-label">Technical</span>
            <h2 className="about-section-title">Architecture</h2>
            <div className="role-grid">
              <div className="role-item">
                <strong>Frontend</strong>
                <p>Next.js 16, React, Tailwind CSS</p>
              </div>
              <div className="role-item">
                <strong>Backend</strong>
                <p>Firebase (Auth, Firestore, Storage)</p>
              </div>
              <div className="role-item">
                <strong>Mobile</strong>
                <p>React Native (Expo)</p>
              </div>
              <div className="role-item">
                <strong>Messaging</strong>
                <p>WhatsApp API, SendGrid, Twilio</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Related Case Study */}
      <section className="about-full-width">
        <motion.div
          className="about-full-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="about-text-content">
            <span className="section-label">Related Project</span>
            <Link to="/tikiti-case-study" className="next-case-link">
              <h2 className="about-section-title">Tikiti Mobile — Event Discovery App</h2>
              <ArrowButton />
            </Link>
          </div>
        </motion.div>
      </section>

      <FeaturePanel
        feature={selectedFeature}
        isOpen={isPanelOpen}
        onClose={closePanel}
      />

      <Footer />
    </div>
  );
}

export default TikitiDashboardCaseStudy;
