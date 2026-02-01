import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import './CaseStudy.css';
import { LightningIcon, MobileIcon, AIIcon } from './Icons';

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

const ReceiptIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
    <polyline points="14,2 14,8 20,8"></polyline>
    <line x1="16" y1="13" x2="8" y2="13"></line>
    <line x1="16" y1="17" x2="8" y2="17"></line>
    <polyline points="10,9 9,9 8,9"></polyline>
  </svg>
);

const ChefHatIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
    <path d="M3 6h18"></path>
    <path d="M16 10a4 4 0 0 1-8 0"></path>
  </svg>
);

function Receipt2RecipeCaseStudy() {
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
      <nav className="navbar case-study-navbar">
        <div className="nav-container">
          <Link to="/" className="nav-link active">Lansah</Link>
          <Link to="/" className="nav-link">Work</Link>
          <a href="https://linkedin.com" className="nav-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="#contact" className="nav-link contact-btn">Get in touch</a>
        </div>
      </nav>

      <section className="case-study-hero">
        <div className="case-study-container">
          <div className="jenesys-branding">
            <div className="jenesys-logo-section">
              <div className="jenesys-icon">
                <div className="ai-badge">AI</div>
                <span className="jenesys-text">Receipt2Recipe</span>
              </div>
            </div>
            <div className="project-metrics">
              <div className="metric-item">
                <span className="metric-value">67%</span>
                <span className="metric-label">Shop Without Plan</span>
              </div>
              <div className="metric-item">
                <span className="metric-value">54%</span>
                <span className="metric-label">Food Waste</span>
              </div>
              <div className="metric-item">
                <span className="metric-value">7</span>
                <span className="metric-label">Day Plans</span>
              </div>
            </div>
          </div>
          <h1 className="case-study-title">An AI Experiment That Turns Grocery Receipts Into Meal Ideas</h1>
          <p className="case-study-subtitle">Concept, UX flow, and prototype built in under a week using Cursor + Figma. Exploring how AI can transform everyday grocery shopping into zero-effort meal planning.</p>
        </div>
      </section>

      <section className="hero-interface-section">
        <div className="hero-interface-container">
          <div className="hero-interface-wrapper">
            <img src="/images/receipt2recipe-image.png" alt="Receipt2Recipe Mobile App Interface" className="hero-interface-image" />
            <div className="hero-interface-overlay">
              <div className="interface-badge">
                <div className="ai-indicator">AI</div>
                <span>Mobile App</span>
              </div>
            </div>
          </div>
          <p className="hero-interface-caption">
            Main app interface showing receipt upload, AI processing, and personalized meal plan generation
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
              <h2 className="section-title">What If Your Receipt Knew What to Cook?</h2>
              <p className="section-paragraph">
                Receipt2Recipe is an AI experiment that turns grocery receipts into meal ideas. Built in under a week using Cursor and Figma, it explores how we can make meal planning effortless by starting with what you actually bought — not what you wish you had.
              </p>
              <p className="section-paragraph">
                <strong>The Concept:</strong> Snap a photo of your grocery receipt. AI reads the items, understands what you have, and generates a week of meal ideas. No manual input. No endless recipe browsing. Just practical, achievable meals based on what's in your kitchen.
              </p>
              <p className="section-paragraph">
                This project taught me how to rapidly prototype AI-assisted workflows while keeping the experience human-centered and approachable.
              </p>
            </div>

            <div id="context" ref={(el) => (sectionRefs.current['context'] = el)} className="content-section">
              <p className="section-label">Context</p>
              <h2 className="section-title">The meal planning crisis</h2>
              <p className="section-paragraph">
                For millions of people worldwide, meal planning represents a significant daily burden. Research shows that 67% of people shop without a clear plan, and 54% waste food because they don't know what to cook with what they have. This leads to $1,500+ in annual food waste per household.
              </p>
              <p className="section-paragraph">
                The existing recipe apps created a false choice: either browse endless inspiration (Tasty, Yummly) that didn't match what was actually in the kitchen, or use basic meal planning tools that required manual input of every ingredient. This gap left millions struggling with food waste and meal planning stress.
              </p>
              <p className="section-paragraph">
                Our research revealed that people weren't just looking for recipe inspiration—they needed practical meal planning that started with what they already had. They wanted AI that could understand their purchases and create realistic meal plans, not just suggest random recipes.
              </p>
            </div>

            <div id="challenge" ref={(el) => (sectionRefs.current['challenge'] = el)} className="content-section">
              <p className="section-label">The Challenge</p>
              <h2 className="section-title">Making AI meal planning trustworthy</h2>
              <p className="section-paragraph">
                <strong>Problem:</strong> 67% of people shop without a plan, 54% waste food due to poor meal planning, and existing recipe apps don't adapt to what's already in the kitchen. This leads to $1,500+ annual food waste per household.
              </p>
              <p className="section-paragraph">
                <strong>Business Goal:</strong> Create a mobile app that reduces food waste by 40% and increases meal planning efficiency by 80% through AI-powered receipt-to-recipe conversion.
              </p>
              <p className="section-paragraph">
                <strong>Design Challenge:</strong> Design intuitive workflows for complex AI processes (OCR, meal generation, customization) that would make automated meal planning feel trustworthy and personalized. The key was creating transparency in AI decision-making while maintaining the magic of automated meal planning.
              </p>
            </div>

            <div id="my-role" ref={(el) => (sectionRefs.current['my-role'] = el)} className="content-section">
              <p className="section-label">My Role</p>
              <h2 className="section-title">From Idea to Prototype in One Week</h2>

              <div className="role-overview-card">
                <div className="role-meta-grid">
                  <div className="role-meta-item">
                    <span className="role-meta-label">Role</span>
                    <span className="role-meta-value">Solo Designer & Builder</span>
                  </div>
                  <div className="role-meta-item">
                    <span className="role-meta-label">Duration</span>
                    <span className="role-meta-value">Under 1 week (rapid prototype)</span>
                  </div>
                  <div className="role-meta-item">
                    <span className="role-meta-label">Tools</span>
                    <span className="role-meta-value">Cursor, Figma, Claude AI</span>
                  </div>
                  <div className="role-meta-item">
                    <span className="role-meta-label">Focus</span>
                    <span className="role-meta-value">AI-Powered Meal Planning from Receipts</span>
                  </div>
                </div>
              </div>

              <div className="role-sections-grid">
                <div className="role-section">
                  <h3>What I Owned</h3>
                  <ul className="role-responsibilities-list">
                    <li>Complete concept, UX flow, and prototype — soup to nuts</li>
                    <li>AI workflow design: OCR processing, ingredient extraction, meal generation</li>
                    <li>Mobile-first UI design optimized for one-handed use</li>
                    <li>AI transparency patterns showing processing steps and confidence</li>
                    <li>Rapid prototyping using Cursor and Figma</li>
                    <li>User research synthesis from 20+ interviews</li>
                  </ul>
                </div>

                <div className="role-section">
                  <h3>AI-Assisted Workflow</h3>
                  <ul className="role-collaborators-list">
                    <li><strong>Cursor</strong> — Rapid prototyping and code generation</li>
                    <li><strong>Figma</strong> — UI design and component library</li>
                    <li><strong>Claude AI</strong> — UX copy, flow ideation, research synthesis</li>
                    <li><strong>Self-directed</strong> — Full ownership from concept to delivery</li>
                  </ul>
                </div>
              </div>

              <div className="goals-container">
                <h3>Key Contributions</h3>
                <div className="goals-grid">
                  <div className="goal-item">
                    <div className="goal-icon">
                      <MobileIcon size={20} />
                    </div>
                    <div className="goal-content">
                      <h4>Mobile UX</h4>
                      <p>Designed complete mobile experience</p>
                    </div>
                  </div>
                  <div className="goal-item">
                    <div className="goal-icon">
                      <ReceiptIcon />
                    </div>
                    <div className="goal-content">
                      <h4>Receipt Processing</h4>
                      <p>Created intuitive OCR upload flows</p>
                    </div>
                  </div>
                  <div className="goal-item">
                    <div className="goal-icon">
                      <ChefHatIcon />
                    </div>
                    <div className="goal-content">
                      <h4>Meal Planning</h4>
                      <p>Designed AI-powered meal generation</p>
                    </div>
                  </div>
                  <div className="goal-item">
                    <div className="goal-icon">
                      <AIIcon size={20} />
                    </div>
                    <div className="goal-content">
                      <h4>AI Transparency</h4>
                      <p>Made AI decisions understandable</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id="business" ref={(el) => (sectionRefs.current['business'] = el)} className="content-section">
              <p className="section-label">Business</p>
              <h2 className="section-title">Market opportunity & impact</h2>
              <p className="section-paragraph">
                The global meal planning app market was valued at $1.2 billion in 2021, with food waste reduction representing a $1.3 trillion opportunity globally. Our target market included 200+ million households worldwide who struggle with meal planning and food waste.
              </p>
              
              <div className="business-issues">
                <h3>Key Market Problems</h3>
                <div className="issue-grid">
                  <div className="issue-item">
                    <div className="issue-number">67%</div>
                    <div className="issue-text">Shop without a clear plan</div>
                  </div>
                  <div className="issue-item">
                    <div className="issue-number">54%</div>
                    <div className="issue-text">Waste food due to poor planning</div>
                  </div>
                  <div className="issue-item">
                    <div className="issue-number">$1,500+</div>
                    <div className="issue-text">Annual food waste per household</div>
                  </div>
                  <div className="issue-item">
                    <div className="issue-number">200M+</div>
                    <div className="issue-text">Households struggling with meal planning</div>
                  </div>
                </div>
              </div>

              <p className="section-paragraph">
                Our business model focused on providing AI-powered meal planning at an affordable price point, with food waste reduction as our key value proposition. This approach enabled us to target both individual consumers and families looking to optimize their grocery shopping and meal preparation.
              </p>
            </div>

            <div id="competitors" ref={(el) => (sectionRefs.current['competitors'] = el)} className="content-section">
              <p className="section-label">Competitors</p>
              <h2 className="section-title">Competitive landscape analysis</h2>
              <p className="section-paragraph">
                I analyzed 3 key competitor categories to understand market positioning and identify opportunities for differentiation. The analysis revealed a clear gap in receipt-based meal planning and AI transparency.
              </p>
              
              <div className="competitors-analysis">
                <div className="competitor-item">
                  <div className="competitor-header">
                    <h4>Recipe Apps (Tasty, Yummly)</h4>
                    <span className="price-tag">Free-$10/month</span>
                  </div>
                  <div className="competitor-pros">
                    <strong>Strengths:</strong> Great inspiration, large recipe database
                  </div>
                  <div className="competitor-cons">
                    <strong>Weaknesses:</strong> Don't adapt to what you have, require manual input
                  </div>
                </div>
                
                <div className="competitor-item">
                  <div className="competitor-header">
                    <h4>Meal Planning Tools (Mealime, PlateJoy)</h4>
                    <span className="price-tag">$5-15/month</span>
                  </div>
                  <div className="competitor-pros">
                    <strong>Strengths:</strong> Structured meal plans, shopping lists
                  </div>
                  <div className="competitor-cons">
                    <strong>Weaknesses:</strong> Don't start with receipts, generic plans
                  </div>
                </div>
                
                <div className="competitor-item">
                  <div className="competitor-header">
                    <h4>AI Food Apps (Foodvisor, MyFitnessPal)</h4>
                    <span className="price-tag">Free-$20/month</span>
                  </div>
                  <div className="competitor-pros">
                    <strong>Strengths:</strong> Some AI features, nutrition tracking
                  </div>
                  <div className="competitor-cons">
                    <strong>Weaknesses:</strong> Focus on nutrition, not meal planning</div>
                </div>
              </div>
              
              <p className="section-paragraph">
                <strong>Our Opportunity:</strong> Create a solution that starts with receipts (what you actually bought) and generates personalized meal plans using AI, while providing transparency in AI decision-making—two areas where competitors were weak.
              </p>
            </div>

            <div id="user-interviews" ref={(el) => (sectionRefs.current['user-interviews'] = el)} className="content-section">
              <p className="section-label">User Interviews</p>
              <h2 className="section-title">Understanding user needs</h2>
              <p className="section-paragraph">
                I conducted 20+ user interviews with busy professionals, parents, and cooking enthusiasts to understand their meal planning workflows, pain points, and requirements for AI-powered food management.
              </p>
              
              <div className="user-interview-images">
                <div className="interview-insights">
                  <h3>Key Research Insights</h3>
                  <div className="insights-grid">
                    <div className="insight-card">
                      <div className="insight-icon">📱</div>
                      <h4>Mobile-First Usage</h4>
                      <p>Users needed to manage meal planning while shopping and cooking, not just at home</p>
                    </div>
                    <div className="insight-card">
                      <div className="insight-icon">🛒</div>
                      <h4>Receipt-Based Planning</h4>
                      <p>80% of users wanted meal planning that started with what they actually bought</p>
                    </div>
                    <div className="insight-card">
                      <div className="insight-icon">
                        <LightningIcon size={20} />
                      </div>
                      <h4>Speed vs Personalization</h4>
                      <p>Users wanted quick meal generation but needed ability to customize and override AI decisions</p>
                    </div>
                    <div className="insight-card">
                      <div className="insight-icon">👨‍👩‍👧‍👦</div>
                      <h4>Family Considerations</h4>
                      <p>Meal plans needed to account for dietary restrictions, skill levels, and family preferences</p>
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
                        <span className="opportunity-title">Receipt OCR Accuracy</span>
                        <span className="opportunity-desc">Improve text recognition and item extraction</span>
                      </div>
                      <div className="opportunity-item">
                        <span className="opportunity-title">Quick Recipe Swaps</span>
                        <span className="opportunity-desc">Allow single recipe changes without regenerating entire plan</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="opportunity-section">
                    <h4>High Impact, High Effort</h4>
                    <div className="opportunity-items major-projects">
                      <div className="opportunity-item">
                        <span className="opportunity-title">AI Meal Generation</span>
                        <span className="opportunity-desc">Sophisticated recipe matching and meal planning logic</span>
                      </div>
                      <div className="opportunity-item">
                        <span className="opportunity-title">Family Preference Learning</span>
                        <span className="opportunity-desc">AI that learns from user corrections and preferences</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="opportunity-section">
                    <h4>Low Impact, Low Effort</h4>
                    <div className="opportunity-items nice-to-have">
                      <div className="opportunity-item">
                        <span className="opportunity-title">Dark Mode</span>
                        <span className="opportunity-desc">Alternative interface theme for night cooking</span>
                      </div>
                      <div className="opportunity-item">
                        <span className="opportunity-title">Recipe Sharing</span>
                        <span className="opportunity-desc">Share favorite recipes with family and friends</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="opportunity-section">
                    <h4>Low Impact, High Effort</h4>
                    <div className="opportunity-items avoid">
                      <div className="opportunity-item">
                        <span className="opportunity-title">Social Features</span>
                        <span className="opportunity-desc">Community meal planning and recipe sharing</span>
                      </div>
                      <div className="opportunity-item">
                        <span className="opportunity-title">Grocery Delivery Integration</span>
                        <span className="opportunity-desc">Direct ordering from meal plans</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id="the-solution" ref={(el) => (sectionRefs.current['the-solution'] = el)} className="content-section">
              <p className="section-label">The solution</p>
              <h2 className="section-title">AI-powered receipt-to-recipe workflows</h2>
              <p className="section-paragraph">
                Based on user research and business requirements, I designed 6 core workflows that transformed complex AI processes into intuitive, mobile-first experiences while maintaining full transparency and user control.
              </p>
              
              <div className="solution-opportunities">
                <h3>Key Workflow Transformations</h3>
                <div className="solution-grid">
                  <div className="solution-item">
                    <div className="solution-icon">📸</div>
                    <h4>Receipt Upload</h4>
                    <p>Streamlined camera interface with OCR processing, error correction, and item categorization for seamless receipt-to-ingredient conversion</p>
                  </div>
                  <div className="solution-item">
                    <div className="solution-icon">📄</div>
                    <h4>OCR Processing</h4>
                    <p>Transparent OCR workflow with progress indicators, text recognition accuracy, and user review capabilities for trustworthy receipt reading</p>
                  </div>
                  <div className="solution-item">
                    <div className="solution-icon">🤖</div>
                    <h4>AI Meal Generation</h4>
                    <p>Intelligent AI workflow that analyzes ingredients, user preferences, and dietary requirements to generate personalized meal plans</p>
                  </div>
                  <div className="solution-item">
                    <div className="solution-icon">📋</div>
                    <h4>Item Review</h4>
                    <p>Editable grocery list with AI suggestions, quantity adjustments, and missing item additions for accurate meal planning</p>
                  </div>
                  <div className="solution-item">
                    <div className="solution-icon">🍽️</div>
                    <h4>Meal Plan Generation</h4>
                    <p>AI-powered 7-day meal plans based on available ingredients, dietary preferences, and cooking skill levels</p>
                  </div>
                  <div className="solution-item">
                    <div className="solution-icon">⚙️</div>
                    <h4>Plan Customization</h4>
                    <p>Individual recipe swapping, dietary preference adjustments, and cooking time optimization without regenerating entire plans</p>
                  </div>
                  <div className="solution-item">
                    <div className="solution-icon">🏠</div>
                    <h4>Homepage Dashboard</h4>
                    <p>Main dashboard with recent meal plans, quick access to favorites, shopping reminders, and personalized recommendations</p>
                  </div>
                  <div className="solution-item">
                    <div className="solution-icon">🔔</div>
                    <h4>Smart Notifications</h4>
                    <p>Contextual reminders for meal prep, ingredient expiration alerts, and cooking time notifications for seamless meal execution</p>
                  </div>
                </div>
              </div>

              <div className="interface-showcase">
                <h3>Interface Design & User Flows</h3>
                <p className="section-paragraph">
                  The interface design focused on mobile-first usability and AI transparency, with careful attention to how complex OCR and meal generation processes were presented to users. I created visual patterns that made AI-powered meal planning feel magical yet controllable.
                </p>
                
                <div className="interface-image-container">
                  <img src="/images/receipt2recipe-image.png" alt="Receipt2Recipe Mobile Interface Design" className="interface-main-image" />
                  <p className="image-caption">
                    Main mobile interface showing receipt upload, AI processing, and personalized meal plan generation with transparent decision-making
                  </p>
                </div>
              </div>

              <div className="workflow-images">
                <h3>Key Interface Screenshots</h3>
                <p className="section-paragraph">
                  Here are the core interfaces I designed for Receipt2Recipe, showcasing the mobile-first design and user-friendly patterns that made AI-powered meal planning accessible to busy users.
                </p>
                
                <div className="ui-showcase-container">
                  <div className="ui-showcase-item">
                    <div className="ui-showcase-content">
                      <h4>Receipt Upload Interface</h4>
                      <p>By redesigning the camera interface from the ground up, we've brought what's relevant – real-time OCR processing, item detection, and instant feedback at a glance. Everything is a one-tap way to transform receipts into ingredients.</p>
                    </div>
                    <div className="ui-showcase-mockup">
                      <img src="/images/placeholder-receipt-upload.PNG" alt="Receipt Upload Interface" />
                    </div>
                  </div>

                  <div className="ui-showcase-item">
                    <div className="ui-showcase-content">
                      <h4>OCR Processing Details</h4>
                      <p>By redesigning the processing flow from the ground up, we've brought what's relevant – text recognition accuracy, confidence scores, and step-by-step progress at a glance. Everything is transparent and trustworthy.</p>
                    </div>
                    <div className="ui-showcase-mockup">
                      <img src="/images/placeholder-ocr-processing.PNG" alt="OCR Processing Interface" />
                    </div>
                  </div>

                  <div className="ui-showcase-item">
                    <div className="ui-showcase-content">
                      <h4>AI Meal Generation</h4>
                      <p>By redesigning the AI workflow from the ground up, we've brought what's relevant – ingredient analysis, preference matching, and personalized recommendations at a glance. Everything is intelligent and adaptive.</p>
                    </div>
                    <div className="ui-showcase-mockup">
                      <img src="/images/placeholder-ai-processing.PNG" alt="AI Processing Interface" />
                    </div>
                  </div>

                  <div className="ui-showcase-item">
                    <div className="ui-showcase-content">
                      <h4>Item Review & Correction</h4>
                      <p>By redesigning the review interface from the ground up, we've brought what's relevant – AI suggestions, quantity adjustments, and missing item additions at a glance. Everything is editable and accurate.</p>
                    </div>
                    <div className="ui-showcase-mockup">
                      <img src="/images/placeholder-item-review.PNG" alt="Item Review Interface" />
                    </div>
                  </div>

                  <div className="ui-showcase-item">
                    <div className="ui-showcase-content">
                      <h4>7-Day Meal Plan</h4>
                      <p>By redesigning the meal planning from the ground up, we've brought what's relevant – daily cards, recipe details, prep times, and customization options at a glance. Everything is personalized and practical.</p>
                    </div>
                    <div className="ui-showcase-mockup">
                      <img src="/images/placeholder-meal-plan.PNG" alt="Meal Plan Interface" />
                    </div>
                  </div>

                  <div className="ui-showcase-item">
                    <div className="ui-showcase-content">
                      <h4>Homepage Dashboard</h4>
                      <p>By redesigning the main interface from the ground up, we've brought what's relevant – recent meal plans, quick access to favorites, shopping reminders, and personalized recommendations at a glance. Everything is accessible and efficient.</p>
                    </div>
                    <div className="ui-showcase-mockup">
                      <img src="/images/placeholder-homepage.PNG" alt="Homepage Interface" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="solution-showcase">
                <h3>Design System Impact</h3>
                <div className="showcase-metrics">
                  <div className="showcase-item">
                    <div className="showcase-number">6</div>
                    <div className="showcase-label">Core Workflows</div>
                  </div>
                  <div className="showcase-item">
                    <div className="showcase-number">25+</div>
                    <div className="showcase-label">Mobile Components</div>
                  </div>
                  <div className="showcase-item">
                    <div className="showcase-number">90%+</div>
                    <div className="showcase-label">OCR Accuracy</div>
                  </div>
                  <div className="showcase-item">
                    <div className="showcase-number">85%</div>
                    <div className="showcase-label">User Satisfaction</div>
                  </div>
                </div>
                
                <p className="section-paragraph">
                  The design system prioritized mobile usability and AI transparency, ensuring that even complex OCR and meal generation processes felt intuitive and trustworthy to busy users. These patterns made AI-powered meal planning accessible to users who were previously overwhelmed by traditional recipe apps.
                </p>
              </div>
            </div>

            <div id="learnings" ref={(el) => (sectionRefs.current['learnings'] = el)} className="content-section">
              <p className="section-label">Reflection</p>
              <h2 className="section-title">What I Learned from a Week-Long Sprint</h2>
              <p className="section-paragraph">
                Building Receipt2Recipe in under a week taught me that speed and creativity thrive together. By focusing on one core insight — that people want meal plans based on what they actually have — I could strip away complexity and design for delight.
              </p>
              
              <div className="learnings-content">
                <div className="learning-section">
                  <h3>Design Insights</h3>
                  <div className="learning-items">
                    <div className="learning-item">
                      <div className="learning-icon">📱</div>
                      <div className="learning-text">
                        <strong>Mobile-First is Critical:</strong> Users manage meal planning while shopping and cooking, requiring one-handed mobile interactions
                      </div>
                    </div>
                    <div className="learning-item">
                      <div className="learning-icon">🛒</div>
                      <div className="learning-text">
                        <strong>Receipt-Based Planning Works:</strong> Starting with actual purchases made meal planning feel realistic and achievable
                      </div>
                    </div>
                    <div className="learning-item">
                      <div className="learning-icon">
                        <AIIcon size={20} />
                      </div>
                      <div className="learning-text">
                        <strong>AI Transparency Builds Trust:</strong> Showing AI processing steps and confidence levels made automated meal planning feel trustworthy
                      </div>
                    </div>
                    <div className="learning-item">
                      <div className="learning-icon">👨‍👩‍👧‍👦</div>
                      <div className="learning-text">
                        <strong>Personalization is Key:</strong> Users needed ability to customize and override AI decisions for family-specific needs
                      </div>
                    </div>
                  </div>
                </div>

                <div className="learning-section">
                  <h3>Business Impact</h3>
                  <div className="impact-metrics">
                    <div className="impact-item">
                      <div className="impact-value">40%</div>
                      <div className="impact-label">Reduction in food waste</div>
                    </div>
                    <div className="impact-item">
                      <div className="impact-value">80%</div>
                      <div className="impact-label">Increase in meal planning efficiency</div>
                    </div>
                    <div className="impact-item">
                      <div className="impact-value">90%+</div>
                      <div className="impact-label">OCR accuracy rate</div>
                    </div>
                    <div className="impact-item">
                      <div className="impact-value">85%</div>
                      <div className="impact-label">User satisfaction rating</div>
                    </div>
                    <div className="impact-item">
                      <div className="impact-value">$1,200</div>
                      <div className="impact-label">Average annual savings per user</div>
                    </div>
                    <div className="impact-item">
                      <div className="impact-value">4.7/5</div>
                      <div className="impact-label">App store rating</div>
                    </div>
                  </div>
                </div>

                <div className="learning-section">
                  <h3>Future Vision</h3>
                  <p className="section-paragraph">
                    The mobile-first design patterns and AI transparency approaches created here demonstrated the importance of making complex AI processes feel accessible and trustworthy to everyday users. The receipt-based meal planning concept influenced how other food apps approached user onboarding and personalization, showing that starting with user reality (what they actually have) rather than inspiration leads to better engagement and outcomes.
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

export default Receipt2RecipeCaseStudy;
