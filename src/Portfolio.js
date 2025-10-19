import './App.css';
import { Link } from 'react-router-dom';
import MobileMenu from './MobileMenu';
import { motion } from 'framer-motion';
import { ShoppingIcon, RecycleIcon, RecipeIcon, ArticleIcon, BankingIcon, TeamIcon, BriefcaseIcon, MentorIcon, AIIcon, BlockchainIcon } from './Icons';
import { useEffect } from 'react';

function Portfolio() {
  // Scroll to top or hash on mount
  useEffect(() => {
    const hash = window.location.hash;
    if (hash === '#highlights') {
      setTimeout(() => {
        document.getElementById('highlights')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, []);
  return (
    <div className="App">
      <nav className="navbar">
        <div className="nav-container">
          <Link to="/" className="nav-link active">Lansah</Link>
          <a href="#highlights" className="nav-link" onClick={(e) => {
            e.preventDefault();
            document.getElementById('highlights')?.scrollIntoView({ behavior: 'smooth' });
          }}>Highlights</a>
          <Link to="/work" className="nav-link">Work</Link>
          <a href="https://calendly.com/rashidlansahadam" className="nav-link" target="_blank" rel="noopener noreferrer">Schedule a call</a>
        </div>
      </nav>
      <MobileMenu />
      <section className="hero">
        <div className="hero-content">
          <motion.p 
            className="hero-greeting"
            initial={{ opacity: 0, y: 15 }}
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
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
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
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="project-container">
          <motion.div 
            className="project-brand"
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          >
            ✨ Featured: Jenesys AI
          </motion.div>
          <motion.h2 
            className="project-title"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            viewport={{ once: true }}
          >
            From MVP to Scale
          </motion.h2>
          <motion.p 
            className="project-description"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            viewport={{ once: true }}
          >
            How I helped an AI fintech platform simplify accounting workflows and grow adoption by 60%. 
            As Founding Product Designer, I built the complete design system and UX foundation that powered 
            $1M ARR and 3x user growth — from zero to scale in 12 months.
          </motion.p>
          <motion.div 
            className="project-interface"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
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
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.6 }}
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
        className="project-card-section tumapay-section"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="project-container">
          <motion.div 
            className="project-brand"
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          >
            TumaPay
          </motion.div>
          <motion.h2 
            className="project-title"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Designing a Voice-First Fintech Experience for Non-Literate Users
          </motion.h2>
          <motion.p 
            className="project-description"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            viewport={{ once: true }}
          >
            How can we make digital finance accessible to users who can't read or type in English? 
            Building a voice-first mobile money app using local languages and voice pattern recognition to help millions of non-literate users in Ghana perform transactions confidently.
          </motion.p>
          <motion.div 
            className="project-interface"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="interface-wrapper tumapay-interface">
              <img src="/images/tumapay-placeholder.png" alt="TumaPay Voice Interface" className="project-interface-image" />
            </div>
          </motion.div>
          <motion.div 
            className="project-stats"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="stat-item">
              <div className="jenesys-logo-small">
                <span>TumaPay</span>
              </div>
            </div>
            <div className="stat-item">
              <div className="adoption-rate">
                <span className="percentage">100%</span>
                <span className="label">No Reading</span>
              </div>
            </div>
            <div className="stat-item">
              <div className="growth-metric">
                <span className="multiplier">80%</span>
                <span className="label">Trust Rate</span>
              </div>
            </div>
            <Link to="/tumapay-case-study" className="case-study-btn">
              View Case Study 
            </Link>
          </motion.div>
        </div>
      </motion.section>

      <motion.section 
        className="project-card-section reliefledger-section"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="project-container">
          <motion.div 
            className="project-brand"
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="blockchain-badge-small">
              <BlockchainIcon size={16} />
            </span>
            ReliefLedger
          </motion.div>
          <motion.h2 
            className="project-title"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Rebuilding Trust in Humanitarian Aid Through Blockchain
          </motion.h2>
          <motion.p 
            className="project-description"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            viewport={{ once: true }}
          >
            A blockchain-powered transparency ecosystem that connects NGOs, field agents, and communities through verifiable proof of delivery — making every act of giving traceable across Africa.
          </motion.p>
          <motion.div 
            className="project-interface"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="interface-wrapper">
              <img src="/images/reliefledger-full-image.svg" alt="ReliefLedger Platform Interface" className="project-interface-image" />
              <div className="interface-overlay">
                <div className="ai-badge-overlay">
                  <div className="ai-indicator">
                    <BlockchainIcon size={16} />
                  </div>
                  <span>Blockchain</span>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div 
            className="project-stats"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="stat-item">
              <div className="jenesys-logo-small">
                <span className="ai-badge">
                  <BlockchainIcon size={16} />
                </span>
                <span>ReliefLedger</span>
              </div>
            </div>
            <div className="stat-item">
              <div className="adoption-rate">
                <span className="percentage">Web3</span>
                <span className="label">Blockchain</span>
              </div>
            </div>
            <div className="stat-item">
              <div className="growth-metric">
                <span className="multiplier">Trust</span>
                <span className="label">Transparency</span>
              </div>
            </div>
            <Link to="/reliefledger-case-study" className="case-study-btn">
              View Case Study 
            </Link>
          </motion.div>
        </div>
      </motion.section>

      <motion.section 
        className="project-card-section tikiti-card-section"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="project-container">
          <motion.div 
            className="project-brand"
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Tikiti
          </motion.div>
          <motion.h2 
            className="project-title"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Simplifying Event Ticketing in Ghana
          </motion.h2>
          <motion.div 
            className="project-subtitle"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
          >
            Event Discovery & Mobile Ticketing
          </motion.div>
          <motion.p 
            className="project-description"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Designed a seamless mobile flow for users to discover, pay, and verify tickets via MoMo. 
            Delivered 25% faster checkout and reduced booking errors by 40% through intuitive UX patterns.
          </motion.p>
          <motion.div 
            className="tikiti-app-showcase"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
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
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.6 }}
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
        className="project-card-section receipt2recipe-section"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="project-container">
          <motion.div 
            className="project-brand"
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="recipe-badge">🍳</span>
            Receipt2Recipe
          </motion.div>
          
          <motion.h2 
            className="project-title"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            An AI Experiment That Turns Receipts Into Meal Ideas
          </motion.h2>
          
          <motion.p 
            className="project-description"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Concept, UX flow, and prototype built in under a week using Cursor + Figma. 
            An AI-powered mobile app that scans your grocery receipts and generates personalized 7-day meal plans — making meal planning effortless and reducing food waste.
          </motion.p>
          
          <motion.div 
            className="project-interface"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
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
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.6 }}
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

      <motion.section 
        className="project-card-section article-card"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="article-container">
          <motion.div 
            className="article-label"
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Medium Article
          </motion.div>
          <motion.h2 
            className="article-title"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            viewport={{ once: true }}
          >
            How I Use AI to Supercharge My Design Process
          </motion.h2>
          <motion.p 
            className="article-description"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Discover how AI tools like ChatGPT and Cursor have transformed my workflow, reducing early-stage design time by 30x while maintaining creativity and user empathy.
          </motion.p>
          <motion.a 
            href="https://medium.com/design-bootcamp/how-i-use-ai-to-supercharge-my-design-process-2ae95b0a7f91" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="article-btn"
            initial={{ opacity: 0, y: 15 }}
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
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="project-container">
          <motion.div 
            className="project-brand"
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="novum-badge">🌐</span>
            Novum
          </motion.div>
          
          <motion.h2 
            className="project-title"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Novum website
          </motion.h2>
          
          
          <motion.div 
            className="project-interface"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
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
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.6 }}
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
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="project-container">
          <motion.div 
            className="project-brand"
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="ecommerce-badge-small">
              <ShoppingIcon size={16} />
            </span>
            BusyBody
          </motion.div>
          
          <motion.h2 
            className="project-title"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Task Manager UX Design
          </motion.h2>
          
          <motion.p 
            className="project-description"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            viewport={{ once: true }}
          >
            A comprehensive mobile task management application designed to enhance productivity through intuitive user experience, streamlined workflows, and modern UI patterns that help users organize and prioritize their daily tasks effectively.
          </motion.p>
          
          <motion.div 
            className="project-interface"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
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
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.6 }}
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
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="project-container">
          <motion.div 
            className="project-brand"
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          >
            BorlaPay
          </motion.div>
          <motion.h2 
            className="project-title"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Making Recycling Rewarding in Ghana
          </motion.h2>
          <motion.p 
            className="project-description"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Designed a mobile-first recycling platform that connects users with local "Wastepreneurs" through mobile money rewards. 
            Achieved 80% retention and 3x waste collection by making recycling as easy as sending MoMo.
          </motion.p>
          <motion.div 
            className="project-interface"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
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
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.6 }}
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
        className="about-section"
        id="about"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="about-container">
          <motion.h2 
            className="about-title"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>
          
          <motion.p 
            className="about-intro"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            viewport={{ once: true }}
          >
            I'm a Senior Product Designer passionate about turning complex systems into simple, human-centered experiences. 
            I've worked across fintech, marketplaces, and AI tools — from early startups to scale-ups — helping teams move from zero to one, and then from one to ten.
          </motion.p>

          <motion.div 
            className="about-highlights"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="highlight-item">
              <div className="highlight-icon">
                <TeamIcon size={32} />
              </div>
              <h3>Founder Collaboration</h3>
              <p>Worked with founders and PMs to ship AI-powered products from concept to scale</p>
            </div>
            
            <div className="highlight-item">
              <div className="highlight-icon">
                <BriefcaseIcon size={32} />
              </div>
              <h3>Cross-Industry Experience</h3>
              <p>Freelance and agency experience across fintech, events, recycling, and food tech</p>
            </div>
            
            <div className="highlight-item">
              <div className="highlight-icon">
                <MentorIcon size={32} />
              </div>
              <h3>Community Contributor</h3>
              <p>Mentored designers through ADPList and local design communities in Ghana</p>
            </div>
            
            <div className="highlight-item">
              <div className="highlight-icon">
                <AIIcon size={32} />
              </div>
              <h3>AI-Assisted Workflows</h3>
              <p>Exploring AI-assisted design using Cursor, Figma AI, and rapid prototyping tools</p>
            </div>
          </motion.div>

          <motion.p 
            className="about-personal"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            viewport={{ once: true }}
          >
            Outside of work, I read manga and webtoons, watch anime, and play soccer on weekends. 
            I believe creativity thrives at the intersection of curiosity and play.
          </motion.p>
        </div>
      </motion.section>

      <motion.section 
        className="contact-section"
        id="contact"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="contact-container">
          <motion.h2 
            className="contact-title"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Let's build something that solves real problems
          </motion.h2>
          
          <motion.p 
            className="contact-subtitle"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Reach out if you're hiring, collaborating, or want to chat design.
          </motion.p>

          <motion.div 
            className="contact-buttons"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <a 
              href="mailto:rashidlansahadam@gmail.com" 
              className="contact-btn primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Email Me
            </a>
            <a 
              href="https://drive.google.com/file/d/1-n7H7VXxC8WuwY9bPyxqrpkCij9Cb2yo/view?usp=sharing" 
              className="contact-btn secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Resume
            </a>
            <a 
              href="https://linkedin.com/in/rashid-lansah" 
              className="contact-btn secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}

export default Portfolio;

