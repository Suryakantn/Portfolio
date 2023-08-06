import React from 'react'
import About from './About'
import { Education } from './Education'
import Profession from './Profession'
import Skills from './Skills'
import Projects from './Projects'
import Extra from './Extra'
function Home(props) {

    return (
        <>
            <div id="about">
                <About mode={props.mode}></About>
            </div>
            <hr class="dashed-line container"/>     
            <div className="container" id="education">
                <h2 className={`header-name text-${props.mode === 'light' ? 'black' : 'white'}`}> Education </h2>
                <Education mode={props.mode}></Education>
            </div>
            <hr class="dashed-line container"/>     
            <div className="container" id="experience" >
                <h2 className={`header-name text-${props.mode === 'light' ? 'black' : 'white'}`}>My Experiences</h2>
                {props.experiences.map((exp) => {
                    return (
                        <Profession key={exp.order} mode={props.mode} exp={exp}></Profession>
                    )
                })}
            </div>
            <hr class="dashed-line container"/>     
            <div className="container" id="skills" >
                <Skills mode={props.mode}></Skills>
            </div>
            <hr class="dashed-line container"/>     
            <div className="container" id="project" >
                <Projects mode={props.mode}></Projects>
            </div>
            <hr class="dashed-line container"/>     
            <div id="extra" class="my-3" >
                <Extra mode={props.mode}></Extra>
            </div>
        </>
    )
}

export default Home