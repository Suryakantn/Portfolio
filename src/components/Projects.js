import React from 'react'
import projectsData from '../projects.json';
const Projects = (props) => {
    let textColor = props.mode === 'light' ? 'black' : 'white';
    return (
        <>
            <div>
                <h1 className={`header-name my-4 text-${textColor}`}>My Projects</h1>
                <div className="row">
                    {projectsData.map((pro, i) => {
                        return (
                            <div key={i} className="col-sm-6 my-3">
                                <div className={`card bg-${props.mode} text-${textColor}`}>
                                    <div className="card-body">
                                        <h2 className="card-title">{pro.name}</h2>
                                        <p className="card-text">{pro.description}</p>
                                        {pro.url && <a href={pro.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Preview</a>}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

                <h4 className={`my-4 header-anim text-${textColor}`}>More Projects will be added soon!!!</h4>
            </div>
        </>
    )
}

export default Projects