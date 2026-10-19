import React from 'react';
import About from './About';
import { Education } from './Education';
import Profession from './Profession';
import Skills from './Skills';
import Projects from './Projects';
import Extra from './Extra';

function Home({ mode, experiences }) {
  return (
    <main>
      <About mode={mode} />

      <section className="content-section section-wrap" id="education">
        <div className="section-heading reveal">
          <p className="eyebrow">The foundations</p>
          <h2>Education</h2>
        </div>
        <Education mode={mode} />
      </section>

      <section className="content-section section-wrap" id="experience">
        <div className="section-heading reveal">
          <p className="eyebrow">Where I’ve made an impact</p>
          <h2>Experience<span className="heading-period">.</span></h2>
          <p className="section-intro">8+ years of building thoughtful, reliable software with great teams.</p>
        </div>
        <div className="experience-list">
          {experiences.map((company, index) => (
            <Profession key={company.companyId} mode={mode} exp={company} index={index} />
          ))}
        </div>
      </section>

      <section className="content-section section-wrap" id="skills">
        <div className="section-heading reveal">
          <p className="eyebrow">Tools of the trade</p>
          <h2>My toolkit<span className="heading-period">.</span></h2>
          <p className="section-intro">A practical mix of technologies for taking ideas from first commit to production.</p>
        </div>
        <Skills mode={mode} />
      </section>

      <section className="content-section section-wrap" id="project">
        <div className="section-heading reveal">
          <p className="eyebrow">Things I’ve built</p>
          <h2>Selected projects<span className="heading-period">.</span></h2>
          <p className="section-intro">A few experiments and side projects from my time outside the day job.</p>
        </div>
        <Projects mode={mode} />
      </section>

      <section className="content-section section-wrap" id="extra">
        <Extra mode={mode} />
      </section>
    </main>
  );
}

export default Home;
