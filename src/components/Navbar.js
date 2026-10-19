import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import resumeUrl from '../assets/Suryakant_Nirmal_Resume.pdf';

const navigation = [
  { label: 'About', target: 'about' },
  { label: 'Experience', target: 'experience' },
  { label: 'Skills', target: 'skills' },
  { label: 'Projects', target: 'project' },
];

function Navbar({ mode, toggleMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Main navigation">
        <ScrollLink
          className="brand"
          to="about"
          smooth
          duration={500}
          offset={-88}
          onClick={closeMenu}
          aria-label="Suryakant Nirmal, back to top"
        >
          <span className="brand-monogram" aria-hidden="true">SN</span>
          <span>Suryakant<span className="brand-dot">.</span></span>
        </ScrollLink>

        <button
          className={`menu-toggle ${menuOpen ? 'is-open' : ''}`}
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>

        <div className={`nav-content ${menuOpen ? 'menu-open' : ''}`}>
          <div className="nav-links">
            {navigation.map(({ label, target }) => (
              <ScrollLink
                key={target}
                className="nav-link"
                activeClass="nav-active"
                to={target}
                spy
                smooth
                duration={500}
                offset={-88}
                onClick={closeMenu}
              >
                {label}
              </ScrollLink>
            ))}
          </div>
          <div className="nav-actions">
            <button
              className="theme-toggle"
              type="button"
              onClick={toggleMode}
              aria-label={`Switch to ${mode === 'dark' ? 'light' : 'dark'} theme`}
              title={`Switch to ${mode === 'dark' ? 'light' : 'dark'} theme`}
            >
              <span aria-hidden="true">{mode === 'dark' ? '☼' : '☾'}</span>
            </button>
            <a className="button button-small button-outline" href={resumeUrl} download="Suryakant_Nirmal_Resume.pdf">
              Resume <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
