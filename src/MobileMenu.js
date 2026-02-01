import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HomeOutlineIcon, MailOutlineIcon } from './Icons';
import './MobileMenu.css';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

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
          <Link to="/" className="mobile-header-logo">Lansah</Link>
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
                className={`mobile-menu-item ${location.pathname === '/' ? 'active' : ''}`}
                onClick={closeMenu}
              >
                <div className="menu-item-icon">
                  <HomeOutlineIcon size={24} />
                </div>
                <span className="menu-item-label">Home</span>
              </Link>

              <a
                href="mailto:rashidlansahadam@gmail.com"
                className="mobile-menu-item"
                onClick={closeMenu}
              >
                <div className="menu-item-icon">
                  <MailOutlineIcon size={24} />
                </div>
                <span className="menu-item-label">Email</span>
              </a>

              <Link
                to="/about"
                className={`mobile-menu-item ${location.pathname === '/about' ? 'active' : ''}`}
                onClick={closeMenu}
              >
                <div className="menu-item-icon menu-item-profile">
                  <img src="/images/lansah-profile.png" alt="Lansah" />
                </div>
                <span className="menu-item-label">About</span>
              </Link>
            </nav>

            {/* Schedule Call Button */}
            <div className="mobile-schedule-section">
              <a
                href="https://calendly.com/rashidlansahadam"
                className="mobile-schedule-btn"
                target="_blank"
                rel="noopener noreferrer"
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
