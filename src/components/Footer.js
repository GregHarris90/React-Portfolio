import React from "react";

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <div className="jumbotron text-center font-italic">
                <p>Website made by Greg Harris || Copyright © {currentYear}</p>
            </div>
        </footer>
    );
}

export default Footer;