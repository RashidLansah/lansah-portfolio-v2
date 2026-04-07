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
    <span>&rarr;</span>
  </div>
);

function PayChalkCaseStudy() {
  const [selectedFeature, setSelectedFeature] = useState(null);
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const features = {
    studentManagement: {
      label: 'Feature 01',
      title: 'Student & Class Management',
      challenge: 'Schools managed student records across scattered spreadsheets and paper registers. Adding new students, tracking parent contacts, and organizing by class was manual and error-prone.',
      decisions: [
        'Built a student table with search, filter by class, and status tracking',
        'Added bulk CSV upload for schools migrating from spreadsheets',
        'Designed individual student forms with parent contact details',
        'Created class-based organization matching how schools actually operate'
      ],
      outcome: 'Schools can onboard their entire student body in under 10 minutes via CSV upload. Individual student management takes seconds.',
      screens: [
        { src: '/images/case-studies/paychalk-students.png', alt: 'Student Management Dashboard' }
      ]
    },
    invoicing: {
      label: 'Feature 02',
      title: 'Fee Structures & Invoicing',
      challenge: 'Schools had different fee types per class per term (tuition, uniforms, transport, books). Generating individual invoices for hundreds of students was a full-day task done manually.',
      decisions: [
        'Designed fee structures that map to class + term + fee type',
        'Built bulk invoice generation that auto-matches students by class',
        'Added invoice status tracking: pending, partial, paid, overdue',
        'Created exportable invoice lists with payment link copying'
      ],
      outcome: 'What took a full day now takes 2 clicks. Schools generate invoices for an entire class in seconds with correct amounts and due dates.',
      screens: [
        { src: '/images/case-studies/paychalk-invoices.png', alt: 'Invoice Management' }
      ]
    },
    whatsappReminders: {
      label: 'Feature 03',
      title: 'WhatsApp Payment Reminders',
      challenge: 'Paper notices sent home with students were the primary reminder mechanism — a channel with near-zero reliability. The prompt had to change before anything else could improve. Per Fogg\'s Behavior Model, a well-designed prompt delivered at the right moment on the right channel is the activation event that converts existing motivation into action.',
      decisions: [
        'Chose WhatsApp Business API as the delivery channel — the channel with the highest existing engagement for this demographic',
        'Each reminder includes a direct payment link, collapsing the path from notification to completed payment to one tap',
        'Built delivery status tracking (sent, delivered, failed) so schools know when to follow up vs when to resend',
        'Designed one-click bulk sending that filters automatically to unpaid invoices — no manual selection required'
      ],
      outcome: '95% parent payment completion rate once the reminder is delivered. The trigger-to-payment gap is now measured in minutes, not weeks.',
      screens: [
        { src: '/images/case-studies/paychalk-whatsapp-reminder.png', alt: 'WhatsApp Reminder Message with Payment Link' },
        { src: '/images/case-studies/paychalk-reminders.png', alt: 'WhatsApp Reminders Dashboard' }
      ]
    },
    payments: {
      label: 'Feature 04',
      title: 'Instant Payment Collection',
      challenge: 'Even when parents were motivated to pay, the existing process required a physical school visit during working hours — a high-ability barrier that consistently caused deferral. Every added step between intent and completion is a dropout point. The goal was to reduce the required ability to near zero.',
      decisions: [
        'Built a fully public payment page — no login, no account creation, no friction between opening the link and paying',
        'The page surfaces everything in one view: student name, fee breakdown, amount due, and due date',
        'Integrated Paystack supporting card, mobile money (MTN, Vodafone, AirtelTigo), and bank transfers',
        'PDF receipt generated and sent automatically via WhatsApp on payment confirmation — closes the loop without any follow-up calls'
      ],
      outcome: 'Parents complete payment directly from the WhatsApp notification in under 60 seconds. The "Fully Paid" screen is the end state — no back-and-forth with the school to confirm.',
      screens: [
        { src: '/images/case-studies/paychalk-payment-page.png', alt: 'Public Payment Page — Fully Paid' },
        { src: '/images/case-studies/paychalk-payments.png', alt: 'Payment Tracking Dashboard' }
      ]
    },
    dashboard: {
      label: 'Feature 05',
      title: 'School Overview Dashboard',
      challenge: 'School administrators had no real-time visibility into fee collection progress. End-of-term reports required days of manual tallying across receipt books.',
      decisions: [
        'Designed stat cards showing total students, pending invoices, revenue, and outstanding',
        'Built class-level overview for quick drill-down',
        'Created quick action cards for common workflows',
        'Added getting-started guide for new school onboarding'
      ],
      outcome: 'Administrators see their complete financial picture at a glance. No more end-of-term reconciliation marathons.',
      screens: [
        { src: '/images/case-studies/paychalk-dashboard.png', alt: 'School Overview Dashboard' }
      ]
    },
    settlement: {
      label: 'Feature 06',
      title: 'Bank & Mobile Money Settlement',
      challenge: 'Schools needed collected fees deposited directly into their accounts. In Ghana, mobile money is as important as traditional banking, but most platforms only support bank transfers.',
      decisions: [
        'Built Paystack subaccount creation for automatic settlement',
        'Added both bank account and mobile money configuration',
        'Designed a flat GHS 5 per transaction fee model (no percentages)',
        'Created account verification flow to prevent settlement errors'
      ],
      outcome: 'Schools receive funds directly in their preferred account. The flat fee model means schools keep more of what they collect.',
      screens: [
        { src: '/images/case-studies/paychalk-settings.png', alt: 'Settlement Settings' }
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
    <div className="about-page tikiti-case paychalk-case">
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
          <span className="about-breadcrumb-current">PayChalk Case Study</span>
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
            <span className="case-pill">EdTech / Fintech</span>
          </div>
          <h1 className="about-headline">
            Making school fee collection <span className="highlight-text">effortless and instant</span>
          </h1>
          <div className="case-impact-stats">
            <div className="impact-stat-item">
              <span className="stat-number">8+</span>
              <span className="stat-label">Hours saved weekly</span>
            </div>
            <div className="impact-stat-item">
              <span className="stat-number">95%</span>
              <span className="stat-label">Payment completion</span>
            </div>
            <div className="impact-stat-item">
              <span className="stat-number">GHS 5</span>
              <span className="stat-label">Flat fee per txn</span>
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
          src="/images/case-studies/paychalk-hero.png"
          alt="PayChalk Landing Page"
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
            <h2 className="about-section-title">The behavior was already there. The trigger wasn't.</h2>
            <p className="about-section-text">
              BJ Fogg's Behavior Model states that behavior happens when Motivation, Ability, and a Prompt converge at the same moment: <strong>B = MAP</strong>. Most school fee solutions failed not because parents were unwilling — they failed because the prompt arrived through the wrong channel, and the ability to pay required too many steps.
            </p>
            <p className="about-section-text">
              In Ghana, WhatsApp isn't an app people check. It is the dominant communication stack. The average Ghanaian parent opens WhatsApp 50+ times daily — it is where they receive school notices, coordinate pickups, and talk to their child's teacher. The motivation to pay school fees exists. The ability to pay via mobile money exists. What was missing was a prompt delivered exactly where parents already were, with a frictionless path from notification to payment.
            </p>
            <p className="about-section-text">
              Meanwhile, school administrators were spending 2–3 days per term manually reconciling payments from receipt books, calling parents individually, and generating reports by hand. The existing system produced high administrative load, delayed revenue visibility, and inconsistent follow-through.
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
            <h2 className="about-section-title">Designed and built the entire platform</h2>
            <div className="role-grid">
              <div className="role-item">
                <strong>Research</strong>
                <p>Interviews with school administrators and parents across Ghana</p>
              </div>
              <div className="role-item">
                <strong>Design</strong>
                <p>End-to-end dashboard UX, public payment page, landing page</p>
              </div>
              <div className="role-item">
                <strong>Development</strong>
                <p>Next.js web app, Firebase backend, Paystack + WhatsApp integrations</p>
              </div>
              <div className="role-item">
                <strong>Launch</strong>
                <p>School onboarding, payment flow testing, WhatsApp API setup</p>
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
            <h2 className="about-section-title">Designing for the trigger, not the transaction</h2>
            <p className="about-section-text">
              Most fintech products in this space competed on transaction fees and focused heavily on the payment infrastructure. That was the wrong problem. The bigger friction was upstream: parents weren't receiving timely, actionable prompts, and when they did — a paper notice sent home with a child — the ability to act immediately was zero.
            </p>
            <p className="about-section-text">
              The design challenge was to collapse the gap between <strong>prompt and payment to a single tap</strong>. Every feature was evaluated against one question: does this reduce cognitive load and friction for a parent who is already on WhatsApp and has 30 seconds to spare?
            </p>
            <p className="about-section-text">
              A secondary constraint shaped everything: school administrators have limited technical literacy and no dedicated IT support. If the product couldn't be set up and operational within 10 minutes, adoption would collapse at the first onboarding attempt. The solution had to meet administrators at their existing workflow — not force a new one.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Pilot Section */}
      <section className="about-full-width">
        <motion.div
          className="about-full-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="about-text-content">
            <span className="section-label">Live Pilot</span>
            <h2 className="about-section-title">Currently being piloted by 3 schools in Ghana</h2>
            <p className="about-section-text">
              PayChalk is actively deployed with 3 schools across Tamale. Each pilot school is using the full platform — student management, bulk invoice generation, WhatsApp reminders, and Paystack payment collection. The pilot is generating real operational data on reminder-to-payment conversion, onboarding time, and administrator workflow adoption. Learnings from this cohort are directly shaping the next iteration of the product before broader rollout.
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
            <h2 className="about-section-title">6 features that power the platform</h2>
            <p className="about-section-text">
              Click any feature to see the design story. The challenge, decisions, and outcome.
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
          onClick={() => openPanel('studentManagement')}
        >
          <span className="feature-number">01</span>
          <h2 className="about-section-title">Student Management</h2>
          <p className="about-section-text">
            Bulk CSV upload, class-based organization, and parent contact tracking.
          </p>
          <ArrowButton />
        </motion.div>

        <motion.div
          className="about-column feature-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          onClick={() => openPanel('invoicing')}
        >
          <span className="feature-number">02</span>
          <h2 className="about-section-title">Fee Structures & Invoicing</h2>
          <p className="about-section-text">
            Auto-generate invoices by class with status tracking and payment links.
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
          onClick={() => openPanel('whatsappReminders')}
        >
          <span className="feature-number">03</span>
          <h2 className="about-section-title">WhatsApp Reminders</h2>
          <p className="about-section-text">
            One-click bulk reminders with direct payment links via WhatsApp.
          </p>
          <ArrowButton />
        </motion.div>

        <motion.div
          className="about-column feature-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          onClick={() => openPanel('payments')}
        >
          <span className="feature-number">04</span>
          <h2 className="about-section-title">Instant Payments</h2>
          <p className="about-section-text">
            Card, mobile money, and bank transfers with real-time tracking.
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
          onClick={() => openPanel('dashboard')}
        >
          <span className="feature-number">05</span>
          <h2 className="about-section-title">Overview Dashboard</h2>
          <p className="about-section-text">
            Real-time stats, class overview, and quick actions for administrators.
          </p>
          <ArrowButton />
        </motion.div>

        <motion.div
          className="about-column feature-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          onClick={() => openPanel('settlement')}
        >
          <span className="feature-number">06</span>
          <h2 className="about-section-title">Bank & MoMo Settlement</h2>
          <p className="about-section-text">
            Direct deposits to bank or mobile money with flat-fee pricing.
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
            <h2 className="about-section-title">What building PayChalk taught me</h2>
            <div className="learnings-list">
              <div className="learning-item">
                <strong>Leverage existing behavior loops, don't create new ones.</strong>
                <p>Fogg's model points to a core insight: the most durable behavior change happens when you attach a new action to an existing habit. Parents already open WhatsApp dozens of times a day. Delivering a payment link inside that existing loop — rather than asking parents to download an app, visit a portal, or call the school — was the product strategy, not just a feature decision.</p>
              </div>
              <div className="learning-item">
                <strong>The bottleneck was friction, not motivation.</strong>
                <p>Research interviews revealed that most parents knew fees were due — they weren't ignoring the obligation. The problem was activation energy: finding the bank details, knowing the exact amount, confirming which account to use, getting a receipt. Removing each step didn't just improve convenience; it removed the specific reasons for deferral that kept collections delayed for weeks.</p>
              </div>
              <div className="learning-item">
                <strong>Pricing transparency is a product design problem.</strong>
                <p>Schools distrust percentage-based pricing because the cost scales unpredictably with collection volume. A flat GHS 5 per transaction resolves this by making the cost model as simple as the product itself — one number, no variables, no trust gap. Pricing clarity turned out to be as important to adoption as the UX.</p>
              </div>
              <div className="learning-item">
                <strong>Onboarding is the first conversion event.</strong>
                <p>The gap between "interested" and "operational" is where most tools lose school administrators. CSV upload for bulk student import, pre-populated fee templates, and a guided setup flow reduced the time-to-first-invoice from a day-long project to under 10 minutes. That compression is what made adoption stick.</p>
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
            <Link to="/tikiti-case-study" className="next-case-link">
              <h2 className="about-section-title">Tikiti: Event Discovery & Ticketing</h2>
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

export default PayChalkCaseStudy;
