import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Sidebar from './Sidebar';
import Footer from './Footer';
import './CaseStudy.css';

const ArrowButton = () => (
  <div className="about-arrow-button">
    <span>→</span>
  </div>
);

function ChoperlyCaseStudy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
          <Link to="/work" className="about-breadcrumb-link">Work</Link>
          <span className="about-breadcrumb-separator">/</span>
          <span className="about-breadcrumb-current">Choperly</span>
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
            <span className="case-pill">2025</span>
            <span className="case-pill">Food / Commerce</span>
            <span className="case-pill">WhatsApp + AI</span>
          </div>
          <h1 className="about-headline">
            Turning WhatsApp chats into an <span className="highlight-text">automated food storefront</span>
          </h1>
          <div className="case-impact-stats">
            <div className="impact-stat-item">
              <span className="stat-number">15 min</span>
              <span className="stat-label">Menu to live bot</span>
            </div>
            <div className="impact-stat-item">
              <span className="stat-number">5%</span>
              <span className="stat-label">Flat fee per order</span>
            </div>
            <div className="impact-stat-item">
              <span className="stat-number">10</span>
              <span className="stat-label">Conversation states</span>
            </div>
          </div>
          <a href="https://choperly.com" target="_blank" rel="noopener noreferrer" className="case-live-link">
            <span className="live-dot" />
            Try Choperly live — choperly.com
            <svg width="13" height="13" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M3 9L9 3M9 3H4.5M9 3V7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
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
          src="/images/case-studies/choperly-landing.png"
          alt="Choperly — WhatsApp-native food ordering for Ghana"
          className="case-hero-screen"
        />
      </motion.section>

      {/* Context */}
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
            <h2 className="about-section-title">Ghana's home kitchens already run on WhatsApp</h2>
            <p className="about-section-text">
              Thousands of home-based food businesses in Ghana take every order through WhatsApp DMs. The storefront already exists — what's missing is the automation. Sellers answer "what's on your menu?" dozens of times a day, mix up orders, chase mobile money payments they can't reconcile, and coordinate riders by voice note.
            </p>
            <p className="about-section-text">
              Choperly turns a seller's WhatsApp number into an automated storefront: a bot that takes orders end to end, collects mobile money payments, dispatches riders, and keeps customers updated — while the seller just cooks.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Role */}
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
            <h2 className="about-section-title">Designed and built end to end</h2>
            <div className="role-grid">
              <div className="role-item">
                <strong>Product design</strong>
                <p>Landing page, seller dashboard, storefront pages, and the onboarding flow — brand, UI, and copy</p>
              </div>
              <div className="role-item">
                <strong>Conversation design</strong>
                <p>The full ordering flow as a 10-state machine — greeting, browsing, cart, delivery, payment, tracking</p>
              </div>
              <div className="role-item">
                <strong>Engineering</strong>
                <p>Next.js + Firebase build with WhatsApp Cloud API, Paystack mobile money, and rider dispatch</p>
              </div>
              <div className="role-item">
                <strong>AI onboarding</strong>
                <p>Claude-powered menu import — paste text or a photo and get a structured, categorized menu</p>
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
            <h2 className="about-section-title">The interface is a conversation, not a screen</h2>
            <p className="about-section-text">
              Customers never download an app — the entire product lives inside a WhatsApp thread. That means the "UI" is a state machine and the design work is conversation design: what the bot says, which quick-reply buttons appear, and how it recovers when someone changes their mind mid-order, messages at 2am, or picks cash instead of mobile money.
            </p>
            <p className="about-section-text">
              <strong>Every edge case is copywriting plus state design.</strong> Out-of-hours messages, cart edits, delivery vs pickup, payment fallbacks — each one had to be designed as carefully as any screen, because there's no interface to fall back on.
            </p>
          </div>
        </motion.div>
      </section>

      {/* What I shipped */}
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
            <h2 className="about-section-title">One bot, six connected surfaces</h2>
            <p className="about-section-text">
              From the customer's chat thread to the seller's dashboard, the rider's dispatch flow, and a public storefront page — every surface designed and built solo.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Feature Cards Row 1 */}
      <section className="about-two-column feature-cards-section">
        <motion.div
          className="about-column about-column-bordered feature-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="feature-number">01</span>
          <h2 className="about-section-title">WhatsApp ordering bot</h2>
          <p className="about-section-text">
            A 10-state conversation flow — browse by category, build a cart, choose delivery or pickup, share location, pay, and track. Handles cart edits, repeat orders, and out-of-hours messages gracefully.
          </p>
        </motion.div>

        <motion.div
          className="about-column feature-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <span className="feature-number">02</span>
          <h2 className="about-section-title">AI menu onboarding</h2>
          <p className="about-section-text">
            Sellers paste their menu as text — or upload a photo of a handwritten one — and Claude parses it into structured items with prices and Ghanaian food categories. From signup to a live bot in about 15 minutes.
          </p>
        </motion.div>
      </section>

      {/* Feature Cards Row 2 */}
      <section className="about-two-column feature-cards-section">
        <motion.div
          className="about-column about-column-bordered feature-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="feature-number">03</span>
          <h2 className="about-section-title">Mobile money built in</h2>
          <p className="about-section-text">
            Paystack-powered MTN, Vodafone Cash, and AirtelTigo payments prompted right in the chat, with automatic confirmation back to both customer and seller. No POS, no bank account, no chasing.
          </p>
        </motion.div>

        <motion.div
          className="about-column feature-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <span className="feature-number">04</span>
          <h2 className="about-section-title">Rider dispatch on WhatsApp</h2>
          <p className="about-section-text">
            The moment an order confirms, the rider gets a WhatsApp dispatch with the drop-off location and payment note. Auto-pick or manual assignment, accept/decline handling, and re-send when a rider goes quiet.
          </p>
        </motion.div>
      </section>

      {/* Feature Cards Row 3 */}
      <section className="about-two-column feature-cards-section">
        <motion.div
          className="about-column about-column-bordered feature-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="feature-number">05</span>
          <h2 className="about-section-title">Seller dashboard</h2>
          <p className="about-section-text">
            Live orders, daily revenue, menu management, payouts, and analytics — top sellers, peak hours, repeat customers — so sellers know what to cook more of, and when.
          </p>
        </motion.div>

        <motion.div
          className="about-column feature-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <span className="feature-number">06</span>
          <h2 className="about-section-title">Storefront + broadcasts</h2>
          <p className="about-section-text">
            Every seller gets a shareable choperly.com page with their menu, a QR code, and an "Order on WhatsApp" button — plus one-tap promo broadcasts to everyone who has ever ordered.
          </p>
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
            <span className="section-label">The Bets I Made</span>
            <h2 className="about-section-title">Product thinking behind the build</h2>
            <div className="learnings-list">
              <div className="learning-item">
                <strong>Meet customers where they already are.</strong>
                <p>No app download, no new habit. The customer orders in the same WhatsApp thread they were already using — the automation is invisible until it's helpful.</p>
              </div>
              <div className="learning-item">
                <strong>Conversation design is product design.</strong>
                <p>The state machine is the core UX artifact. Button labels, error recovery, and message tone did the work that screens, modals, and empty states do in a normal app.</p>
              </div>
              <div className="learning-item">
                <strong>Honest pricing is a wedge.</strong>
                <p>Food aggregators charge 15–30% per order. Choperly charges a flat 5% with no monthly fee — a number a home seller can say yes to without a calculator.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Coming soon note */}
      <section className="about-full-width case-next-section">
        <motion.div
          className="about-full-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="about-text-content">
            <span className="section-label">In Progress</span>
            <h2 className="about-section-title">Live pilot underway.</h2>
            <p className="about-section-text">
              Choperly is in pilot with home-based sellers in Accra. I'm documenting the conversation design and the WhatsApp Cloud API build in more detail as the pilot grows.
            </p>
            <Link to="/work" className="next-case-link" style={{ marginTop: 24, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              <h2 className="about-section-title" style={{ margin: 0 }}>Back to all work</h2>
              <ArrowButton />
            </Link>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}

export default ChoperlyCaseStudy;
