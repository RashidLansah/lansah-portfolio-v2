import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import './CaseStudy.css';

const BackIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 12H5M12 19l-7-7 7-7"/>
  </svg>
);

function StimulirCaseStudy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="case-study-page">
      <nav className="cs-nav">
        <div className="cs-nav-inner">
          <Link to="/work" className="cs-back-link">
            <BackIcon />
            <span>Back to Work</span>
          </Link>
        </div>
      </nav>

      <main>
        {/* Hero */}
        <section className="cs-hero" style={{ background: 'linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%)', minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
          <div className="cs-hero-inner" style={{ maxWidth: 960, margin: '0 auto', padding: '80px 32px' }}>
            <div style={{ display: 'flex', gap: 12, marginBottom: 24, flexWrap: 'wrap' }}>
              <span style={{ background: 'rgba(255,255,255,0.08)', color: '#c9a07a', fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '5px 12px', borderRadius: 4 }}>Product Engineer</span>
              <span style={{ background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.5)', fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '5px 12px', borderRadius: 4 }}>2025 – Present</span>
              <span style={{ background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.5)', fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '5px 12px', borderRadius: 4 }}>AI Infrastructure</span>
            </div>
            <h1 style={{ fontFamily: 'Geist, Inter, sans-serif', fontWeight: 400, fontSize: 'clamp(36px, 5vw, 64px)', lineHeight: 1.1, color: '#fff', margin: '0 0 24px', letterSpacing: '-0.02em' }}>
              Stimulir
            </h1>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 18, lineHeight: 1.6, color: 'rgba(255,255,255,0.55)', maxWidth: 560, margin: 0 }}>
              Adaptive AI inference gateway — one integration for every AI modality that gets sharper as it runs.
            </p>
          </div>
        </section>

        {/* Coming Soon */}
        <section style={{ maxWidth: 960, margin: '0 auto', padding: '120px 32px', textAlign: 'center' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: '#f5f0ea', color: '#c9a07a',
            fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 600,
            letterSpacing: '0.1em', textTransform: 'uppercase',
            padding: '6px 16px', borderRadius: 20, marginBottom: 32,
          }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#c9a07a', display: 'inline-block' }} />
            Case study in progress
          </div>

          <h2 style={{ fontFamily: 'Geist, Inter, sans-serif', fontWeight: 400, fontSize: 'clamp(28px, 4vw, 48px)', color: '#111', letterSpacing: '-0.02em', margin: '0 0 20px' }}>
            Full case study coming soon.
          </h2>

          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, lineHeight: 1.7, color: '#666', maxWidth: 520, margin: '0 auto 64px' }}>
            I'm documenting the product decisions, design system, and engineering work behind Stimulir. Check back shortly.
          </p>

          {/* Snapshot pills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center', marginBottom: 80 }}>
            {[
              'Adaptive AI gateway',
              'Console product (0→1)',
              'Mobile — native iOS',
              'Design system',
              'Docs product',
              'GA4 + SEO',
            ].map(tag => (
              <span key={tag} style={{
                fontFamily: 'Inter, sans-serif', fontSize: 13, color: '#444',
                background: '#f4f4f4', padding: '8px 16px', borderRadius: 20,
                border: '1px solid #e8e8e8',
              }}>
                {tag}
              </span>
            ))}
          </div>

          <Link to="/work" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            fontFamily: 'Inter, sans-serif', fontSize: 13, fontWeight: 500,
            color: '#111', textDecoration: 'none',
            borderBottom: '1px solid #111', paddingBottom: 2,
          }}>
            ← Back to all work
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default StimulirCaseStudy;
