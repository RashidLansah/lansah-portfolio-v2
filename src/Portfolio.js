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
    "Design is not just what it looks like. Design is how it works.",
    "Simplicity is the ultimate sophistication.",
    "Good design is obvious. Great design is transparent.",
    "The details are not the details. They make the design.",
    "Design creates culture. Culture shapes values. Values determine the future."
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
      description: 'AI-powered bookkeeping platform that helped SMEs automate reconciliation and reach $1M ARR.',
      link: '/case-study',
      bgColor: '#e4dbea',
      image: '/images/case-studies/jenesys-dashboard.png'
    },
    {
      id: 2,
      title: 'Kaaka',
      description: 'AI cooking assistant that turns grocery receipts into personalized meal plans—making meal planning effortless.',
      link: '/kaaka-case-study',
      bgColor: '#1a1a1a',
      image: '/images/case-studies/kaaka-home.png'
    },
    {
      id: 3,
      title: 'SheFundIt',
      description: 'Milestone-based crowdfunding platform empowering women entrepreneurs in Ghana to fund their businesses.',
      link: '/shefundit-case-study',
      bgColor: '#e8f5e9',
      image: '/images/case-studies/shefundit-screen-7.png'
    },
    {
      id: 4,
      title: 'Tikiti',
      description: 'Event ticketing app with 900+ downloads helping Ghanaians discover events and manage tickets with QR scanning.',
      link: '/tikiti-case-study',
      bgColor: '#5a4fcf',
      image: '/images/case-studies/tikiti-screen-5.png'
    },
    {
      id: 5,
      title: 'Tikiti Dashboard',
      description: 'B2B event management platform for NGOs—multi-channel messaging, attendee management, and AI-generated reports.',
      link: '/tikiti-dashboard-case-study',
      bgColor: '#1e293b',
      image: '/images/tikiti-dashboard-hero.png'
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
              Senior Product Designer
            </motion.div>

            <motion.h1
              className="hero-headline-large"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              I turn complexity into clarity.
            </motion.h1>

            <motion.p
              className="hero-subheadline"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              I design the first version, build the system, and stay until it scales—from zero users to millions in revenue.
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
              <Link to={mainProjects[1].link} className="project-card-inner mobile-card dark-card" style={{ background: mainProjects[1].bgColor }}>
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
              <Link to={mainProjects[2].link} className="project-card-inner mobile-card" style={{ background: mainProjects[2].bgColor }}>
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
              <Link to={mainProjects[3].link} className="project-card-inner mobile-card dark-card" style={{ background: mainProjects[3].bgColor }}>
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
              <Link to={mainProjects[4].link} className="project-card-inner dark-card" style={{ background: mainProjects[4].bgColor }}>
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
            <p className="landing-pages-subtitle">Visual designs I've crafted for clients and personal projects</p>
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
            <h2 className="contact-heading-simple">Let's Connect</h2>
            <p className="contact-subtext">
              Feel free to reach out for collaborations or just a friendly hello{' '}
              <span role="img" aria-label="smile">😀</span>
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
