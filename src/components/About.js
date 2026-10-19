import React from 'react';
import resumeUrl from '../assets/Suryakant_Nirmal_Resume.pdf';

function About() {
  return (
    <section className="hero section-wrap" id="about">
      <div className="hero-copy reveal is-visible">
        <p className="eyebrow hero-eyebrow"><span className="status-dot" /> Senior Software Engineer · Finicity</p>
        <h1><span className="hero-greeting">Hi, I’m</span>{' '}<span className="hero-name">Suryakant Nirmal</span><span className="heading-period">.</span></h1>
        <p className="hero-role">Building Scalable FinTech Platforms.<span className="cursor-mark">_</span></p>
        <p className="hero-description">
          I’m a Senior Software Engineer at Finicity, a Mastercard Company, building robust,
          scalable applications and seamless user experiences. With 8+ years in software
          development, I’ve worked across the full product lifecycle—from design and development
          to testing, deployment, and API integrations. I enjoy solving complex problems, learning
          new technologies, and creating products that make a meaningful difference.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="mailto:nirmalsuryakant@gmail.com">
            Let’s talk <span aria-hidden="true">↗</span>
          </a>
          <a className="button button-text" href={resumeUrl} download="Suryakant_Nirmal_Resume.pdf">
            Download résumé <span aria-hidden="true">↓</span>
          </a>
        </div>
        <div className="hero-socials" aria-label="Social profiles">
          <a href="https://www.linkedin.com/in/suryakant-nirmal-985625b4/" target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
          <a href="https://github.com/Suryakantn" target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
          <a href="mailto:nirmalsuryakant@gmail.com">Email <span aria-hidden="true">↗</span></a>
        </div>
      </div>

      <div className="hero-visual reveal is-visible" aria-label="Eight years of software engineering experience">
        <div className="stack-visual">
          <div className="stack-visual-top">
            <span><span className="status-dot" /> FULL-STACK ENGINEER</span>
            <span>BUILD / SHIP / LEARN</span>
          </div>
          <div className="stack-years">
            <strong>8<span>+</span></strong>
            <span>YEARS OF<br />BUILDING</span>
          </div>
          <p className="stack-caption">Turning complex ideas into products people love to use.</p>
          <div className="stack-divider" />
          <p className="stack-label">A few tools in my kit</p>
          <div className="stack-tech-cloud">
            <span>JavaScript</span>
            <span>TypeScript</span>
            <span>React</span>
            <span>Angular</span>
            <span>Node.js</span>
            <span>Java</span>
            <span>AWS</span>
            <span>MySQL</span>
            <span>MongoDB</span>
            <span>Redis</span>
          </div>
          <span className="stack-spark stack-spark-one" aria-hidden="true">✳</span>
          <span className="stack-spark stack-spark-two" aria-hidden="true">✦</span>
        </div>
        <div className="hero-stats">
          <div><strong>3</strong><span>companies</span></div>
          <div><strong>∞</strong><span>things to learn</span></div>
        </div>
      </div>

      <a className="scroll-cue" href="#education" aria-label="Scroll to education">
        <span>Scroll to explore</span><span className="scroll-line" />
      </a>
    </section>
  );
}

export default About;
