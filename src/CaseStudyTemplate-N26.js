import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import './CaseStudy.css';

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

const MegaphoneIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 8h-1.26a6 6 0 0 0-6.43-4.98L10 3.5V2l-2 2-2-2v1.5l-.31-.02A6 6 0 0 0 1 8.74V14a6 6 0 0 0 6 6h11a6 6 0 0 0 6-6V14a6 6 0 0 0-6-6z"></path>
    <path d="M10 12H7"></path>
  </svg>
);

const MedalIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="7"></circle>
    <path d="M12 15v9"></path>
    <path d="M12 15l-6 6"></path>
    <path d="M12 15l6 6"></path>
  </svg>
);

function N26CaseStudyTemplate() {
  const [activeSection, setActiveSection] = useState('getting-started');
  const sectionRefs = useRef({});

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
    { id: 'shout-outs', title: 'Shout-outs', icon: <MegaphoneIcon /> },
    { id: 'mentorship', title: 'Mentorship', icon: <MedalIcon /> },
  ];

  useEffect(() => {
    let timeoutId = null;
    
    const observer = new IntersectionObserver(
      (entries) => {
        if (timeoutId) {
          clearTimeout(timeoutId);
        }
        
        timeoutId = setTimeout(() => {
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
        }, 100);
      },
      { 
        threshold: [0.3, 0.5, 0.7],
        rootMargin: '-20% 0px -30% 0px'
      }
    );

    const observerTimeoutId = setTimeout(() => {
      sections.forEach((section) => {
        const ref = sectionRefs.current[section.id];
        if (ref) {
          observer.observe(ref);
        }
      });
    }, 100);

    return () => {
      clearTimeout(observerTimeoutId);
      sections.forEach((section) => {
        const ref = sectionRefs.current[section.id];
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, [sections]);

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
      <nav className="navbar case-study-navbar">
        <div className="nav-container">
          <Link to="/" className="nav-link active">Jonny Czar</Link>
          <Link to="/" className="nav-link">Work</Link>
          <a href="https://linkedin.com" className="nav-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="#contact" className="nav-link contact-btn">Get in touch</a>
        </div>
      </nav>

      <section className="case-study-hero">
        <div className="case-study-container">
          <div className="n26-branding">
            <div className="n26-logo-section">
              <div className="n26-icon">
                <div className="n26-square">
                  <span className="n26-letter">N</span>
                </div>
                <div className="n26-line"></div>
              </div>
              <span className="n26-text">N26</span>
            </div>
            <div className="n26-rating">
              <div className="stars">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
              <span className="rating-number">4,5</span>
            </div>
          </div>
          <h1 className="case-study-title">A home for the easier-than-ever finances</h1>
          <p className="case-study-subtitle">A design case study of simplifying transactions to +8 million users</p>
        </div>
      </section>

      <section className="phone-mockups-section">
        <div className="phone-mockups-container">
          <div className="phone-mockups">
            <div className="phone-mockup phone-left">
            <div className="phone-screen">
              <div className="app-interface">
                <div className="status-bar">
                  <span>9:41</span>
                  <div className="status-icons">
                    <span>📶</span>
                    <span>🔋</span>
                  </div>
                </div>
                <div className="transaction-header">
                  <div className="transaction-icon-wrapper">
                    <div className="airbnb-logo">A</div>
                  </div>
                  <span className="transaction-type">Airbnb</span>
                  <span className="transaction-category">Travel</span>
                </div>
                <div className="transaction-amount-display">
                  <span className="currency">-€</span>
                  <span className="amount">1,101</span>
                  <span className="decimal">.45</span>
                </div>
                <p className="transaction-date">15 May 2021, 12:23 New York</p>
                <div className="transaction-actions">
                  <button className="action-btn primary">Pay back from a Space</button>
                  <button className="action-btn secondary">Split the bill</button>
                </div>
                <div className="transaction-tags">
                  <span className="tag">#Travel</span>
                  <span className="tag">#Vacation</span>
                </div>
              </div>
            </div>
          </div>
            <div className="phone-mockup phone-right">
            <div className="phone-screen">
              <div className="app-interface">
                <div className="status-bar">
                  <span>9:41</span>
                  <div className="status-icons">
                    <span>📶</span>
                    <span>🔋</span>
                  </div>
                </div>
                <div className="home-header">
                  <h2 className="home-title">Home</h2>
                  <p className="current-balance">€1.320,00</p>
                </div>
                <div className="transactions-list">
                  <div className="transaction-group">
                    <h3 className="group-title">Today</h3>
                    <div className="transaction-item">
                      <div className="transaction-icon-small spotify-logo">S</div>
                      <div className="transaction-details">
                        <span className="merchant-name">Spotify</span>
                        <span className="transaction-meta">10:30 AM</span>
                      </div>
                      <span className="transaction-amount">-€6.90</span>
                    </div>
                  </div>
                  <div className="transaction-group">
                    <h3 className="group-title">Earlier this week</h3>
                    <div className="transaction-item">
                      <div className="transaction-icon-small airbnb-logo-small">A</div>
                      <div className="transaction-details">
                        <span className="merchant-name">Airbnb</span>
                        <span className="transaction-meta">14 May</span>
                      </div>
                      <span className="transaction-amount">-€122,00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
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
              <p className="section-label">Getting started</p>
              <h2 className="section-title">A global bank</h2>
              <p className="section-paragraph">
                Before we dive in, I want to note that, in compliance with my non-disclosure agreement, I've omitted any confidential information from this case study.
              </p>
              <p className="section-paragraph">
                The insights shared here are my own and don't necessarily represent the views of N26. N26 is a fee-free bank account you can open in under eight minutes, straight from your phone or computer. You can add money via cash or transfers from other accounts, set savings goals with Spaces, track your subscriptions, recurring payments, and spending habits with Statistics, or send and receive instant money from friends using MoneyBeam.
              </p>
              <p className="section-paragraph">
                By 2021, N26 had surpassed 7 million customers across 25 markets, with a team of over 1,500 employees spread across Berlin, New York, Barcelona, Vienna, and São Paulo.
              </p>
            </div>

            <div id="context" ref={(el) => (sectionRefs.current['context'] = el)} className="content-section">
              <p className="section-label">Context</p>
              <h2 className="section-title">A six seconds story</h2>
              <p className="section-paragraph">
                For a global product used by millions of users, the app home screen plays a crucial role in setting the starting point for most financial journeys. That's why it's so important to address challenges like helping users feel in control of their finances, analyzing spending habits, and staying informed about last-minute tasks. However, in a world filled with apps competing for users' attention, finding a meaningful place in their daily routine has become increasingly difficult.
              </p>
              <p className="section-paragraph">
                To put this into perspective, a study from the Technical University of Denmark revealed that our collective global attention span is shrinking due to the sheer volume of information presented to us. People now have more things vying for their focus but tend to spend less time on each. This means the time users dedicate to understanding a specific screen or product has dropped significantly. On top of that, another study by Statista highlighted a stark contrast: while users spend an average of 2 hours and 30 minutes daily on social media, the average time for banking activities is just six seconds—yes, six seconds.
              </p>
              <p className="section-paragraph">
                Digging deeper into users' financial concerns and general questions about banking, we at N26 recently surveyed over 10,000 individuals across the U.S. and Europe. The findings were eye-opening.
              </p>
            </div>

            {/* Add other sections as needed following the same pattern */}
            
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}

export default N26CaseStudyTemplate; 