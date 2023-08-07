import React from 'react'

const Extra = (props) => {
    let btnCol = props.mode === 'light' ? 'dark' : 'light';
    let backCol = props.mode === 'light' ? 'light' : 'dark';

    return (
        <>
            <div className="container text-center">
                <div className="row">
                    <div className={`col align-self-start bg-${backCol}`}>
                        <h1 className={`header-name my-2 text-${props.mode === 'light' ? 'black' : 'white'}`}>Languages Known</h1>
                        <div className="btn-group-vertical my-2" role="group" aria-label="Vertical button group">
                            <button type="button" className={`btn btn-${btnCol} my-3 lang-names`}>
                                <i className="fa-sharp fa-solid fa-circle-dot mx-3"></i>
                                English</button>
                            <button type="button" className={`btn btn-${btnCol} my-3 lang-names`}>
                                <i className="fa-sharp fa-solid fa-circle-dot mx-3"></i>
                                Hindi</button>
                            <button type="button" className={`btn btn-${btnCol} my-3 lang-names`}>
                                <i className="fa-sharp fa-solid fa-circle-dot mx-3"></i>
                                Marathi</button>
                        </div>
                    </div>
                    <div className="col align-self-end">
                    </div>
                </div>
                <div className="row my-3" >
                </div>
                <div className="row ">
                    <div className="col align-self-start">
                    </div>
                    <div className={`col align-self-end bg-${backCol}`}>
                        <h1 className={`header-name my-2 text-${props.mode === 'light' ? 'black' : 'white'}`}>Interests</h1>
                        <div className="btn-group-vertical my-2" role="group" aria-label="Vertical button group">
                            <button type="button" className={`btn btn-${btnCol} my-3 lang-names`}>
                                <i className="fa-sharp fa-solid fa-circle-dot mx-3"></i>
                                Music</button>
                            <button type="button" className={`btn btn-${btnCol} my-3 lang-names`}>
                                <i className="fa-sharp fa-solid fa-circle-dot mx-3"></i>
                                Dance</button>
                            <button type="button" className={`btn btn-${btnCol} my-3 lang-names`}>
                                <i className="fa-sharp fa-solid fa-circle-dot mx-3"></i>
                                Cricket</button>
                            <button type="button" className={`btn btn-${btnCol} my-3 lang-names`}>
                                <i className="fa-sharp fa-solid fa-circle-dot mx-3"></i>
                                Watching Sci-fi Movies/Series</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Extra