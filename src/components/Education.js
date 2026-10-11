import React from 'react'

export const Education = (props) => {
    let textColor = props.mode === 'light' ? 'black' : 'white';
    return (
        <>
            <div className={`card container text-${textColor} bg-${props.mode}`}>
                <div className="card-body">
                    <h3 className="card-title h5">Bachelor of Engineering (B.E.), E&Tc</h3>
                    <h4 className="card-subtitle mb-2 h6 text-body-secondary">Sanjivani College of Engineering, Kopargaon</h4>
                    <p className="card-text">2013–2017</p>
                    <hr />
                    <h3 className="h5">Licenses &amp; Certifications</h3>
                    <ul className="mb-3">
                        <li>Diploma in Java Technologies — Profound Edutech</li>
                        <li>Python Fundamental Course — Sololearn</li>
                    </ul>
                    <h3 className="h5">Honors &amp; Awards</h3>
                    <p className="card-text mb-0">Best Roorki Award — Robocon 2017</p>
                </div>
            </div>
        </>
    )
}
