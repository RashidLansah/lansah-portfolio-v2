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
    eventCreation: {
      label: 'Feature 01',
      title: 'Event Creation & Management',
      challenge: 'Event organizers relied on spreadsheets, WhatsApp groups, and email threads to coordinate events. Creating an event meant juggling multiple platforms with no centralized workflow, leading to missed details and inconsistent information across channels.',
      decisions: [
        'Designed a 9-step guided wizard (Details, Date & Time, Location, Tickets, Program, Speakers, Registration Form, Preview, Publish) that breaks complex event setup into manageable stages',
        'Built a single-event overview page with at-a-glance stats, quick actions, and sub-navigation to all event-level features',
        'Created event status workflow (Draft, Published, Archived) with status-based filtering on the events list',
        'Added category filters, search, and date sorting on the events list for quick organization across multiple events'
      ],
      outcome: 'Event creation time reduced from hours of manual coordination to under 15 minutes. Organizations can now manage their full event lifecycle from a single dashboard, from initial setup through post-event reporting.',
      screens: [
        { src: '/images/case-studies/tikiti-dashboard-events.png', alt: 'Events list with filters' },
        { src: '/images/case-studies/tikiti-dashboard-create.png', alt: 'Create event wizard - Step 1 of 9' },
        { src: '/images/case-studies/tikiti-dashboard-event-details.png', alt: 'Single event overview' },
        { src: '/images/case-studies/tikiti-dashboard-event-preview.png', alt: 'Attendee-facing event preview' }
      ]
    },
    attendeeManagement: {
      label: 'Feature 02',
      title: 'Attendee Management & Check-in',
      challenge: 'Organizers had no visibility into who registered for their events. Attendance tracking was done manually at the door with paper lists, and there was no way to resend tickets or verify attendees digitally on event day.',
      decisions: [
        'Designed organization-level attendee dashboard with Total, Confirmed, This Month, and Active Events stat cards',
        'Built event-level attendee list with search, status filters, and one-click ticket resend functionality',
        'Created QR code-based check-in system with real-time scanning for fast, paperless entry verification',
        'Added one-click CSV export for external CRM integration and post-event attendee analysis',
        'Built a custom registration form builder so organizers can collect the exact data they need per event'
      ],
      outcome: 'Organizations now have complete attendee visibility from registration through check-in. QR scanning eliminated manual paper lists, reducing check-in time per attendee from minutes to seconds.',
      screens: [
        { src: '/images/case-studies/tikiti-dashboard-attendees.png', alt: 'Organization-level attendee management' },
        { src: '/images/case-studies/tikiti-dashboard-event-attendees.png', alt: 'Event attendees with ticket resend' },
        { src: '/images/case-studies/tikiti-dashboard-event-checkin.png', alt: 'QR code check-in scanner' },
        { src: '/images/case-studies/tikiti-dashboard-event-form.png', alt: 'Registration form builder' }
      ]
    },
    reportsAnalytics: {
      label: 'Feature 03',
      title: 'Reports & Analytics',
      challenge: 'After events, organizers had no data on performance. Post-event reporting took days of manual work compiling attendance figures, feedback, and financials into coherent reports for stakeholders and sponsors.',
      decisions: [
        'Built organization-level analytics dashboard with Total Events, Attendees, Revenue, and Ticket Sales metrics',
        'Created event performance charts and attendee status visualizations for trend analysis',
        'Designed event-level reports page with registration timeline, attendee breakdown, and engagement stats',
        'Added AI-powered one-click report generation that compiles attendee data, feedback, and financials automatically',
        'Included date range filters and Top Performing Events rankings for strategic planning'
      ],
      outcome: 'Organizations can now make data-driven decisions about event strategy. AI-generated reports reduced post-event reporting from days of manual compilation to seconds, enabling immediate stakeholder summaries.',
      screens: [
        { src: '/images/case-studies/tikiti-dashboard-analytics.png', alt: 'Organization-level analytics dashboard' },
        { src: '/images/case-studies/tikiti-dashboard-event-reports.png', alt: 'Event-level reports with charts' },
        { src: '/images/case-studies/tikiti-dashboard-home.png', alt: 'Dashboard home with key stats' }
      ]
    },
    communication: {
      label: 'Feature 04',
      title: 'Multi-Channel Communication',
      challenge: 'Organizers communicated with attendees through personal WhatsApp and scattered emails, losing professional credibility with no delivery tracking. Event updates often failed to reach all attendees, and there was no centralized message history.',
      decisions: [
        'Designed a unified messaging hub for organization-wide broadcasts across Email, Push, SMS, and WhatsApp',
        'Built event-specific messaging for targeted communication to individual event attendees',
        'Created a post-event updates system for sharing announcements, schedule changes, and follow-up content',
        'Added event-level surveys and feedback collection to capture attendee sentiment immediately post-event'
      ],
      outcome: 'Communication reach improved from approximately 60% to over 95% with multi-channel delivery. Organizations maintain a professional brand presence and have full message history for accountability.',
      screens: [
        { src: '/images/case-studies/tikiti-dashboard-messaging.png', alt: 'Organization messaging hub' },
        { src: '/images/case-studies/tikiti-dashboard-event-messaging.png', alt: 'Event-specific messaging' },
        { src: '/images/case-studies/tikiti-dashboard-event-updates.png', alt: 'Post-event updates' },
        { src: '/images/case-studies/tikiti-dashboard-event-surveys.png', alt: 'Surveys and feedback collection' }
      ]
    },
    speakerProgram: {
      label: 'Feature 05',
      title: 'Speaker & Program Management',
      challenge: 'Managing speakers and building event programs was done through back-and-forth emails and shared documents. There was no way to invite speakers directly, build session agendas, or add interactive engagement tools from a single place.',
      decisions: [
        'Built a speakers management page with confirmed speakers, pending invitations, and profile submission tracking',
        'Designed a speaker invitation flow with role selection (Speaker, Panelist, Moderator, Host) and personalized messages',
        'Created a program builder for organizing keynotes, sessions, panels, and breaks into a structured agenda',
        'Added engagement tools including live polls and quizzes to drive attendee interaction during sessions'
      ],
      outcome: 'Speaker management is now centralized with invitation tracking and profile collection. Program building that previously took multiple coordination calls can now be done in minutes with structured session ordering.',
      screens: [
        { src: '/images/case-studies/tikiti-dashboard-speakers.png', alt: 'Speakers and panelists directory' },
        { src: '/images/case-studies/tikiti-dashboard-speaker-invite-modal.png', alt: 'Speaker invitation modal' },
        { src: '/images/case-studies/tikiti-dashboard-event-program.png', alt: 'Session and keynote agenda builder' },
        { src: '/images/case-studies/tikiti-dashboard-event-engagement.png', alt: 'Polls and quizzes engagement tools' }
      ]
    },
    orgSettings: {
      label: 'Feature 06',
      title: 'Organization Settings & Team',
      challenge: 'Event managers working with multiple organizations had no way to customize branding per org, manage team access, or control notification preferences. Switching between organizations and managing billing was cumbersome and error-prone.',
      decisions: [
        'Designed a settings hub with tabbed navigation: General, Branding, Notifications, Team, and Subscription',
        'Built branding customization with logo upload and primary/secondary color scheme per organization',
        'Created team management with role-based access control (Owner, Project Manager) for collaborative event management',
        'Added notification preference controls for Email, Push, and SMS channel toggles',
        'Designed subscription and billing management with Free vs Pro plan comparison and upgrade flow'
      ],
      outcome: 'Organizations can fully customize their dashboard experience. Role-based team access enabled delegation, and multi-org users report 50% faster workflows when managing multiple clients from a single account.',
      screens: [
        { src: '/images/case-studies/tikiti-dashboard-settings.png', alt: 'Settings - General tab' },
        { src: '/images/case-studies/tikiti-dashboard-settings-branding.png', alt: 'Settings - Branding with logo and colors' },
        { src: '/images/case-studies/tikiti-dashboard-settings-team.png', alt: 'Settings - Team members and roles' },
        { src: '/images/case-studies/tikiti-dashboard-settings-notifications.png', alt: 'Settings - Notification toggles' },
        { src: '/images/case-studies/tikiti-dashboard-settings-subscription.png', alt: 'Settings - Plans and billing' }
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
            <span className="case-pill">2024 to Present</span>
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
          src="/images/case-studies/tikiti-dashboard-landing.png"
          alt="Tikiti Dashboard Landing Page"
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
              After launching Tikiti mobile app and reaching 1.7k downloads, a clear pattern emerged: our power users weren't individual attendees. They were <strong>NGOs, companies, and organizations</strong> running events.
            </p>
            <p className="about-section-text">
              These organizations needed more than a mobile app. They needed a command center to create events, manage attendees, send updates through multiple channels, and generate reports for stakeholders and sponsors.
            </p>
            <p className="about-section-text">
              This insight led to Tikiti's pivot to a <strong>B2B SaaS model</strong>. The mobile app for attendees to discover and attend events, and a web dashboard for organizations to manage everything behind the scenes.
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
                <p>Event creation wizard, attendee management and QR check-in, multi-channel messaging (Email, Push, SMS, WhatsApp), reports and AI analytics, speaker and program management, organization settings and team roles</p>
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
              <h2 className="about-section-title">Tikiti Mobile: Event Discovery App</h2>
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
