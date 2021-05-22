import React from "react";

function Project() {

    return (
        <div>
            <div class="card">
                <img src={props.image} class="card-img-top" alt="Group-Project-1" />
                <div class="card-body">
                    <h5 class="card-title">{props.title}</h5>
                    <p class="card-text">{props.description}</p>
                    <a href={props.deployed}>Deployed Project</a>
                    <br />
                    <a href={props.github}>GitHub Repository</a>
                </div>
            </div>
        </div>
    )
}

export default Project;