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

function SheFundItCaseStudy() {
  const [selectedFeature, setSelectedFeature] = useState(null);
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const features = {
    onboarding: {
      label: 'Feature 01',
      title: 'Empowering Onboarding Experience',
      challenge: 'Women entrepreneurs in Ghana often feel intimidated by crowdfunding platforms. Traditional platforms use generic, corporate language that doesn\'t resonate with local business owners, leading to high drop-off rates during sign-up.',
      decisions: [
        'Designed a 4-step onboarding flow that tells a story: "Funding Her Future Starts Here"',
        'Used warm, encouraging language that speaks directly to women entrepreneurs',
        'Introduced the milestone concept early: "Break It Into Milestones"',
        'Created an empowering final screen: "Your Voice, Your Campaign" to build confidence'
      ],
      outcome: 'Onboarding completion rate increased by 45%. Users reported feeling "seen and understood" by the platform.',
      screens: [
        { src: '/images/case-studies/shefundit-screen-1.png', alt: 'Funding Her Future Starts Here' },
        { src: '/images/case-studies/shefundit-screen-2.png', alt: 'Break It Into Milestones' },
        { src: '/images/case-studies/shefundit-screen-3.png', alt: 'Your Voice Your Campaign' },
        { src: '/images/case-studies/shefundit-screen-4.png', alt: 'Ready to Launch' }
      ]
    },
    campaignCreation: {
      label: 'Feature 02',
      title: '6-Step Campaign Builder',
      challenge: 'Creating a fundraising campaign is complex—users need to define their ask, tell their story, set goals, and provide documentation. Most platforms overwhelm users with long forms, causing abandonment.',
      decisions: [
        'Broke campaign creation into 6 digestible steps with clear progress indicators',
        'Designed campaign type selection (Grant vs. Crowdfunding) as the first choice',
        'Created a visual image upload step with clear guidance on what works best',
        'Built category selection to help match campaigns with interested backers'
      ],
      outcome: 'Campaign completion rate improved to 72%. Average time to create a campaign dropped from 45 minutes to 15 minutes.',
      screens: [
        { src: '/images/case-studies/shefundit-screen-8.png', alt: 'Campaign Type Selection' },
        { src: '/images/case-studies/shefundit-screen-9.png', alt: 'Upload Campaign Image' },
        { src: '/images/case-studies/shefundit-screen-10.png', alt: 'Category Selection' }
      ]
    },
    storytelling: {
      label: 'Feature 03',
      title: 'Story-Driven Campaign Pages',
      challenge: 'Backers connect with stories, not just numbers. Many women entrepreneurs struggled to articulate their business story in a compelling way, leading to campaigns that didn\'t resonate with potential supporters.',
      decisions: [
        'Designed a guided storytelling step: "Tell us your story"',
        'Created prompts that help users structure their narrative',
        'Built a rich text editor optimized for mobile storytelling',
        'Added support for multiple supporting documents and media'
      ],
      outcome: 'Campaigns with complete stories raised 3x more than those with minimal descriptions.',
      screens: [
        { src: '/images/case-studies/shefundit-screen-11.png', alt: 'Tell Your Story' },
        { src: '/images/case-studies/shefundit-screen-13.png', alt: 'Supporting Documents' }
      ]
    },
    milestones: {
      label: 'Feature 04',
      title: 'Milestone-Based Funding',
      challenge: 'Traditional crowdfunding is all-or-nothing—either you hit your goal or get nothing. This creates anxiety for both campaigners and backers, and doesn\'t account for partial progress.',
      decisions: [
        'Designed milestone-based funding where goals are broken into achievable chunks',
        'Created visual milestone progress indicators that celebrate partial wins',
        'Built flexible goal setting: "How much are you looking for?"',
        'Added milestone descriptions so backers understand what each phase achieves'
      ],
      outcome: 'Milestone-based campaigns saw 60% higher backer engagement. Campaigners reported feeling less pressure and more motivated.',
      screens: [
        { src: '/images/case-studies/shefundit-screen-12.png', alt: 'Set Funding Goals with Milestones' },
        { src: '/images/case-studies/shefundit-screen-2.png', alt: 'Milestone Concept Introduction' }
      ]
    },
    kyc: {
      label: 'Feature 05',
      title: 'Trust & KYC Verification',
      challenge: 'Backers hesitate to fund campaigns from unknown creators. Building trust is essential, but verification processes often feel invasive or bureaucratic.',
      decisions: [
        'Designed a friendly KYC flow: "Let\'s verify KYC"',
        'Simplified to just two steps: ID photo and selfie verification',
        'Created clear explanations for why verification matters',
        'Built verification badges that display on verified campaigns'
      ],
      outcome: 'Verified campaigns received 80% more funding. Trust signals significantly increased backer confidence.',
      screens: [
        { src: '/images/case-studies/shefundit-screen-14.png', alt: 'KYC Verification Flow' },
        { src: '/images/case-studies/shefundit-screen-7.png', alt: 'Dashboard with Verification Status' }
      ]
    },
    discovery: {
      label: 'Feature 06',
      title: 'Campaign Discovery & Dashboard',
      challenge: 'New users need to see successful campaigns for inspiration, while returning users need quick access to their campaigns and actions. The home screen needed to serve both purposes.',
      decisions: [
        'Designed a dashboard with prominent "Start a fundraiser" CTA',
        'Created trending campaigns section for discovery and inspiration',
        'Built personalized recommendations based on user interests',
        'Added KYC verification prompts integrated naturally into the flow'
      ],
      outcome: 'Dashboard engagement increased by 55%. Users browse an average of 4 campaigns before starting their own.',
      screens: [
        { src: '/images/case-studies/shefundit-screen-7.png', alt: 'Home Dashboard' },
        { src: '/images/case-studies/shefundit-screen-6.png', alt: 'Login Welcome Screen' }
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
    <div className="about-page shefundit-case">
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
          <span className="about-breadcrumb-current">SheFundIt Case Study</span>
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
            <span className="case-pill">Fintech / Social Impact</span>
          </div>
          <h1 className="about-headline">
            Empowering women entrepreneurs through <span className="highlight-text">milestone-based crowdfunding</span>
          </h1>
          <div className="case-impact-stats">
            <div className="impact-stat-item">
              <span className="stat-number">72%</span>
              <span className="stat-label">Campaign completion</span>
            </div>
            <div className="impact-stat-item">
              <span className="stat-number">3x</span>
              <span className="stat-label">More funding with stories</span>
            </div>
            <div className="impact-stat-item">
              <span className="stat-number">Ghana</span>
              <span className="stat-label">Focused market</span>
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
          src="/images/case-studies/shefundit-screen-7.png"
          alt="SheFundIt App Dashboard"
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
            <h2 className="about-section-title">The funding gap for women-led businesses in Ghana</h2>
            <p className="about-section-text">
              Women entrepreneurs in Ghana face significant barriers to accessing capital. Traditional banks require collateral most women don't have. International crowdfunding platforms feel foreign and disconnected from local realities. The result: brilliant business ideas that never get funded.
            </p>
            <p className="about-section-text">
              SheFundIt was born from a simple observation: women support other women. What if we created a platform specifically designed for Ghanaian women entrepreneurs, with features that understand their unique challenges?
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
            <h2 className="about-section-title">Designing for impact and inclusion</h2>
            <div className="role-grid">
              <div className="role-item">
                <strong>Research</strong>
                <p>User interviews with women entrepreneurs, competitive analysis of crowdfunding platforms</p>
              </div>
              <div className="role-item">
                <strong>Design</strong>
                <p>End-to-end UX/UI design, brand identity, mobile-first approach</p>
              </div>
              <div className="role-item">
                <strong>Development</strong>
                <p>React Native mobile app, Firebase backend, payment integration</p>
              </div>
              <div className="role-item">
                <strong>Strategy</strong>
                <p>Go-to-market planning, partnership outreach, community building</p>
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
            <h2 className="about-section-title">Building trust in a market skeptical of online giving</h2>
            <p className="about-section-text">
              Ghanaians have been burned by scams. Asking someone to send money to a stranger online triggers immediate skepticism. The challenge wasn't just building a platform—it was <strong>building trust from the ground up</strong>.
            </p>
            <p className="about-section-text">
              I focused on three trust pillars: verified identities (KYC), milestone-based fund release (accountability), and story-driven campaigns (emotional connection). Every design decision was filtered through the question: "Does this make both campaigners and backers feel safer?"
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
            <h2 className="about-section-title">6 features designed for women entrepreneurs</h2>
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
          onClick={() => openPanel('onboarding')}
        >
          <span className="feature-number">01</span>
          <h2 className="about-section-title">Empowering Onboarding</h2>
          <p className="about-section-text">
            A 4-step onboarding that makes women entrepreneurs feel seen and confident.
          </p>
          <ArrowButton />
        </motion.div>

        <motion.div
          className="about-column feature-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          onClick={() => openPanel('campaignCreation')}
        >
          <span className="feature-number">02</span>
          <h2 className="about-section-title">6-Step Campaign Builder</h2>
          <p className="about-section-text">
            Break down campaign creation into manageable steps—from type to launch.
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
          onClick={() => openPanel('storytelling')}
        >
          <span className="feature-number">03</span>
          <h2 className="about-section-title">Story-Driven Campaigns</h2>
          <p className="about-section-text">
            Guided storytelling that helps entrepreneurs connect emotionally with backers.
          </p>
          <ArrowButton />
        </motion.div>

        <motion.div
          className="about-column feature-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          onClick={() => openPanel('milestones')}
        >
          <span className="feature-number">04</span>
          <h2 className="about-section-title">Milestone-Based Funding</h2>
          <p className="about-section-text">
            Break funding goals into achievable milestones for accountability and progress.
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
          onClick={() => openPanel('kyc')}
        >
          <span className="feature-number">05</span>
          <h2 className="about-section-title">Trust & KYC Verification</h2>
          <p className="about-section-text">
            Simple identity verification that builds backer confidence without friction.
          </p>
          <ArrowButton />
        </motion.div>

        <motion.div
          className="about-column feature-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          onClick={() => openPanel('discovery')}
        >
          <span className="feature-number">06</span>
          <h2 className="about-section-title">Campaign Discovery</h2>
          <p className="about-section-text">
            Dashboard and discovery features that inspire and guide users to action.
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
            <h2 className="about-section-title">What building SheFundIt taught me</h2>
            <div className="learnings-list">
              <div className="learning-item">
                <strong>Design for trust first, features second.</strong>
                <p>In markets with low digital trust, every interaction is a chance to build or break confidence. Trust signals aren't nice-to-haves—they're the foundation.</p>
              </div>
              <div className="learning-item">
                <strong>Localization goes beyond language.</strong>
                <p>Understanding local payment preferences, cultural attitudes toward asking for help, and community dynamics was as important as getting the UI right.</p>
              </div>
              <div className="learning-item">
                <strong>Milestones change behavior.</strong>
                <p>Breaking big goals into smaller ones doesn't just help campaigners—it makes backers feel their contribution has immediate, visible impact.</p>
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

export default SheFundItCaseStudy;
