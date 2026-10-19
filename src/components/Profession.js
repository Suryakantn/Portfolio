import React from 'react';

function Profession({ exp, index }) {
  return (
    <article className="experience-card reveal">
      <div className="experience-marker">
        <span className="experience-index">0{index + 1}</span>
        <span className="timeline-line" />
      </div>
      <div className="experience-body">
        <div className="experience-topline">
          <div>
            <p className="experience-period">{exp.companyPeriod}</p>
            <h3><a href={exp.company_url} target="_blank" rel="noreferrer">{exp.company}<span aria-hidden="true"> ↗</span></a></h3>
          </div>
          {exp.companyId === 'finicity' && <span className="current-badge"><span className="status-dot" /> Current</span>}
        </div>
        <div className="role-list">
          {exp.roles.map((role) => (
            <div className="role-entry" key={`${role.title}-${role.period}`}>
              <div className="role-heading">
                <h4>{role.title}</h4>
                <span>{role.period}</span>
              </div>
              <p className="role-location">{role.location}</p>
              <div className="tag-list">
                {role.skills.map((skill) => <span className="skill-tag" key={skill}>{skill}</span>)}
              </div>
            </div>
          ))}
        </div>
        <details className="experience-highlights">
          <summary>Highlights <span aria-hidden="true">＋</span></summary>
          <ul>
            {exp.description.map((description) => <li key={description}>{description}</li>)}
          </ul>
        </details>
      </div>
    </article>
  );
}

export default Profession;
