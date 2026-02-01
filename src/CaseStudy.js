import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import './CaseStudy.css';
import { DesignIcon, LightningIcon, MobileIcon, AIIcon } from './Icons';

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

const ContextIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="12" y1="16" x2="12" y2="12"></line>
    <line x1="12" y1="8" x2="12.01" y2="8"></line>
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
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <circle cx="12" cy="10" r="3"></circle>
    <path d="M6 20v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"></path>
  </svg>
);

const ChartIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 20V10"></path>
    <path d="M18 20V4"></path>
    <path d="M6 20v-4"></path>
  </svg>
);

const BuildingsIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 21h18"></path>
    <path d="M9 21V10a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v11"></path>
    <path d="M19 21V5a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1v16"></path>
  </svg>
);

const PersonIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>
);

const SparklesIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L14.5 9L22 12L14.5 15L12 22L9.5 15L2 12L9.5 9L12 2Z"></path>
  </svg>
);

const GraduationCapIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 10v6c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2v2"></path>
    <path d="M12 19l-8-4v-6l8-4 8 4v6l-8 4z"></path>
    <path d="M12 19v-6"></path>
    <path d="M12 13l8-4"></path>
  </svg>
);

function CaseStudy() {
  const [activeSection, setActiveSection] = useState('getting-started');
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const sectionRefs = useRef({});

  const sections = [
    { id: 'getting-started', title: 'Getting started', icon: <BookIcon /> },
    { id: 'context', title: 'Context', icon: <ContextIcon /> },
    { id: 'challenge', title: 'The Challenge', icon: <TargetIcon /> },
    { id: 'my-role', title: 'My Role', icon: <IdBadgeIcon /> },
    { id: 'business', title: 'Business', icon: <ChartIcon /> },
    { id: 'competitors', title: 'Competitors', icon: <BuildingsIcon /> },
    { id: 'user-interviews', title: 'User Interviews', icon: <PersonIcon /> },
    { id: 'iterations', title: 'Iterations', icon: <DesignIcon /> },
    { id: 'the-solution', title: 'The solution', icon: <SparklesIcon /> },
    { id: 'learnings', title: 'Learnings', icon: <GraduationCapIcon /> },
  ];

  useEffect(() => {
    let timeoutId = null;
    
    const observer = new IntersectionObserver(
      (entries) => {
        // Clear any pending updates to prevent twitching
        if (timeoutId) {
          clearTimeout(timeoutId);
        }
        
        // Debounce the updates
        timeoutId = setTimeout(() => {
          // Find the section that's most visible
          let mostVisible = null;
          let maxRatio = 0;
          
        entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
              maxRatio = entry.intersectionRatio;
              mostVisible = entry.target.id;
            }
          });
          
          if (mostVisible && mostVisible !== activeSection) {
            setActiveSection(mostVisible);
          }
        }, 100); // 100ms debounce
      },
      { 
        threshold: [0.3, 0.5, 0.7],
        rootMargin: '-20% 0px -30% 0px'
      }
    );

    // Add a small delay to ensure all refs are set
    const currentRefs = sectionRefs.current;
    const observerTimeoutId = setTimeout(() => {
      sections.forEach((section) => {
        const ref = currentRefs[section.id];
        if (ref) {
          observer.observe(ref);
        }
      });
    }, 100);

    return () => {
      clearTimeout(observerTimeoutId);
      sections.forEach((section) => {
        const ref = currentRefs[section.id];
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const scrollToSection = (id) => {
    const element = sectionRefs.current[id];
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
      setActiveSection(id);
    }
  };

  return (
    <div className="case-study-page">
      {/* Mobile Header - Only visible on mobile */}
      <div className="mobile-case-study-header">
        <Link to="/" className="mobile-back-button">
          <BackIcon />
          <span>Back</span>
        </Link>
      </div>

      {/* Desktop Navigation - Hidden on mobile */}
      <nav className="navbar case-study-navbar desktop-navbar">
        <div className="nav-container">
          <Link to="/" className="nav-link active">Lansah</Link>
          <Link to="/" className="nav-link">Work</Link>
          <a href="https://linkedin.com/in/rashid-lansah" className="nav-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:rashidlansahadam@gmail.com" className="nav-link contact-btn" target="_blank" rel="noopener noreferrer">Get in touch</a>
        </div>
      </nav>

      <section className="case-study-hero">
        <div className="case-study-container">
          <div className="jenesys-branding">
            <div className="jenesys-logo-section">
              <div className="jenesys-icon">
                <div className="ai-badge">AI</div>
                <span className="jenesys-text">Jenesys</span>
              </div>
            </div>
            <div className="project-metrics">
              <div className="metric-item">
                <span className="metric-value">80%</span>
                <span className="metric-label">Adoption</span>
              </div>
              <div className="metric-item">
                <span className="metric-value">3x</span>
                <span className="metric-label">User Growth</span>
              </div>
              <div className="metric-item">
                <span className="metric-value">$1M</span>
                <span className="metric-label">ARR</span>
              </div>
            </div>
          </div>
          <h1 className="case-study-title">Scaling an AI-Powered Fintech Platform from MVP to Impact</h1>
          <p className="case-study-subtitle">As Founding Product Designer at Jenesys, I led design for an AI-driven accounting system that automated invoice and receipt management for small businesses. My goal was to simplify workflows while building scalable, compliant systems that achieved $1M ARR and 80% feature adoption.</p>
        </div>
      </section>

      <section className="hero-interface-section">
        <div className="hero-interface-container">
          <div className="hero-interface-wrapper">
            <img src="/images/case-studies/jenesys-dashboard.png" alt="Jenesys AI Dashboard Interface" className="hero-interface-image" />
            <div className="hero-interface-overlay">
              <div className="interface-badge">
                <div className="ai-indicator">AI</div>
                <span>Live Dashboard</span>
              </div>
            </div>
          </div>
          <p className="hero-interface-caption">
            Main dashboard interface showing real-time financial metrics, AI-powered categorization, and actionable business insights
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
            <div id="getting-started" ref={(el) => (sectionRefs.current['getting-started'] = el)} className="content-section">
              <p className="section-label">Overview</p>
              <h2 className="section-title">Building an AI Platform That Accountants Trust</h2>
              <p className="section-paragraph">
                As the Founding Product Designer at Jenesys, I led design for an AI-driven accounting system that automated invoice and receipt management for small businesses. My goal was to simplify workflows while building scalable, compliant systems.
              </p>
              <p className="section-paragraph">
                Jenesys is an AI-powered bookkeeping platform that automates financial workflows for SMEs. You can connect your accounting system (Xero, QuickBooks, FreeAgent), upload invoices via email, and let AI handle categorization, reconciliation, and compliance tracking — all while maintaining the transparency that financial professionals demand.
              </p>
              <p className="section-paragraph">
                <strong>Note:</strong> In compliance with my non-disclosure agreement, I've omitted confidential information from this case study. The insights shared here are my own and don't necessarily represent the views of Jenesys AI.
              </p>
            </div>

            <div id="context" ref={(el) => (sectionRefs.current['context'] = el)} className="content-section">
              <p className="section-label">Context</p>
              <h2 className="section-title">The bookkeeping burden</h2>
              <p className="section-paragraph">
                For SMEs worldwide, bookkeeping represents a significant operational burden. Small business owners were spending 15+ hours weekly on manual financial processes, with 40% of invoices requiring manual correction due to inconsistent data entry and categorization errors.
              </p>
              <p className="section-paragraph">
                The existing market solutions created a false choice: either expensive enterprise-grade software ($500+/month) that was too complex for non-accountants, or basic tools that lacked the sophistication needed for growing businesses. This gap left millions of SMEs struggling with time-consuming manual processes that pulled focus away from core business activities.
              </p>
              <p className="section-paragraph">
                Our research revealed that business owners weren't just looking for automation—they needed transparency and control. They wanted to understand how AI made decisions about their financial data, especially given the critical nature of financial accuracy and compliance requirements.
              </p>
            </div>

            <div id="challenge" ref={(el) => (sectionRefs.current['challenge'] = el)} className="content-section">
              <p className="section-label">The Challenge</p>
              <h2 className="section-title">Building trust in AI automation</h2>
              <p className="section-paragraph">
                <strong>Problem:</strong> SMEs were spending 15+ hours weekly on manual bookkeeping, with 40% of invoices requiring manual correction. The existing market solutions were either too expensive ($500+/month) or too complex for non-accountants to use effectively.
              </p>
              <p className="section-paragraph">
                <strong>Business Goal:</strong> Build an AI-powered bookkeeping platform that could reduce manual work by 80% while maintaining 95%+ accuracy, targeting $1M ARR within 12 months.
              </p>
              <p className="section-paragraph">
                <strong>Design Challenge:</strong> Create intuitive workflows for complex financial processes that would make AI feel transparent and trustworthy to users who were skeptical of automated financial management. The key was designing patterns where AI explained its reasoning to build user confidence.
              </p>
            </div>

            <div id="my-role" ref={(el) => (sectionRefs.current['my-role'] = el)} className="content-section">
              <p className="section-label">My Role</p>
              <h2 className="section-title">Leading Design from Zero to Scale</h2>

              <div className="role-overview-card">
                <div className="role-meta-grid">
                  <div className="role-meta-item">
                    <span className="role-meta-label">Role</span>
                    <span className="role-meta-value">Founding Product Designer</span>
                  </div>
                  <div className="role-meta-item">
                    <span className="role-meta-label">Duration</span>
                    <span className="role-meta-value">Apr 2023 – Aug 2025 (2+ years)</span>
                  </div>
                  <div className="role-meta-item">
                    <span className="role-meta-label">Team</span>
                    <span className="role-meta-value">Cross-functional (Design, Engineering, Product)</span>
                  </div>
                  <div className="role-meta-item">
                    <span className="role-meta-label">Stage</span>
                    <span className="role-meta-value">0→1 Product Build to Scale</span>
                  </div>
                </div>
              </div>

              <div className="role-sections-grid">
                <div className="role-section">
                  <h3>What I Owned</h3>
                  <ul className="role-responsibilities-list">
                    <li>End-to-end UX strategy from discovery to developer handoff</li>
                    <li>Complete design system architecture (40+ components, tokens, documentation)</li>
                    <li>User research: 25+ interviews, usability testing, competitive analysis</li>
                    <li>8 core workflow designs (onboarding, reconciliation, invoicing, settings)</li>
                    <li>Investor-ready prototypes and demos contributing to $2.2M funding</li>
                    <li>AI transparency patterns that became a competitive differentiator</li>
                  </ul>
                </div>

                <div className="role-section">
                  <h3>Collaborated With</h3>
                  <ul className="role-collaborators-list">
                    <li><strong>2 Co-founders</strong> — Product strategy, roadmap prioritization</li>
                    <li><strong>4 Engineers</strong> — Technical feasibility, design handoff, iteration</li>
                    <li><strong>1 Product Manager</strong> — Requirements, user stories, sprint planning</li>
                    <li><strong>External Stakeholders</strong> — Accountants, SME owners for user research</li>
                  </ul>
                </div>
              </div>

              <div className="goals-container">
                <h3>Key Contributions</h3>
                <div className="goals-grid">
                  <div className="goal-item">
                    <div className="goal-icon">
                      <DesignIcon size={20} />
                    </div>
                    <div className="goal-content">
                      <h4>UX Foundation</h4>
                      <p>Built complete design system from 0→1</p>
                    </div>
                  </div>
                  <div className="goal-item">
                    <div className="goal-icon">🤝</div>
                    <div className="goal-content">
                      <h4>Cross-functional Lead</h4>
                      <p>Aligned design with business & technical goals</p>
                    </div>
                  </div>
                  <div className="goal-item">
                    <div className="goal-icon">💡</div>
                    <div className="goal-content">
                      <h4>AI Transparency</h4>
                      <p>Designed trustworthy AI interaction patterns</p>
                    </div>
                  </div>
                  <div className="goal-item">
                    <div className="goal-icon">📊</div>
                    <div className="goal-content">
                      <h4>Investor Demos</h4>
                      <p>Contributed to $2.2M funding round</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id="business" ref={(el) => (sectionRefs.current['business'] = el)} className="content-section">
              <p className="section-label">Business</p>
              <h2 className="section-title">Market opportunity & impact</h2>
              <p className="section-paragraph">
                The global bookkeeping software market was valued at $4.8 billion in 2021, with SMEs representing the fastest-growing segment. Our target market included 30+ million small businesses globally who were underserved by existing solutions.
              </p>
              
              <div className="business-issues">
                <h3>Key Market Problems</h3>
                <div className="issue-grid">
                  <div className="issue-item">
                    <div className="issue-number">15+</div>
                    <div className="issue-text">Hours weekly on manual bookkeeping</div>
                  </div>
                  <div className="issue-item">
                    <div className="issue-number">40%</div>
                    <div className="issue-text">Invoices requiring manual correction</div>
                  </div>
                  <div className="issue-item">
                    <div className="issue-number">$500+</div>
                    <div className="issue-text">Monthly cost of enterprise solutions</div>
                  </div>
                  <div className="issue-item">
                    <div className="issue-number">30M+</div>
                    <div className="issue-text">Underserved SMEs globally</div>
                  </div>
                </div>
              </div>

              <p className="section-paragraph">
                Our business model focused on providing enterprise-grade AI automation at SME-friendly pricing, with transparent AI decision-making as our key differentiator. This approach enabled us to achieve $1M ARR within 12 months while maintaining 80% feature adoption across core workflows.
              </p>
            </div>

            <div id="competitors" ref={(el) => (sectionRefs.current['competitors'] = el)} className="content-section">
              <p className="section-label">Competitors</p>
              <h2 className="section-title">Competitive landscape analysis</h2>
              <p className="section-paragraph">
                I analyzed 3 key competitors to understand market positioning and identify opportunities for differentiation. The analysis revealed a clear gap in AI transparency and multi-company management capabilities.
              </p>
              
              <div className="competitors-analysis">
                <div className="competitor-item">
                  <div className="competitor-header">
                    <h4>Enterprise Solutions</h4>
                    <span className="price-tag">$500+/month</span>
                  </div>
                  <div className="competitor-pros">
                    <strong>Strengths:</strong> Advanced features, comprehensive reporting
                  </div>
                  <div className="competitor-cons">
                    <strong>Weaknesses:</strong> Too complex, expensive for SMEs
                  </div>
                </div>
                
                <div className="competitor-item">
                  <div className="competitor-header">
                    <h4>Basic Tools</h4>
                    <span className="price-tag">$20-50/month</span>
                  </div>
                  <div className="competitor-pros">
                    <strong>Strengths:</strong> Affordable, simple interface
                  </div>
                  <div className="competitor-cons">
                    <strong>Weaknesses:</strong> Limited automation, manual processes
                  </div>
                </div>
                
                <div className="competitor-item">
                  <div className="competitor-header">
                    <h4>AI Competitors</h4>
                    <span className="price-tag">$100-300/month</span>
                  </div>
                  <div className="competitor-pros">
                    <strong>Strengths:</strong> Some automation, modern interface
                  </div>
                  <div className="competitor-cons">
                    <strong>Weaknesses:</strong> Black-box AI, poor multi-company support
                  </div>
                </div>
              </div>
              
              <p className="section-paragraph">
                <strong>Our Opportunity:</strong> Create a solution that combines enterprise-grade AI automation with SME-friendly pricing, while prioritizing AI transparency and multi-company management—two areas where competitors were weak.
              </p>
            </div>

            <div id="user-interviews" ref={(el) => (sectionRefs.current['user-interviews'] = el)} className="content-section">
              <p className="section-label">User Interviews</p>
              <h2 className="section-title">Understanding user needs</h2>

              <div className="research-summary-card">
                <div className="research-meta">
                  <div className="research-stat">
                    <span className="stat-number">25+</span>
                    <span className="stat-label">Users Interviewed</span>
                  </div>
                  <div className="research-stat">
                    <span className="stat-number">3</span>
                    <span className="stat-label">User Segments</span>
                  </div>
                  <div className="research-stat">
                    <span className="stat-number">6</span>
                    <span className="stat-label">Week Study</span>
                  </div>
                </div>
                <div className="research-methods">
                  <strong>Methods:</strong> Semi-structured interviews, Contextual inquiry, Usability testing, Competitive analysis
                </div>
              </div>

              <h3 className="subsection-title">Key User Personas</h3>
              <div className="personas-grid">
                <div className="persona-card">
                  <div className="persona-header">
                    <div className="persona-avatar">👨‍💼</div>
                    <div className="persona-info">
                      <h4>David</h4>
                      <span className="persona-role">SME Owner</span>
                    </div>
                  </div>
                  <p className="persona-quote">"I don't have time to chase invoices. I need something that just handles it automatically."</p>
                  <div className="persona-details">
                    <div className="detail-item">
                      <strong>Goals:</strong> Reduce time spent on bookkeeping, maintain cash flow visibility
                    </div>
                    <div className="detail-item">
                      <strong>Pain Points:</strong> Manual data entry, reconciliation errors, lost invoices
                    </div>
                    <div className="detail-item">
                      <strong>Tech Savvy:</strong> Moderate — uses mobile banking, QuickBooks
                    </div>
                  </div>
                </div>

                <div className="persona-card">
                  <div className="persona-header">
                    <div className="persona-avatar">👩‍💻</div>
                    <div className="persona-info">
                      <h4>Sarah</h4>
                      <span className="persona-role">Bookkeeper</span>
                    </div>
                  </div>
                  <p className="persona-quote">"I manage books for 12 clients. Anything that saves me switching between systems is gold."</p>
                  <div className="persona-details">
                    <div className="detail-item">
                      <strong>Goals:</strong> Efficient multi-company management, accurate categorization
                    </div>
                    <div className="detail-item">
                      <strong>Pain Points:</strong> Context switching, manual invoice entry, client miscommunication
                    </div>
                    <div className="detail-item">
                      <strong>Tech Savvy:</strong> High — uses multiple accounting platforms daily
                    </div>
                  </div>
                </div>
              </div>

              <div className="user-interview-images">
                <div className="interview-insights">
                  <h3>Key Research Insights</h3>
                  <div className="insights-grid">
                    <div className="insight-card">
                      <div className="insight-icon">🔍</div>
                      <h4>Trust & Transparency</h4>
                      <p>Users needed to understand AI decisions to trust automation, especially for financial data</p>
                    </div>
                    <div className="insight-card">
                      <div className="insight-icon">🏢</div>
                      <h4>Multi-Company Complexity</h4>
                      <p>60% of users managed multiple companies, requiring sophisticated account separation</p>
                    </div>
                    <div className="insight-card">
                      <div className="insight-icon">
                        <LightningIcon size={20} />
                      </div>
                      <h4>Speed vs Control</h4>
                      <p>Users wanted automation but needed ability to review and override AI decisions</p>
                    </div>
                    <div className="insight-card">
                      <div className="insight-icon">
                        <MobileIcon size={20} />
                      </div>
                      <h4>Mobile-First Mindset</h4>
                      <p>Business owners needed to manage finances on-the-go, not just from desktop</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="opportunity-map-container">
                <h3>Research-Driven Opportunities</h3>
                <div className="opportunity-map">
                  <div className="opportunity-section">
                    <h4>High Impact, Low Effort</h4>
                    <div className="opportunity-items quick-wins">
                      <div className="opportunity-item">
                        <span className="opportunity-title">AI Confidence Scores</span>
                        <span className="opportunity-desc">Show AI decision confidence levels</span>
                      </div>
                      <div className="opportunity-item">
                        <span className="opportunity-title">Bulk Actions</span>
                        <span className="opportunity-desc">Allow multiple transaction processing</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="opportunity-section">
                    <h4>High Impact, High Effort</h4>
                    <div className="opportunity-items major-projects">
                      <div className="opportunity-item">
                        <span className="opportunity-title">Multi-Company Management</span>
                        <span className="opportunity-desc">Sophisticated account separation system</span>
                      </div>
                      <div className="opportunity-item">
                        <span className="opportunity-title">AI Explanation Engine</span>
                        <span className="opportunity-desc">Detailed reasoning for AI decisions</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="opportunity-section">
                    <h4>Low Impact, Low Effort</h4>
                    <div className="opportunity-items nice-to-have">
                      <div className="opportunity-item">
                        <span className="opportunity-title">Dark Mode</span>
                        <span className="opportunity-desc">Alternative interface theme</span>
                      </div>
                      <div className="opportunity-item">
                        <span className="opportunity-title">Custom Categories</span>
                        <span className="opportunity-desc">User-defined expense categories</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="opportunity-section">
                    <h4>Low Impact, High Effort</h4>
                    <div className="opportunity-items avoid">
                      <div className="opportunity-item">
                        <span className="opportunity-title">Advanced Reporting</span>
                        <span className="opportunity-desc">Complex financial analytics</span>
                      </div>
                      <div className="opportunity-item">
                        <span className="opportunity-title">Integration Marketplace</span>
                        <span className="opportunity-desc">Third-party app ecosystem</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id="iterations" ref={(el) => (sectionRefs.current['iterations'] = el)} className="content-section">
              <p className="section-label">Design Iterations</p>
              <h2 className="section-title">Learning Through User Feedback</h2>
              <p className="section-paragraph">
                Building from 0→1 meant constant iteration. Here are three key design challenges where user feedback fundamentally changed our approach.
              </p>

              <div className="iteration-story">
                <h3 className="iteration-title">Iteration 1: Onboarding Flow</h3>
                <div className="iteration-content">
                  <div className="iteration-version">
                    <div className="version-badge v1">V1</div>
                    <h4>Initial Approach</h4>
                    <p>A comprehensive 8-step onboarding wizard that captured all user preferences, company details, and accounting system connections upfront.</p>
                    <div className="iteration-feedback">
                      <strong>User Feedback:</strong> "This feels like filling out tax forms. I just want to see what the app does before committing 20 minutes."
                    </div>
                    <div className="iteration-data">
                      <strong>Data Insight:</strong> 45% abandonment rate at step 4 (Company Details)
                    </div>
                  </div>

                  <div className="iteration-arrow">→</div>

                  <div className="iteration-version">
                    <div className="version-badge v2">V2</div>
                    <h4>Progressive Disclosure</h4>
                    <p>Reduced to 3 essential steps: Email → Connect Accounting System → Upload First Invoice. Additional settings deferred to contextual moments.</p>
                    <div className="iteration-result">
                      <strong>Result:</strong> 85% onboarding completion rate (+40% improvement), 3x faster time-to-first-value
                    </div>
                  </div>
                </div>
              </div>

              <div className="iteration-story">
                <h3 className="iteration-title">Iteration 2: AI Confidence Display</h3>
                <div className="iteration-content">
                  <div className="iteration-version">
                    <div className="version-badge v1">V1</div>
                    <h4>Binary AI Status</h4>
                    <p>Simple "AI Processed" or "Needs Review" labels with no visibility into AI reasoning or confidence levels.</p>
                    <div className="iteration-feedback">
                      <strong>User Feedback:</strong> "I don't trust it. How do I know if the AI got it right? I'm still checking everything manually."
                    </div>
                    <div className="iteration-data">
                      <strong>Data Insight:</strong> 70% of users manually reviewed AI-processed transactions anyway
                    </div>
                  </div>

                  <div className="iteration-arrow">→</div>

                  <div className="iteration-version">
                    <div className="version-badge v2">V2</div>
                    <h4>Transparent Confidence Scores</h4>
                    <p>Added confidence percentages, AI reasoning explanations, and visual indicators (green for high confidence, yellow for medium, red for needs review). Users could expand to see why AI made each decision.</p>
                    <div className="iteration-result">
                      <strong>Result:</strong> Users trusted AI decisions 3x more, manual review rate dropped from 70% to 15% for high-confidence items
                    </div>
                  </div>
                </div>
              </div>

              <div className="iteration-story">
                <h3 className="iteration-title">Iteration 3: Multi-Company Invoice Routing</h3>
                <div className="iteration-content">
                  <div className="iteration-version">
                    <div className="version-badge v1">V1</div>
                    <h4>Manual Company Selection</h4>
                    <p>Users had to manually select which company an emailed invoice belonged to after upload.</p>
                    <div className="iteration-feedback">
                      <strong>User Feedback:</strong> "I forward invoices to a generic email. By the time I review them, I've forgotten which company they're for."
                    </div>
                    <div className="iteration-data">
                      <strong>Data Insight:</strong> 40% of invoices were initially assigned to the wrong company
                    </div>
                  </div>

                  <div className="iteration-arrow">→</div>

                  <div className="iteration-version">
                    <div className="version-badge v2">V2</div>
                    <h4>AI-Powered Auto-Routing</h4>
                    <p>AI analyzed invoice content, sender patterns, and historical data to automatically suggest the correct company. Added unique forwarding emails per company as backup.</p>
                    <div className="iteration-result">
                      <strong>Result:</strong> 95% auto-routing accuracy, eliminated 8+ hours/month of manual sorting for multi-company users
                    </div>
                  </div>
                </div>
              </div>

              <p className="section-paragraph" style={{ marginTop: '40px', fontStyle: 'italic', color: '#666' }}>
                These iterations taught me that user feedback isn't just about fixing problems — it's about discovering opportunities we couldn't have imagined in the initial design phase.
              </p>
            </div>

            <div id="the-solution" ref={(el) => (sectionRefs.current['the-solution'] = el)} className="content-section">
              <p className="section-label">The solution</p>
              <h2 className="section-title">AI-powered workflows with transparency</h2>
              <p className="section-paragraph">
                Based on user research and business requirements, I designed 8 core workflows that transformed complex financial processes into intuitive, AI-assisted experiences while maintaining full transparency and user control.
              </p>
              
              <div className="solution-opportunities">
                <h3>Key Workflow Transformations</h3>
                <div className="solution-grid">
                  <div className="solution-item">
                    <div className="solution-icon">🚀</div>
                    <h4>Onboarding Flow</h4>
                    <p>Streamlined connection to accounting systems (Xero, QuickBooks, FreeAgent) with minimal friction and clear progress indicators</p>
                  </div>
                  <div className="solution-item">
                    <div className="solution-icon">📧</div>
                    <h4>Email Invoice Processing</h4>
                    <p>Redesigned how invoices uploaded via email were categorized across companies when users belonged to multiple accounts</p>
                  </div>
                  <div className="solution-item">
                    <div className="solution-icon">🔄</div>
                    <h4>Bank Reconciliation</h4>
                    <p>Simplified reconciliation with AI suggestions, bulk actions, and contextual learning from user corrections</p>
                  </div>
                  <div className="solution-item">
                    <div className="solution-icon">💰</div>
                    <h4>Transaction Creation</h4>
                    <p>Built flows for creating bills, spend money, or bank transactions directly from reconciliation interface</p>
                  </div>
                  <div className="solution-item">
                    <div className="solution-icon">📋</div>
                    <h4>Audit Trail</h4>
                    <p>Designed comprehensive tracking of document history from upload to modification for compliance requirements</p>
                  </div>
                  <div className="solution-item">
                    <div className="solution-icon">
                      <AIIcon size={20} />
                    </div>
                    <h4>AI Transparency</h4>
                    <p>Created patterns that showed AI reasoning, confidence levels, and allowed users to review and override decisions</p>
                  </div>
                </div>
              </div>

              <div className="interface-showcase">
                <h3>Interface Design & User Flows</h3>
                <p className="section-paragraph">
                  The interface design focused on clarity and trust, with careful attention to how AI decisions were presented to users. I created visual patterns that made complex financial data accessible while maintaining professional aesthetics.
                </p>
                
                <div className="interface-image-container">
                  <img src="/images/jenesys-interface.png" alt="Jenesys AI Interface Design" className="interface-main-image" />
                  <p className="image-caption">
                    Main interface showing AI-powered invoice processing with transparent decision-making and confidence scores
                  </p>
                </div>
              </div>

              <div className="workflow-images">
                <h3>Key Interface Screenshots</h3>
                <p className="section-paragraph">
                  Here are the core interfaces I designed for Jenesys AI, showcasing the clean, professional aesthetic and user-friendly design patterns that made complex financial operations accessible to SMEs.
                </p>
                
                <div className="workflow-grid">
                  <div className="workflow-item">
                    <div className="workflow-image-wrapper">
                      <img src="/images/case-studies/jenesys-dashboard.png" alt="Main Dashboard Interface" />
                    </div>
                    <div className="workflow-content">
                      <h4>Dashboard Overview</h4>
                      <p>Central hub showing real-time financial metrics, AI-processed transactions, and actionable insights for business owners.</p>
                    </div>
                  </div>
                  
                  <div className="workflow-item">
                    <div className="workflow-image-wrapper">
                      <img src="/images/case-studies/jenesys-invoices.png" alt="Invoice Management Interface" />
                    </div>
                    <div className="workflow-content">
                      <h4>Invoice Processing</h4>
                      <p>AI-powered invoice categorization with confidence scores, bulk actions, and transparent decision explanations.</p>
                    </div>
                  </div>
                  
                  <div className="workflow-item">
                    <div className="workflow-image-wrapper">
                      <img src="/images/case-studies/jenesys-reconciliation.png" alt="Bank Reconciliation Interface" />
                    </div>
                    <div className="workflow-content">
                      <h4>Bank Reconciliation</h4>
                      <p>Streamlined reconciliation flow with AI suggestions, contextual learning, and user override capabilities.</p>
                    </div>
                  </div>
                  
                  <div className="workflow-item">
                    <div className="workflow-image-wrapper">
                      <img src="/images/case-studies/jenesys-settings.png" alt="Settings & Configuration Interface" />
                    </div>
                    <div className="workflow-content">
                      <h4>Settings & Configuration</h4>
                      <p>Intuitive settings interface for multi-company management, AI preferences, and integration configurations.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="solution-showcase">
                <h3>Design System Impact</h3>
                <div className="showcase-metrics">
                  <div className="showcase-item">
                    <div className="showcase-number">40+</div>
                    <div className="showcase-label">Reusable Components</div>
                  </div>
                  <div className="showcase-item">
                    <div className="showcase-number">8</div>
                    <div className="showcase-label">Core Workflows</div>
                  </div>
                  <div className="showcase-item">
                    <div className="showcase-number">90%+</div>
                    <div className="showcase-label">Task Completion Rate</div>
                  </div>
                  <div className="showcase-item">
                    <div className="showcase-number">85%</div>
                    <div className="showcase-label">Setup Success Rate</div>
                  </div>
                </div>
                
                <p className="section-paragraph">
                  The design system prioritized readability and user confidence, ensuring that even complex AI operations felt intuitive and trustworthy to financial professionals. These patterns became the foundation for Jenesys AI's continued growth and UK expansion.
                </p>
              </div>
            </div>

            <div id="learnings" ref={(el) => (sectionRefs.current['learnings'] = el)} className="content-section">
              <p className="section-label">Reflection</p>
              <h2 className="section-title">What I Learned</h2>
              <p className="section-paragraph">
                This project reinforced how design systems accelerate iteration speed and maintain clarity across fast-scaling teams. I learned to balance AI complexity with simplicity for everyday users — a challenge that required deep collaboration with engineers and continuous user feedback.
              </p>
              
              <div className="learnings-content">
                <div className="learning-section">
                  <h3>Design Insights</h3>
                  <div className="learning-items">
                    <div className="learning-item">
                      <div className="learning-icon">🔍</div>
                      <div className="learning-text">
                        <strong>AI Transparency is Critical:</strong> Users need to understand AI decisions to trust automation, especially in financial products
                      </div>
                    </div>
                    <div className="learning-item">
                      <div className="learning-icon">🏢</div>
                      <div className="learning-text">
                        <strong>Edge Cases Matter:</strong> Multi-company management was a key differentiator that solved real user pain points
                      </div>
                    </div>
                    <div className="learning-item">
                      <div className="learning-icon">
                        <DesignIcon size={20} />
                      </div>
                      <div className="learning-text">
                        <strong>Design Systems Scale:</strong> Building reusable components from day one enabled rapid iteration and consistency
                      </div>
                    </div>
                    <div className="learning-item">
                      <div className="learning-icon">👥</div>
                      <div className="learning-text">
                        <strong>User Research Drives Strategy:</strong> Understanding user workflows led to better product decisions than competitor analysis alone
                      </div>
                    </div>
                  </div>
                </div>

                <div className="learning-section">
                  <h3>Results & Impact</h3>
                  <div className="impact-metrics">
                    <div className="impact-item">
                      <div className="impact-value">60%</div>
                      <div className="impact-label">Reduced document processing time</div>
                    </div>
                    <div className="impact-item">
                      <div className="impact-value">40%</div>
                      <div className="impact-label">Increased accuracy through AI validation</div>
                    </div>
                    <div className="impact-item">
                      <div className="impact-value">80%</div>
                      <div className="impact-label">Feature adoption rate across core workflows</div>
                    </div>
                    <div className="impact-item">
                      <div className="impact-value">3x</div>
                      <div className="impact-label">Daily active user growth</div>
                    </div>
                    <div className="impact-item">
                      <div className="impact-value">$1M</div>
                      <div className="impact-label">ARR achieved in 12 months</div>
                    </div>
                    <div className="impact-item">
                      <div className="impact-value">3 products</div>
                      <div className="impact-label">Built a scalable design system now used across</div>
                    </div>
                  </div>
                </div>

                <div className="learning-section">
                  <h3>Future Vision</h3>
                  <p className="section-paragraph">
                    The design patterns and user flows created here became the foundation for Jenesys AI's UK expansion and continued growth, demonstrating the importance of building scalable design systems from the start. The AI transparency patterns we pioneered became a competitive advantage and influenced the broader fintech industry's approach to AI UX.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}

export default CaseStudy;





