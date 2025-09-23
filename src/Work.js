import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import './Work.css';

function Work() {
  return (
    <div className="work-page">
      <nav className="navbar">
        <div className="nav-container">
          <Link to="/" className="nav-link">Lansah</Link>
          <Link to="/work" className="nav-link active">Work</Link>
          <a href="https://linkedin.com" className="nav-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="#contact" className="nav-link contact-btn">Get in touch</a>
        </div>
      </nav>

      <main className="work-main">
        <div className="work-container">
          <div className="work-grid">
            
            {/* Jenesys AI Card */}
            <div className="work-card jenesys-card">
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
            </div>

            {/* Whiteboard Challenge Card */}
            <div className="work-card whiteboard-card">
              <div className="work-card-content">
                <div className="work-card-header">
                  <span className="work-card-label">Ace your next UX Job Interview</span>
                </div>
                <h2 className="work-card-title">Whiteboard Challenge explained</h2>
                <p className="work-card-description">10 solved exercises, Figma template, Wireframe UI library to help you ace your next UX Job Interview.</p>
                
                <div className="work-card-image">
                  <div className="whiteboard-diagram">
                    <div className="diagram-section problem-space">
                      <div className="diagram-label">Problem Space</div>
                      <div className="diagram-boxes">
                        <div className="diagram-box"></div>
                        <div className="diagram-box"></div>
                        <div className="diagram-box"></div>
                      </div>
                    </div>
                    <div className="diagram-arrow">
                      <span>design an app to find the perfect flatmate</span>
                    </div>
                    <div className="diagram-section solution-space">
                      <div className="diagram-label">Brainstorming</div>
                      <div className="diagram-label">Wireframes</div>
                      <div className="wireframe-grid">
                        <div className="wireframe-box"></div>
                        <div className="wireframe-box"></div>
                        <div className="wireframe-box"></div>
                        <div className="wireframe-box"></div>
                        <div className="wireframe-box"></div>
                        <div className="wireframe-box"></div>
                        <div className="wireframe-box"></div>
                        <div className="wireframe-box"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Article Card */}
            <div className="work-card article-card">
              <div className="work-card-content">
                <div className="work-card-header">
                  <span className="work-card-label">Article</span>
                </div>
                <h2 className="work-card-title">The power of visual in Product Design</h2>
                <p className="work-card-description">How visual elements affect our perception, recognition and memory by interacting with digital products.</p>
                
                <div className="work-card-image">
                  <div className="article-illustration">
                    <div className="character-illustration">
                      <div className="character"></div>
                      <div className="floating-elements">
                        <div className="element triangle"></div>
                        <div className="element circle"></div>
                        <div className="element square"></div>
                        <div className="element donut"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bookify Card */}
            <div className="work-card bookify-card">
              <div className="work-card-content">
                <div className="work-card-header">
                  <span className="work-card-label">Bookify</span>
                </div>
                <h2 className="work-card-title">Acclaimed books right to your phone</h2>
                <p className="work-card-description">The design process for creating Genius: Bookify's reward program.</p>
                
                <div className="work-card-image">
                  <div className="bookify-phone">
                    <div className="phone-mockup bookify-mockup">
                      <div className="phone-screen">
                        <div className="bookify-interface">
                          <div className="bookify-header">
                            <div className="book-covers">
                              <div className="book-cover book-1"></div>
                              <div className="book-cover book-2"></div>
                              <div className="book-cover book-3"></div>
                            </div>
                          </div>
                          <div className="bookify-content">
                            <div className="featured-book">
                              <div className="book-image"></div>
                              <div className="book-details">
                                <h4>Featured Book</h4>
                                <p>Genius Program</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Worldpackers Card */}
            <div className="work-card worldpackers-card">
              <div className="work-card-content">
                <div className="work-card-header">
                  <span className="work-card-label">Worldpackers</span>
                </div>
                <h2 className="work-card-title">A world of ways to travel the world</h2>
                <p className="work-card-description">We connect travelers - looking to exchange their skills for a stay - with incredible hosts in more than 100 countries.</p>
                
                <div className="work-card-image">
                  <div className="worldpackers-phones">
                    <div className="phone-mockup wp-phone-1">
                      <div className="phone-screen">
                        <div className="wp-interface">
                          <div className="wp-header">
                            <h4>Worldpackers</h4>
                          </div>
                          <div className="wp-content">
                            <div className="wp-card">
                              <div className="wp-image"></div>
                              <div className="wp-details">
                                <h5>Travel Experience</h5>
                                <p>Exchange skills</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="phone-mockup wp-phone-2">
                      <div className="phone-screen">
                        <div className="wp-interface">
                          <div className="wp-detail-view">
                            <div className="wp-profile">
                              <div className="wp-avatar"></div>
                              <div className="wp-info">
                                <h4>Host Profile</h4>
                                <p>100+ countries</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* UX Speed Dating Card */}
            <div className="work-card ux-speed-dating-card">
              <div className="work-card-content">
                <div className="work-card-header">
                  <span className="work-card-label">UX SPEED DATING</span>
                </div>
                <h2 className="work-card-title">Creating products people love</h2>
                <p className="work-card-description">Get hands on experience building and conducting prototypes,usability tests, personas, and lots of other UX tools.</p>
                
                <div className="work-card-image">
                  <div className="ux-speed-illustration">
                    <div className="person-silhouette">
                      <div className="person-figure"></div>
                      <div className="ux-tools">
                        <div className="tool wireframe"></div>
                        <div className="tool prototype"></div>
                        <div className="tool persona"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Design Events Card */}
            <div className="work-card design-events-card">
              <div className="work-card-content">
                <div className="work-card-header">
                  <span className="work-card-label">Article</span>
                </div>
                <h2 className="work-card-title">Making every design event worth it</h2>
                <p className="work-card-description">How to get the most before, during and after every design event you attend.</p>
                
                <div className="work-card-image">
                  <div className="design-events-illustration">
                    <div className="event-elements">
                      <div className="design-tool tool-1"></div>
                      <div className="design-tool tool-2"></div>
                      <div className="design-tool tool-3"></div>
                      <div className="event-badge">
                        <span>W</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Design Critiques Card */}
            <div className="work-card design-critiques-card">
              <div className="work-card-content">
                <div className="work-card-header">
                  <span className="work-card-label">Article</span>
                </div>
                <h2 className="work-card-title">Mastering Design Critiques</h2>
                <p className="work-card-description">Checklists, framework and learnings about running Design Critique over 60+ designers.</p>
                
                <div className="work-card-image">
                  <div className="design-critiques-illustration">
                    <div className="critique-board">
                      <div className="critique-elements">
                        <div className="critique-card red"></div>
                        <div className="critique-card green"></div>
                        <div className="critique-card blue"></div>
                        <div className="critique-card purple"></div>
                        <div className="critique-card yellow"></div>
                      </div>
                      <div className="critique-flow">
                        <div className="flow-arrow"></div>
                        <div className="flow-box"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Brand Asset Management Card */}
            <div className="work-card brand-asset-card">
              <div className="work-card-content">
                <div className="work-card-header">
                  <span className="work-card-label">Itaú (Restricted)</span>
                </div>
                <h2 className="work-card-title">Brand asset Management</h2>
                <p className="work-card-description">From the ground up, Redesigning how 100.000 employees access the brands assets.</p>
                
                <div className="work-card-image">
                  <div className="brand-asset-illustration">
                    <div className="itau-logo">
                      <div className="logo-cube">
                        <span>itaú</span>
                      </div>
                      <div className="logo-lines">
                        <div className="line line-1"></div>
                        <div className="line line-2"></div>
                        <div className="line line-3"></div>
                        <div className="line line-4"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Work; 