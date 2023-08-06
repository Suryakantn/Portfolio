import React from 'react'

const Projects = (props) => {
    let textColor = props.mode === 'light' ? 'black' : 'white';
    return (
        <>
            <div>
                <h1 className={`header-name my-4 text-${textColor}`}>My Projects</h1>
                <h4 className={`my-4 header-anim text-${textColor}`}>Projects will be added soon!!!</h4>
            </div>
        </>
    )
}

export default Projects