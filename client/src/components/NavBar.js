import React from "react";

function NavBar() {

return(
    <header>
    <nav className="navbar navbar-expand-lg top-fixed bg-dark navbar-dark">
        <a className="navbar-brand" href="/">Greg Harris</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="/">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/projects">Projects</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/gallery">Gallery</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/contact">Contact</a>
                </li>
            </ul>
        </div>
        <span className="navbar-text text-primary" id="Resume">
            <a href="./assets/Greg Harris - Resume.pdf">View My Resume</a>
        </span>
    </nav>
</header>
)

}

export default NavBar;