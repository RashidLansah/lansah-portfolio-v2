import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './MobileMenu.css';

// Icon components
const HomeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
    <polyline points="9,22 9,12 15,12 15,22"></polyline>
  </svg>
);

const WorkIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
  </svg>
);

const LinkedInIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('menu-open');
      document.body.style.overflow = 'hidden';
    } else {
      document.body.classList.remove('menu-open');
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.classList.remove('menu-open');
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      {/* Mobile Header Bar - Full Width */}
      <div className={`mobile-header-bar ${isOpen ? 'open' : ''}`}>
        <div className="mobile-header-content">
          <span className="mobile-header-logo">Lansah</span>
          <button 
            className="mobile-menu-toggle"
            onClick={toggleMenu}
            aria-label="Toggle mobile menu"
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>
      </div>

      {/* Menu Overlay */}
      <div className={`mobile-menu-overlay ${isOpen ? 'open' : ''}`} onClick={closeMenu}>
        <div className={`mobile-menu-panel ${isOpen ? 'open' : ''}`} onClick={(e) => e.stopPropagation()}>
          {/* Menu Header */}
          <div className="mobile-menu-header">
            <div className="mobile-menu-logo">
              <span className="logo-text">Lansah</span>
            </div>
            <button 
              className="mobile-menu-close"
              onClick={closeMenu}
              aria-label="Close menu"
            >
              <span className="close-icon">×</span>
            </button>
          </div>

          {/* Menu Items */}
          <div className="mobile-menu-content">
            <nav className="mobile-menu-nav">
              <Link 
                to="/" 
                className="mobile-menu-item"
                onClick={closeMenu}
              >
                <div className="menu-item-icon">
                  <HomeIcon />
                </div>
                <span className="menu-item-label">Home</span>
              </Link>

              <Link 
                to="/work" 
                className="mobile-menu-item"
                onClick={closeMenu}
              >
                <div className="menu-item-icon">
                  <WorkIcon />
                </div>
                <span className="menu-item-label">Work</span>
              </Link>

              <a 
                href="https://linkedin.com/in/rashid-lansah" 
                className="mobile-menu-item"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
              >
                <div className="menu-item-icon">
                  <LinkedInIcon />
                </div>
                <span className="menu-item-label">LinkedIn</span>
              </a>
            </nav>
            
            {/* Schedule Call Button */}
            <div className="mobile-schedule-section">
              <a 
                href="https://calendly.com/rashidlansahadam" 
                className="mobile-schedule-btn"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
              >
                Schedule Call
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;