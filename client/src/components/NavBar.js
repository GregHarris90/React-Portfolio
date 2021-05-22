import React from "react";

function NavBar() {

return(
    <header>
    <nav class="navbar navbar-expand-lg top-fixed bg-dark navbar-dark">
        <a class="navbar-brand">Greg Harris</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="/">About</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/projects">Projects</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/gallery">Gallery</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/contact">Contact</a>
                </li>
            </ul>
        </div>
        <span class="navbar-text text-primary" id="Resume">
            <a href="./assets/Greg Harris - Resume.pdf">View My Resume</a>
        </span>
    </nav>
</header>
)

}

export default NavBar;