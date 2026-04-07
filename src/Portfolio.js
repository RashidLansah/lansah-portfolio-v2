import './App.css';
import { Link } from 'react-router-dom';
import MobileMenu from './MobileMenu';
import Sidebar from './Sidebar';
import { motion } from 'framer-motion';
import { LinkedInIcon, GitHubIcon, MediumIcon, ArrowRightIcon } from './Icons';
import { useEffect, useState } from 'react';

function Portfolio() {
  const [currentTime, setCurrentTime] = useState('');
  const [weather, setWeather] = useState({ temp: '--', condition: 'Loading...' });
  const [currentQuote, setCurrentQuote] = useState(0);

  const quotes = [
    "The best products ship, not sit in Figma.",
    "Simplicity is the ultimate sophistication.",
    "Good design solves the problem. Great design removes it.",
    "The details are not the details. They make the product.",
    "Strategy without execution is a slideshow."
  ];

  // Update time every second (Accra timezone - GMT)
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
        timeZone: 'Africa/Accra'
      };
      setCurrentTime(now.toLocaleTimeString('en-US', options));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Rotate quotes every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [quotes.length]);

  // Fetch weather for Accra
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        // Using wttr.in for simple weather data (no API key needed)
        const response = await fetch('https://wttr.in/Accra?format=%t+%C');
        const data = await response.text();
        const parts = data.trim().split(' ');
        const temp = parts[0] || '--';
        const condition = parts.slice(1).join(' ') || 'Clear';
        setWeather({ temp, condition });
      } catch (error) {
        setWeather({ temp: '28°C', condition: 'Sunny' }); // Fallback for Accra
      }
    };

    fetchWeather();
    // Refresh weather every 30 minutes
    const interval = setInterval(fetchWeather, 30 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Project data - main case studies
  const mainProjects = [
    {
      id: 1,
      title: 'Jenesys',
      description: 'Designed the product experience for an AI bookkeeping platform that reached $1M ARR and 80% feature adoption.',
      link: '/case-study',
      bgColor: '#e4dbea',
      image: '/images/case-studies/jenesys-dashboard.png'
    },
    {
      id: 2,
      title: 'Tikiti',
      description: 'Designed and shipped an event ticketing app with 1.7k downloads. Event discovery, mobile payments, QR scanning.',
      link: '/tikiti-case-study',
      bgColor: '#c8d9f0',
      image: '/images/case-studies/tikiti-screen-5.png'
    },
    {
      id: 3,
      title: 'Tikiti Dashboard',
      description: 'Designed and shipped a B2B event management platform. Multi-channel messaging, attendee management, and AI reports.',
      link: '/tikiti-dashboard-case-study',
      bgColor: '#d6e4f0',
      image: '/images/tikiti-dashboard-hero.png'
    },
    {
      id: 4,
      title: 'PayChalk',
      description: 'Designed and built a WhatsApp-first school fee collection platform for Ghana. Instant payments, automated reminders, real-time tracking.',
      link: '/paychalk-case-study',
      bgColor: '#e8f0e4',
      image: '/images/case-studies/paychalk-dashboard.png'
    },
    {
      id: 5,
      title: 'Kaaka',
      description: 'Designed and shipped an AI cooking assistant that turns grocery receipts into personalized meal plans.',
      link: '/kaaka-case-study',
      bgColor: '#e0ddd5',
      image: '/images/case-studies/kaaka-home.png'
    },
    {
      id: 6,
      title: 'SheFundIt',
      description: 'Designed and shipped a milestone-based crowdfunding platform empowering women entrepreneurs to fund their businesses.',
      link: '/shefundit-case-study',
      bgColor: '#e8f5e9',
      image: '/images/case-studies/shefundit-screen-7.png'
    },
  ];

  return (
    <div className="App">
      {/* Top Header Bar - Desktop Only */}
      <header className="top-header-bar">
        {/* Quote - Center */}
        <div className="header-quote">
          <motion.span
            key={currentQuote}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            "{quotes[currentQuote]}"
          </motion.span>
        </div>

        {/* Weather & Time - Right */}
        <div className="header-weather-time">
          <div className="header-item">
            <span className="header-label">Accra</span>
            <span className="header-value">{weather.temp}</span>
          </div>
          <div className="header-divider" />
          <div className="header-item">
            <span className="header-label">Local</span>
            <span className="header-value">{currentTime}</span>
          </div>
        </div>
      </header>

      {/* Sidebar Navigation (desktop only) - includes brand logo */}
      <Sidebar />

      {/* Mobile Menu */}
      <MobileMenu />

      {/* Hero Section */}
      <section className="hero-redesign">
        <div className="hero-content-centered">
          <div className="hero-text-group">
            <motion.div
              className="hero-badge-pill"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Product Strategist & Builder
            </motion.div>

            <motion.h1
              className="hero-headline-large"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              I design products and ship them.
            </motion.h1>

            <motion.p
              className="hero-subheadline"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Product strategy, behavioral design, and bespoke interfaces backed by real market insight. I use AI tools like Claude and Cursor to go from concept to production.
            </motion.p>
          </div>

          {/* Previously At and Featured In sections - hidden for now
          <motion.div
            className="hero-companies"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <span className="previously-at">Previously at</span>
            <div className="company-logos">
              <img src="/images/logos/jenesys-logo.png" alt="Jenesys" />
              <img src="/images/logos/jenesys-logo.png" alt="Company 2" />
              <img src="/images/logos/jenesys-logo.png" alt="Company 3" />
            </div>
          </motion.div>

          <motion.div
            className="hero-featured-in"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <span className="featured-in-label">Featured in</span>
            <div className="featured-logos-grid">
              <div className="featured-logo-card">
                <img src="/images/logos/jenesys-logo.png" alt="Lapa" />
              </div>
              <div className="featured-logo-card">
                <img src="/images/logos/jenesys-logo.png" alt="Landbook" />
              </div>
              <div className="featured-logo-card">
                <img src="/images/logos/jenesys-logo.png" alt="Bestfolios" />
              </div>
              <div className="featured-logo-card">
                <img src="/images/logos/jenesys-logo.png" alt="Medium" />
              </div>
              <div className="featured-logo-card">
                <img src="/images/logos/jenesys-logo.png" alt="UX Planet" />
              </div>
              <div className="featured-logo-card">
                <img src="/images/logos/jenesys-logo.png" alt="Designer Hunt" />
              </div>
              <div className="featured-logo-card">
                <img src="/images/logos/jenesys-logo.png" alt="Case Study Club" />
              </div>
              <div className="featured-logo-card">
                <img src="/images/logos/jenesys-logo.png" alt="UX Collective" />
              </div>
            </div>
          </motion.div>
          */}
        </div>
      </section>

      {/* Two-Column Project Grid */}
      <section className="project-grid-section">
        <div className="project-grid-container">
          {/* Row 1 */}
          <div className="project-grid-row">
            <motion.div
              className="project-card-large"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <Link to={mainProjects[0].link} className="project-card-inner" style={{ background: mainProjects[0].bgColor }}>
                <div className="project-card-content">
                  <h3 className="project-card-title">{mainProjects[0].title}</h3>
                  <p className="project-card-description">{mainProjects[0].description}</p>
                  <p className="project-card-link">Read case study <ArrowRightIcon className="arrow-icon" size={16} /></p>
                </div>
                <div className="project-card-image-wrapper">
                  <img src={mainProjects[0].image} alt={mainProjects[0].title} className="project-card-image" />
                </div>
              </Link>
            </motion.div>
            <motion.div
              className="project-card-large"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <Link to={mainProjects[1].link} className="project-card-inner mobile-card" style={{ background: mainProjects[1].bgColor }}>
                <div className="project-card-content">
                  <h3 className="project-card-title">{mainProjects[1].title}</h3>
                  <p className="project-card-description">{mainProjects[1].description}</p>
                  <p className="project-card-link">Read case study <ArrowRightIcon className="arrow-icon" size={16} /></p>
                </div>
                <div className="project-card-image-wrapper">
                  <img src={mainProjects[1].image} alt={mainProjects[1].title} className="project-card-image" />
                </div>
              </Link>
            </motion.div>
          </div>
          {/* Row 2 */}
          <div className="project-grid-row">
            <motion.div
              className="project-card-large"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <Link to={mainProjects[2].link} className="project-card-inner" style={{ background: mainProjects[2].bgColor }}>
                <div className="project-card-content">
                  <h3 className="project-card-title">{mainProjects[2].title}</h3>
                  <p className="project-card-description">{mainProjects[2].description}</p>
                  <p className="project-card-link">Read case study <ArrowRightIcon className="arrow-icon" size={16} /></p>
                </div>
                <div className="project-card-image-wrapper">
                  <img src={mainProjects[2].image} alt={mainProjects[2].title} className="project-card-image" />
                </div>
              </Link>
            </motion.div>
            <motion.div
              className="project-card-large"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <Link to={mainProjects[3].link} className="project-card-inner" style={{ background: mainProjects[3].bgColor }}>
                <div className="project-card-content">
                  <h3 className="project-card-title">{mainProjects[3].title}</h3>
                  <p className="project-card-description">{mainProjects[3].description}</p>
                  <p className="project-card-link">Read case study <ArrowRightIcon className="arrow-icon" size={16} /></p>
                </div>
                <div className="project-card-image-wrapper">
                  <img src={mainProjects[3].image} alt={mainProjects[3].title} className="project-card-image" />
                </div>
              </Link>
            </motion.div>
          </div>
          {/* Row 3 */}
          <div className="project-grid-row">
            <motion.div
              className="project-card-large"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <Link to={mainProjects[4].link} className="project-card-inner mobile-card" style={{ background: mainProjects[4].bgColor }}>
                <div className="project-card-content">
                  <h3 className="project-card-title">{mainProjects[4].title}</h3>
                  <p className="project-card-description">{mainProjects[4].description}</p>
                  <p className="project-card-link">Read case study <ArrowRightIcon className="arrow-icon" size={16} /></p>
                </div>
                <div className="project-card-image-wrapper">
                  <img src={mainProjects[4].image} alt={mainProjects[4].title} className="project-card-image" />
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What I Bring Section */}
      <section className="expertise-section">
        <div className="expertise-container">
          <motion.div
            className="expertise-header"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h2 className="expertise-title">What I bring to the table</h2>
          </motion.div>

          <div className="expertise-grid">
            <motion.div
              className="expertise-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="expertise-card-title">Product Expertise</h3>
              <p className="expertise-card-text">I specialize in market trend analysis, product performance forecasting, and identifying hidden opportunities and threats. I use data research and strategic frameworks to develop products that keep clients ahead of the competition, guiding teams through the entire product lifecycle.</p>
            </motion.div>

            <motion.div
              className="expertise-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="expertise-card-title">Behavioral Design</h3>
              <p className="expertise-card-text">I integrate neuroscience and UX principles with the psychology of user interactions, ensuring every design decision is informed by how users think, feel, and act. By applying behavioral models, I create interfaces that are not just functional but deeply resonant with the user's psychological drivers.</p>
            </motion.div>

            <motion.div
              className="expertise-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="expertise-card-title">Strategy</h3>
              <p className="expertise-card-text">I craft comprehensive product strategies that encompass market analysis, competitive positioning, and lifecycle planning. Through a deep understanding of market dynamics and consumer behavior, I develop actionable strategies that anticipate market shifts and position your product for long-term growth.</p>
            </motion.div>

            <motion.div
              className="expertise-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="expertise-card-title">AI-Assisted Development</h3>
              <p className="expertise-card-text">I use tools like Claude and Cursor to go from design to production-level code. No dev team needed. I ship real products, not just prototypes, guiding the entire journey from concept to launch.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Landing Pages Gallery Section */}
      <section className="landing-pages-section">
        <div className="landing-pages-container">
          <motion.div
            className="landing-pages-header"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h2 className="landing-pages-title">Landing Pages & Websites</h2>
            <p className="landing-pages-subtitle">Designed and built for clients and personal projects</p>
          </motion.div>

          <div className="landing-pages-grid">
            {/* BeOrchid */}
            <motion.a
              href="https://beorchid.com"
              target="_blank"
              rel="noopener noreferrer"
              className="landing-page-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="landing-page-image-wrapper">
                <img src="/images/landing-pages/beorchid-landing.png" alt="BeOrchid Website" />
                <div className="landing-page-overlay">
                  <span className="view-site-btn">View Live Site <ArrowRightIcon size={16} /></span>
                </div>
              </div>
              <div className="landing-page-info">
                <h3 className="landing-page-name">BeOrchid</h3>
                <p className="landing-page-description">Technology studio website with modern aesthetics and clear service offerings</p>
              </div>
            </motion.a>

            {/* HerGuided Tours */}
            <motion.a
              href="https://herguidedtours.com"
              target="_blank"
              rel="noopener noreferrer"
              className="landing-page-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="landing-page-image-wrapper">
                <img src="/images/landing-pages/herguidedtours-landing.png" alt="HerGuided Tours Website" />
                <div className="landing-page-overlay">
                  <span className="view-site-btn">View Live Site <ArrowRightIcon size={16} /></span>
                </div>
              </div>
              <div className="landing-page-info">
                <h3 className="landing-page-name">HerGuided Tours</h3>
                <p className="landing-page-description">Curated travel experiences platform helping travelers find their paradise</p>
              </div>
            </motion.a>
          </div>
        </div>
      </section>

      {/* Contact Footer */}
      <footer className="contact-footer-simple" id="contact">
        <div className="contact-footer-container">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center' }}
          >
            <h2 className="contact-heading-simple">Let's Work Together</h2>
            <p className="contact-subtext">
              Have a product that needs designing or shipping? Let's talk.
            </p>
            <a
              href="mailto:rashidlansahadam@gmail.com"
              className="contact-email-link"
            >
              rashidlansahadam@gmail.com
            </a>
          </motion.div>

          <motion.div
            className="social-icons-row"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <a
              href="https://linkedin.com/in/rashid-lansah"
              className="social-icon-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon size={24} />
            </a>
            <a
              href="https://github.com/RashidLansah"
              className="social-icon-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon size={24} />
            </a>
            <a
              href="https://medium.com/@rashidlansah"
              className="social-icon-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MediumIcon size={24} />
            </a>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}

export default Portfolio;
