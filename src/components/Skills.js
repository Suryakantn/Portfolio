import React from 'react';

const skillGroups = [
  { name: 'Languages', number: '01', skills: ['JavaScript', 'TypeScript'] },
  { name: 'Frameworks', number: '02', skills: ['React.js', 'AngularJS'] },
  { name: 'Frontend', number: '03', skills: ['HTML', 'CSS', 'Bootstrap', 'Material UI'] },
  { name: 'Backend', number: '04', skills: ['Node.js', 'Java'] },
  { name: 'Databases', number: '05', skills: ['MySQL', 'MongoDB (NoSQL)', 'Redis'] },
  { name: 'Tools', number: '06', skills: ['VS Code', 'Git', 'Jira', 'Confluence', 'Postman', 'Figma', 'Zeplin'] },
  { name: 'Cloud', number: '07', skills: ['AWS'] },
  { name: 'Engineering', number: '08', skills: ['Data Structures', 'Algorithms', 'Design Patterns', 'Testing', 'Debugging', 'Problem Solving', 'RESTful APIs', 'Agile Methodologies'] },
];

function Skills() {
  return (
    <div className="skills-grid">
      {skillGroups.map((group) => (
        <article className="skill-group reveal" key={group.name}>
          <div className="skill-group-heading">
            <span>{group.number}</span>
            <h3>{group.name}</h3>
          </div>
          <div className="tag-list">
            {group.skills.map((skill) => <span className="skill-tag" key={skill}>{skill}</span>)}
          </div>
        </article>
      ))}
    </div>
  );
}

export default Skills;
