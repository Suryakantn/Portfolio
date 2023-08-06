import React from 'react'

function About(props) {
    let textColor = props.mode === 'light' ? 'black' : 'white';
    return (
        <>
            <div className={`bg-${props.mode} my-5 homeadjust text-${textColor}`} >
                <div className="row row--30 align-items-center">
                    <div className="order-2 order-lg-1 col-lg-7 mt_md--50 mt_sm--50 mt_lg--30">
                        <div className="content">
                            <div className="inner">
                                <h2 className="subtitle">Welcome to my world</h2>
                                <h1 className="title">Hi, I’m <span>Suryakant Nirmal</span><br />
                                    <span className="header-caption" id="page-top">
                                        <span className="cd-headline clip is-full-width">
                                            {/* <span>a </span> */}
                                            <span className="cd-words-wrapper" style={{ width: "279.749px", overflow: "hidden" }}>
                                                <p className="is-visible">a</p>
                                            </span>
                                        </span>
                                    </span>
                                </h1>
                                <h1 className="textAnim">
                                    <span></span>
                                    <div className="message">
                                        <div className="word1">Front End Developer.</div>
                                        <div className="word2">Back End Developer.</div>
                                        <div className="word3">Full Stack Developer.</div>
                                    </div>
                                </h1>
                                <div className="container">
                                    <p className="description">I am a passionate Full Stack Developer with a diverse skillset, specializing in Node.js, Angular, React, AWS, JavaScript, MySQL, MongoDB, and other cutting-edge technologies. With 5+ years of experience in the software development industry, I take pride in building robust and scalable applications that provide seamless user experiences. Along with that I'm a problem solver, an independent introvert, self learner, obsessed with the technology.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="order-1 order-lg-2 col-lg-5">
                        <div className="thumbnail">
                            <div className="inner">
                                <img className="inner-img" src={`${props.mode !== 'light' ? 'pofile_photo.jpg' : 'pofile_photo2.jpg'}`} alt="Personal Portfolio Images" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About