import React from 'react'

const Profession = (props) => {
    let textColor = props.mode === 'light' ? 'black' : 'white';
    return (
        <>
            <div className={`card w-75 mb-3 text-${textColor} bg-${props.mode} my-5`}>
                <div className="card-body">
                    <h3 className="card-title h5">
                        <a target="_blank" rel="noreferrer" href={props.exp.company_url} >{props.exp.company}</a>
                    </h3>
                    <p className="card-subtitle mb-3 text-body-secondary">{props.exp.companyPeriod}</p>
                    <div className="mb-4">
                        {props.exp.roles.map((role, index) => (
                            <div className={index < props.exp.roles.length - 1 ? 'mb-3 pb-3 border-bottom' : ''} key={`${role.title}-${role.period}`}>
                                <h4 className="h6 mb-1">{role.title}</h4>
                                <p className="card-text mb-1">{role.period}</p>
                                <p className="card-text text-body-secondary mb-2">{role.location}</p>
                                {role.skills.length > 0 && (
                                    <div className="d-flex flex-wrap gap-2">
                                        {role.skills.map((skill) => (
                                            <span className="badge bg-secondary" key={skill}>{skill}</span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                    <h4 className="h6">Highlights</h4>
                    <ul className="mb-0">
                        {props.exp.description.map((description) => (
                            <li className="mb-2" key={description}>{description}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Profession