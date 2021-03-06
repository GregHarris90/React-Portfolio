import React from "react";

function Links() {

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="container card" id="contactCard">
                            <h1 className="text-primary text-uppercase">Profile Links:</h1>
                            <a href="https://github.com/GregHarris90">GitHub Account</a>
                            <a href="https://www.linkedin.com/in/greg-harris-1753b61ba/">LinkedIn Account</a>
                            <a href="https://www.gregharrisart.com/">Artwork Portfolio</a>
                        </div>
                    </div>

                    <div className="col-6">
                        <div className="container card" id="contactCard">
                            <h1 className="text-primary text-uppercase">Contact Info:</h1>
                            <p>Name: Greg Harris</p>
                            <p>Email: ghcoder90@gmail.com</p>
                            <p>Phone: (***) ***-****</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Links;