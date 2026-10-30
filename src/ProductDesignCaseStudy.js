import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import Footer from './Footer';
import './CaseStudy.css';
import './ProductDesignCaseStudy.css';

function ProductFigure({ src, alt, caption, hero = false }) {
  return (
    <figure className={`design-story-figure${hero ? ' design-story-hero' : ''}`}>
      <a href={src} target="_blank" rel="noopener noreferrer" aria-label={`Open full image: ${alt}`}>
        <img src={src} alt={alt} loading={hero ? 'eager' : 'lazy'} decoding="async" />
      </a>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

export default function ProductDesignCaseStudy({ study }) {
  useEffect(() => { window.scrollTo(0, 0); }, [study.name]);
  const contents = study.sections.filter(({ id }) => ['discovery', 'journeys', 'coverage', 'entry', 'onboarding', 'website', 'developer-experience', 'iteration', 'outcome'].includes(id));

  return (
    <div className="about-page jenesys-case design-story">
      <div className="vertical-line vertical-line-left" aria-hidden="true" />
      <div className="vertical-line vertical-line-right" aria-hidden="true" />
      <Sidebar />
      <nav className="about-nav" aria-label="Breadcrumb">
        <div className="about-breadcrumb">
          <Link to="/" className="about-breadcrumb-link">Home</Link>
          <span className="about-breadcrumb-separator" aria-hidden="true">/</span>
          <Link to="/work" className="about-breadcrumb-link">Work</Link>
          <span className="about-breadcrumb-separator" aria-hidden="true">/</span>
          <span className="about-breadcrumb-current" aria-current="page">{study.name}</span>
        </div>
      </nav>
      <main>
        <section className="about-hero case-hero-about">
          <div className="about-hero-content">
            <div className="case-meta-pills">
              {[study.name, 'Product Engineer', study.category, study.year].map((pill) => <span key={pill} className="case-pill">{pill}</span>)}
            </div>
            <h1 className="about-headline">{study.headline} <span className="highlight-text">{study.highlight}</span></h1>
            <p className="about-section-text design-story-summary">{study.summary}</p>
            <div className="case-impact-stats">
              {study.scope.map(({ value, label }) => <div className="impact-stat-item" key={label}><span className="stat-number">{value}</span><span className="stat-label">{label}</span></div>)}
            </div>
          </div>
        </section>
        <ProductFigure src={study.hero} alt={study.heroAlt} caption={study.heroCaption} hero />
        <nav className="design-story-contents" aria-label="Case study sections">
          <span className="section-label">Inside the case study</span>
          {contents.map(({ id, label, tocLabel }) => <a key={id} href={`#${id}`}>{tocLabel || label}</a>)}
        </nav>
        {study.sections.map((section) => (
          <section className="about-full-width design-story-section" id={section.id} key={section.id} aria-labelledby={`heading-${section.id}`}>
            <div className="about-full-content">
              <div className="about-text-content">
                <span className="section-label">{section.label}</span>
                <h2 className="about-section-title" id={`heading-${section.id}`}>{section.title}</h2>
                {section.body?.map((paragraph) => <p className="about-section-text" key={paragraph}>{paragraph}</p>)}
                {section.items && <div className="learnings-list">{section.items.map(({ title, text }) => <div className="learning-item" key={title}><h3>{title}</h3><p>{text}</p></div>)}</div>}
                {section.comparisons && <div className="design-story-table-wrap"><table className="design-story-table"><thead><tr><th scope="col">The friction</th><th scope="col">The design response</th></tr></thead><tbody>{section.comparisons.map(({ before, after }) => <tr key={before}><td>{before}</td><td>{after}</td></tr>)}</tbody></table></div>}
                {section.journeys?.map((journey, index) => <article className="design-story-journey" key={journey.name}><span className="feature-number">0{index + 1}</span><h3>{journey.name}</h3><p className="about-section-text">{journey.need}</p><ol className="design-story-flow">{journey.steps.map((step) => <li key={step}>{step}</li>)}</ol><p className="design-story-journey-note">{journey.note}</p></article>)}
              </div>
            </div>
            {section.image && <ProductFigure src={section.image} alt={section.imageAlt} caption={section.caption} />}
          </section>
        ))}
        <section className="about-full-width case-next-section">
          <div className="about-full-content"><div className="about-text-content"><span className="section-label">Related Project</span><Link to={study.related.path} className="next-case-link"><h2 className="about-section-title">{study.related.name}</h2><span className="about-arrow-button" aria-hidden="true">→</span></Link></div></div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
