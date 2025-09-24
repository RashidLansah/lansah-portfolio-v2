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

      <section className="project-card-section tikiti-card-section">
        <div className="project-container">
          <div className="project-brand">Tikiti</div>
          <h2 className="project-title">Event Discovery</h2>
          <div className="project-subtitle">& Ticketing</div>
          <p className="project-description">
            Designed an intuitive event discovery platform that simplifies ticket booking 
            with seamless user experience and modern interface design.
          </p>
          <div className="tikiti-app-showcase">
            <div className="tikiti-app-wrapper">
              <img src="/images/tikiti-app-preview.svg" alt="Tikiti App Interface" className="tikiti-main-image" />
              <div className="tikiti-app-overlay">
                <div className="tikiti-status-badge">
                  <span>🎫</span>
                  <span>Live App</span>
                </div>
              </div>
            </div>
          </div>
          <div className="project-stats">
            <div className="stats-left">
              <div className="company-name">Tikiti</div>
              <div className="rating">
                <div className="ticket-icon">🎫</div>
                <span className="rating-text">Event Platform</span>
              </div>
            </div>
            <a href="https://gettikiti.com/landing" target="_blank" rel="noopener noreferrer" className="tikiti-details-btn">View Details</a>
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
          <div className="article-label">Medium Article</div>
          <h2 className="article-title">How I Use AI to Supercharge My Design Process</h2>
          <p className="article-description">
            Discover how AI tools like ChatGPT and Cursor have transformed my workflow, reducing early-stage design time by 30x while maintaining creativity and user empathy.
          </p>
          <a href="https://medium.com/design-bootcamp/how-i-use-ai-to-supercharge-my-design-process-2ae95b0a7f91" target="_blank" rel="noopener noreferrer" className="article-btn">Read on Medium</a>
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

      <section className="project-card-section borlapay-card">
        <div className="borlapay-container">
          <div className="borlapay-content">
            <div className="borlapay-text">
              <div className="borlapay-brand">BorlaPayCaseStudy</div>
              <h2 className="borlapay-title">Recycle more, earn more</h2>
              <p className="borlapay-description">
                A mobile-first recycling incentive platform that transforms waste management 
                through gamified rewards and community-driven collection networks.
              </p>
            </div>
            <div className="borlapay-phone">
              <div className="borlapay-phone-mockup">
                <img src="/images/borlapay-full-image.svg" alt="BorlaPayCaseStudy Mobile App Interface" className="borlapay-phone-image" />
              </div>
            </div>
          </div>
          <div className="borlapay-bottom">
            <div className="borlapay-case-study">
              <div className="borlapay-icon">♻️</div>
              <div className="borlapay-case-text">
                <h3 className="borlapay-case-title">BorlaPayCaseStudy Case Study</h3>
                <p className="borlapay-case-subtitle">Recycling app design process</p>
              </div>
            </div>
            <Link to="/borlapay-case-study" className="borlapay-read-more-btn">Read more</Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}

export default Portfolio;
