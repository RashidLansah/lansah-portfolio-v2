import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import './CaseStudy.css';
import { LightningIcon, MobileIcon } from './Icons';

const BackIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 12H5M12 19l-7-7 7-7"/>
  </svg>
);

const BookIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V6.5A2.5 2.5 0 0 0 17.5 4h-11A2.5 2.5 0 0 0 4 6.5v13z"></path>
    <path d="M12 17V4"></path>
  </svg>
);

const IdBadgeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>
);

const TargetIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <circle cx="12" cy="12" r="6"></circle>
    <circle cx="12" cy="12" r="2"></circle>
  </svg>
);

const SearchIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"></circle>
    <path d="m21 21-4.35-4.35"></path>
  </svg>
);

const DesignIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2v20M2 12h20"></path>
    <path d="m19.07 4.93-14.14 14.14M4.93 4.93l14.14 14.14"></path>
  </svg>
);

const SparklesIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .962 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.582a.5.5 0 0 1 0 .962L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.962 0z"></path>
  </svg>
);

const ChartIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 3v18h18"></path>
    <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"></path>
  </svg>
);

const GraduationCapIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path>
    <path d="M12 19v-6"></path>
    <path d="M12 13l8-4"></path>
  </svg>
);

const PassportIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
    <circle cx="12" cy="10" r="3"></circle>
    <path d="M7 21v-2a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v2"></path>
  </svg>
);

function MrVisaCaseStudy() {
  const [activeSection, setActiveSection] = useState('overview');
  const sectionRefs = useRef({});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    { id: 'overview', title: 'Overview', icon: <BookIcon /> },
    { id: 'my-role', title: 'My Role', icon: <IdBadgeIcon /> },
    { id: 'problem', title: 'Problem', icon: <TargetIcon /> },
    { id: 'research', title: 'Research', icon: <SearchIcon /> },
    { id: 'process', title: 'Process', icon: <DesignIcon /> },
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
      <div className="mobile-case-study-header">
        <Link to="/" className="mobile-back-button">
          <BackIcon />
          <span>Back to Home</span>
        </Link>
      </div>

      <nav className="navbar case-study-navbar desktop-navbar">
        <div className="nav-container">
          <Link to="/" className="nav-link active">Lansah</Link>
          <Link to="/#highlights" className="nav-link">Highlights</Link>
          <Link to="/work" className="nav-link">Work</Link>
          <a href="https://calendly.com/rashidlansahadam" className="nav-link" target="_blank" rel="noopener noreferrer">Schedule a call</a>
        </div>
      </nav>

      <section className="case-study-hero">
        <div className="case-study-container">
          <div className="jenesys-branding">
            <div className="jenesys-logo-section">
              <div className="jenesys-icon">
                <div className="mrvisa-badge">
                  <PassportIcon />
                </div>
                <span className="jenesys-text">Mr. VISA</span>
              </div>
            </div>
            <div className="project-metrics">
              <div className="metric-item">
                <span className="metric-value">AI</span>
                <span className="metric-label">Coaching</span>
              </div>
              <div className="metric-item">
                <span className="metric-value">Interview</span>
                <span className="metric-label">Prep</span>
              </div>
              <div className="metric-item">
                <span className="metric-value">Live</span>
                <span className="metric-label">Product</span>
              </div>
            </div>
          </div>
          <h1 className="case-study-title">Ace Every Visa Interview with AI-Powered Coaching</h1>
          <p className="case-study-subtitle">
            Designed the UX for an AI visa interview coaching platform that provides personalized rehearsals,
            immigration intelligence, and concierge support to help applicants boost their approval odds.
          </p>
        </div>
      </section>

      <section className="hero-interface-section">
        <div className="hero-interface-container">
          <div className="hero-interface-wrapper mrvisa-interface">
            <img src="/images/mrvisa-app-preview.svg" alt="Mr. VISA Interface" className="hero-interface-image" />
            <div className="hero-interface-overlay">
              <div className="interface-badge">
                <div className="mrvisa-indicator">
                  <PassportIcon />
                </div>
                <span>AI Coach</span>
              </div>
            </div>
          </div>
          <p className="hero-interface-caption">
            AI-powered visa interview coaching with personalized rehearsals and immigration intelligence
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
              <h2 className="section-title">Your AI Visa Officer for Interview Success</h2>
              <p className="section-paragraph">
                Mr. VISA is an AI-powered platform that helps visa applicants prepare for their embassy interviews
                with personalized coaching, document review, and immigration intelligence. The platform acts as a
                virtual visa officer, providing realistic interview rehearsals and real-time feedback to boost
                approval chances.
              </p>
              <p className="section-paragraph">
                <strong>The Challenge:</strong> Visa interviews are high-stakes moments where applicants often fail
                due to poor preparation, unclear answers, or missing documentation. Traditional preparation relies
                on expensive consultants or generic online guides that don't address individual circumstances.
              </p>
              <p className="section-paragraph">
                <strong>The Solution:</strong> An AI coach that understands consular expectations, reviews your
                documentation with a compliance lens, and rehearses your answers until you're confident.
                Personalized preparation that's accessible to everyone, not just those who can afford expensive consultants.
              </p>
            </div>

            {/* MY ROLE SECTION */}
            <div id="my-role" ref={(el) => (sectionRefs.current['my-role'] = el)} className="content-section">
              <p className="section-label">My Role</p>
              <h2 className="section-title">Designing Trust in High-Stakes Decisions</h2>

              <div className="role-overview-card">
                <div className="role-meta-grid">
                  <div className="role-meta-item">
                    <span className="role-meta-label">Role</span>
                    <span className="role-meta-value">Product Designer</span>
                  </div>
                  <div className="role-meta-item">
                    <span className="role-meta-label">Duration</span>
                    <span className="role-meta-value">3 months (MVP Launch)</span>
                  </div>
                  <div className="role-meta-item">
                    <span className="role-meta-label">Platform</span>
                    <span className="role-meta-value">Web Application</span>
                  </div>
                  <div className="role-meta-item">
                    <span className="role-meta-label">Status</span>
                    <span className="role-meta-value">Live at mrvisa.beorchid.com</span>
                  </div>
                </div>
              </div>

              <div className="role-sections-grid">
                <div className="role-section">
                  <h3>What I Owned</h3>
                  <ul className="role-responsibilities-list">
                    <li>End-to-end UX design for AI interview coaching experience</li>
                    <li>User journey design for multiple visa types and scenarios</li>
                    <li>AI rehearsal interface with real-time feedback visualization</li>
                    <li>Document checklist and compliance review workflows</li>
                    <li>Landing page and marketing site design</li>
                    <li>Multi-applicant coordination for families and teams</li>
                  </ul>
                </div>

                <div className="role-section">
                  <h3>Collaborated With</h3>
                  <ul className="role-collaborators-list">
                    <li><strong>Founder/CEO</strong> — Product vision, immigration expertise</li>
                    <li><strong>Engineering Team</strong> — AI integration, technical feasibility</li>
                    <li><strong>Visa Strategists</strong> — Consular expectations, compliance rules</li>
                    <li><strong>Beta Users</strong> — Interview preparation feedback</li>
                  </ul>
                </div>
              </div>

              <div className="goals-container">
                <h3>Key Contributions</h3>
                <div className="goals-grid">
                  <div className="goal-item">
                    <div className="goal-icon">
                      <PassportIcon />
                    </div>
                    <div className="goal-content">
                      <h4>Interview UX</h4>
                      <p>Designed realistic AI rehearsal experience</p>
                    </div>
                  </div>
                  <div className="goal-item">
                    <div className="goal-icon">📋</div>
                    <div className="goal-content">
                      <h4>Document Flow</h4>
                      <p>Compliance-focused checklist system</p>
                    </div>
                  </div>
                  <div className="goal-item">
                    <div className="goal-icon">
                      <MobileIcon size={20} />
                    </div>
                    <div className="goal-content">
                      <h4>User Segments</h4>
                      <p>Tailored experiences for different travelers</p>
                    </div>
                  </div>
                  <div className="goal-item">
                    <div className="goal-icon">
                      <LightningIcon size={20} />
                    </div>
                    <div className="goal-content">
                      <h4>Quick Onboarding</h4>
                      <p>Fast path to first AI rehearsal</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* PROBLEM SECTION */}
            <div id="problem" ref={(el) => (sectionRefs.current['problem'] = el)} className="content-section">
              <p className="section-label">The Problem</p>
              <h2 className="section-title">Visa Interviews Are a Black Box</h2>
              <p className="section-paragraph">
                For many visa applicants, the embassy interview is a high-stakes moment with little preparation
                guidance. The consequences of rejection are significant — lost deposits, missed opportunities,
                and long wait times for reapplication.
              </p>

              <div className="business-issues">
                <h3>Core Pain Points</h3>
                <div className="issue-grid">
                  <div className="issue-item">
                    <div className="issue-number">01</div>
                    <div className="issue-text">Applicants don't know what questions to expect or how to structure answers</div>
                  </div>
                  <div className="issue-item">
                    <div className="issue-number">02</div>
                    <div className="issue-text">Document requirements vary by country and visa type, leading to costly mistakes</div>
                  </div>
                  <div className="issue-item">
                    <div className="issue-number">03</div>
                    <div className="issue-text">Professional visa consultants are expensive and not accessible to everyone</div>
                  </div>
                  <div className="issue-item">
                    <div className="issue-number">04</div>
                    <div className="issue-text">Generic online guides don't address individual circumstances or red flags</div>
                  </div>
                </div>
              </div>

              <p className="section-paragraph">
                The opportunity was clear: democratize access to quality visa preparation through AI that
                understands consular expectations and can provide personalized coaching at scale.
              </p>
            </div>

            {/* RESEARCH SECTION */}
            <div id="research" ref={(el) => (sectionRefs.current['research'] = el)} className="content-section">
              <p className="section-label">Research</p>
              <h2 className="section-title">Understanding Visa Applicants</h2>
              <p className="section-paragraph">
                We conducted research with visa applicants across different travel purposes to understand
                their preparation journey, anxiety points, and information needs.
              </p>

              <div className="insights-grid">
                <div className="insight-card">
                  <div className="insight-icon">😰</div>
                  <div>
                    <h4>Interview Anxiety</h4>
                    <p>"I spent weeks worrying about what they might ask. I wish I could have practiced beforehand."</p>
                  </div>
                </div>
                <div className="insight-card">
                  <div className="insight-icon">📄</div>
                  <div>
                    <h4>Document Confusion</h4>
                    <p>"I thought I had everything, but they asked for documents I didn't know I needed."</p>
                  </div>
                </div>
                <div className="insight-card">
                  <div className="insight-icon">💸</div>
                  <div>
                    <h4>Cost Barriers</h4>
                    <p>"Consultants charge $500+ for preparation. I can't afford that on top of visa fees."</p>
                  </div>
                </div>
                <div className="insight-card">
                  <div className="insight-icon">👨‍👩‍👧</div>
                  <div>
                    <h4>Family Coordination</h4>
                    <p>"Preparing my whole family for interviews was a nightmare. Everyone needed different prep."</p>
                  </div>
                </div>
              </div>
            </div>

            {/* PROCESS SECTION */}
            <div id="process" ref={(el) => (sectionRefs.current['process'] = el)} className="content-section">
              <p className="section-label">Process</p>
              <h2 className="section-title">Designing for Confidence</h2>
              <p className="section-paragraph">
                The design process focused on building user confidence through progressive preparation,
                clear feedback, and transparent progress tracking.
              </p>

              <div className="goals-grid">
                <div className="goal-item">
                  <div className="goal-icon mrvisa-step">1</div>
                  <div className="goal-content">
                    <h4>Profile Setup</h4>
                    <p>Capture travel purpose, destination, and personal circumstances</p>
                  </div>
                </div>
                <div className="goal-item">
                  <div className="goal-icon mrvisa-step">2</div>
                  <div className="goal-content">
                    <h4>Document Review</h4>
                    <p>AI-powered checklist with compliance monitoring</p>
                  </div>
                </div>
                <div className="goal-item">
                  <div className="goal-icon mrvisa-step">3</div>
                  <div className="goal-content">
                    <h4>AI Rehearsal</h4>
                    <p>Practice with realistic questions and real-time feedback</p>
                  </div>
                </div>
                <div className="goal-item">
                  <div className="goal-icon mrvisa-step">4</div>
                  <div className="goal-content">
                    <h4>Interview Ready</h4>
                    <p>Confidence score and final preparation checklist</p>
                  </div>
                </div>
              </div>
            </div>

            {/* SOLUTION SECTION */}
            <div id="solution" ref={(el) => (sectionRefs.current['solution'] = el)} className="content-section">
              <p className="section-label">The Solution</p>
              <h2 className="section-title">Your Personal Visa Officer</h2>
              <p className="section-paragraph">
                Mr. VISA provides comprehensive visa preparation through AI-powered coaching that adapts
                to each applicant's unique situation and visa type.
              </p>

              <div className="solution-grid">
                <div className="solution-item">
                  <div className="solution-icon">🎯</div>
                  <h4>Personalized Rehearsals</h4>
                  <p>AI-powered interview practice tailored to your specific visa type and circumstances</p>
                </div>
                <div className="solution-item">
                  <div className="solution-icon">📋</div>
                  <h4>Smart Checklists</h4>
                  <p>Dynamic document requirements that update based on your travel purpose and destination</p>
                </div>
                <div className="solution-item">
                  <div className="solution-icon">🧠</div>
                  <h4>Immigration Intelligence</h4>
                  <p>Policy alerts, compliance monitoring, and embassy-specific preparation tips</p>
                </div>
                <div className="solution-item">
                  <div className="solution-icon">👨‍👩‍👧</div>
                  <h4>Family Coordination</h4>
                  <p>Multi-applicant management with shared rooms for group preparation</p>
                </div>
              </div>
            </div>

            {/* RESULTS SECTION */}
            <div id="results" ref={(el) => (sectionRefs.current['results'] = el)} className="content-section">
              <p className="section-label">Results & Impact</p>
              <h2 className="section-title">Democratizing Visa Preparation</h2>
              <p className="section-paragraph">
                Mr. VISA successfully launched, providing affordable visa preparation to applicants
                who previously couldn't access quality coaching.
              </p>

              <div className="impact-metrics">
                <div className="impact-metric">
                  <div className="impact-number">Live</div>
                  <p className="impact-description">Successfully launched at mrvisa.beorchid.com</p>
                </div>
                <div className="impact-metric">
                  <div className="impact-number">AI</div>
                  <p className="impact-description">Powered by VO, your AI Visa Officer</p>
                </div>
                <div className="impact-metric">
                  <div className="impact-number">Multi</div>
                  <p className="impact-description">Supports solo, family, and team visa applications</p>
                </div>
              </div>
            </div>

            {/* LEARNINGS SECTION */}
            <div id="learnings" ref={(el) => (sectionRefs.current['learnings'] = el)} className="content-section">
              <p className="section-label">Learnings</p>
              <h2 className="section-title">Key Takeaways</h2>

              <div className="learning-items">
                <div className="learning-item">
                  <div className="learning-icon">🎯</div>
                  <div className="learning-text">
                    <strong>High-Stakes UX Requires Extra Care:</strong> When users face significant consequences
                    (visa rejection), every interaction must build confidence and reduce anxiety.
                  </div>
                </div>
                <div className="learning-item">
                  <div className="learning-icon">🤖</div>
                  <div className="learning-text">
                    <strong>AI as Coach, Not Replacement:</strong> Users trusted the AI more when positioned as
                    a practice partner rather than a decision-maker.
                  </div>
                </div>
                <div className="learning-item">
                  <div className="learning-icon">📊</div>
                  <div className="learning-text">
                    <strong>Progress Visualization Reduces Anxiety:</strong> Clear progress indicators and
                    confidence scores helped users feel in control of their preparation.
                  </div>
                </div>
                <div className="learning-item">
                  <div className="learning-icon">👨‍👩‍👧</div>
                  <div className="learning-text">
                    <strong>Family Flows Are Complex:</strong> Multi-applicant coordination required careful
                    attention to individual vs. shared preparation needs.
                  </div>
                </div>
              </div>

              <div className="callout-box" style={{ marginTop: '40px' }}>
                <p className="callout-text centered">
                  <a href="https://mrvisa.beorchid.com" target="_blank" rel="noopener noreferrer" style={{ color: '#000', fontWeight: '700' }}>
                    Try Mr. VISA at mrvisa.beorchid.com →
                  </a>
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

export default MrVisaCaseStudy;
