import React from 'react'
import { Link } from 'react-scroll'

function Navbar(props) {
    let textColor = props.mode === 'light' ? 'black' : 'white';
    let socialBtn = props.mode === 'light' ? 'secondary' : 'light';
    return (
        <>
            <nav className={`navbar fixed-top navbar-expand-lg bg-${props.mode}`}>
                <div className="container-fluid">
                    <img className="inner-img mx-2" width="30" height="30" src={require(`../assets/images/myavatar.png`)} alt="Personal Portfolio Images" />
                    <Link className={`navbar-brand text-${textColor} nav-text-link`} to="about" spy={true} smooth={true} offset={-60} >Suryakant</Link>
                    <button className={`navbar-toggler bg-${socialBtn} `} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-text-link">
                            <li className="nav-item">
                                <Link className={`nav-link text-${textColor} `} aria-current="page" to="about" spy={true} offset={-60} smooth={true} duration={500}>About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link text-${textColor} `} to="education" spy={true} smooth={true} offset={-50} duration={500}>Education</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link text-${textColor} `} to="experience" spy={true} smooth={true} offset={-60} duration={500}>Experience</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link text-${textColor} `} to="extra" spy={true} smooth={true} offset={-60} duration={500}>Extra</Link>
                            </li>
                            
                        </ul>
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" onClick={props.toggleMode} />
                            <label className={`form-check-label text-${textColor}`} htmlFor="flexSwitchCheckChecked">{props.mode === 'light' ? 'Dark' : 'Light'} Mode</label>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar