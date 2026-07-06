import React from 'react';
import { Link } from 'react-router-dom';

function ProjectCard({ link, bgColor, dark, logoSrc, name, meta, bullets, children }) {
  return (
    <Link
      to={link}
      className={`project-card-inner project-card-v2${dark ? ' pcv2-dark' : ''}`}
      style={{ background: bgColor }}
    >
      <div className="pcv2-header">
        {logoSrc ? (
          <img src={logoSrc} alt={name} className="pcv2-logo" />
        ) : (
          <span className="pcv2-wordmark">{name}</span>
        )}
        <span className="pcv2-pill">
          Read case study
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
            <path d="M3 9L9 3M9 3H4.5M9 3V7.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
      <div className="pcv2-meta">
        <div className="pcv2-meta-head">
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
            <rect x="1.5" y="2.5" width="12" height="11" rx="2" stroke="currentColor" strokeWidth="1.3" />
            <path d="M1.5 6h12M4.5 1v3M10.5 1v3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
          </svg>
          <span>{meta}</span>
        </div>
        <ul className="pcv2-bullets">
          {bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      </div>
      <div className="project-card-image-wrapper">{children}</div>
    </Link>
  );
}

export default ProjectCard;
