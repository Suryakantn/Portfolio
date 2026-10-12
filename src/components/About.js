import React from 'react'
import profilePhoto from '../assets/images/pofile_photo.jpg';
import lightProfilePhoto from '../assets/images/pofile_photo2.jpg';

function About(props) {
    let textColor = props.mode === 'light' ? 'black' : 'white';
    return (
        <>
            <div className={`bg-${props.mode} my-5 homeadjust text-${textColor}`} >
                <div className="row row--30 align-items-center">
                    <div className="container order-2 order-lg-1 col-lg-7 mt_md--50 mt_sm--50 mt_lg--30">
                        <div className="content">
                            <div className="inner">
                                <h2 className="subtitle">Welcome to my world</h2>
                                <h1 className="title" id="page-top">Hi, I’m <span>Suryakant Nirmal</span></h1>
                                <h1 className="textAnim">
                                    <span></span>
                                    <div className="message">
                                        <div className="word1">Senior Software Engineer.</div>
                                        <div className="word2">Full-Stack Engineer.</div>
                                        <div className="word3">Building Scalable FinTech Platforms.</div>
                                    </div>
                                </h1>
                                <div className="container">
                                    <p className="description text-start">I’m a Senior Software Engineer at Finicity, a Mastercard Company, with 7+ years of experience designing, developing, testing, and deploying web and mobile applications. I build robust, scalable applications and integrate APIs and services to deliver seamless user experiences across business domains. My toolkit includes JavaScript, TypeScript, Node.js, React, Angular, Java, AWS, MySQL, MongoDB, and Redis. I’m a problem solver and self-learner who enjoys creating meaningful products and keeping up with new technologies.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <div className="order-1 order-lg-2 col-lg-5">
                        <div className="thumbnail">
                            <div className="inner">
                                <img className="inner-img" src={props.mode !== 'light' ? profilePhoto : lightProfilePhoto} alt="Personal Portfolio Images" />
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default About
