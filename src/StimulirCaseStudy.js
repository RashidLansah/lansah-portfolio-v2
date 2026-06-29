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

function StimulirCaseStudy() {
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
          <span className="about-breadcrumb-current">Stimulir</span>
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
            <span className="case-pill">Web</span>
            <span className="case-pill">Desktop</span>
            <span className="case-pill">iOS</span>
            <span className="case-pill">Product Engineer</span>
            <span className="case-pill">2025 – Present</span>
          </div>
          <h1 className="about-headline">
            Building an <span className="highlight-text">adaptive AI gateway</span> from 0 to 1 — console, mobile, docs, design system
          </h1>
          <div className="case-impact-stats">
            <div className="impact-stat-item">
              <span className="stat-number">0→1</span>
              <span className="stat-label">Product build</span>
            </div>
            <div className="impact-stat-item">
              <span className="stat-number">6</span>
              <span className="stat-label">Surfaces shipped</span>
            </div>
            <div className="impact-stat-item">
              <span className="stat-number">Web · Desktop · iOS</span>
              <span className="stat-label">Platforms</span>
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
          src="/images/case-studies/stimulir-hero.png"
          alt="Stimulir — adaptive AI inference gateway"
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
            <h2 className="about-section-title">One integration for every AI modality</h2>
            <p className="about-section-text">
              Stimulir is an adaptive AI inference gateway — a single integration point that routes tasks across models, agents, and modalities. Instead of managing multiple SDKs, teams connect once and get access to text, vision, code, and agent workflows from a unified interface.
            </p>
            <p className="about-section-text">
              The gateway gets sharper as it runs, learning which models perform best for which task types. When confidence is low, it surfaces the edge case for human review rather than guessing — making human-in-the-loop a core product feature, not a fallback.
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
            <h2 className="about-section-title">Product engineer across the full stack</h2>
            <div className="role-grid">
              <div className="role-item">
                <strong>Console</strong>
                <p>React + Electron desktop app — task feed, session replay, integrations, admin tooling</p>
              </div>
              <div className="role-item">
                <strong>Mobile</strong>
                <p>Native iOS app in Expo / React Native with full parity to the web shell</p>
              </div>
              <div className="role-item">
                <strong>Design system</strong>
                <p>Tokens, component library (Radix + shadcn pattern), Tailwind v4 theme, brand identity</p>
              </div>
              <div className="role-item">
                <strong>Go-to-market</strong>
                <p>Docs product, sitemap, GA4 conversion tracking, structured data, SEO coverage</p>
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
            <h2 className="about-section-title">AI tools treat every request in isolation</h2>
            <p className="about-section-text">
              Most inference layers are stateless — each call starts fresh. We wanted to build something that compounds. A gateway that knows which model handled task X best last week, and routes accordingly this week. That insight shaped everything: the console UX, the mobile review flow, and how we present confidence in the interface.
            </p>
            <p className="about-section-text">
              <strong>Human-in-the-loop isn't a fallback — it's a feature.</strong> When the system is uncertain, it flags the task and routes to a human reviewer. That's the core of the console and mobile experience.
            </p>
          </div>
        </motion.div>
      </section>

      {/* What we shipped */}
      <section className="about-full-width">
        <motion.div
          className="about-full-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="about-text-content">
            <span className="section-label">What We Shipped</span>
            <h2 className="about-section-title">6 surfaces built from scratch</h2>
            <p className="about-section-text">
              From the console desktop app to native iOS, developer docs, and the brand — every surface was designed and built as part of this engagement.
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
          <h2 className="about-section-title">Console (0→1)</h2>
          <p className="about-section-text">
            Task feed, session replay, context studio, integrations, and admin tooling — built from scratch as a React + Electron desktop app with Supabase auth.
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
          <h2 className="about-section-title">Mobile — native iOS</h2>
          <p className="about-section-text">
            Full parity native iOS app in Expo + React Native. Real-time inbox, task review flows, and deep-link routing via stimulir:// scheme.
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
          <h2 className="about-section-title">Design system</h2>
          <p className="about-section-text">
            Built from tokens up — colour, typography (Manrope + Lora + IBM Plex Mono), component library in Radix + shadcn pattern, and a Tailwind v4 theme with scoped finance and studio modes.
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
          <h2 className="about-section-title">Brand identity</h2>
          <p className="about-section-text">
            Defined the Stimulir brand: warm neutrals, a luminance-removed icon, and a visual language that communicates precision without feeling cold or clinical.
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
          <h2 className="about-section-title">Docs product</h2>
          <p className="about-section-text">
            Developer documentation from scratch — getting started, SDK reference, CLI guide, engineering and compute sections — with sitemap coverage across 23 URLs.
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
          <h2 className="about-section-title">GA4 + SEO</h2>
          <p className="about-section-text">
            Wired GA4 key event tracking across all conversion CTAs, added llms.txt for AI discoverability, JSON-LD structured data, and full organic search coverage.
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
            <span className="section-label">The Bets We Made</span>
            <h2 className="about-section-title">Product thinking behind the build</h2>
            <div className="learnings-list">
              <div className="learning-item">
                <strong>Compounding inference beats stateless APIs.</strong>
                <p>Routing that learns task-model fit over time is a stronger moat than any individual model. That's the positioning we built toward from day one.</p>
              </div>
              <div className="learning-item">
                <strong>Uncertainty is honest UX.</strong>
                <p>Rather than hiding low confidence, Stimulir surfaces it and routes to a human. Users trust a system more when it knows its own limits.</p>
              </div>
              <div className="learning-item">
                <strong>One integration is a product decision, not just a technical one.</strong>
                <p>Reducing the connection overhead to a single SDK shapes everything downstream — docs, onboarding, pricing, and how we design the console.</p>
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
            <h2 className="about-section-title">Full case study coming soon.</h2>
            <p className="about-section-text">
              I'm documenting the product decisions, design system, and engineering work in more detail. Check back shortly.
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

export default StimulirCaseStudy;
