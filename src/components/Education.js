import React from 'react';

export const Education = () => (
  <div className="education-grid reveal">
    <article className="education-card">
      <span className="card-kicker">2013 — 2017</span>
      <span className="education-icon" aria-hidden="true">✳</span>
      <h3>Bachelor of Engineering</h3>
      <p className="education-specialty">Electronics &amp; Telecommunication</p>
      <p className="education-school">Sanjivani College of Engineering, Kopargaon</p>
    </article>
    <article className="education-card education-card-accent">
      <span className="card-kicker">A little extra</span>
      <span className="education-icon" aria-hidden="true">✦</span>
      <h3>Always learning</h3>
      <ul className="education-list">
        <li>Diploma in Java Technologies <span>Profound Edutech</span></li>
        <li>Python Fundamental Course <span>SoloLearn</span></li>
        <li>Best Roorki Award — Robocon 2017</li>
      </ul>
    </article>
  </div>
);
