import React from "react";
import Welcome from "../components/Welcome";
import Links from "../components/Links";
import About from "../components/About";

function Home() {
    return(
        <div>
            <Welcome />
            <Links />
            <About />
        </div>
    )
}

export default Home;