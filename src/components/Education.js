import React from 'react'

export const Education = (props) => {
    let textColor = props.mode === 'light' ? 'black' : 'white';
    let socialBtn = props.mode === 'light' ? 'secondary' : 'light';
    return (
        <>
            <div className={`card container text-${textColor} bg-${props.mode}`} style={{ width: '18rem' }}>
                <div className="card-body">
                    <h5 className="card-title">Bachelor of Engineering (E&Tc)</h5>
                    <h6 className={`card-subtitle mb-2 text-body-${socialBtn}`}>Sanjivani College of Engineering kopargaon</h6>
                    {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                    {/* <a href="https://www.linkedin.com/school/sanjivani-college-of-engineering-kopargaon/" className="card-link">Card link</a> */}
                </div>
            </div>
        </>
    )
}
