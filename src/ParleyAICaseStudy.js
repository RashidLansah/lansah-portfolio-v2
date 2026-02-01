import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import './CaseStudy.css';
import { LightningIcon } from './Icons';

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

const BrainIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path>
    <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path>
    <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path>
    <path d="M17.599 6.5a3 3 0 0 0 .399-1.375"></path>
    <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path>
    <path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path>
    <path d="M19.938 10.5a4 4 0 0 1 .585.396"></path>
    <path d="M6 18a4 4 0 0 1-1.967-.516"></path>
    <path d="M19.967 17.484A4 4 0 0 1 18 18"></path>
  </svg>
);

function ParleyAICaseStudy() {
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
                <div className="parley-badge">
                  <BrainIcon />
                </div>
                <span className="jenesys-text">Parley AI</span>
              </div>
            </div>
            <div className="project-metrics">
              <div className="metric-item">
                <span className="metric-value">Multi-LLM</span>
                <span className="metric-label">Deliberation</span>
              </div>
              <div className="metric-item">
                <span className="metric-value">3-Stage</span>
                <span className="metric-label">Process</span>
              </div>
              <div className="metric-item">
                <span className="metric-value">Live</span>
                <span className="metric-label">Product</span>
              </div>
            </div>
          </div>
          <h1 className="case-study-title">Smarter Answers Through AI Deliberation</h1>
          <p className="case-study-subtitle">
            Designed the UX for a multi-model AI platform where GPT-4, Claude, and Gemini collaborate
            to deliver higher-quality, bias-free answers through a transparent deliberation process.
          </p>
        </div>
      </section>

      <section className="hero-interface-section">
        <div className="hero-interface-container">
          <div className="hero-interface-wrapper parley-interface">
            <img src="/images/parley-app-preview.svg" alt="Parley AI Interface" className="hero-interface-image" />
            <div className="hero-interface-overlay">
              <div className="interface-badge">
                <div className="parley-indicator">
                  <BrainIcon />
                </div>
                <span>Council of LLMs</span>
              </div>
            </div>
          </div>
          <p className="hero-interface-caption">
            AI deliberation platform where multiple models collaborate to produce thoughtful, well-reasoned responses
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
              <h2 className="section-title">A Council of AI Models Working Together</h2>
              <p className="section-paragraph">
                Parley AI is a revolutionary platform that brings together multiple leading AI models — GPT-4, Claude, Gemini,
                and more — to deliberate on your questions and synthesize the best possible answers. Instead of relying on a
                single AI that might hallucinate or have blind spots, Parley creates a "council of LLMs" that independently
                analyze, peer-review, and synthesize responses.
              </p>
              <p className="section-paragraph">
                <strong>The Challenge:</strong> Single AI models can hallucinate, have knowledge gaps, or provide biased
                responses. Users had no way to get multiple AI perspectives without manually copying questions across
                different platforms and comparing responses themselves.
              </p>
              <p className="section-paragraph">
                <strong>The Solution:</strong> A three-stage deliberation process where AI models first respond independently,
                then anonymously peer-review each other's answers, and finally a chairman model synthesizes the best insights
                into one comprehensive, well-reasoned response.
              </p>
            </div>

            {/* MY ROLE SECTION */}
            <div id="my-role" ref={(el) => (sectionRefs.current['my-role'] = el)} className="content-section">
              <p className="section-label">My Role</p>
              <h2 className="section-title">Designing Trust in AI Systems</h2>

              <div className="role-overview-card">
                <div className="role-meta-grid">
                  <div className="role-meta-item">
                    <span className="role-meta-label">Role</span>
                    <span className="role-meta-value">Product Designer</span>
                  </div>
                  <div className="role-meta-item">
                    <span className="role-meta-label">Duration</span>
                    <span className="role-meta-value">2 months (MVP Launch)</span>
                  </div>
                  <div className="role-meta-item">
                    <span className="role-meta-label">Platform</span>
                    <span className="role-meta-value">Web Application</span>
                  </div>
                  <div className="role-meta-item">
                    <span className="role-meta-label">Status</span>
                    <span className="role-meta-value">Live at tryparleyai.app</span>
                  </div>
                </div>
              </div>

              <div className="role-sections-grid">
                <div className="role-section">
                  <h3>What I Owned</h3>
                  <ul className="role-responsibilities-list">
                    <li>End-to-end UX design for the deliberation interface</li>
                    <li>Conversation and history management patterns</li>
                    <li>Transparency visualization for the 3-stage process</li>
                    <li>Pricing and onboarding flow design</li>
                    <li>Landing page and marketing site design</li>
                    <li>Dark mode UI system with accessibility considerations</li>
                  </ul>
                </div>

                <div className="role-section">
                  <h3>Collaborated With</h3>
                  <ul className="role-collaborators-list">
                    <li><strong>Founder/Engineer</strong> — Product vision, technical architecture</li>
                    <li><strong>AI/ML Team</strong> — Model selection, deliberation logic</li>
                    <li><strong>Beta Users</strong> — Feedback on deliberation transparency</li>
                  </ul>
                </div>
              </div>

              <div className="goals-container">
                <h3>Key Contributions</h3>
                <div className="goals-grid">
                  <div className="goal-item">
                    <div className="goal-icon">
                      <BrainIcon />
                    </div>
                    <div className="goal-content">
                      <h4>Multi-Model UX</h4>
                      <p>Designed intuitive interface for AI collaboration</p>
                    </div>
                  </div>
                  <div className="goal-item">
                    <div className="goal-icon">👁️</div>
                    <div className="goal-content">
                      <h4>Transparency Design</h4>
                      <p>Made AI deliberation process visible and trustworthy</p>
                    </div>
                  </div>
                  <div className="goal-item">
                    <div className="goal-icon">🎨</div>
                    <div className="goal-content">
                      <h4>Dark Mode UI</h4>
                      <p>Premium, accessible interface design</p>
                    </div>
                  </div>
                  <div className="goal-item">
                    <div className="goal-icon">
                      <LightningIcon size={20} />
                    </div>
                    <div className="goal-content">
                      <h4>Quick Prompts</h4>
                      <p>Streamlined entry points for new users</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* PROBLEM SECTION */}
            <div id="problem" ref={(el) => (sectionRefs.current['problem'] = el)} className="content-section">
              <p className="section-label">The Problem</p>
              <h2 className="section-title">Single AI Models Have Limitations</h2>
              <p className="section-paragraph">
                Users relying on a single AI assistant face several challenges that can lead to poor decisions
                or incomplete information.
              </p>

              <div className="business-issues">
                <h3>Core Pain Points</h3>
                <div className="issue-grid">
                  <div className="issue-item">
                    <div className="issue-number">01</div>
                    <div className="issue-text">AI hallucinations lead to confidently wrong answers with no way to verify</div>
                  </div>
                  <div className="issue-item">
                    <div className="issue-number">02</div>
                    <div className="issue-text">Single model bias and knowledge gaps create blind spots in responses</div>
                  </div>
                  <div className="issue-item">
                    <div className="issue-number">03</div>
                    <div className="issue-text">Manually comparing answers across multiple AI platforms is time-consuming</div>
                  </div>
                  <div className="issue-item">
                    <div className="issue-number">04</div>
                    <div className="issue-text">No transparency into how AI arrives at its conclusions</div>
                  </div>
                </div>
              </div>

              <p className="section-paragraph">
                The opportunity was clear: create a platform that harnesses the collective intelligence of multiple
                AI models while making the deliberation process transparent and trustworthy.
              </p>
            </div>

            {/* RESEARCH SECTION */}
            <div id="research" ref={(el) => (sectionRefs.current['research'] = el)} className="content-section">
              <p className="section-label">Research</p>
              <h2 className="section-title">Understanding AI Power Users</h2>
              <p className="section-paragraph">
                We conducted research with professionals who regularly use AI tools for decision-making
                to understand their workflows, pain points, and trust concerns.
              </p>

              <div className="insights-grid">
                <div className="insight-card">
                  <div className="insight-icon">🔄</div>
                  <div>
                    <h4>Multi-Platform Workflow</h4>
                    <p>"I often ask the same question to ChatGPT, Claude, and Gemini, then mentally synthesize the best answer."</p>
                  </div>
                </div>
                <div className="insight-card">
                  <div className="insight-icon">🎭</div>
                  <div>
                    <h4>Hallucination Anxiety</h4>
                    <p>"I've been burned before by AI giving me confidently wrong information. Now I always double-check."</p>
                  </div>
                </div>
                <div className="insight-card">
                  <div className="insight-icon">📊</div>
                  <div>
                    <h4>Transparency Need</h4>
                    <p>"I want to understand how the AI arrived at its answer, not just get a black box response."</p>
                  </div>
                </div>
                <div className="insight-card">
                  <div className="insight-icon">⚡</div>
                  <div>
                    <h4>Time Constraints</h4>
                    <p>"Comparing multiple AI responses takes too long. I need a faster way to get reliable answers."</p>
                  </div>
                </div>
              </div>
            </div>

            {/* PROCESS SECTION */}
            <div id="process" ref={(el) => (sectionRefs.current['process'] = el)} className="content-section">
              <p className="section-label">Process</p>
              <h2 className="section-title">Designing for Transparency and Trust</h2>
              <p className="section-paragraph">
                The design process focused on making the three-stage deliberation process feel intuitive and trustworthy,
                while maintaining a premium, modern aesthetic.
              </p>

              <div className="goals-grid">
                <div className="goal-item">
                  <div className="goal-icon parley-step">1</div>
                  <div className="goal-content">
                    <h4>Independent Responses</h4>
                    <p>Multiple AI models answer independently, bringing diverse perspectives</p>
                  </div>
                </div>
                <div className="goal-item">
                  <div className="goal-icon parley-step">2</div>
                  <div className="goal-content">
                    <h4>Anonymous Peer Review</h4>
                    <p>Models evaluate and rank each other's responses without bias</p>
                  </div>
                </div>
                <div className="goal-item">
                  <div className="goal-icon parley-step">3</div>
                  <div className="goal-content">
                    <h4>Final Synthesis</h4>
                    <p>Chairman model synthesizes best insights into comprehensive answer</p>
                  </div>
                </div>
                <div className="goal-item">
                  <div className="goal-icon">✅</div>
                  <div className="goal-content">
                    <h4>Full Transparency</h4>
                    <p>Users can see every model's response and how they ranked each other</p>
                  </div>
                </div>
              </div>
            </div>

            {/* SOLUTION SECTION */}
            <div id="solution" ref={(el) => (sectionRefs.current['solution'] = el)} className="content-section">
              <p className="section-label">The Solution</p>
              <h2 className="section-title">A Council of LLMs at Your Service</h2>
              <p className="section-paragraph">
                Parley AI delivers smarter answers through a transparent deliberation process. Users get
                the benefits of multiple AI perspectives without the manual work of comparing responses.
              </p>

              <div className="solution-grid">
                <div className="solution-item">
                  <div className="solution-icon">🧠</div>
                  <h4>Multi-Model Council</h4>
                  <p>GPT-4, Claude, Gemini, and more working together on every question</p>
                </div>
                <div className="solution-item">
                  <div className="solution-icon">👁️</div>
                  <h4>Transparent Process</h4>
                  <p>See every model's response and how they ranked each other</p>
                </div>
                <div className="solution-item">
                  <div className="solution-icon">🎯</div>
                  <h4>Reduced Hallucinations</h4>
                  <p>When models agree, you can be more confident. Disagreements are surfaced.</p>
                </div>
                <div className="solution-item">
                  <div className="solution-icon">🔓</div>
                  <h4>No Vendor Lock-in</h4>
                  <p>Access the best of all AI providers without switching platforms</p>
                </div>
              </div>
            </div>

            {/* RESULTS SECTION */}
            <div id="results" ref={(el) => (sectionRefs.current['results'] = el)} className="content-section">
              <p className="section-label">Results & Impact</p>
              <h2 className="section-title">Launching a New AI Paradigm</h2>
              <p className="section-paragraph">
                Parley AI successfully launched with a freemium model, attracting users who value
                high-quality, verified AI responses.
              </p>

              <div className="impact-metrics">
                <div className="impact-metric">
                  <div className="impact-number">Live</div>
                  <p className="impact-description">Successfully launched at tryparleyai.app</p>
                </div>
                <div className="impact-metric">
                  <div className="impact-number">3-Stage</div>
                  <p className="impact-description">Unique deliberation process differentiating from competitors</p>
                </div>
                <div className="impact-metric">
                  <div className="impact-number">Multi-LLM</div>
                  <p className="impact-description">Integrates GPT-4, Claude, Gemini and more</p>
                </div>
              </div>
            </div>

            {/* LEARNINGS SECTION */}
            <div id="learnings" ref={(el) => (sectionRefs.current['learnings'] = el)} className="content-section">
              <p className="section-label">Learnings</p>
              <h2 className="section-title">Key Takeaways</h2>

              <div className="learning-items">
                <div className="learning-item">
                  <div className="learning-icon">👁️</div>
                  <div className="learning-text">
                    <strong>Transparency Builds Trust:</strong> Making the AI deliberation process visible
                    was the key differentiator. Users valued understanding how answers were generated.
                  </div>
                </div>
                <div className="learning-item">
                  <div className="learning-icon">🎨</div>
                  <div className="learning-text">
                    <strong>Dark Mode Premium Feel:</strong> The dark UI reinforced the sophisticated,
                    technical nature of the product and reduced eye strain for power users.
                  </div>
                </div>
                <div className="learning-item">
                  <div className="learning-icon">⚡</div>
                  <div className="learning-text">
                    <strong>Quick Prompts Lower Barriers:</strong> Pre-built prompt suggestions helped
                    new users immediately understand the platform's value.
                  </div>
                </div>
                <div className="learning-item">
                  <div className="learning-icon">🧠</div>
                  <div className="learning-text">
                    <strong>AI UX is About Trust:</strong> Designing for AI products requires extra attention
                    to building user confidence in system reliability.
                  </div>
                </div>
              </div>

              <div className="callout-box" style={{ marginTop: '40px' }}>
                <p className="callout-text centered">
                  <a href="https://tryparleyai.app" target="_blank" rel="noopener noreferrer" style={{ color: '#000', fontWeight: '700' }}>
                    Try Parley AI at tryparleyai.app →
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

export default ParleyAICaseStudy;
