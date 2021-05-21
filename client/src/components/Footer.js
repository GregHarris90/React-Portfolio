import React from "react";

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <p>Website made by Greg Harris || Copyright © {currentYear}</p>
        </footer>
    );
}

export default Footer;