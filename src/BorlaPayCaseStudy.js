import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import './CaseStudy.css';
import { RecycleIcon, MobileIcon, LightningIcon } from './Icons';

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

const BuildingsIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path>
    <path d="M6 12H4a2 2 0 0 0-2 2v8h20v-8a2 2 0 0 0-2-2h-2"></path>
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

function BorlaPayCaseStudy() {
  const [activeSection, setActiveSection] = useState('getting-started');
  const sectionRefs = useRef({});
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    { id: 'getting-started', title: 'Getting started', icon: <BookIcon /> },
    { id: 'context', title: 'Context', icon: <ContextIcon /> },
    { id: 'challenge', title: 'The Challenge', icon: <TargetIcon /> },
    { id: 'my-role', title: 'My Role', icon: <IdBadgeIcon /> },
    { id: 'business', title: 'Business', icon: <ChartIcon /> },
    { id: 'competitors', title: 'Competitors', icon: <BuildingsIcon /> },
    { id: 'user-interviews', title: 'User Interviews', icon: <PersonIcon /> },
    { id: 'the-solution', title: 'The solution', icon: <SparklesIcon /> },
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
          <a href="https://medium.com/@rashidlansah" className="nav-link contact-btn">Download Resume</a>
        </div>
      </nav>

      <section className="case-study-hero">
        <div className="case-study-container">
          <div className="jenesys-branding">
            <div className="jenesys-logo-section">
              <div className="jenesys-icon">
                <div className="recycle-badge">
                  <RecycleIcon size={24} />
                </div>
                <span className="jenesys-text">BorlaPayCaseStudy</span>
              </div>
            </div>
            <div className="project-metrics">
              <div className="metric-item">
                <span className="metric-value">80%</span>
                <span className="metric-label">User Retention</span>
              </div>
              <div className="metric-item">
                <span className="metric-value">3x</span>
                <span className="metric-label">Waste Collection</span>
              </div>
              <div className="metric-item">
                <span className="metric-value">1M+</span>
                <span className="metric-label">Tons Addressable</span>
              </div>
            </div>
          </div>
          <h1 className="case-study-title">Making Recycling Rewarding in Ghana</h1>
          <p className="case-study-subtitle">Designed a mobile-first platform that connects users with local "Wastepreneurs" through mobile money rewards. Achieved 80% retention by making recycling as easy — and rewarding — as sending MoMo to family.</p>
        </div>
      </section>

      <section className="hero-interface-section">
        <div className="hero-interface-container">
          <div className="hero-interface-wrapper">
            <img src="/images/borlapay-full-image.svg" alt="BorlaPayCaseStudy Mobile Interface" className="hero-interface-image" />
            <div className="hero-interface-overlay">
              <div className="interface-badge">
                <div className="recycle-indicator">
                  <RecycleIcon size={16} />
                </div>
                <span>Mobile App</span>
              </div>
            </div>
          </div>
          <p className="hero-interface-caption">
            Main mobile interface showing reward-based recycling system with gamified experience and community-driven incentives
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
              <h2 className="section-title">What If Recycling Paid Like MoMo?</h2>
              <p className="section-paragraph">
                BorlaPay turns Ghana's recycling problem into an opportunity by making it rewarding. Drop off your plastic waste with a local "Wastepreneur," scan a QR code, and get paid instantly through mobile money. Simple as that.
              </p>
              <p className="section-paragraph">
                <strong>The Problem:</strong> Ghana generates 1M+ tons of plastic waste annually, but only 5% gets recycled. Why? No reward, no community support, and no way to see your impact. Meanwhile, 70% of Ghanaians use mobile money daily — a ready-made trust layer waiting to be tapped.
              </p>
              <p className="section-paragraph">
                <strong>The Solution:</strong> A mobile-first platform that mirrors the MoMo apps Ghanaians already love. Familiar UI. Instant rewards. Community-driven trust. The result? 80% retention and 3x waste collection.
              </p>
            </div>

            <div id="context" ref={(el) => (sectionRefs.current['context'] = el)} className="content-section">
              <p className="section-label">Context</p>
              <h2 className="section-title">Understanding Ghana's Waste Crisis</h2>
              <p className="section-paragraph">
                Ghana is facing a waste management crisis. Every day, cities like Accra and Kumasi generate tons of plastic waste with little incentive for individuals to separate and recycle. While some informal collectors exist, the system is fragmented and lacks transparency.
              </p>
              <p className="section-paragraph">
                <strong>Market Research Revealed:</strong> 1M+ tons of plastic waste annually with only 5% currently recycled, but 70% mobile money penetration showing readiness for digital reward systems. The opportunity was massive - we just needed to make recycling as easy and rewarding as sending mobile money.
              </p>
              <div className="context-stats">
                <div className="stat-highlight">
                  <span className="stat-number">1M+</span>
                  <span className="stat-label">Tons of plastic waste annually</span>
                </div>
                <div className="stat-highlight">
                  <span className="stat-number">5%</span>
                  <span className="stat-label">Currently recycled</span>
                </div>
                <div className="stat-highlight">
                  <span className="stat-number">70%</span>
                  <span className="stat-label">Mobile money penetration</span>
                </div>
              </div>
            </div>

            <div id="challenge" ref={(el) => (sectionRefs.current['challenge'] = el)} className="content-section">
              <p className="section-label">The Challenge</p>
              <h2 className="section-title">Why People Don't Recycle</h2>
              <p className="section-paragraph">
                Through research with 8 individuals from Accra, Kumasi, and Tamale, I discovered the core barriers preventing people from recycling consistently:
              </p>
              
              <div className="problem-context-image-container">
                <img src="/images/case-studies/borlapay-problem-context.png" alt="User Journey Map - Trying vs Conflict" className="problem-context-image" />
                <p className="image-caption">
                  User journey mapping showing the gap between trying to recycle and losing interest due to lack of feedback
                </p>
              </div>
              
              <div className="business-issues">
                <div className="issue">
                  <div className="issue-number">01</div>
                  <div className="issue-title">No Direct Reward</div>
                  <div className="issue-description">
                    People see no immediate value or benefit from separating and collecting recyclable materials.
                  </div>
                </div>
                
                <div className="issue">
                  <div className="issue-number">02</div>
                  <div className="issue-title">Fragmented System</div>
                  <div className="issue-description">
                    No community structure supports recycling at scale - informal collectors are unreliable and hard to find.
                  </div>
                </div>
                
                <div className="issue">
                  <div className="issue-number">03</div>
                  <div className="issue-title">No Progress Tracking</div>
                  <div className="issue-description">
                    There's no way to track your environmental impact or see progress over time, making it feel meaningless.
                  </div>
                </div>
              </div>
            </div>

            <div id="my-role" ref={(el) => (sectionRefs.current['my-role'] = el)} className="content-section">
              <p className="section-label">My Role</p>
              <h2 className="section-title">Designing Behavior Change Through Familiar UX</h2>

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
                    <span className="role-meta-label">Research</span>
                    <span className="role-meta-value">8 interviews across 3 cities in Ghana</span>
                  </div>
                  <div className="role-meta-item">
                    <span className="role-meta-label">Focus</span>
                    <span className="role-meta-value">Mobile Money + Recycling Rewards</span>
                  </div>
                </div>
              </div>

              <div className="role-sections-grid">
                <div className="role-section">
                  <h3>What I Owned</h3>
                  <ul className="role-responsibilities-list">
                    <li>End-to-end UX research and design for mobile-first recycling platform</li>
                    <li>User research: 8 interviews across Accra, Kumasi, and Tamale</li>
                    <li>Two-sided marketplace design (Users + Wastepreneurs)</li>
                    <li>Mobile money integration UX mimicking familiar MoMo patterns</li>
                    <li>Gamification system design (badges, streaks, leaderboards)</li>
                    <li>QR-based transaction verification flows</li>
                  </ul>
                </div>

                <div className="role-section">
                  <h3>Key Users Designed For</h3>
                  <ul className="role-collaborators-list">
                    <li><strong>Urban Recyclers</strong> — Busy individuals wanting rewards for waste drop-off</li>
                    <li><strong>Wastepreneurs</strong> — Community collectors managing pickups and processing</li>
                    <li><strong>Market Sellers</strong> — Primary persona (Amina, 24) seeking extra income</li>
                  </ul>
                </div>
              </div>

              <div className="goals-container">
                <h3>Key Contributions</h3>
                <div className="goals-grid">
                  <div className="goal-item">
                    <div className="goal-icon">
                      <RecycleIcon size={20} />
                    </div>
                    <div className="goal-content">
                      <h4>Behavior Design</h4>
                      <p>Made recycling as easy as sending MoMo</p>
                    </div>
                  </div>
                  <div className="goal-item">
                    <div className="goal-icon">💰</div>
                    <div className="goal-content">
                      <h4>Instant Rewards</h4>
                      <p>Mobile money integration for immediate payouts</p>
                    </div>
                  </div>
                  <div className="goal-item">
                    <div className="goal-icon">🤝</div>
                    <div className="goal-content">
                      <h4>Community Trust</h4>
                      <p>Local Wastepreneur network built on social trust</p>
                    </div>
                  </div>
                  <div className="goal-item">
                    <div className="goal-icon">🎮</div>
                    <div className="goal-content">
                      <h4>Gamification</h4>
                      <p>Achievement system for sustained engagement</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id="business" ref={(el) => (sectionRefs.current['business'] = el)} className="content-section">
              <p className="section-label">Business</p>
              <h2 className="section-title">Market Opportunity & Business Model</h2>
              <p className="section-paragraph">
                The business opportunity was massive: Ghana's 1M+ tons of annual plastic waste with only 5% recycling rate, combined with 70% mobile money penetration, created perfect conditions for a digital recycling incentive platform.
              </p>
              
              <div className="business-model">
                <h3>Revenue Streams</h3>
                <div className="revenue-streams">
                  <div className="revenue-item">
                    <h4>Waste Processing Fees</h4>
                    <p>Commission from recycling companies for processed materials</p>
                  </div>
                  <div className="revenue-item">
                    <h4>Corporate Partnerships</h4>
                    <p>Sustainability programs with brands looking to offset plastic waste</p>
                  </div>
                  <div className="revenue-item">
                    <h4>Government Contracts</h4>
                    <p>Municipal waste management efficiency improvements</p>
                  </div>
                </div>
              </div>

              <div className="market-size">
                <h3>Total Addressable Market</h3>
                <div className="market-stats">
                  <div className="market-stat">
                    <span className="market-number">$50M+</span>
                    <span className="market-label">Annual waste management market in Ghana</span>
                  </div>
                  <div className="market-stat">
                    <span className="market-number">28M</span>
                    <span className="market-label">Mobile phone users in Ghana</span>
                  </div>
                </div>
              </div>
            </div>

            <div id="competitors" ref={(el) => (sectionRefs.current['competitors'] = el)} className="content-section">
              <p className="section-label">Competitors</p>
              <h2 className="section-title">Competitive Landscape Analysis</h2>
              <p className="section-paragraph">
                I analyzed existing solutions in the waste management and mobile rewards space to identify opportunities for differentiation and user experience improvements.
              </p>
              
              <div className="competitors-analysis">
                <div className="competitor-item">
                  <div className="competitor-header">
                    <h4>Traditional Waste Collectors</h4>
                    <span className="price-tag">Informal</span>
                  </div>
                  <div className="competitor-pros">
                    <strong>Strengths:</strong> Local presence, established relationships
                  </div>
                  <div className="competitor-cons">
                    <strong>Weaknesses:</strong> Unreliable, no tracking, no rewards system
                  </div>
                </div>
                
                <div className="competitor-item">
                  <div className="competitor-header">
                    <h4>Mobile Money Apps</h4>
                    <span className="price-tag">Established</span>
                  </div>
                  <div className="competitor-pros">
                    <strong>Strengths:</strong> High trust, familiar UX, wide adoption
                  </div>
                  <div className="competitor-cons">
                    <strong>Weaknesses:</strong> Not focused on environmental impact
                  </div>
                </div>
                
                <div className="competitor-item">
                  <div className="competitor-header">
                    <h4>International Recycling Apps</h4>
                    <span className="price-tag">Limited</span>
                  </div>
                  <div className="competitor-pros">
                    <strong>Strengths:</strong> Advanced features, proven models
                  </div>
                  <div className="competitor-cons">
                    <strong>Weaknesses:</strong> Not localized, complex UX, no mobile money integration
                  </div>
                </div>
              </div>
              
              <div className="competitive-advantage">
                <h3>Our Competitive Advantage</h3>
                <p className="section-paragraph">
                  <strong>Local-First Design:</strong> Built specifically for Ghana's mobile money ecosystem with familiar UX patterns and community-driven trust mechanisms that existing solutions lacked.
                </p>
              </div>
            </div>

            <div id="user-interviews" ref={(el) => (sectionRefs.current['user-interviews'] = el)} className="content-section">
              <p className="section-label">User Interviews</p>
              <h2 className="section-title">Research Insights from 8 Users</h2>
              <p className="section-paragraph">
                I conducted interviews with individuals from Accra, Kumasi, and Tamale to understand recycling motivation, consistency barriers, and familiarity with digital rewards. The insights shaped our entire product strategy.
              </p>
              
              <div className="user-interview-images">
                <div className="interview-step">
                  <img src="/images/case-studies/borlapay-persona-amina.svg" alt="Primary persona Amina - market seller in Accra" />
                  <h4>Primary Persona: Amina</h4>
                  <p>24-year-old market seller in Accra who wants to earn extra income without extra effort</p>
                </div>
              </div>

              <div className="interview-insights">
                <h3>Key Research Insights</h3>
                <div className="insights-grid">
                  <div className="insight-card">
                    <div className="insight-icon">💰</div>
                    <h4>Tangible Rewards</h4>
                    <p>People wanted immediate, visible rewards - not just environmental feel-good messages</p>
                  </div>
                  
                  <div className="insight-card">
                    <div className="insight-icon">🤝</div>
                    <h4>Community Trust</h4>
                    <p>Users trust neighbors and community members more than government officials or distant companies</p>
                  </div>
                  
                  <div className="insight-card">
                    <div className="insight-icon">
                      <MobileIcon size={20} />
                    </div>
                    <h4>Mobile Money Familiarity</h4>
                    <p>Preferred simple flows mirroring MoMo apps they already use daily for transactions</p>
                  </div>
                  
                  <div className="insight-card">
                    <div className="insight-icon">
                      <LightningIcon size={20} />
                    </div>
                    <h4>Speed & Simplicity</h4>
                    <p>Always busy - needed fast, familiar experiences without learning new complex systems</p>
                  </div>
                </div>
              </div>
            </div>

            <div id="the-solution" ref={(el) => (sectionRefs.current['the-solution'] = el)} className="content-section">
              <p className="section-label">The Solution</p>
              <h2 className="section-title">Mobile-First Recycling Rewards Platform</h2>
              <p className="section-paragraph">
                I designed BorlaPayCaseStudy as a mobile-first platform that connects individual recyclers with local "Wastepreneurs" through a gamified reward system. The solution taps into mobile money familiarity while building community trust through transparent, trackable transactions.
              </p>

              <div className="solution-opportunities">
                <h3>Core Solution Features</h3>
                <div className="solution-grid">
                  <div className="solution-item quick-wins">
                    <div className="solution-icon">
                      <LightningIcon size={20} />
                    </div>
                    <h4>Instant Rewards</h4>
                    <p>Mobile money integration for immediate payment after waste drop-off, mirroring familiar MoMo transaction flows</p>
                  </div>
                  
                  <div className="solution-item major-projects">
                    <div className="solution-icon">🎯</div>
                    <h4>Community Network</h4>
                    <p>Local Wastepreneur system where trusted community members collect and process recyclables</p>
                  </div>
                  
                  <div className="solution-item nice-to-have">
                    <div className="solution-icon">📊</div>
                    <h4>Impact Tracking</h4>
                    <p>Personal dashboard showing environmental impact, earnings history, and community leaderboards</p>
                  </div>
                  
                  <div className="solution-item avoid">
                    <div className="solution-icon">🎮</div>
                    <h4>Gamification</h4>
                    <p>Achievement badges, streak counters, and community challenges to maintain engagement</p>
                  </div>
                </div>
              </div>

              <div className="interface-showcase">
                <h3>Interface Design & User Flows</h3>
                <p className="section-paragraph">
                  The interface design focused on familiarity and trust, mirroring mobile money apps that Ghanaians already use. I created visual patterns that made recycling feel as natural as sending money to family.
                </p>
                <div className="interface-image-container">
                  <img src="/images/borlapay-full-image.svg" alt="BorlaPayCaseStudy Mobile Interface Design" className="interface-main-image" />
                  <p className="image-caption">
                    Main interface showing mobile money-style reward system with community-driven waste collection
                  </p>
                </div>
              </div>

              <div className="workflow-images">
                <h3>Key Interface Screenshots</h3>
                <p className="section-paragraph">
                  Here are the core interfaces I designed for BorlaPayCaseStudy, showcasing the mobile-first design and gamified user experience that made recycling rewarding and accessible.
                </p>
                
                <div className="workflow-grid">
                  <div className="workflow-item">
                    <div className="workflow-image-wrapper">
                      <img src="/images/case-studies/borlapay-onboarding.png" alt="Onboarding Flow Interface" />
                    </div>
                    <div className="workflow-content">
                      <h4>Onboarding Experience</h4>
                      <p>Simple, mobile money-style onboarding that builds trust and explains the reward system clearly.</p>
                    </div>
                  </div>
                  
                  <div className="workflow-item">
                    <div className="workflow-image-wrapper">
                      <img src="/images/case-studies/borlapay-qr-scanning.png" alt="QR Code Scanning Interface" />
                    </div>
                    <div className="workflow-content">
                      <h4>QR Code Scanning</h4>
                      <p>Quick waste drop-off verification system connecting users with local Wastepreneurs.</p>
                    </div>
                  </div>
                  
                  <div className="workflow-item">
                    <div className="workflow-image-wrapper">
                      <img src="/images/case-studies/borlapay-wallet-interface.png" alt="Mobile Wallet Interface" />
                    </div>
                    <div className="workflow-content">
                      <h4>Reward Wallet</h4>
                      <p>Familiar mobile money-style wallet showing earnings, transaction history, and cashout options.</p>
                    </div>
                  </div>
                  
                  <div className="workflow-item">
                    <div className="workflow-image-wrapper">
                      <img src="/images/case-studies/borlapay-wastepreneur-dashboard.png" alt="Wastepreneur Dashboard Interface" />
                    </div>
                    <div className="workflow-content">
                      <h4>Wastepreneur Dashboard</h4>
                      <p>Community collector interface for managing pickups, tracking inventory, and processing payments.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="solution-showcase">
                <h3>Impact & Results</h3>
                <div className="showcase-metrics">
                  <div className="showcase-item">
                    <div className="showcase-number">80%</div>
                    <div className="showcase-label">User Retention Rate</div>
                  </div>
                  <div className="showcase-item">
                    <div className="showcase-number">3x</div>
                    <div className="showcase-label">Waste Collection Increase</div>
                  </div>
                  <div className="showcase-item">
                    <div className="showcase-number">70%</div>
                    <div className="showcase-label">Mobile Money Integration Success</div>
                  </div>
                </div>
              </div>
            </div>

            <div id="learnings" ref={(el) => (sectionRefs.current['learnings'] = el)} className="content-section">
              <p className="section-label">Reflection</p>
              <h2 className="section-title">What Worked (and What I'd Do Differently)</h2>
              
              <div className="learnings-content">
                <div className="learning-section">
                  <h3>What Worked Well</h3>
                  <div className="learning-items">
                    <div className="learning-item">
                      <div className="learning-icon">✅</div>
                      <div className="learning-text">
                        <strong>Mobile Money Integration:</strong> Leveraging familiar payment patterns made the reward system immediately trustworthy and easy to use.
                      </div>
                    </div>
                    
                    <div className="learning-item">
                      <div className="learning-icon">✅</div>
                      <div className="learning-text">
                        <strong>Community-Driven Approach:</strong> The Wastepreneur network built on existing social trust structures was key to user adoption.
                      </div>
                    </div>
                    
                    <div className="learning-item">
                      <div className="learning-icon">✅</div>
                      <div className="learning-text">
                        <strong>Gamification Balance:</strong> Simple achievement systems motivated users without overwhelming the core recycling experience.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="learning-section">
                  <h3>Challenges & Solutions</h3>
                  <div className="learning-items">
                    <div className="learning-item">
                      <div className="learning-icon">
                        <LightningIcon size={20} />
                      </div>
                      <div className="learning-text">
                        <strong>Building Initial Trust:</strong> Overcame skepticism by starting with known community members as Wastepreneurs and transparent transaction tracking.
                      </div>
                    </div>
                    
                    <div className="learning-item">
                      <div className="learning-icon">
                        <LightningIcon size={20} />
                      </div>
                      <div className="learning-text">
                        <strong>Scaling Community Networks:</strong> Developed a referral system where successful Wastepreneurs could recommend and train new collectors.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="learning-section">
                  <h3>Future Opportunities</h3>
                  <div className="learning-items">
                    <div className="learning-item">
                      <div className="learning-icon">🚀</div>
                      <div className="learning-text">
                        <strong>Corporate Partnerships:</strong> Brands could sponsor recycling campaigns and offset their plastic waste through the platform.
                      </div>
                    </div>
                    
                    <div className="learning-item">
                      <div className="learning-icon">🚀</div>
                      <div className="learning-text">
                        <strong>Regional Expansion:</strong> The model could be adapted to other West African countries with similar mobile money adoption.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="impact-metrics">
                <h3>Final Impact</h3>
                <div className="impact-item">
                  <div className="impact-value">80% User Retention</div>
                  <div className="impact-label">Achieved through mobile money familiarity and community trust</div>
                </div>
                <div className="impact-item">
                  <div className="impact-value">3x Waste Collection</div>
                  <div className="impact-label">Increased through Wastepreneur network and reward incentives</div>
                </div>
                <div className="impact-item">
                  <div className="impact-value">1M+ Tons Addressable</div>
                  <div className="impact-label">Total market opportunity for plastic waste recycling in Ghana</div>
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

export default BorlaPayCaseStudy; 