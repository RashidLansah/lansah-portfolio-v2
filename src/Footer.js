import React from 'react';
import { LinkedInIcon, GitHubIcon, MediumIcon } from './Icons';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-text">
          <p>Feel free to reach out for collaborations or just a friendly hello</p>
          <a href="mailto:rashidlansahadam@gmail.com" className="footer-email">
            rashidlansahadam@gmail.com
          </a>
        </div>
        <div className="social-links">
          <a
            href="https://linkedin.com/in/rashid-lansah"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="LinkedIn"
          >
            <LinkedInIcon size={24} />
          </a>
          <a
            href="https://github.com/RashidLansah"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="GitHub"
          >
            <GitHubIcon size={24} />
          </a>
          <a
            href="https://medium.com/@rashidlansah"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="Medium"
          >
            <MediumIcon size={24} />
          </a>
        </div>
        <div className="footer-copyright">
          <p>&copy; {new Date().getFullYear()} Lansah. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
