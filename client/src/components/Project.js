import React from "react";

function Project(props) {

    return (
        <div>
            <div className="container card" id="project">
                <div className="card-deck">

                    {props.projects.map(item => (<div className="card" key={item.id}>
                        <img src={require(item.image)} className="card-img-top" alt={item.id} />
                        <div className="card-body">
                            <h5 className="card-title">{item.title}</h5>
                            <p className="card-text">{item.description}</p>
                            <a href={item.deployed}>Deployed Project</a>
                            <br />
                            <a href={item.github}>GitHub Repository</a>
                        </div>
                    </div>))}

                </div>
            </div>
        </div>
    )
}

export default Project;