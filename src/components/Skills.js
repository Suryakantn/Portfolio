import React from 'react'

const Skills = (props) => {
    let textColor = props.mode === 'light' ? 'black' : 'white';

    return (
        <>
            <h1 className={`header-name my-4 header-anim text-${textColor}`}>Skills I have</h1>
            <div className="row row-cols-2 row-cols-lg-6 g-2 g-lg-3 my-4">
                <div className="col my-4 " >
                    <i className="fa-brands fa-angular fa-beat fa-6x p-cent" style={{ color: "#c52020" }}></i>
                </div>
                <div className="col my-4 " >
                    <i className="fa-brands fa-node fa-beat fa-6x p-cent" style={{ color: "#3C873A" }}></i>
                </div>
                <div className="col my-4 " >
                    <i className="fa-brands fa-react fa-beat fa-6x p-cent" style={{ color: "#61DBFB" }}></i>
                </div>
                <div className="col my-4 " >
                    <i className="fa-brands fa-html5 fa-beat fa-6x p-cent" style={{ color: "#e34c26" }}></i>
                </div>
                <div className="col my-4 " >
                    <i className="fa-brands fa-js fa-beat fa-6x p-cent" style={{ color: "#F0DB4F" }}></i>
                </div>
                <div className="col my-3 "  >
                    <img width="110" height="110" style={{margin:'0em 0.4em'}} className="fa-brands fa-beat fa-6x" src="https://img.icons8.com/color/110/typescript.png" alt="typescript" />
                </div>
                <div className="col my-4 " >
                    <i className="fa-brands fa-aws fa-beat fa-6x p-cent" style={{ color: "#FF9900" }}></i>
                </div>
                <div className="col my-4 " >
                    <i className="fa-brands fa-css3-alt fa-beat fa-6x p-cent" style={{ color: "#264de4" }}></i>
                </div>
                <div className="col my-4 " >
                    <i className="fa-brands fa-git fa-beat fa-6x p-cent" style={{ color: "#F1502F" }}></i>
                </div>
                <div className="col" >
                    <img width="110" height="110" style={{margin:'0em 0.4em'}} className="fa-brands fa-beat fa-6x " src="https://img.icons8.com/color/110/mysql-logo.png" alt="mysql-logo" />
                </div>
            </div>
        </>
    )
}

export default Skills