import React from "react";
import { useHistory } from "react-router-dom";
import Resume from "../assets/Greg Harris - Resume.pdf";

function NavBar() {
const history = useHistory();

return(
    <header>
    <nav className="navbar navbar-expand-lg top-fixed bg-dark navbar-dark">
        <span className="navbar-brand" onClick={event => history.push("/")}>Greg Harris</span>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <span className="nav-link" onClick={event => history.push("/")}>About</span>
                </li>
                <li className="nav-item">
                    <span className="nav-link" onClick={event => history.push("/projects")}>Projects</span>
                </li>
                <li className="nav-item">
                    <span className="nav-link" onClick={event => history.push("/gallery")}>Gallery</span>
                </li>
                <li className="nav-item">
                    <span className="nav-link" onClick={event => history.push("/contact")}>Contact</span>
                </li>
            </ul>
        </div>
        <span className="navbar-text text-primary" id="Resume">
            <a href={Resume}>View My Resume</a>
        </span>
    </nav>
</header>
)

}

export default NavBar;