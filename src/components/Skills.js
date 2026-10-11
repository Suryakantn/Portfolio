import React from 'react'

const Skills = (props) => {
    let textColor = props.mode === 'light' ? 'black' : 'white';
    const skillGroups = [
        { name: 'Languages', skills: ['JavaScript', 'TypeScript', 'Core Java'] },
        { name: 'Frameworks', skills: ['React.js', 'React Native', 'AngularJS', 'Angular 6', 'Angular Material', 'Next.js', 'Spring Boot', 'Express.js', 'Hibernate', 'JavaServer Pages (JSP)', 'Embedded JavaScript (EJS)'] },
        { name: 'Frontend', skills: ['HTML', 'HTML5', 'Cascading Style Sheets (CSS)', 'Bootstrap', 'Bootstrap (Framework)', 'Material UI', 'Material-UI', 'jQuery'] },
        { name: 'Backend & APIs', skills: ['Node.js', 'RESTful APIs'] },
        { name: 'Databases & Data', skills: ['MySQL', 'MongoDB', 'Redis', 'Snowflake'] },
        { name: 'Cloud', skills: ['AWS', 'Amazon Web Services (AWS)'] },
        { name: 'Tools', skills: ['VS Code', 'Git', 'GitLab', 'Bitbucket', 'Jira', 'Confluence', 'Postman', 'Figma', 'Zeplin', 'Splunk', 'SonarQube', 'Kibana'] },
        { name: 'Engineering', skills: ['Version Control', 'Code Review', 'Code Design', 'Continuous Integration (CI)', 'Data Structures & Algorithms', 'Design Patterns', 'Testing', 'Debugging', 'Problem Solving', 'Agile Methodologies'] },
    ];

    return (
        <>
            <h1 className={`header-name my-4 text-${textColor}`}>Skills</h1>
            <div className="row g-3 my-4">
                {skillGroups.map((group) => (
                    <div className="col-12 col-md-6 col-lg-4" key={group.name}>
                        <div className={`card h-100 bg-${props.mode} text-${textColor}`}>
                            <div className="card-body">
                                <h2 className="h5 card-title">{group.name}</h2>
                                <div className="d-flex flex-wrap gap-2">
                                    {group.skills.map((skill) => (
                                        <span className="badge bg-secondary" key={skill}>{skill}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Skills