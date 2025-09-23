import './App.css';
import { Link } from 'react-router-dom';
import Footer from './Footer';

function Portfolio() {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="nav-container">
          <Link to="/" className="nav-link active">Lansah</Link>
          <Link to="/#highlights" className="nav-link">Highlights</Link>
          <Link to="/work" className="nav-link">Work</Link>
          <a href="https://linkedin.com" className="nav-link">LinkedIn</a>
          <a href="#contact" className="nav-link">Get in touch</a>
        </div>
      </nav>
      <section className="hero">
        <div className="hero-content">
          <p className="hero-greeting">Hello, my name is Lansah</p>
          <h1 className="hero-title">
            I Design for People, Build from 0–1, and Scale with Systems
          </h1>
          <p className="hero-subtitle">
            I design digital experiences that connect user needs with business goals, blending research, design systems, and product strategy to drive growth and engagement.
          </p>
        </div>
        <div className="hero-image-container">
          <img 
            src="/images/lansah-profile.png" 
            alt="Lansah" 
            className="hero-image"
          />
        </div>
      </section>

      <section className="companies">
        <div className="companies-container">
          <div className="company-item">
            <span className="flame-icon"></span>
            <span>N26</span>
          </div>
          <div className="company-item">
            <div className="n26-line"></div>
            <span>Contentsquare</span>
          </div>
          <div className="company-item">
            <div className="i-icon">i</div>
            <span>Article</span>
          </div>
        </div>
      </section>

      <section className="highlights" id="highlights">
        <div className="highlights-container">
          <div className="highlight-card">
            <div className="jenesys-logo">
              <span className="ai-badge-small">AI</span>
              <span>Jenesys</span>
            </div>
            <h3 className="card-title">AI Bookkeeping Platform</h3>
            <p className="card-description">
              Transformed complex financial workflows into intuitive user experiences, 
              achieving 80% user adoption and 3x daily active users.
            </p>
            <Link to="/case-study" className="card-link">View Case Study </Link>
          </div>
          <div className="highlight-card">
            <span className="card-icon"></span>
            <h3 className="card-title">Analytics Platform</h3>
            <p className="card-description">
              Built comprehensive analytics tools for Contentsquare, 
              enabling data-driven design decisions.
            </p>
            <a href="#" className="card-link">Learn More </a>
          </div>
          <div className="highlight-card">
            <span className="card-icon"></span>
            <h3 className="card-title">Design Writing</h3>
            <p className="card-description">
              Published articles on design thinking and user experience 
              principles for the design community.
            </p>
            <a href="#" className="card-link">Read Articles </a>
          </div>
        </div>
      </section>

      <section className="project-card-section jenesys-section" id="work">
        <div className="project-container">
          <div className="project-brand">Jenesys AI</div>
          <h2 className="project-title">AI Bookkeeping Platform</h2>
          <p className="project-description">
            Transformed complex financial workflows into intuitive user experiences. 
            Designed the complete UX foundation for an AI-powered bookkeeping platform 
            that achieved 80% user adoption and 3x daily active users through thoughtful 
            design and user-centered solutions.
          </p>
          <div className="project-interface">
            <div className="interface-wrapper">
              <img src="/images/case-studies/jenesys-dashboard.png" alt="Jenesys AI Dashboard" className="project-interface-image" />
              <div className="interface-overlay">
                <div className="ai-badge-overlay">
                  <div className="ai-indicator">AI</div>
                  <span>Live Platform</span>
                </div>
              </div>
            </div>
          </div>
          <div className="project-stats">
            <div className="stat-item">
              <div className="jenesys-logo-small">
                <span className="ai-badge">AI</span>
                <span>Jenesys</span>
              </div>
            </div>
            <div className="stat-item">
              <div className="adoption-rate">
                <span className="percentage">80%</span>
                <span className="label">Adoption</span>
              </div>
            </div>
            <div className="stat-item">
              <div className="growth-metric">
                <span className="multiplier">3x</span>
                <span className="label">User Growth</span>
              </div>
            </div>
            <Link to="/case-study" className="case-study-btn">
              View Case Study 
            </Link>
          </div>
        </div>
      </section>

      <section className="project-card-section contentsquare-card">
        <div className="project-container">
          <div className="project-brand">Contentsquare</div>
          <h2 className="project-title">Designing</h2>
          <div className="project-subtitle">Observing</div>
          <p className="project-description">
            Built comprehensive analytics tools that help designers understand 
            user behavior and make data-driven design decisions.
          </p>
          <div className="project-screens">
            <div className="screen-left">
              <div className="screen-content analytics">
                <div className="analytics-header">Analytics</div>
                <div className="analytics-score">94%</div>
                <div className="analytics-chart">
                  <div className="chart-bar"></div>
                  <div className="chart-bar"></div>
                  <div className="chart-bar"></div>
                  <div className="chart-bar"></div>
                </div>
              </div>
            </div>
            <div className="screen-center">
              <div className="screen-content main-app">
                <div className="app-header">
                  <div className="app-title">Contentsquare</div>
                  <div className="app-subtitle">Analytics Platform</div>
                </div>
                <div className="search-section">
                  <input type="text" className="search-field" placeholder="Search..." />
                </div>
                <div className="map-section">
                  <span className="map-placeholder"></span>
                </div>
                <div className="video-call">
                  <div className="video-window">
                    <span className="video-person"></span>
                  </div>
                  <div className="call-controls">
                    <div className="control-btn red"></div>
                    <div className="control-btn blue"></div>
                    <div className="control-btn purple"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="screen-right">
              <div className="screen-content recordings">
                <div className="recording-item">
                  <span className="recording-time">2:34</span>
                  <span className="recording-percentage">87%</span>
                </div>
                <div className="recording-item">
                  <span className="recording-time">1:45</span>
                  <span className="recording-percentage">92%</span>
                </div>
                <div className="recording-item">
                  <span className="recording-time">3:12</span>
                  <span className="recording-percentage">78%</span>
                </div>
              </div>
            </div>
          </div>
          <div className="project-stats">
            <div className="stats-left">
              <div className="company-name">Contentsquare</div>
              <div className="rating">
                <div className="g-logo">G</div>
                <span className="rating-text">4.8 rating</span>
              </div>
            </div>
            <button className="coming-soon-btn">Coming Soon</button>
          </div>
        </div>
      </section>

      <section className="project-card-section article-card">
        <div className="article-container">
          <div className="article-decorations">
            <div className="decoration-1"></div>
            <div className="decoration-2"></div>
            <div className="decoration-3"></div>
            <div className="decoration-4"></div>
            <div className="decoration-5"></div>
          </div>
          <div className="article-label">Article</div>
          <h2 className="article-title">The power of visual in product design</h2>
          <p className="article-description">
            How visual elements affect our perception, recognition and memory by interacting with digital products.
          </p>
          <button className="article-btn">Full article </button>
        </div>
      </section>

      <section className="project-card-section side-project-card">
        <div className="side-project-container">
          <div className="side-project-content">
            <div className="side-project-label">Side project</div>
            <h2 className="side-project-title">Introducing</h2>
            <h2 className="side-project-title">Janga's house</h2>
            <p className="side-project-description">
              Book a weekend with your loved ones and enjoy a never-ending summer stay in the heart of Brazil. - <strong>PT-BR Only.</strong>
            </p>
            <button className="side-project-btn">Check it out </button>
          </div>
          <div className="side-project-image">
            <img 
              src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=400&fit=crop" 
              alt="Janga's house" 
              className="house-image"
            />
            <div className="side-project-url">https://www.casapraiarecife.com</div>
          </div>
        </div>
      </section>

      <section className="project-card-section bookify-card">
        <div className="bookify-container">
          <div className="bookify-content">
            <div className="bookify-text">
              <div className="bookify-brand">Bookify</div>
              <h2 className="bookify-title">Read more, discover more</h2>
              <p className="bookify-description">
                A mobile app that helps users discover and track their reading habits, 
                with personalized recommendations and reading challenges.
              </p>
            </div>
            <div className="bookify-phone">
              <div className="bookify-phone-mockup">
                <div className="bookify-phone-screen">
                  <div className="bookify-app-interface">
                    <div className="bookify-header">
                      <span className="bookify-search">Search books...</span>
                      <span className="bookify-profile"></span>
                    </div>
                    <div className="bookify-section">
                      <h3 className="bookify-section-title">Currently Reading</h3>
                      <div className="bookify-books">
                        <div className="book-item">
                          <div className="book-cover"></div>
                          <div className="book-title">Design Systems</div>
                          <div className="book-author">Alla Kholmatova</div>
                          <div className="book-rating"></div>
                        </div>
                        <div className="book-item">
                          <div className="book-cover"></div>
                          <div className="book-title">Atomic Design</div>
                          <div className="book-author">Brad Frost</div>
                          <div className="book-rating"></div>
                        </div>
                      </div>
                    </div>
                    <div className="bookify-categories">
                      <span className="category-item">Fiction</span>
                      <span className="category-item">Non-fiction</span>
                      <span className="category-item">Design</span>
                    </div>
                    <div className="bookify-nav">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bookify-bottom">
            <div className="bookify-case-study">
              <div className="bookify-icon"></div>
              <div className="bookify-case-text">
                <h3 className="bookify-case-title">Bookify Case Study</h3>
                <p className="bookify-case-subtitle">Reading app design process</p>
              </div>
            </div>
            <button className="bookify-read-more-btn">Read more </button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}

export default Portfolio;
