import { Link, useLocation } from 'react-router-dom';
import { HomeOutlineIcon, MailOutlineIcon } from './Icons';

function Sidebar() {
  const location = useLocation();

  return (
    <>
      {/* Brand Logo - Top Left */}
      <Link to="/" className="brand-logo-topleft">
        Lansah
      </Link>

      {/* Sidebar Navigation */}
      <nav className="sidebar-nav">
        <div className="sidebar-nav-container">
          <Link to="/" className={`sidebar-nav-item ${location.pathname === '/' ? 'active' : ''}`}>
            <HomeOutlineIcon size={32} />
          </Link>
          <a
            href="mailto:rashidlansahadam@gmail.com"
            className="sidebar-nav-item"
            title="Email me"
          >
            <MailOutlineIcon size={32} />
          </a>
          <Link to="/about" className={`sidebar-nav-profile ${location.pathname === '/about' ? 'active' : ''}`}>
            <img src="/images/lansah-profile.png" alt="Lansah" />
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Sidebar;
