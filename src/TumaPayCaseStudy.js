import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './CaseStudy.css';

const BackIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 12H5M12 19l-7-7 7-7"/>
  </svg>
);

const MicrophoneIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
    <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
    <line x1="12" y1="19" x2="12" y2="23"></line>
    <line x1="8" y1="23" x2="16" y2="23"></line>
  </svg>
);

const SearchIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"></circle>
    <path d="m21 21-4.35-4.35"></path>
  </svg>
);

const LightbulbIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path>
    <path d="M9 18h6"></path>
    <path d="M10 22h4"></path>
  </svg>
);

const DesignIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2v20M2 12h20"></path>
    <path d="m19.07 4.93-14.14 14.14M4.93 4.93l14.14 14.14"></path>
  </svg>
);

const CheckCircleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
);

const TargetIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <circle cx="12" cy="12" r="6"></circle>
    <circle cx="12" cy="12" r="2"></circle>
  </svg>
);

const BookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
  </svg>
);

const IdBadgeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>
);

function TumaPayCaseStudy() {
  const [activeSection, setActiveSection] = useState('overview');
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const sectionRefs = useRef({});

  const sections = [
    { id: 'overview', title: 'Overview', icon: <BookIcon /> },
    { id: 'my-role', title: 'My Role', icon: <IdBadgeIcon /> },
    { id: 'problem', title: 'Problem', icon: <TargetIcon /> },
    { id: 'research', title: 'Research', icon: <SearchIcon /> },
    { id: 'epiphany', title: 'Epiphany', icon: <LightbulbIcon /> },
    { id: 'process', title: 'Process', icon: <DesignIcon /> },
    { id: 'solution', title: 'Solution', icon: <MicrophoneIcon /> },
    { id: 'results', title: 'Results', icon: <CheckCircleIcon /> },
    { id: 'learnings', title: 'Learnings', icon: <BookIcon /> },
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
      if (timeoutId) clearTimeout(timeoutId);

      sections.forEach((section) => {
        const ref = currentRefs[section.id];
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const scrollToSection = (sectionId) => {
    const element = sectionRefs.current[sectionId];
    if (element) {
      const yOffset = -120;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
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
                <span className="jenesys-text">TumaPay</span>
              </div>
            </div>
            <div className="project-metrics">
              <div className="metric-item">
                <span className="metric-value">100%</span>
                <span className="metric-label">No Reading</span>
              </div>
              <div className="metric-item">
                <span className="metric-value">80%</span>
                <span className="metric-label">Trust Rate</span>
              </div>
              <div className="metric-item">
                <span className="metric-value">4 wks</span>
                <span className="metric-label">Duration</span>
              </div>
            </div>
          </div>
          <h1 className="case-study-title">Designing a Voice-First Fintech Experience for Non-Literate Users</h1>
          <p className="case-study-subtitle">
            As Product Designer for TumaPay, I designed a voice-first mobile money app using local languages and voice pattern recognition to help non-literate users in Ghana perform transactions confidently. No typing, no reading, just conversation.
          </p>
        </div>
      </section>

      <section className="hero-interface-section">
        <div className="hero-interface-container">
          <div className="iphone-mockup">
            <div className="iphone-frame">
              <div className="iphone-notch"></div>
              <div className="iphone-screen">
                <img src="/images/tumapay-placeholder.png" alt="TumaPay Voice Interface" className="mockup-screen-image" />
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
            <div id="overview" ref={(el) => (sectionRefs.current['overview'] = el)} className="content-section">
              <p className="section-label">Overview</p>
              <h2 className="section-title">Making Mobile Money Accessible to Everyone</h2>
              <p className="section-paragraph">
                In Ghana, mobile money is the backbone of financial access. Yet, millions of people (especially older or less educated users) struggle to use MoMo and USSD apps because they require reading, typing, and memorizing numeric codes.
              </p>
              <p className="section-paragraph">
                <strong>Challenge:</strong> How can we make digital finance accessible to users who can't read or type in English?
              </p>
              <div className="meta-info-grid">
                <div className="meta-info-item">
                  <span className="meta-label">Role</span>
                  <span className="meta-value">Product Designer</span>
                </div>
                <div className="meta-info-item">
                  <span className="meta-label">Duration</span>
                  <span className="meta-value">4 weeks (ongoing)</span>
                </div>
                <div className="meta-info-item">
                  <span className="meta-label">Tools</span>
                  <span className="meta-value">Figma, FigJam, Cursor, Notion</span>
                </div>
                <div className="meta-info-item">
                  <span className="meta-label">Methods</span>
                  <span className="meta-value">Contextual Inquiry, Usability Testing, Cognitive Walkthroughs</span>
                </div>
              </div>
            </div>

            <div id="my-role" ref={(el) => (sectionRefs.current['my-role'] = el)} className="content-section">
              <p className="section-label">My Role</p>
              <h2 className="section-title">Designing for Accessibility from Day One</h2>

              <div className="role-overview-card">
                <div className="role-meta-grid">
                  <div className="role-meta-item">
                    <span className="role-meta-label">Role</span>
                    <span className="role-meta-value">Product Designer</span>
                  </div>
                  <div className="role-meta-item">
                    <span className="role-meta-label">Duration</span>
                    <span className="role-meta-value">4 weeks (ongoing concept)</span>
                  </div>
                  <div className="role-meta-item">
                    <span className="role-meta-label">Team</span>
                    <span className="role-meta-value">Solo designer with user research participants</span>
                  </div>
                  <div className="role-meta-item">
                    <span className="role-meta-label">Focus</span>
                    <span className="role-meta-value">Voice-First Fintech for Non-Literate Users</span>
                  </div>
                </div>
              </div>

              <div className="role-sections-grid">
                <div className="role-section">
                  <h3>What I Owned</h3>
                  <ul className="role-responsibilities-list">
                    <li>End-to-end UX research and design for voice-first mobile money</li>
                    <li>Contextual inquiry with non-literate users in Ghana (including family members)</li>
                    <li>Voice UI pattern design and local language integration</li>
                    <li>Accessibility-first interaction design (no reading/typing required)</li>
                    <li>Alternative authentication using voice patterns and visual memory</li>
                    <li>Lo-fi to hi-fi prototyping with audio feedback integration</li>
                  </ul>
                </div>

                <div className="role-section">
                  <h3>Research Methods</h3>
                  <ul className="role-collaborators-list">
                    <li><strong>Contextual Inquiry</strong> — Observed users performing transactions on phones</li>
                    <li><strong>Cognitive Walkthroughs</strong> — Simulated USSD menu interactions step by step</li>
                    <li><strong>Usability Testing</strong> — Tested with low-fidelity prototypes and audio prompts</li>
                    <li><strong>The Grandma Test</strong> — If my mom could use it without reading, it passed</li>
                  </ul>
                </div>
              </div>

              <div className="goals-container">
                <h3>Key Contributions</h3>
                <div className="goals-grid">
                  <div className="goal-item">
                    <div className="goal-icon">🎤</div>
                    <div className="goal-content">
                      <h4>Voice-First UX</h4>
                      <p>Designed conversational UI patterns in local languages</p>
                    </div>
                  </div>
                  <div className="goal-item">
                    <div className="goal-icon">🔐</div>
                    <div className="goal-content">
                      <h4>Accessible Auth</h4>
                      <p>Created voice + visual pattern authentication system</p>
                    </div>
                  </div>
                  <div className="goal-item">
                    <div className="goal-icon">♿</div>
                    <div className="goal-content">
                      <h4>Inclusive Design</h4>
                      <p>Zero reading/typing required for all transactions</p>
                    </div>
                  </div>
                  <div className="goal-item">
                    <div className="goal-icon">👵</div>
                    <div className="goal-content">
                      <h4>User Research</h4>
                      <p>Conducted research with real non-literate users</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id="problem" ref={(el) => (sectionRefs.current['problem'] = el)} className="content-section">
              <p className="section-label">Problem Definition</p>
              <h2 className="section-title">The Literacy Gap in Digital Finance</h2>
              <p className="section-paragraph">
                In Ghana, mobile money is the backbone of financial access. Yet, millions of people (especially older or less educated users) struggle to use MoMo and USSD apps because they require reading, typing, and memorizing numeric codes.
              </p>
              <div className="callout-box">
                <p className="callout-text">
                  "My mom can't read or type in English, but she uses WhatsApp voice notes every day in her local language."
                </p>
              </div>
              <p className="section-paragraph">
                That observation exposed a gap: Most fintech products assume text literacy, excluding those who rely on voice as their main communication mode.
              </p>
              <div className="highlight-section">
                <h3 className="highlight-title">Design Question</h3>
                <p className="highlight-text">
                  How might we help non-literate users perform mobile transactions confidently using their voice and local language?
                </p>
              </div>
            </div>

            <div id="research" ref={(el) => (sectionRefs.current['research'] = el)} className="content-section">
              <p className="section-label">Research</p>
              <h2 className="section-title">Understanding the Users</h2>
              
              <h3 className="subsection-title">Methods Used</h3>
              <ul className="content-list">
                <li><strong>Contextual Inquiry:</strong> Observed users (like my mom and market women) while performing transactions on their phones.</li>
                <li><strong>Cognitive Walkthroughs:</strong> Simulated how they interact with USSD menus step by step.</li>
                <li><strong>Usability Testing:</strong> With low-fidelity prototypes and audio prompts.</li>
                <li><strong>The Grandma Test:</strong> If my mom could use it without reading, it passed.</li>
              </ul>

              <h3 className="subsection-title">Key Insights</h3>
              <div className="insight-cards">
                <div className="insight-card">
                  <div className="insight-column">
                    <h4 className="insight-card-title">Observation</h4>
                    <p className="insight-card-text">Users rely on voice communication</p>
                  </div>
                  <div className="insight-column">
                    <h4 className="insight-card-title">Problem</h4>
                    <p className="insight-card-text">Can't read text menus</p>
                  </div>
                  <div className="insight-column">
                    <h4 className="insight-card-title">Opportunity</h4>
                    <p className="insight-card-text">Use conversational, voice-based UI</p>
                  </div>
                </div>
                <div className="insight-card">
                  <div className="insight-column">
                    <h4 className="insight-card-title">Observation</h4>
                    <p className="insight-card-text">Forget PINs easily</p>
                  </div>
                  <div className="insight-column">
                    <h4 className="insight-card-title">Problem</h4>
                    <p className="insight-card-text">Authentication is frustrating</p>
                  </div>
                  <div className="insight-column">
                    <h4 className="insight-card-title">Opportunity</h4>
                    <p className="insight-card-text">Replace PINs with voice & visual memory</p>
                  </div>
                </div>
                <div className="insight-card">
                  <div className="insight-column">
                    <h4 className="insight-card-title">Observation</h4>
                    <p className="insight-card-text">Fear of errors or scams</p>
                  </div>
                  <div className="insight-column">
                    <h4 className="insight-card-title">Problem</h4>
                    <p className="insight-card-text">Lack of confirmation in USSD</p>
                  </div>
                  <div className="insight-column">
                    <h4 className="insight-card-title">Opportunity</h4>
                    <p className="insight-card-text">Add human-like voice confirmations</p>
                  </div>
                </div>
              </div>
            </div>

            <div id="epiphany" ref={(el) => (sectionRefs.current['epiphany'] = el)} className="content-section">
              <p className="section-label">Epiphany</p>
              <h2 className="section-title">The Interface Should Speak Their Language</h2>
              <p className="section-paragraph">
                I realized that instead of teaching users to read the interface, <strong>the interface should speak their language, literally.</strong>
              </p>
              <p className="section-paragraph">
                That insight led to the concept of <strong>TumaPay</strong>, a voice-first mobile money app that uses spoken prompts, local languages, and voice pattern recognition to create a frictionless experience.
              </p>
              <div className="callout-box">
                <p className="callout-text">
                  "What if users could say 'Send 50 cedis to Abdul' and the app simply understood?"
                </p>
              </div>
            </div>

            <div id="process" ref={(el) => (sectionRefs.current['process'] = el)} className="content-section">
              <p className="section-label">Design Process</p>
              <h2 className="section-title">From Research to Prototype</h2>
              
              <h3 className="subsection-title">Step 1: User Journeys</h3>
              <p className="section-paragraph">
                Mapped how a non-literate user like Amina moves through key moments: onboarding, authentication, and transactions.
              </p>
              
              <div className="process-image-container">
                <img 
                  src="/images/case-studies/tumapay-user-journey.png" 
                  alt="TumaPay User Journey Map" 
                  className="flow-image"
                />
              </div>

              <h3 className="subsection-title">Step 2: User Flows</h3>
              <p className="section-paragraph">Created simple, speech-based flows for:</p>
              
              <h4 className="flow-title">Onboarding & authentication setup</h4>
              <div className="process-image-container">
                <img 
                  src="/images/case-studies/tumapay-flow-onboarding.png" 
                  alt="TumaPay Onboarding Flow" 
                  className="flow-image"
                />
              </div>

              <h4 className="flow-title">Sending money</h4>
              <div className="process-image-container">
                <img 
                  src="/images/case-studies/tumapay-flow-send-money.png" 
                  alt="TumaPay Send Money Flow" 
                  className="flow-image"
                />
              </div>

              <h4 className="flow-title">Buying airtime</h4>
              <div className="process-image-container">
                <img 
                  src="/images/case-studies/tumapay-flow-buy-airtime.png" 
                  alt="TumaPay Buy Airtime Flow" 
                  className="flow-image"
                />
              </div>

              <h4 className="flow-title">Checking balance</h4>
              <div className="process-image-container">
                <img 
                  src="/images/case-studies/tumapay-flow-check-balance.png" 
                  alt="TumaPay Check Balance Flow" 
                  className="flow-image"
                />
              </div>

              <h3 className="subsection-title">Step 3: Low-Fidelity Wireframes</h3>
              <p className="section-paragraph">
                Focused on large visuals, voice interaction states, and color-coded feedback for older users.
              </p>

              <div className="process-image-container">
                <img 
                  src="/images/case-studies/tumapay-lofi-wireframes.png" 
                  alt="TumaPay Low-Fidelity Wireframes" 
                  className="flow-image"
                />
              </div>

              <h3 className="subsection-title">Step 4: High-Fidelity UI Design</h3>
              <p className="section-paragraph">
                Adopted MTN's visual identity (yellow, black, capsule buttons) while improving accessibility:
              </p>
              <ul className="content-list">
                <li>Large, rounded buttons (≥60px)</li>
                <li>Dark text on bright yellow for contrast</li>
                <li>Familiar animal icons for pattern-based login</li>
                <li>Voice assistant persona "Amina"</li>
              </ul>

              <div className="process-image-container">
                <img 
                  src="/images/case-studies/tumapay-hifi-screens.png" 
                  alt="TumaPay High-Fidelity UI Screens" 
                  className="flow-image"
                />
              </div>

              <h3 className="subsection-title">Step 5: Prototyping</h3>
              <p className="section-paragraph" style={{ textAlign: 'center', fontStyle: 'italic', color: '#999', marginTop: '40px' }}>
                Coming soon...
              </p>
            </div>

            <div id="solution" ref={(el) => (sectionRefs.current['solution'] = el)} className="content-section">
              <p className="section-label">The Solution</p>
              <h2 className="section-title">No Typing. No Reading. Just Conversation.</h2>
              <p className="section-paragraph">TumaPay lets users:</p>
              <ul className="content-list">
                <li><strong>Speak their intent:</strong> "Send 50 cedis to Abdul."</li>
                <li><strong>Authenticate using voice phrase + visual animal pattern.</strong></li>
                <li><strong>Receive voice confirmation and friendly sound feedback (e.g., drumbeat).</strong></li>
              </ul>
              <div className="highlight-section">
                <p className="highlight-text centered">
                  🗝️ <strong>No typing. No reading. Just conversation.</strong>
                </p>
              </div>
            </div>

            <div id="results" ref={(el) => (sectionRefs.current['results'] = el)} className="content-section">
              <p className="section-label">Results & Feedback</p>
              <h2 className="section-title">Early Impact</h2>
              
              <div className="impact-metrics">
                <div className="impact-metric">
                  <div className="impact-number">100%</div>
                  <p className="impact-description">of users could initiate a transaction without reading</p>
                </div>
                <div className="impact-metric">
                  <div className="impact-number">80%</div>
                  <p className="impact-description">said they "trusted" the app after hearing confirmation in their own language</p>
                </div>
                <div className="impact-metric">
                  <div className="impact-number">All</div>
                  <p className="impact-description">participants found animal-pattern authentication easier than PINs</p>
                </div>
              </div>
            </div>

            <div id="learnings" ref={(el) => (sectionRefs.current['learnings'] = el)} className="content-section">
              <p className="section-label">Learnings & Next Steps</p>
              <h2 className="section-title">What I Learned</h2>
              
              <h3 className="subsection-title">Key Learnings</h3>
              <ul className="content-list">
                <li><strong>Accessibility isn't just a feature; it's a design philosophy.</strong></li>
                <li><strong>Security can be human-centered</strong> when built around familiar cues.</li>
                <li><strong>Designing for one user</strong> (my mom) uncovered insights for millions.</li>
              </ul>

              <h3 className="subsection-title">Next Steps</h3>
              <ul className="content-list">
                <li>Integrate live voice pattern recognition</li>
                <li>Conduct large-scale usability testing</li>
                <li>Publish full case study on Inclusive Fintech UX for Low-Literacy Users</li>
              </ul>

              <div className="callout-box reflection">
                <h3 className="reflection-heading">Closing Reflection</h3>
                <p className="callout-text">
                  This project reminded me that great design is not just about aesthetics or technology, it's about empathy.
                  When your mom can use your app confidently, you've passed the Grandma Test.
                </p>
                <p className="callout-text quote">
                  "If my mom can do it, anyone can."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TumaPayCaseStudy;
