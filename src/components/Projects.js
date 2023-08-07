import React from 'react'
import projectsData from '../projects.json';
const Projects = (props) => {
    let textColor = props.mode === 'light' ? 'black' : 'white';
    return (
        <>
            <div>
                <h1 className={`header-name my-4 text-${textColor}`}>My Projects</h1>
                <div className="row row-cols-3 row-cols-lg-3 g-3 g-lg-3 my-4">
                    {projectsData.map((pro, i) => {
                        return (
                            <div key={i} className={`card col mx-3 bg-${props.mode} text-${textColor} mx-3 my-3`}>
                                <div className="card-body">
                                    <h2 className="card-title">{pro.name}</h2>
                                    {/* <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6> */}
                                    <p className="card-text">{pro.description}</p>
                                    {pro.url && <a href={pro.url} target="_blank" rel="noopener noreferrer" className="card-link">Preview</a>}
                                    {/* <a href="/" className="card-link">Another link</a> */}
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