import React from 'react';

function Footer() {
  return (
    <footer className="site-footer section-wrap">
      <div className="footer-main">
        <div>
          <p className="eyebrow">Have a good one in mind?</p>
          <a className="footer-hello" href="mailto:nirmalsuryakant@gmail.com">Let’s make it real <span aria-hidden="true">↗</span></a>
        </div>
        <div className="footer-links">
          <a href="mailto:nirmalsuryakant@gmail.com">Email</a>
          <a href="https://www.linkedin.com/in/suryakant-nirmal-985625b4/" target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
          <a href="https://github.com/Suryakantn" target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Suryakant Nirmal</span>
        <a href="#about">Back to top ↑</a>
      </div>
    </footer>
  );
}

export default Footer;
