import './App.css';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import { motion } from 'framer-motion';
import { ShoppingIcon, RecycleIcon, RecipeIcon, ArticleIcon, BankingIcon } from './Icons';
import { useEffect } from 'react';

function Portfolio() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="App">
      <nav className="navbar">
        <div className="nav-container">
          <Link to="/" className="nav-link active">Lansah</Link>
          <a href="#highlights" className="nav-link">Highlights</a>
          <Link to="/work" className="nav-link">Work</Link>
          <a href="https://calendly.com/rashidlansahadam" className="nav-link" target="_blank" rel="noopener noreferrer">Schedule a call</a>
        </div>
      </nav>
      <section className="hero">
        <div className="hero-content">
          <motion.p 
            className="hero-greeting"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Hello, my name is Lansah
          </motion.p>
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            I Design for People, Build from 0–1, and Scale with Systems
          </motion.h1>
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            I design digital experiences that connect user needs with business goals, blending research, design systems, and product strategy to drive growth and engagement.
          </motion.p>
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

      <motion.section 
        className="project-card-section jenesys-section" 
        id="highlights"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="project-container">
          <motion.div 
            className="project-brand"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Jenesys AI
          </motion.div>
          <motion.h2 
            className="project-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            AI Bookkeeping Platform
          </motion.h2>
          <motion.p 
            className="project-description"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            Transformed complex financial workflows into intuitive user experiences. 
            Designed the complete UX foundation for an AI-powered bookkeeping platform 
            that achieved 80% user adoption and 3x daily active users through thoughtful 
            design and user-centered solutions.
          </motion.p>
          <motion.div 
            className="project-interface"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            viewport={{ once: true }}
          >
            <div className="interface-wrapper">
              <img src="/images/case-studies/jenesys-dashboard.png" alt="Jenesys AI Dashboard" className="project-interface-image" />
            <div className="interface-overlay">
              <div className="ai-badge-overlay">
                <div className="ai-indicator">AI</div>
                <span>Platform</span>
                  </div>
                </div>
                </div>
          </motion.div>
          <motion.div 
            className="project-stats"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            viewport={{ once: true }}
          >
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
          </motion.div>
          </div>
      </motion.section>

      <motion.section 
        className="project-card-section tikiti-card-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="project-container">
          <motion.div 
            className="project-brand"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Tikiti
          </motion.div>
          <motion.h2 
            className="project-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Event Discovery
          </motion.h2>
          <motion.div 
            className="project-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
          >
            & Ticketing
          </motion.div>
          <motion.p 
            className="project-description"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            Designed an intuitive event discovery platform that simplifies ticket booking 
            with seamless user experience and modern interface design.
          </motion.p>
          <motion.div 
            className="tikiti-app-showcase"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            viewport={{ once: true }}
          >
            <div className="tikiti-app-wrapper">
              <img src="/images/tikiti-app-preview.svg" alt="Tikiti App Interface" className="tikiti-main-image" />
              <div className="tikiti-app-overlay">
                <div className="tikiti-status-badge">
                  <span>🎫</span>
                  <span>Live App</span>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div 
            className="project-stats"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            viewport={{ once: true }}
          >
            <div className="stats-left">
              <div className="company-name">Tikiti</div>
              <div className="rating">
                <div className="ticket-icon">🎫</div>
                <span className="rating-text">Event Platform</span>
                  </div>
                </div>
            <a href="https://gettikiti.com/landing" target="_blank" rel="noopener noreferrer" className="tikiti-details-btn">View Details</a>
          </motion.div>
              </div>
      </motion.section>

      <motion.section 
        className="project-card-section article-card"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="article-container">
          <motion.div 
            className="article-label"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Medium Article
          </motion.div>
          <motion.h2 
            className="article-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            How I Use AI to Supercharge My Design Process
          </motion.h2>
          <motion.p 
            className="article-description"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            Discover how AI tools like ChatGPT and Cursor have transformed my workflow, reducing early-stage design time by 30x while maintaining creativity and user empathy.
          </motion.p>
          <motion.a 
            href="https://medium.com/design-bootcamp/how-i-use-ai-to-supercharge-my-design-process-2ae95b0a7f91" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="article-btn"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            viewport={{ once: true }}
          >
            Read on Medium
          </motion.a>
            </div>
      </motion.section>

      <motion.section 
        className="project-card-section novum-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="project-container">
          <motion.div 
            className="project-brand"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <span className="novum-badge">🌐</span>
            Novum
          </motion.div>
          
          <motion.h2 
            className="project-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Novum website
          </motion.h2>
          
          
          <motion.div 
            className="project-interface"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            viewport={{ once: true }}
          >
            <div className="interface-wrapper">
              <img 
                src="/images/novum-full-image.svg" 
                alt="Novum Mobile Banking Application" 
                className="project-interface-image"
              />
                </div>
          </motion.div>
          
          <motion.div 
            className="project-stats"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            viewport={{ once: true }}
          >
            <div className="stat-item">
              <div className="novum-logo-small">
                <span className="web-badge">🌐</span>
                <span>Novum</span>
                </div>
              </div>
            <div className="stat-item">
              <div className="security-metric">
                <span className="percentage">Enhanced</span>
                <span className="label">Security</span>
            </div>
          </div>
            <div className="stat-item">
              <div className="experience-metric">
                <span className="multiplier">Intuitive</span>
                <span className="label">UX</span>
              </div>
            </div>
            <a href="#novum" className="case-study-btn">
              View Project 
            </a>
          </motion.div>
          </div>
      </motion.section>

      <motion.section 
        className="project-card-section busybody-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="project-container">
          <motion.div 
            className="project-brand"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <span className="ecommerce-badge-small">
              <ShoppingIcon size={16} />
            </span>
            BusyBody
          </motion.div>
          
          <motion.h2 
            className="project-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Task Manager UX Design
          </motion.h2>
          
          <motion.p 
            className="project-description"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            A comprehensive mobile task management application designed to enhance productivity through intuitive user experience, streamlined workflows, and modern UI patterns that help users organize and prioritize their daily tasks effectively.
          </motion.p>
          
          <motion.div 
            className="project-interface"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            viewport={{ once: true }}
          >
            <div className="interface-wrapper">
              <img 
                src="/images/busybody-full-image.svg" 
                alt="BusyBody E-commerce Platform" 
                className="project-interface-image"
              />
        </div>
          </motion.div>
          
          <motion.div 
            className="project-stats"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            viewport={{ once: true }}
          >
            <div className="stat-item">
              <div className="busybody-logo-small">
                <span className="ecommerce-badge">
                  <ShoppingIcon size={16} />
                </span>
                <span>BusyBody</span>
          </div>
        </div>
            <div className="stat-item">
              <div className="conversion-metric">
                <span className="percentage">Enhanced</span>
                <span className="label">UX</span>
          </div>
        </div>
            <div className="stat-item">
              <div className="optimization-metric">
                <span className="multiplier">Optimized</span>
                <span className="label">Conversion</span>
            </div>
                    </div>
            <a 
              href="https://www.figma.com/design/WVp6Cjenyxnw6qCxFE5eAb/BusyBuddy?node-id=0-1" 
              className="case-study-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project 
            </a>
          </motion.div>
                        </div>
      </motion.section>

      <motion.section 
        className="project-card-section borlapay-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="project-container">
          <motion.div 
            className="project-brand"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            BorlaPay
          </motion.div>
          <motion.h2 
            className="project-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Recycle more, earn more
          </motion.h2>
          <motion.p 
            className="project-description"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            A mobile-first recycling incentive platform that transforms waste management 
            through gamified rewards and community-driven collection networks.
          </motion.p>
          <motion.div 
            className="project-interface"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            viewport={{ once: true }}
          >
            <div className="interface-wrapper">
              <img src="/images/borlapay-full-image.svg" alt="BorlaPay Mobile App Interface" className="project-interface-image" />
              <div className="interface-overlay">
                <div className="ai-badge-overlay">
                  <div className="ai-indicator">
                    <RecycleIcon size={16} />
                  </div>
                  <span>Platform</span>
                        </div>
                      </div>
                    </div>
          </motion.div>
          <motion.div 
            className="project-stats"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            viewport={{ once: true }}
          >
            <div className="stat-item">
              <div className="jenesys-logo-small">
                <span className="ai-badge">
                  <RecycleIcon size={16} />
                </span>
                <span>BorlaPay</span>
                    </div>
                    </div>
            <div className="stat-item">
              <div className="adoption-rate">
                <span className="percentage">80%</span>
                <span className="label">Retention</span>
                    </div>
                  </div>
            <div className="stat-item">
              <div className="growth-metric">
                <span className="multiplier">3x</span>
                <span className="label">Collection</span>
                </div>
              </div>
            <Link to="/borlapay-case-study" className="case-study-btn">
              View Case Study 
            </Link>
          </motion.div>
                    </div>
      </motion.section>

      <motion.section 
        className="project-card-section receipt2recipe-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="project-container">
          <motion.div 
            className="project-brand"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <span className="recipe-badge">🍳</span>
            Receipt2Recipe
          </motion.div>
          
          <motion.h2 
            className="project-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Transform receipts into recipes
          </motion.h2>
          
          <motion.p 
            className="project-description"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            An innovative mobile application that converts grocery receipts into personalized cooking recipes, helping users make the most of their ingredients and reduce food waste.
          </motion.p>
          
          <motion.div 
            className="project-interface"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            viewport={{ once: true }}
          >
            <div className="interface-wrapper">
              <img 
                src="/images/receipt2recipe-image.png" 
                alt="Receipt2Recipe App Interface" 
                className="project-interface-image"
              />
            </div>
          </motion.div>
          
          <motion.div 
            className="project-stats"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            viewport={{ once: true }}
          >
            <div className="stat-item">
              <div className="receipt2recipe-logo-small">
                <span className="recipe-badge-small">🍳</span>
                <span>Receipt2Recipe</span>
            </div>
          </div>
            <div className="stat-item">
              <div className="innovation-metric">
                <span className="percentage">Innovative</span>
                <span className="label">Solution</span>
              </div>
            </div>
            <div className="stat-item">
              <div className="waste-metric">
                <span className="multiplier">Reduce</span>
                <span className="label">Food Waste</span>
          </div>
        </div>
            <Link to="/receipt2recipe-case-study" className="case-study-btn">
              View Case Study
            </Link>
          </motion.div>
        </div>
      </motion.section>
      
      <Footer />
    </div>
  );
}

export default Portfolio;

