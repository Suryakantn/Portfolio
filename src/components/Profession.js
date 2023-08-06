import React from 'react'

const Profession = (props) => {
    let textColor = props.mode === 'light' ? 'black' : 'white';
    return (
        <>
            <div className={`card w-75 mb-3 text-${textColor} bg-${props.mode} my-5`}>
                <div className="card-body">
                    <h5 className="card-title">{props.exp.title}</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">
                        <a target="_blank" rel="noreferrer" href={props.exp.company_url} >{props.exp.company}</a>
                    </h6>
                    {
                        props.exp.description.map((desc,index) => {
                            return (
                                <p className="text-left" key={index}><i className='fa fa-check black-color mx-2'></i>{desc}</p>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Profession