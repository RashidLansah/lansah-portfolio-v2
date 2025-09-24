import './App.css';
import { Link } from 'react-router-dom';
import Footer from './Footer';

function Portfolio() {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="nav-container">
          <Link to="/" className="nav-link active">Lansah</Link>
          <Link to="/work" className="nav-link">Work</Link>
          <a href="#highlights" className="nav-link">Highlights</a>
          <a href="mailto:rashidlansahadam@gmail.com" className="nav-link">Get contact</a>
        </div>
      </nav>
      
      <section className="hero">
        <div className="hero-content">
          <p className="hero-greeting">
            Hello, my name is Lansah
          </p>
          <h1 className="hero-title">
            I Design for People, Build from 0–1, and Scale with Systems
          </h1>
          <p className="hero-subtitle">
            I design digital experiences that connect user needs with business goals, blending research, design systems, and product strategy to drive growth and engagement.
          </p>
        </div>
      </section>

      <section className="companies">
        <div className="companies-container">
          <div className="experience-item">
            <div className="experience-year">01/2020 - Present</div>
            <div className="experience-company">Upwork</div>
            <div className="experience-role">Freelance Product Designer</div>
          </div>
          <div className="experience-item">
            <div className="experience-year">04/2023 - 08/2025</div>
            <div className="experience-company">Jenesys AI</div>
            <div className="experience-role">Founding Product Designer</div>
          </div>
          <div className="experience-item">
            <div className="experience-year">11/2022 - 03/2023</div>
            <div className="experience-company">Dbaza Health</div>
            <div className="experience-role">Product Designer (Contract)</div>
          </div>
          <div className="experience-item">
            <div className="experience-year">09/2017 - 03/2022</div>
            <div className="experience-company">Guildbytes Tech Solutions</div>
            <div className="experience-role">Lead Product Designer</div>
          </div>
        </div>
      </section>

      <section className="project-card-section jenesys-section" id="highlights">
        <div className="project-container">
          <div className="project-brand">
            Jenesys AI
          </div>
          <h2 className="project-title">
            AI Bookkeeping Platform
          </h2>
          <p className="project-description">
            Designed and built an AI-powered bookkeeping platform from 0-1, streamlining financial workflows for small businesses and automating invoice processing with 95% accuracy.
          </p>
          <div className="project-interface">
            <div className="interface-wrapper">
              <img 
                src="/images/jenesys-full-image.svg" 
                alt="Jenesys AI Dashboard" 
                className="project-interface-image"
              />
            </div>
          </div>
          <div className="project-stats">
            <div className="stat-item">
              <span className="stat-number">95%</span>
              <span className="stat-label">Accuracy</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">3x</span>
              <span className="stat-label">Faster</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Businesses</span>
            </div>
          </div>
          <Link to="/jenesys-case-study" className="case-study-btn">
            View Case Study
          </Link>
        </div>
      </section>

      <section className="tikiti-card-section">
        <div className="tikiti-container">
          <div className="tikiti-brand">
            <span className="tikiti-badge">📱</span>
            <span>Tikiti</span>
          </div>
          <h2 className="tikiti-title">
            Event Management Platform
          </h2>
          <div className="tikiti-app-showcase">
            <img 
              src="/images/tikiti-app-preview.svg" 
              alt="Tikiti App Interface" 
              className="tikiti-app-image"
            />
          </div>
          <div className="tikiti-stats">
            <div className="stats-left">
              <div className="company-name">Tikiti</div>
              <div className="rating">
                <span className="rating-text">Event Platform</span>
                <span className="ticket-icon">🎫</span>
              </div>
            </div>
            <div className="stats-right">
              <a 
                href="https://gettikiti.com/landing"
                className="tikiti-details-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Details
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="article-card">
        <div className="article-container">
          <div className="article-brand">
            <span className="article-badge">📝</span>
            <span>Article</span>
          </div>
          <h2 className="article-title">
            How I Use AI to Supercharge My Design Process
          </h2>
          <div className="article-illustration">
            <div className="ai-tools-showcase">
              <div className="ai-tool">
                <div className="tool-icon">🤖</div>
                <span>AI Tools</span>
              </div>
              <div className="ai-tool">
                <div className="tool-icon">⚡</div>
                <span>Workflow</span>
              </div>
              <div className="ai-tool">
                <div className="tool-icon">🎨</div>
                <span>Design</span>
              </div>
            </div>
          </div>
          <a 
            href="https://medium.com/design-bootcamp/how-i-use-ai-to-supercharge-my-design-process-2ae95b0a7f91"
            className="article-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read on Medium
          </a>
        </div>
      </section>

      <section className="side-project-card novum-section">
        <div className="side-project-container">
          <div className="side-project-brand">
            <span className="novum-badge">🏦</span>
            <span>Novum</span>
          </div>
          <h2 className="side-project-title">
            Mobile Banking Application
          </h2>
          <div className="side-project-image">
            <img 
              src="/images/novum-full-image.svg" 
              alt="Novum Mobile Banking Application" 
              className="novum-app-image"
            />
          </div>
          <div className="side-project-stats">
            <div className="stat-item">
              <span className="stat-number">Enhanced</span>
              <span className="stat-label">Security</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">Intuitive</span>
              <span className="stat-label">UX</span>
            </div>
          </div>
          <a href="#" className="side-project-btn">
            Coming Soon
          </a>
        </div>
      </section>

      <section className="side-project-card busybody-section">
        <div className="side-project-container">
          <div className="side-project-brand">
            <span className="ecommerce-badge-small">🛍️</span>
            <span>BusyBody</span>
          </div>
          <h2 className="side-project-title">
            Elevated e-commerce experience
          </h2>
          <div className="side-project-image">
            <img 
              src="/images/busybody-full-image.svg" 
              alt="BusyBody E-commerce Platform" 
              className="busybody-app-image"
            />
          </div>
          <div className="side-project-stats">
            <div className="stat-item">
              <span className="stat-number">3x</span>
              <span className="stat-label">Conversion</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">Optimized</span>
              <span className="stat-label">UX</span>
            </div>
          </div>
          <a 
            href="https://www.figma.com/design/WVp6Cjenyxnw6qCxFE5eAb/BusyBuddy?node-id=0-1" 
            className="side-project-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project
          </a>
        </div>
      </section>

      <section className="borlapay-section">
        <div className="borlapay-container">
          <div className="borlapay-brand">
            <span className="recycle-badge">♻️</span>
            <span>BorlaPay</span>
          </div>
          <h2 className="borlapay-title">
            Waste Management Platform
          </h2>
          <p className="borlapay-description">
            Redesigned a comprehensive waste management platform focusing on user experience and community engagement, implementing modern design patterns and streamlined workflows.
          </p>
          <div className="borlapay-interface">
            <img 
              src="/images/borlapay-full-image.svg" 
              alt="BorlaPay Platform Interface" 
              className="borlapay-phone-image"
            />
          </div>
          <div className="borlapay-bottom">
            <div className="borlapay-stats">
              <div className="stat-item">
                <span className="stat-number">40%</span>
                <span className="stat-label">Efficiency</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">Community</span>
                <span className="stat-label">Driven</span>
              </div>
            </div>
            <Link to="/borlapay-case-study" className="borlapay-read-more-btn">
              View Case Study
            </Link>
          </div>
        </div>
      </section>

      <section className="receipt2recipe-section">
        <div className="receipt2recipe-container">
          <div className="receipt2recipe-brand">
            <span className="recipe-badge">🍽️</span>
            <span>Receipt2Recipe</span>
          </div>
          <h2 className="receipt2recipe-title">
            AI Recipe Generator
          </h2>
          <div className="receipt2recipe-interface">
            <div className="receipt2recipe-placeholder">
              <img 
                src="/images/receipt2recipe-image.png" 
                alt="Receipt2Recipe App Interface" 
                className="receipt2recipe-app-image"
              />
            </div>
          </div>
          <div className="receipt2recipe-stats">
            <div className="stat-item">
              <span className="stat-number">AI</span>
              <span className="stat-label">Innovation</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">Zero</span>
              <span className="stat-label">Waste</span>
            </div>
          </div>
          <div className="coming-soon-large">Coming Soon</div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Portfolio;
