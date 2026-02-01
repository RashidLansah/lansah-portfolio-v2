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

function KaakaCaseStudy() {
  const [selectedFeature, setSelectedFeature] = useState(null);
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const features = {
    receiptScanning: {
      label: 'Feature 01',
      title: 'Receipt Scanning & AI Extraction',
      challenge: 'Users manually typed out grocery items from receipts—a tedious process that took 10+ minutes per shopping trip. Most people gave up after a few attempts, abandoning the habit of meal planning.',
      decisions: [
        'Designed a camera-first experience with real-time OCR feedback',
        'Built a visual review step where users could verify and correct extracted items',
        'Created smart categorization to automatically group items by food type',
        'Added bulk editing so users could quickly fix multiple items at once'
      ],
      outcome: 'Receipt processing dropped from 10 minutes to under 30 seconds. 85% of extracted items need no corrections.',
      screens: [
        { src: '/images/case-studies/kaaka-onboarding-1.png', alt: 'Receipt Scanning Onboarding' },
        { src: '/images/case-studies/kaaka-scan-receipt.png', alt: 'Camera Scan Interface' },
        { src: '/images/case-studies/kaaka-loading.png', alt: 'AI Processing Screen' }
      ]
    },
    mealPlanning: {
      label: 'Feature 02',
      title: 'AI Meal Planning',
      challenge: 'Users had groceries but no idea what to cook. Existing recipe apps required them to search manually—they wanted suggestions based on what they actually bought.',
      decisions: [
        'Built an AI chat interface where users describe what they want to cook',
        'Designed personalized 7-day meal plans based on scanned groceries',
        'Created recipe cards with step-by-step instructions and timing',
        'Added dietary preference filters (vegetarian, low-carb, quick meals)'
      ],
      outcome: 'Users now get personalized meal suggestions in seconds. Average user generates 3 meal plans per week.',
      screens: [
        { src: '/images/case-studies/kaaka-onboarding-2.png', alt: 'Meal Planning Onboarding' },
        { src: '/images/case-studies/kaaka-ai-chat.png', alt: 'AI Meal Planning Assistant' }
      ]
    },
    shoppingList: {
      label: 'Feature 03',
      title: 'Smart Shopping Lists',
      challenge: 'Users would plan meals but forget to buy all the ingredients. Shopping lists were disconnected from meal plans, causing frustration at the store.',
      decisions: [
        'Automatically generate shopping lists from selected meal plans',
        'Designed a conversational interface to add items naturally',
        'Built aisle grouping to make in-store shopping efficient',
        'Added smart suggestions based on commonly purchased items'
      ],
      outcome: 'Users complete their shopping 40% faster. Missing ingredient complaints dropped to near zero.',
      screens: [
        { src: '/images/case-studies/kaaka-onboarding-3.png', alt: 'Cook with Confidence' },
        { src: '/images/case-studies/kaaka-dashboard.png', alt: 'Dashboard Overview' }
      ]
    },
    progressTracking: {
      label: 'Feature 04',
      title: 'Progress & Gamification',
      challenge: 'Users started strong but lost motivation after a few weeks. Without visible progress, meal planning felt like another chore rather than a healthy habit.',
      decisions: [
        'Designed a progress dashboard showing receipts scanned and meals planned',
        'Created achievement badges for consistent usage milestones',
        'Built streak tracking to encourage daily engagement',
        'Added visual statistics showing money saved and food waste reduced'
      ],
      outcome: 'User retention improved by 60%. Average user streak increased from 3 days to 12 days.',
      screens: [
        { src: '/images/case-studies/kaaka-dashboard.png', alt: 'Progress Tracking Dashboard' },
        { src: '/images/case-studies/kaaka-login.png', alt: 'Welcome Back Screen' }
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
    <div className="about-page kaaka-case">
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
          <span className="about-breadcrumb-current">Kaaka Case Study</span>
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
            <span className="case-pill">Consumer / AI</span>
          </div>
          <h1 className="about-headline">
            Turning grocery receipts into <span className="highlight-text">personalized meal plans</span> with AI
          </h1>
          <div className="case-impact-stats">
            <div className="impact-stat-item">
              <span className="stat-number">30s</span>
              <span className="stat-label">Receipt to recipes</span>
            </div>
            <div className="impact-stat-item">
              <span className="stat-number">85%</span>
              <span className="stat-label">Extraction accuracy</span>
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
          src="/images/case-studies/kaaka-dashboard.png"
          alt="Kaaka App Dashboard"
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
            <h2 className="about-section-title">The gap between grocery shopping and cooking</h2>
            <p className="about-section-text">
              People buy groceries with good intentions but often don't know what to cook. They end up wasting food, ordering takeout, or eating the same repetitive meals. The disconnect between "what I bought" and "what I can make" was causing frustration and food waste.
            </p>
            <p className="about-section-text">
              I built Kaaka as a side project to solve my own problem—and discovered many others shared the same struggle. The idea: snap a photo of your receipt, and AI figures out what you can cook.
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
            <h2 className="about-section-title">Solo founder—design, code, and ship</h2>
            <div className="role-grid">
              <div className="role-item">
                <strong>Research</strong>
                <p>User interviews, competitive analysis, problem validation</p>
              </div>
              <div className="role-item">
                <strong>Design</strong>
                <p>End-to-end UX, UI design, prototyping, user testing</p>
              </div>
              <div className="role-item">
                <strong>Development</strong>
                <p>React Native app, AI integration, backend APIs</p>
              </div>
              <div className="role-item">
                <strong>Launch</strong>
                <p>App Store submission, landing page, marketing</p>
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
            <h2 className="about-section-title">Making AI feel like a helpful friend, not a robot</h2>
            <p className="about-section-text">
              Early testers loved the concept but felt disconnected from the AI suggestions. "It feels like a database lookup, not a cooking buddy," one user said. The challenge wasn't just accuracy—it was <strong>personality and trust</strong>.
            </p>
            <p className="about-section-text">
              I redesigned the experience around conversation. Instead of showing a list of recipes, Kaaka asks what you're in the mood for. It feels like texting a friend who happens to be a chef.
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
            <h2 className="about-section-title">4 core features that make meal planning effortless</h2>
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
          onClick={() => openPanel('receiptScanning')}
        >
          <span className="feature-number">01</span>
          <h2 className="about-section-title">Receipt Scanning</h2>
          <p className="about-section-text">
            AI-powered OCR that extracts grocery items from any receipt in under 30 seconds.
          </p>
          <ArrowButton />
        </motion.div>

        <motion.div
          className="about-column feature-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          onClick={() => openPanel('mealPlanning')}
        >
          <span className="feature-number">02</span>
          <h2 className="about-section-title">AI Meal Planning</h2>
          <p className="about-section-text">
            Personalized 7-day meal plans generated from your actual groceries.
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
          onClick={() => openPanel('shoppingList')}
        >
          <span className="feature-number">03</span>
          <h2 className="about-section-title">Smart Shopping Lists</h2>
          <p className="about-section-text">
            Auto-generated lists from meal plans with aisle grouping for faster shopping.
          </p>
          <ArrowButton />
        </motion.div>

        <motion.div
          className="about-column feature-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          onClick={() => openPanel('progressTracking')}
        >
          <span className="feature-number">04</span>
          <h2 className="about-section-title">Progress Tracking</h2>
          <p className="about-section-text">
            Gamification elements that keep users engaged and building healthy habits.
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
            <h2 className="about-section-title">What building Kaaka taught me</h2>
            <div className="learnings-list">
              <div className="learning-item">
                <strong>Personality beats features.</strong>
                <p>Users fell in love with Kaaka when I gave the AI a friendly, conversational tone. The same functionality felt completely different with the right voice.</p>
              </div>
              <div className="learning-item">
                <strong>Solve your own problem first.</strong>
                <p>Building something I personally needed meant I was the first user. Every pain point I felt, others felt too—this made prioritization easy.</p>
              </div>
              <div className="learning-item">
                <strong>Ship fast, iterate faster.</strong>
                <p>The first version was embarrassingly simple—just receipt scanning and a list. User feedback shaped every feature that followed.</p>
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
            <Link to="/case-study" className="next-case-link">
              <h2 className="about-section-title">Jenesys — AI Bookkeeping Platform</h2>
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

export default KaakaCaseStudy;
