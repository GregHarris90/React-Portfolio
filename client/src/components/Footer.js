import React from "react";

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <dvi class="jumbotron text-center font-italic" style="margin-bottom:30px">
                <p>Website made by Greg Harris || Copyright © {currentYear}</p>
            </dvi>
        </footer>
    );
}

export default Footer;