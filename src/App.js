import './App.css';
import { useState, useEffect, useRef } from 'react';

function App() {
  const [isActionSheetOpen, setIsActionSheetOpen] = useState(false);
  const projectCardRef = useRef(null);

  const openActionSheet = () => {
    console.log('Opening action sheet...');
    setIsActionSheetOpen(true);
  };

  const closeActionSheet = () => {
    console.log('Closing action sheet...');
    setIsActionSheetOpen(false);
  };

  // Prevent body scroll when action sheet is open
  useEffect(() => {
    if (isActionSheetOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup function to restore scroll when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isActionSheetOpen]);

  console.log('Action sheet open:', isActionSheetOpen);

  return (
    <div className="App">
      <nav className="navbar">
        <div className="nav-container">
          <a href="/" className="nav-link active">Jonny Czar</a>
          <a href="#highlights" className="nav-link">Highlights</a>
          <a href="#work" className="nav-link">Work</a>
          <a href="https://linkedin.com" className="nav-link">LinkedIn</a>
          <a href="#contact" className="nav-link">Get in touch</a>
        </div>
      </nav>
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Jonny Czar is
            <br />
            Staff Product
            <br />
            Designer at Hotjar
          </h1>
          <p className="hero-subtitle">
            17 years of Design. Brazilian. Berlin-based.
          </p>
        </div>
        <div className="hero-image-container">
          <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face&auto=format" 
            alt="Jonny Czar" 
            className="hero-image"
          />
        </div>
      </section>
      <section className="companies">
        <div className="companies-container">
          <div className="company-item">CONTENT SQUARE</div>
          <div className="company-item">
            <span className="flame-icon"></span>
            hotjar
          </div>
          <div className="company-item">
            <div className="n26-line"></div>
            N26
          </div>
          <div className="company-item">
            <span className="i-icon">i</span>
            itaú
          </div>
          <div className="company-item">SOLO</div>
          <div className="company-item">
            <span className="flame-icon"></span>
          </div>
        </div>
      </section>
      <section className="highlights" id="highlights">
        <div className="highlights-container">
          <div className="highlight-card">
            <div className="card-icon"></div>
            <h3 className="card-title">Apple Editors choice</h3>
            <p className="card-description">Worldpackers app featured at Appstore as Innovation made in Brazil</p>
            <a href="#" className="card-link">See more </a>
          </div>
          <div className="highlight-card">
            <div className="card-icon"></div>
            <h3 className="card-title">Appstores App of the day</h3>
            <p className="card-description">Worldpackers App highlighted at Appstore - Travel Category</p>
            <a href="#" className="card-link">See more </a>
          </div>
          <div className="highlight-card">
            <div className="card-icon"></div>
            <h3 className="card-title">One of the UX Essential Portfolios</h3>
            <p className="card-description">Featured by UX Collective</p>
            <a href="#" className="card-link">See more </a>
          </div>
          <div className="highlight-card">
            <div className="card-icon"></div>
            <h3 className="card-title">Produto pelo mundo, Podcast</h3>
            <p className="card-description">Sharing the challenges of moving abroad as a product designer - PT-BR only</p>
            <a href="#" className="card-link">See more </a>
          </div>
          <div className="highlight-card">
            <div className="card-icon"></div>
            <h3 className="card-title">Speaker at Interaction Latin America</h3>
            <p className="card-description">Insights from designing the largest private bank in Brazil with +250 designers</p>
            <a href="#" className="card-link">See more </a>
          </div>
          <div className="highlight-card">
            <div className="card-icon">
              <div className="n26-logo">
                <div className="n26-line"></div>
                N26
              </div>
            </div>
            <h3 className="card-title">Pushing Europes banking further</h3>
            <p className="card-description">N26 Alumni - Senior Product Designer owning Home & Transactions</p>
            <a href="#" className="card-link">See more </a>
          </div>
        </div>
      </section>
      <section className="project-card-section" id="work" ref={projectCardRef}>
        <div className="project-container">
          <div className="project-brand">N26</div>
          <h2 className="project-title">A home for the easier-than-ever finances</h2>
          <p className="project-description">
            From bills to budgeting, money management can be challenging. Check out the design process of simplifying transactions of one of Europe's first completely mobile banks.
          </p>
          <div className="project-phone">
            <div className="phone-mockup">
              <div className="phone-screen">
                <div className="app-interface">
                  <div className="balance">1320.00</div>
                  <div className="nav-icons">
                    <div className="nav-item">
                      <div className="nav-icon"></div>
                      <span>Home</span>
                    </div>
                    <div className="nav-item">
                      <div className="nav-icon"></div>
                      <span>Today</span>
                    </div>
                    <div className="nav-item">
                      <div className="nav-icon"></div>
                      <span>Spaces</span>
                    </div>
                    <div className="nav-item">
                      <div className="nav-icon"></div>
                      <span>Send</span>
                    </div>
                    <div className="nav-item">
                      <div className="nav-icon"></div>
                      <span>Cards</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="project-stats">
            <div className="stat-item">
              <div className="n26-logo-small">
                <div className="n26-line-small"></div>
                <span>N26</span>
              </div>
              <div className="rating">
                <span className="stars"></span>
                <span className="rating-number">4,5</span>
              </div>
            </div>
            <div className="stat-item">
              <div className="globe-icon"></div>
              <span>+8 millions customers</span>
            </div>
            <div className="stat-item">
              <div className="forbes-logo">Forbes</div>
              <div className="forbes-year">2022</div>
              <span>World's best Banks</span>
            </div>
            <button className="case-study-btn" onClick={openActionSheet}>
              N26 Case Study 
            </button>
          </div>
        </div>
      </section>
      <section className="project-card-section contentsquare-card">
        <div className="project-container">
          <div className="project-brand">CONTENT SQUARE</div>
          <h2 className="project-title">Designing User Tests</h2>
          <h3 className="project-subtitle">Observe how real users experience your site</h3>
          <p className="project-description">
            At Contentsquare, we know listening to customers pays off. This case study walks you through designing user tests from the ground up.
          </p>
          <div className="project-screens">
            <div className="screen-left">
              <div className="screen-content analytics">
                <div className="analytics-header">Analytics</div>
                <div className="analytics-score">5.1 out of 7</div>
                <div className="analytics-chart">
                  <div className="chart-bar"></div>
                  <div className="chart-bar"></div>
                  <div className="chart-bar"></div>
                  <div className="chart-bar"></div>
                </div>
              </div>
            </div>
            <div className="screen-center">
              <div className="screen-content main-app">
                <div className="app-header">
                  <div className="app-title">TravelGo</div>
                  <div className="app-subtitle">Book a travel of your dream</div>
                </div>
                <div className="search-section">
                  <div className="search-field">Anywhere</div>
                  <div className="search-field">Anytime</div>
                  <div className="search-field">Add guests</div>
                </div>
                <div className="map-section">
                  <div className="map-placeholder"></div>
                </div>
                <div className="video-call">
                  <div className="video-window">
                    <div className="video-person"></div>
                  </div>
                  <div className="call-controls">
                    <div className="control-btn red"></div>
                    <div className="control-btn blue"></div>
                    <div className="control-btn purple"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="screen-right">
              <div className="screen-content recordings">
                <div className="recording-item">
                  <div className="recording-time">2:15</div>
                  <div className="recording-percentage">97%</div>
                </div>
                <div className="recording-item">
                  <div className="recording-time">1:45</div>
                  <div className="recording-percentage">89%</div>
                </div>
                <div className="recording-item">
                  <div className="recording-time">3:22</div>
                  <div className="recording-percentage">92%</div>
                </div>
              </div>
            </div>
          </div>
          <div className="project-stats">
            <div className="stats-left">
              <div className="stat-item">
                <span className="company-name">CONTENT SQUARE</span>
              </div>
              <div className="stat-item">
                <span className="g-logo">G</span>
                <span className="rating-text">4.7  on G2</span>
              </div>
              <div className="stat-item">
                <span className="g-logo">G</span>
                <span className="rating-text">4.7  on Gartner</span>
              </div>
            </div>
            <button className="coming-soon-btn">
              Coming soon 
            </button>
          </div>
        </div>
      </section>
      <section className="project-card-section article-card">
        <div className="article-container">
          <div className="article-label">Article</div>
          <h2 className="article-title">The power of visual in product design</h2>
          <p className="article-description">
            How visual elements affect our perception, recognition and memory by interacting with digital products.
          </p>
          <button className="article-btn">
            Full article 
          </button>
          <div className="article-decorations">
            <div className="decoration-1"></div>
            <div className="decoration-2"></div>
            <div className="decoration-3"></div>
            <div className="decoration-4"></div>
            <div className="decoration-5"></div>
          </div>
        </div>
      </section>
      <section className="project-card-section side-project-card">
        <div className="side-project-container">
          <div className="side-project-content">
            <div className="side-project-label">Side project</div>
            <h2 className="side-project-title">
              Introducing
              <br />
              Janga's house
            </h2>
            <p className="side-project-description">
              Book a weekend with your loved ones and enjoy a never-ending summer stay in the heart of Brazil. - PT-BR Only.
            </p>
            <button className="side-project-btn">
              Check it out 
            </button>
          </div>
          <div className="side-project-image">
            <img 
              src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop&auto=format" 
              alt="Janga's house - tropical house with swimming pool" 
              className="house-image"
            />
          </div>
          <div className="side-project-url">
            https://www.casapraiarecife.com
          </div>
        </div>
      </section>
      <section className="project-card-section bookify-card">
        <div className="bookify-container">
          <div className="bookify-content">
            <div className="bookify-text">
              <div className="bookify-brand">Bookify</div>
              <h2 className="bookify-title">Acclaimed books right to your phone</h2>
              <p className="bookify-description">
                The design process for creating Genius: Bookify's reward program.
              </p>
            </div>
            <div className="bookify-phone">
              <div className="bookify-phone-mockup">
                <div className="bookify-phone-screen">
                  <div className="bookify-app-interface">
                    <div className="bookify-header">
                      <div className="bookify-search">Search</div>
                      <div className="bookify-profile"></div>
                    </div>
                    <div className="bookify-section">
                      <h3 className="bookify-section-title">Popular books</h3>
                      <div className="bookify-books">
                        <div className="book-item">
                          <div className="book-cover"></div>
                          <div className="book-title">THE WILD ROBOT</div>
                          <div className="book-author">Peter Brown</div>
                          <div className="book-rating"></div>
                        </div>
                        <div className="book-item">
                          <div className="book-cover"></div>
                          <div className="book-title">CRAZY RICH ASIANS</div>
                          <div className="book-author">Kevin Kwan</div>
                          <div className="book-rating"></div>
                        </div>
                        <div className="book-item">
                          <div className="book-cover"></div>
                          <div className="book-title">The Culture</div>
                          <div className="book-author">Author</div>
                          <div className="book-rating"></div>
                        </div>
                      </div>
                    </div>
                    <div className="bookify-section">
                      <h3 className="bookify-section-title">Filter by categories</h3>
                      <div className="bookify-categories">
                        <div className="category-item"> Best Sellers</div>
                        <div className="category-item"> Music</div>
                        <div className="category-item"> Fiction</div>
                        <div className="category-item"> Poetry</div>
                      </div>
                    </div>
                    <div className="bookify-nav">
                      <div className="nav-item"></div>
                      <div className="nav-item"></div>
                      <div className="nav-item"></div>
                      <div className="nav-item"></div>
                      <div className="nav-item"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bookify-bottom">
            <div className="bookify-case-study">
              <div className="bookify-icon">b</div>
              <div className="bookify-case-text">
                <div className="bookify-case-title">Bookify</div>
                <div className="bookify-case-subtitle">Case Study</div>
              </div>
            </div>
            <button className="bookify-read-more-btn">
              Read more 
            </button>
          </div>
        </div>
      </section>

      {/* Action Sheet Modal */}
      {isActionSheetOpen && (
        <div className="action-sheet-backdrop open" onClick={closeActionSheet}>
          <div className="action-sheet" onClick={(e) => e.stopPropagation()}>
            <div className="action-sheet-handle" onClick={closeActionSheet}></div>
            <div className="action-sheet-header">
              <h3 className="action-sheet-title">Read full details</h3>
              <button className="action-sheet-close-btn" onClick={closeActionSheet}>
                &times;
              </button>
            </div>
            <div className="action-sheet-content">
              <div className="action-sheet-body">
                <p className="action-sheet-subtitle">
                  <strong>Here you will find the portfolio details</strong>
                </p>
                <p className="action-sheet-description">
                  This action sheet covers almost the entire screen height and width, 
                  providing a full-screen experience for viewing portfolio details.
                </p>
                <div className="action-sheet-features">
                  <div className="feature-card">
                    <h4>Project Overview</h4>
                    <p>Detailed description of the N26 banking app redesign project.</p>
                  </div>
                  <div className="feature-card">
                    <h4>Design Process</h4>
                    <p>Step-by-step breakdown of the design methodology and approach.</p>
                  </div>
                  <div className="feature-card">
                    <h4>Key Achievements</h4>
                    <p>Metrics and results achieved through the design improvements.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
