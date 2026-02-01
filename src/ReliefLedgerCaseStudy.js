import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import './CaseStudy.css';
import { 
  BlockchainIcon, 
  LightningIcon,
  TargetFocusIcon,
  SecurityIcon,
  TeamIcon,
  GlobeIcon,
  EyeIcon,
  MobileIcon,
  CommunityIcon,
  DashboardIcon,
  AIIcon,
  BuildingIcon
} from './Icons';

const BookIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V6.5A2.5 2.5 0 0 0 17.5 4h-11A2.5 2.5 0 0 0 4 6.5v13z"></path>
    <path d="M12 17V4"></path>
  </svg>
);

const ContextIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3"></circle>
    <path d="M12 1v6M12 17v6M4.22 4.22l4.24 4.24M15.54 15.54l4.24 4.24M1 12h6M17 12h6M4.22 19.78l4.24-4.24M15.54 8.46l4.24-4.24"></path>
  </svg>
);

const TargetIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <circle cx="12" cy="12" r="6"></circle>
    <circle cx="12" cy="12" r="2"></circle>
  </svg>
);

const IdBadgeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>
);

const ChartIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 3v18h18"></path>
    <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"></path>
  </svg>
);

const PersonIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);

const SparklesIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .962 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.582a.5.5 0 0 1 0 .962L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.962 0z"></path>
  </svg>
);

const GraduationCapIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path>
    <path d="M12 19v-6"></path>
    <path d="M12 13l8-4"></path>
  </svg>
);

function ReliefLedgerCaseStudy() {
  const [activeSection, setActiveSection] = useState('overview');
  const sectionRefs = useRef({});
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    { id: 'overview', title: 'Overview', icon: <BookIcon /> },
    { id: 'my-role', title: 'My Role', icon: <IdBadgeIcon /> },
    { id: 'problem', title: 'Problem', icon: <TargetIcon /> },
    { id: 'research', title: 'Research', icon: <PersonIcon /> },
    { id: 'epiphany', title: 'Epiphany', icon: <SparklesIcon /> },
    { id: 'process', title: 'Process', icon: <ContextIcon /> },
    { id: 'solution', title: 'Solution', icon: <SparklesIcon /> },
    { id: 'results', title: 'Results', icon: <ChartIcon /> },
    { id: 'learnings', title: 'Learnings', icon: <GraduationCapIcon /> },
  ];

  useEffect(() => {
    let timeoutId = null;
    
    const observer = new IntersectionObserver(
      (entries) => {
        clearTimeout(timeoutId);
        
        timeoutId = setTimeout(() => {
          let mostVisible = null;
          let maxRatio = 0;
          
          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
              maxRatio = entry.intersectionRatio;
              mostVisible = entry.target.id;
            }
          });
          
          if (mostVisible) {
            setActiveSection(mostVisible);
          }
        }, 150);
      },
      {
        rootMargin: '-100px 0px -50% 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1]
      }
    );

    sections.forEach((section) => {
      const element = sectionRefs.current[section.id];
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const scrollToSection = (sectionId) => {
    const element = sectionRefs.current[sectionId];
    if (element) {
      const offsetTop = element.offsetTop - 100;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="case-study-page">
      <nav className="navbar case-study-navbar">
        <div className="nav-container">
          <Link to="/" className="nav-link active">Lansah</Link>
          <Link to="/work" className="nav-link">Work</Link>
          <a href="https://linkedin.com/in/rashid-lansah" className="nav-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:rashidlansahadam@gmail.com" className="nav-link contact-btn">Get in touch</a>
        </div>
      </nav>

      <section className="case-study-hero">
        <div className="case-study-container">
          <div className="jenesys-branding">
            <div className="jenesys-logo-section">
              <div className="jenesys-icon">
                <div className="blockchain-badge">
                  <BlockchainIcon size={24} />
                </div>
                <span className="jenesys-text">ReliefLedger</span>
              </div>
            </div>
            <div className="project-metrics">
              <div className="metric-item">
                <span className="metric-value">148</span>
                <span className="metric-label">Transactions</span>
              </div>
              <div className="metric-item">
                <span className="metric-value">4</span>
                <span className="metric-label">Interfaces</span>
              </div>
              <div className="metric-item">
                <span className="metric-value">100%</span>
                <span className="metric-label">Traceable</span>
              </div>
            </div>
          </div>
          <h1 className="case-study-title">Designing Trust Through Blockchain Transparency</h1>
          <p className="case-study-subtitle">ReliefLedger is a blockchain-powered transparency ecosystem designed to rebuild trust in humanitarian aid across Africa. It connects NGOs, field agents, and communities through verifiable proof of delivery — making every act of giving traceable and human.</p>
          <div className="hero-caption" style={{ textAlign: 'center', marginTop: '20px', color: '#666', fontSize: '16px', fontWeight: '500' }}>
            Built on Celo · Designed for Ghana · Made for Transparency
          </div>
        </div>
      </section>

      <section className="hero-interface-section">
        <div className="hero-interface-container">
          <div className="hero-interface-wrapper">
            <img src="/images/reliefledger-full-image.svg" alt="ReliefLedger Platform Interface" className="hero-interface-image" />
            <div className="hero-interface-overlay">
              <div className="interface-badge">
                <div className="blockchain-indicator">
                  <BlockchainIcon size={16} />
                </div>
                <span>Web3 Platform</span>
              </div>
            </div>
          </div>
          <p className="hero-interface-caption">
            Blockchain-powered platform showing transparent aid delivery tracking and verifiable proof of delivery system
          </p>
        </div>
      </section>

      <section className="detailed-content-section">
        <div className="content-layout">
          <div className="sidebar">
            <nav className="sidebar-nav">
              {sections.map((section) => (
                <button
                  key={section.id}
                  className={`sidebar-item ${activeSection === section.id ? 'active' : ''}`}
                  onClick={() => scrollToSection(section.id)}
                >
                  <span className="sidebar-icon">{section.icon}</span>
                  <span className="sidebar-text">{section.title}</span>
                </button>
              ))}
            </nav>
          </div>

          <div className="main-content">
            {/* OVERVIEW SECTION */}
            <div id="overview" ref={(el) => (sectionRefs.current['overview'] = el)} className="content-section">
              <p className="section-label">Overview</p>
              <h2 className="section-title">The Hidden Gap in Humanitarian Transparency</h2>
              <p className="section-paragraph">
                Billions are spent on aid each year, but the proof rarely reaches those who need it most. In rural Ghana, NGOs rely on fragmented spreadsheets and reports — leaving donors blind to outcomes and communities powerless to confirm deliveries.
              </p>
              <p className="section-paragraph">
                ReliefLedger reimagines this process with data integrity at its core. By connecting NGOs, field agents, and communities through verifiable proof of delivery, every act of giving becomes traceable and human.
              </p>
              
              <h3 className="subsection-title">Project Context</h3>
              <ul className="content-list">
                <li><strong>Platform:</strong> Web3 blockchain platform (Built on Celo)</li>
                <li><strong>Target Users:</strong> NGOs, field agents, donors, and communities in Ghana</li>
                <li><strong>My Role:</strong> Lead Product Designer</li>
                <li><strong>Timeline:</strong> Concept to prototype</li>
              </ul>

              <h3 className="subsection-title">The Opportunity</h3>
              <p className="section-paragraph">
                The humanitarian aid system in Ghana operates on trust without verification. Blockchain technology could create a single source of truth, connecting every actor in the aid delivery chain through immutable, verifiable records.
              </p>
            </div>

            {/* MY ROLE SECTION */}
            <div id="my-role" ref={(el) => (sectionRefs.current['my-role'] = el)} className="content-section">
              <p className="section-label">My Role</p>
              <h2 className="section-title">Designing Trust in a Web3 Ecosystem</h2>

              <div className="role-overview-card">
                <div className="role-meta-grid">
                  <div className="role-meta-item">
                    <span className="role-meta-label">Role</span>
                    <span className="role-meta-value">Lead Product Designer</span>
                  </div>
                  <div className="role-meta-item">
                    <span className="role-meta-label">Duration</span>
                    <span className="role-meta-value">Concept to Prototype</span>
                  </div>
                  <div className="role-meta-item">
                    <span className="role-meta-label">Platform</span>
                    <span className="role-meta-value">Web3 Blockchain (Built on Celo)</span>
                  </div>
                  <div className="role-meta-item">
                    <span className="role-meta-label">Focus</span>
                    <span className="role-meta-value">Humanitarian Aid Transparency</span>
                  </div>
                </div>
              </div>

              <div className="role-sections-grid">
                <div className="role-section">
                  <h3>What I Owned</h3>
                  <ul className="role-responsibilities-list">
                    <li>End-to-end design of 4 connected interfaces (NGO Dashboard, Field Agent App, Beneficiary Portal, Blockchain Explorer)</li>
                    <li>Field research with NGOs, field agents, and community members across Ghana</li>
                    <li>Web3 UX strategy: making blockchain invisible while transparency remains visible</li>
                    <li>Offline-first design patterns for low-connectivity environments</li>
                    <li>Wallet-less authentication system design</li>
                    <li>Visual language for blockchain verification states (glow, motion, color)</li>
                  </ul>
                </div>

                <div className="role-section">
                  <h3>Stakeholders Served</h3>
                  <ul className="role-collaborators-list">
                    <li><strong>NGO Administrators</strong> — Campaign tracking, proof management, donor reporting</li>
                    <li><strong>Field Agents</strong> — Offline proof capture, delivery verification</li>
                    <li><strong>Communities</strong> — Public record access, delivery verification</li>
                    <li><strong>Donors & Auditors</strong> — Blockchain audit trails, transaction verification</li>
                  </ul>
                </div>
              </div>

              <div className="goals-container">
                <h3>Key Contributions</h3>
                <div className="goals-grid">
                  <div className="goal-item">
                    <div className="goal-icon">
                      <BlockchainIcon size={20} />
                    </div>
                    <div className="goal-content">
                      <h4>Web3 UX Design</h4>
                      <p>Made blockchain invisible, transparency visible</p>
                    </div>
                  </div>
                  <div className="goal-item">
                    <div className="goal-icon">📱</div>
                    <div className="goal-content">
                      <h4>Offline-First</h4>
                      <p>Designed for rural, low-connectivity contexts</p>
                    </div>
                  </div>
                  <div className="goal-item">
                    <div className="goal-icon">🔗</div>
                    <div className="goal-content">
                      <h4>4 Interfaces</h4>
                      <p>Created connected ecosystem for all stakeholders</p>
                    </div>
                  </div>
                  <div className="goal-item">
                    <div className="goal-icon">🔐</div>
                    <div className="goal-content">
                      <h4>Wallet-less Auth</h4>
                      <p>No crypto knowledge required for users</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* PROBLEM SECTION */}
            <div id="problem" ref={(el) => (sectionRefs.current['problem'] = el)} className="content-section">
              <p className="section-label">The Problem</p>
              <h2 className="section-title">The Trust Gap Between Intent and Impact</h2>
              <p className="section-paragraph">
                The humanitarian aid system in Ghana — and across Africa — operates on trust without verification. NGOs distribute aid based on reports and spreadsheets. Donors make decisions based on periodic updates. Communities receive supplies without any public record of delivery.
              </p>

              <h3 className="subsection-title">Core Issues</h3>
              <ul className="content-list">
                <li><strong>Donors lack real-time visibility</strong> into where their contributions go</li>
                <li><strong>Field agents have no standardized tools</strong> for capturing proof of delivery</li>
                <li><strong>Communities have no way to verify</strong> what was delivered to their areas</li>
                <li><strong>NGOs spend weeks on manual reporting</strong> instead of focusing on impact</li>
              </ul>

              <div className="quote-block" style={{ 
                background: '#f8f9fa', 
                padding: '32px', 
                borderRadius: '12px', 
                margin: '32px 0',
                borderLeft: '4px solid #667eea'
              }}>
                <p style={{ 
                  fontSize: '22px', 
                  fontStyle: 'italic', 
                  color: '#333',
                  margin: 0,
                  lineHeight: 1.6
                }}>
                  "People weren't lying. The system just couldn't show the truth."
                </p>
              </div>

              <h3 className="subsection-title">The Design Challenge</h3>
              <p className="section-paragraph">
                Create a blockchain-powered ecosystem that makes transparency automatic, not additional work. Every proof captured in the field needed to sync on-chain immediately, creating an immutable record that all stakeholders could trust.
              </p>
            </div>

            {/* RESEARCH SECTION */}
            <div id="research" ref={(el) => (sectionRefs.current['research'] = el)} className="content-section">
              <p className="section-label">Research</p>
              <h2 className="section-title">Understanding the Relief Chain</h2>
              <p className="section-paragraph">
                I conducted field research with NGOs, field agents, and community members across Ghana to understand the end-to-end aid delivery process. The insights revealed that transparency wasn't missing because of malicious actors — it was missing because of systemic disconnection.
              </p>
              
              <h3 className="subsection-title">Key Research Insights</h3>
              <div className="insights-grid">
                <div className="insight-card">
                  <div className="insight-icon">
                    <EyeIcon size={24} />
                  </div>
                  <div>
                    <h4>Donors Need Visibility</h4>
                    <p>"I fund three NGOs but have no idea what actually reaches people. I get reports months later, but by then it's too late to adjust."</p>
                  </div>
                </div>
                <div className="insight-card">
                  <div className="insight-icon">
                    <MobileIcon size={24} />
                  </div>
                  <div>
                    <h4>Agents Need Tools</h4>
                    <p>"We take photos on our phones but internet is unreliable. Sometimes proof never makes it back to the office."</p>
                  </div>
                </div>
                <div className="insight-card">
                  <div className="insight-icon">
                    <CommunityIcon size={24} />
                  </div>
                  <div>
                    <h4>Communities Need Records</h4>
                    <p>"When supplies arrive, we have no way to know if it's what was promised or verify delivery for ourselves."</p>
                  </div>
                </div>
                <div className="insight-card">
                  <div className="insight-icon">
                    <LightningIcon size={24} />
                  </div>
                  <div>
                    <h4>NGOs Need Efficiency</h4>
                    <p>"Reporting takes weeks. By the time donors see our impact, we're already two campaigns ahead."</p>
                  </div>
                </div>
              </div>

              <div className="quote-block" style={{ 
                background: '#f8f9fa', 
                padding: '32px', 
                borderRadius: '12px', 
                margin: '32px 0',
                borderLeft: '4px solid #667eea'
              }}>
                <p style={{ 
                  fontSize: '20px', 
                  fontStyle: 'italic', 
                  color: '#333',
                  margin: 0,
                  lineHeight: 1.6
                }}>
                  "People weren't lying. The system just couldn't show the truth. We needed a way to make proof automatic, not extra work."
                </p>
              </div>
            </div>

            {/* EPIPHANY SECTION */}
            <div id="epiphany" ref={(el) => (sectionRefs.current['epiphany'] = el)} className="content-section">
              <p className="section-label">Epiphany</p>
              <h2 className="section-title">Make Blockchain Invisible, Transparency Visible</h2>
              <p className="section-paragraph">
                The breakthrough came when I realized we were approaching the problem backwards. Instead of teaching users about blockchain, we needed to hide it completely.
              </p>

              <div className="highlight-section">
                <p className="highlight-text centered">
                  🔑 <strong>The best Web3 UX is when users never think about crypto wallets or transaction hashes — they just see verified proof.</strong>
                </p>
              </div>

              <p className="section-paragraph">
                This insight shaped every design decision: wallet-less authentication, offline-first data capture, and visual indicators that made blockchain confirmations feel tangible and human. Users wouldn't need to understand how blockchain worked — they would simply see trust in action.
              </p>
            </div>

            {/* PROCESS SECTION */}
            <div id="process" ref={(el) => (sectionRefs.current['process'] = el)} className="content-section">
              <p className="section-label">Process</p>
              <h2 className="section-title">From Fragments to a Transparent System</h2>
              <p className="section-paragraph">
                As the lead product designer, I mapped every actor in the relief chain and envisioned a decentralized data loop where proof captured in the field automatically syncs on-chain.
              </p>

              <h3 className="subsection-title">Design Principles</h3>
              <div className="goals-grid">
                <div className="goal-item">
                  <div className="goal-icon">
                    <TargetFocusIcon size={20} />
                  </div>
                  <div className="goal-content">
                    <h4>Simplicity</h4>
                    <p>Make blockchain invisible, transparency visible</p>
                  </div>
                </div>
                <div className="goal-item">
                  <div className="goal-icon">
                    <SecurityIcon size={20} />
                  </div>
                  <div className="goal-content">
                    <h4>Security</h4>
                    <p>Immutable proof without compromising privacy</p>
                  </div>
                </div>
                <div className="goal-item">
                  <div className="goal-icon">
                    <TeamIcon size={20} />
                  </div>
                  <div className="goal-content">
                    <h4>Trust</h4>
                    <p>Every interaction reinforces confidence</p>
                  </div>
                </div>
                <div className="goal-item">
                  <div className="goal-icon">
                    <GlobeIcon size={20} />
                  </div>
                  <div className="goal-content">
                    <h4>Accessibility</h4>
                    <p>Designed for low-literacy, offline contexts</p>
                  </div>
                </div>
              </div>

              <h3 className="subsection-title">The Complete Aid Cycle</h3>
              <p className="section-paragraph">
                Before diving into individual interfaces, here's how all four apps connect to create a complete transparency ecosystem — from the moment aid is pledged to final community verification.
              </p>
              <div className="process-image-container">
                <img 
                  src="/images/case-studies/reliefledger-journey-complete.png" 
                  alt="ReliefLedger End-to-End User Journey Map" 
                  className="flow-image"
                />
              </div>

              <h3 className="subsection-title">NGO Dashboard Flow</h3>
              <p className="section-paragraph">
                How NGO administrators create campaigns, assign field agents, and track real-time proof of delivery from a centralized dashboard.
              </p>
              <div className="process-image-container">
                <img 
                  src="/images/case-studies/reliefledger-flow-ngo-dashboard.png" 
                  alt="NGO Dashboard User Flow" 
                  className="flow-image"
                />
              </div>

              <h3 className="subsection-title">Field Agent App Flow</h3>
              <p className="section-paragraph">
                How field agents capture proof in offline environments, queue data locally, and auto-sync to blockchain when connectivity returns.
              </p>
              <div className="process-image-container">
                <img 
                  src="/images/case-studies/reliefledger-flow-field-agent.png" 
                  alt="Field Agent App User Flow" 
                  className="flow-image"
                />
              </div>

              <h3 className="subsection-title">Beneficiary Portal Flow</h3>
              <p className="section-paragraph">
                How community members access public records, verify deliveries in their area, and view blockchain-confirmed aid distributions.
              </p>
              <div className="process-image-container">
                <img 
                  src="/images/case-studies/reliefledger-flow-beneficiary.png" 
                  alt="Beneficiary Portal User Flow" 
                  className="flow-image"
                />
              </div>

              <h3 className="subsection-title">Blockchain Explorer Flow</h3>
              <p className="section-paragraph">
                How donors and auditors independently verify on-chain proofs, inspect transaction hashes, and audit the complete delivery chain.
              </p>
              <div className="process-image-container">
                <img 
                  src="/images/case-studies/reliefledger-flow-blockchain-explorer.png" 
                  alt="Blockchain Explorer User Flow" 
                  className="flow-image"
                />
              </div>
            </div>

            {/* SOLUTION SECTION */}
            <div id="solution" ref={(el) => (sectionRefs.current['solution'] = el)} className="content-section">
              <p className="section-label">The Solution</p>
              <h2 className="section-title">Four Interfaces, One Source of Truth</h2>
              <p className="section-paragraph">
                ReliefLedger evolved into a full ecosystem of connected experiences. Each interface was designed for a specific stakeholder, but all share the same underlying blockchain — creating a circular system of trust from field to dashboard to community.
              </p>
              
              <h3 className="subsection-title">The ReliefLedger Ecosystem</h3>
              <div className="solution-grid">
                <div className="solution-item">
                  <div className="solution-icon">
                    <DashboardIcon size={24} />
                  </div>
                  <h4>NGO Dashboard</h4>
                  <p>Track verified campaigns, view real-time proof, and generate reports for donors with blockchain confirmations</p>
                </div>
                <div className="solution-item">
                  <div className="solution-icon">
                    <MobileIcon size={24} />
                  </div>
                  <h4>Field Agent App</h4>
                  <p>Capture photos and GPS proof in offline environments, auto-sync to blockchain when connection returns</p>
                </div>
                <div className="solution-item">
                  <div className="solution-icon">
                    <CommunityIcon size={24} />
                  </div>
                  <h4>Beneficiary Portal</h4>
                  <p>Community members can see real deliveries, verify supplies, and access public aid records</p>
                </div>
                <div className="solution-item">
                  <div className="solution-icon">
                    <BlockchainIcon size={24} />
                  </div>
                  <h4>Blockchain Explorer</h4>
                  <p>Auditors and donors inspect on-chain proofs, view transaction history, and verify delivery hashes</p>
                </div>
              </div>
              <p className="section-paragraph" style={{ marginTop: '24px', fontStyle: 'italic', textAlign: 'center', color: '#666' }}>
                Together, they form a circular system of trust — field → blockchain → dashboard → community.
              </p>

              <h3 className="subsection-title">Key Features & Flows</h3>
              <p className="section-paragraph">
                Below are the core workflows that demonstrate how ReliefLedger transforms aid delivery through blockchain verification.
              </p>

              <h3 className="subsection-title">Offline Sync Queue</h3>
              <p className="section-paragraph">
                Data safety even without internet. Proofs captured offline are queued locally and automatically synced to the blockchain when connectivity returns. This ensures field agents can work in rural areas without interruption.
              </p>
              <div className="process-image-container">
                <img 
                  src="/images/case-studies/reliefledger-feature-offline-sync.png" 
                  alt="Offline Sync Queue Interface" 
                  className="flow-image"
                />
              </div>

              <h3 className="subsection-title">Blockchain Hash View</h3>
              <p className="section-paragraph">
                Every proof permanently recorded on-chain. Users can view transaction hashes, verify delivery timestamps, and independently audit the blockchain record. Transparency is built into every interaction.
              </p>
              <div className="process-image-container">
                <img 
                  src="/images/case-studies/reliefledger-feature-blockchain-hash.png" 
                  alt="Blockchain Hash View Interface" 
                  className="flow-image"
                />
              </div>

              <h3 className="subsection-title">Community Campaign Feed</h3>
              <p className="section-paragraph">
                Aid you can actually see. Real-time updates showing what was delivered, when, and where — all blockchain-verified. Communities can access public records of all aid distributions in their area.
              </p>
              <div className="process-image-container">
                <img 
                  src="/images/case-studies/reliefledger-feature-campaign-feed.png" 
                  alt="Community Campaign Feed Interface" 
                  className="flow-image"
                />
              </div>

              <h3 className="subsection-title">Wallet-less Identity</h3>
              <p className="section-paragraph">
                No crypto knowledge required. Users authenticate with familiar methods like phone numbers and PIN codes while blockchain operates invisibly in the background. The complexity of Web3 is hidden, but the benefits of transparency remain.
              </p>
              <div className="process-image-container">
                <img 
                  src="/images/case-studies/reliefledger-feature-wallet-less.png" 
                  alt="Wallet-less Authentication Flow" 
                  className="flow-image"
                />
              </div>
            </div>

            {/* RESULTS SECTION */}
            <div id="results" ref={(el) => (sectionRefs.current['results'] = el)} className="content-section">
              <p className="section-label">Results & Impact</p>
              <h2 className="section-title">Making Transparency Feel Real</h2>
              <p className="section-paragraph">
                ReliefLedger's prototype simulated live blockchain syncing between all interfaces. It demonstrated how Web3 can simplify, not complicate, real-world transparency.
              </p>

              <div className="impact-metrics">
                <div className="impact-metric">
                  <div className="impact-number">148</div>
                  <p className="impact-description">Verified transactions in prototype</p>
                </div>
                <div className="impact-metric">
                  <div className="impact-number">4</div>
                  <p className="impact-description">Connected interfaces (Dashboard, Field App, Portal, Explorer)</p>
                </div>
                <div className="impact-metric">
                  <div className="impact-number">100%</div>
                  <p className="impact-description">Traceable proof chain — complete transparency</p>
                </div>
              </div>

              <h3 className="subsection-title">Key Outcomes</h3>
              <ul className="content-list">
                <li><strong>Proof of concept validated:</strong> Demonstrated feasibility of blockchain for aid transparency</li>
                <li><strong>Stakeholder buy-in:</strong> NGOs and field agents responded positively to wallet-less UX</li>
                <li><strong>Technical validation:</strong> Offline-first sync successfully tested in low-connectivity scenarios</li>
              </ul>
            </div>

            {/* LEARNINGS SECTION */}
            <div id="learnings" ref={(el) => (sectionRefs.current['learnings'] = el)} className="content-section">
              <p className="section-label">Learnings & Next Steps</p>
              <h2 className="section-title">Designing for Trust in a Decentralized World</h2>
              <p className="section-paragraph">
                ReliefLedger taught me that transparency is not just a technical feature — it's a user experience. When every screen reinforces clarity and agency, trust becomes the product.
              </p>
              
              <h3 className="subsection-title">Key Learnings</h3>
              <ul className="content-list">
                <li><strong>Blockchain Should Be Invisible:</strong> The best Web3 UX is when users never think about crypto wallets or transaction hashes — they just see verified proof</li>
                <li><strong>Offline-First Is Essential:</strong> In rural contexts, connectivity is unreliable. Design for offline by default, sync when possible</li>
                <li><strong>Trust Needs Visibility:</strong> Every stakeholder needs to see the same truth. Multi-interface design creates accountability through shared transparency</li>
                <li><strong>Visual Language Matters:</strong> Using color, motion, and glow states to indicate verification status made blockchain confirmations feel tangible and human</li>
              </ul>

              <h3 className="subsection-title">Next Steps</h3>
              <div className="insights-grid">
                <div className="insight-card">
                  <div className="insight-icon">
                    <AIIcon size={24} />
                  </div>
                  <div>
                    <h4>AI-Assisted Proof Validation</h4>
                    <p>Explore AI to detect anomalies in delivery photos and flag potential issues before they reach the blockchain</p>
                  </div>
                </div>
                <div className="insight-card">
                  <div className="insight-icon">
                    <GlobeIcon size={24} />
                  </div>
                  <div>
                    <h4>Country-Level Expansion</h4>
                    <p>Adapt the platform for Kenya and Nigeria, incorporating local languages and cultural contexts</p>
                  </div>
                </div>
                <div className="insight-card">
                  <div className="insight-icon">
                    <BuildingIcon size={24} />
                  </div>
                  <div>
                    <h4>NGO Pilot Deployments</h4>
                    <p>Partner with NGOs in Northern Ghana to test real-world implementation and gather feedback from field agents</p>
                  </div>
                </div>
              </div>

              <div className="quote-block" style={{ 
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                padding: '48px', 
                borderRadius: '16px', 
                margin: '48px 0',
                textAlign: 'center'
              }}>
                <p style={{ 
                  fontSize: '28px', 
                  fontWeight: '700', 
                  color: 'white',
                  margin: 0,
                  lineHeight: 1.5
                }}>
                  "True transparency happens when everyone can see the same truth."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}

export default ReliefLedgerCaseStudy;

