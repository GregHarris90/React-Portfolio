import React from "react";
import Project from "../components/Project";
import projects from "../projects.js";

function Projects() {
    return (
        <div>
            <Project projects={projects}/>
        </div>
    )
}

export default Projects;