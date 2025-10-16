import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import MobileMenu from './MobileMenu';
import './Work.css';
import { RecycleIcon, ShoppingIcon, AIIcon, LightningIcon, DesignIcon } from './Icons';

function Work() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="work-page">
      <nav className="navbar">
        <div className="nav-container">
          <Link to="/" className="nav-link">Lansah</Link>
          <Link to="/#highlights" className="nav-link">Highlights</Link>
          <Link to="/work" className="nav-link active">Work</Link>
          <a href="https://linkedin.com/in/rashid-lansah" className="nav-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://calendly.com/rashidlansahadam" className="nav-link" target="_blank" rel="noopener noreferrer">Schedule a call</a>
        </div>
      </nav>
      <MobileMenu />

      <main className="work-main">
        <div className="work-container">
          <div className="work-grid">
            
            {/* Jenesys AI Card */}
            <Link to="/case-study" className="work-card jenesys-card clickable-card">
              <div className="work-card-content">
                <div className="work-card-header">
                  <span className="work-card-label jenesys-label">
                    <span className="ai-badge-small">AI</span>
                    <span>Jenesys</span>
                  </span>
                </div>
                <h2 className="work-card-title">AI Bookkeeping Platform</h2>
                <p className="work-card-description">Designed UX foundation for an AI-powered platform that achieved $1M ARR and 80% adoption rate.</p>
                
                <div className="work-card-image">
                  <div className="interface-preview">
                    <img src="/images/case-studies/jenesys-dashboard.png" alt="Jenesys AI Dashboard" className="work-interface-image" />
                    <div className="work-interface-overlay">
                      <div className="ai-status-badge">
                        <div className="ai-indicator">AI</div>
                        <span>Live</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* TumaPay Card */}
            <Link to="/tumapay-case-study" className="work-card tumapay-card clickable-card">
              <div className="work-card-content">
                <div className="work-card-header">
                  <span className="work-card-label tumapay-label">
                    <span>TumaPay</span>
                  </span>
                </div>
                <h2 className="work-card-title">Voice-First Fintech for Non-Literate Users</h2>
                <p className="work-card-description">Designed a voice-first mobile money app using local languages and voice pattern recognition to help non-literate users in Ghana perform transactions confidently.</p>
                
                <div className="work-card-image">
                  <div className="tumapay-preview">
                    <div className="iphone-mockup-small">
                      <div className="iphone-frame-small">
                        <div className="iphone-notch-small"></div>
                        <div className="iphone-screen-small">
                          <img src="/images/tumapay-placeholder.png" alt="TumaPay Voice Interface" className="tumapay-app-image" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* Tikiti Card */}
            <div className="work-card tikiti-card">
              <div className="work-card-content">
                <div className="work-card-header">
                  <span className="work-card-label">Tikiti</span>
                </div>
                <h2 className="work-card-title">Event Discovery & Ticketing App</h2>
                <p className="work-card-description">Designed an intuitive event discovery platform that simplifies ticket booking with seamless user experience and modern interface design.</p>
                
                <div className="work-card-image">
                  <div className="tikiti-preview">
                    <img src="/images/tikiti-app-preview.svg" alt="Tikiti App Interface" className="tikiti-app-image" />
                    <div className="tikiti-overlay">
                      <div className="tikiti-badge">
                        <span>🎫</span>
                        <span>Live App</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* BorlaPay Card */}
            <Link to="/borlapay-case-study" className="work-card borlapay-card clickable-card">
              <div className="work-card-content">
                <div className="work-card-header">
                  <span className="work-card-label borlapay-label">
                    <span className="recycle-badge-small">
                      <RecycleIcon size={16} />
                    </span>
                    <span>BorlaPay</span>
                  </span>
                </div>
                <h2 className="work-card-title">Recycle more, earn more</h2>
                <p className="work-card-description">A mobile-first recycling incentive platform that transforms waste management through gamified rewards and community-driven collection networks.</p>
                
                <div className="work-card-image">
                  <div className="borlapay-preview">
                    <img src="/images/borlapay-full-image.svg" alt="BorlaPay Mobile App Interface" className="borlapay-app-image" />
                  </div>
                </div>
              </div>
            </Link>

            {/* Novum Card */}
            <div className="work-card novum-card">
              <div className="work-card-content">
                <div className="work-card-header">
                  <span className="work-card-label novum-label">
                    <span className="web-badge-small">🌐</span>
                    <span>Novum</span>
                  </span>
                </div>
                <h2 className="work-card-title">Novum website</h2>
                <p className="work-card-description">A modern, mobile-responsive landing page designed for optimal user experience across all devices, featuring clean typography and intuitive navigation.</p>
                
                <div className="work-card-image">
                  <div className="novum-preview">
                    <img src="/images/novum-full-image.svg" alt="Novum Mobile Banking Application" className="novum-app-image" />
                  </div>
                </div>
              </div>
            </div>

            {/* BusyBody Card */}
            <div className="work-card busybody-card">
              <div className="work-card-content">
                <div className="work-card-header">
                  <span className="work-card-label busybody-label">
                    <span className="ecommerce-badge-small">
                      <ShoppingIcon size={16} />
                    </span>
                    <span>BusyBody</span>
                  </span>
                </div>
                <h2 className="work-card-title">Task Manager UX Design</h2>
                <p className="work-card-description">A comprehensive mobile task management application designed to enhance productivity through intuitive user experience, streamlined workflows, and modern UI patterns that help users organize and prioritize their daily tasks effectively.</p>
                
                <div className="work-card-image">
                  <div className="busybody-preview">
                    <img src="/images/busybody-full-image.svg" alt="BusyBody E-commerce Platform" className="busybody-app-image" />
                  </div>
                </div>
              </div>
            </div>

            {/* Receipt2Recipe Card */}
            <Link to="/receipt2recipe-case-study" className="work-card receipt2recipe-card clickable-card">
              <div className="work-card-content">
                <div className="work-card-header">
                  <span className="work-card-label receipt2recipe-label">
                    <span className="recipe-badge-small">🍳</span>
                    <span>Receipt2Recipe</span>
                  </span>
                </div>
                <h2 className="work-card-title">Transform receipts into recipes</h2>
                <p className="work-card-description">An innovative mobile application that converts grocery receipts into personalized cooking recipes, helping users make the most of their ingredients and reduce food waste.</p>
                
                <div className="work-card-image">
                  <div className="receipt2recipe-preview">
                    <img src="/images/receipt2recipe-image.png" alt="Receipt2Recipe App Interface" className="receipt2recipe-app-image" />
                  </div>
                </div>
              </div>
            </Link>

            {/* Medium Article Card */}
            <a 
              href="https://medium.com/design-bootcamp/how-i-use-ai-to-supercharge-my-design-process-2ae95b0a7f91"
              target="_blank"
              rel="noopener noreferrer"
              className="work-card article-card clickable-card"
            >
              <div className="work-card-content">
                <div className="work-card-header">
                  <span className="work-card-label">Article</span>
                </div>
                <h2 className="work-card-title">How I Use AI to Supercharge My Design Process</h2>
                <p className="work-card-description">Discover practical AI tools and techniques that can streamline your design workflow, from ideation to prototyping, and learn how to integrate AI seamlessly into your creative process.</p>
                
                <div className="work-card-image">
                  <div className="article-illustration">
                    <div className="ai-tools-showcase">
                      <div className="ai-tool">
                        <div className="tool-icon">
                          <AIIcon size={20} />
                        </div>
                        <span>AI Tools</span>
                      </div>
                      <div className="ai-tool">
                        <div className="tool-icon">
                          <LightningIcon size={20} />
                        </div>
                        <span>Workflow</span>
                      </div>
                      <div className="ai-tool">
                        <div className="tool-icon">
                          <DesignIcon size={20} />
                        </div>
                        <span>Design</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>

            {/* Confidence-Based Feedback UI Card */}
            <a 
              href="https://medium.com/design-bootcamp/designing-a-confidence-based-feedback-ui-f5eba0420c8c"
              target="_blank"
              rel="noopener noreferrer"
              className="work-card confidence-feedback-card clickable-card"
            >
              <div className="work-card-content">
                <div className="work-card-header">
                  <span className="work-card-label">Article</span>
                </div>
                <h2 className="work-card-title">Designing a Confidence-Based Feedback UI</h2>
                <p className="work-card-description">A personal design project exploring how interfaces can communicate AI uncertainty — and keep users in control.</p>
                
                <div className="work-card-image">
                  <div className="confidence-illustration">
                    <div className="confidence-elements">
                      <div className="confidence-tag green">
                        <span>95%</span>
                      </div>
                      <div className="confidence-tag yellow">
                        <span>67%</span>
                      </div>
                      <div className="confidence-tag red">
                        <span>45%</span>
                      </div>
                      <div className="ai-badge">
                        <span>AI</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>

            {/* Design x Sales Card */}
            <a 
              href="https://medium.com/design-bootcamp/design-x-sales-why-i-joined-demo-calls-as-a-product-designer-9db4a702937b"
              target="_blank"
              rel="noopener noreferrer"
              className="work-card design-sales-card clickable-card"
            >
              <div className="work-card-content">
                <div className="work-card-header">
                  <span className="work-card-label">Article</span>
                </div>
                <h2 className="work-card-title">Design x Sales: Why I Joined Demo Calls</h2>
                <p className="work-card-description">How collaborating with sales teams improved my design process and gave me clearer insight into our users.</p>
                
                <div className="work-card-image">
                  <div className="sales-illustration">
                    <div className="sales-elements">
                      <div className="demo-screen">
                        <div className="screen-content">
                          <div className="feature-highlight"></div>
                          <div className="feature-highlight"></div>
                          <div className="feature-highlight"></div>
                        </div>
                      </div>
                      <div className="sales-badge">
                        <span>Sales</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>

            {/* Designing for Dignity Card */}
            <a 
              href="https://medium.com/design-bootcamp/designing-for-dignity-improving-the-low-data-experience-on-mtn-2e5447290266"
              target="_blank"
              rel="noopener noreferrer"
              className="work-card dignity-design-card clickable-card"
            >
              <div className="work-card-content">
                <div className="work-card-header">
                  <span className="work-card-label">Article</span>
                </div>
                <h2 className="work-card-title">Designing for Dignity: Improving MTN Experience</h2>
                <p className="work-card-description">Making low-data users feel seen and in control through thoughtful design that respects their constraints and needs.</p>
                
                <div className="work-card-image">
                  <div className="dignity-illustration">
                    <div className="dignity-elements">
                      <div className="mobile-device">
                        <div className="low-data-indicator">
                          <span>Low Data</span>
                        </div>
                        <div className="data-bars">
                          <div className="bar bar-1"></div>
                          <div className="bar bar-2"></div>
                          <div className="bar bar-3"></div>
                        </div>
                      </div>
                      <div className="mtn-badge">
                        <span>MTN</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Work; 