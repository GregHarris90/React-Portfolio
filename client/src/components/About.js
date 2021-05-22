import React from "react";
import Photo1 from "../Images/gyrgyrhgrh 028.jpg";

function About() {

    return (
        <div>
            <div className="container card border">

                <div className="row">
                    <div className="col-sm">
                        <div className="text-uppercase">
                            <div className="card-body">
                                <h1 className="text-primary">About Me:</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="aboutme">
                    <div className="container card">
                        <div className="row">

                            <div className="col-sm-4">
                                <div>
                                    <img src={Photo1} className="img-thumbnail"
                                        alt=""/>
                                </div>
                            </div>

                                <div className="col-sm-8">
                                    <h2>My Story</h2>
                                    <p>Hello, my name is Greg Harris. Most of my life I grew up in Bothell, but at this time I live
                                    in
                                    Lynnwood Washington. Also I'm currently a student with the UW Bothell Coding Bootcamp. I
                                    mostly spend
                                    my days bettering myself as a person and working hard on my passions.
                        </p>

                                    <p>Right now I'm trying to learn how to code and do web development, while I also continue
                                    practicing my
                                    artwork and music. The rest of my free time is spent adventuring or with my family, and
                                    otherwise I can be
                                    found working retail at the local QFC as a produce clerk.
                        </p>
                                </div>

                                <div className="col-md-12">
                                    <p>Looking to the future I hope to become a successful and competent programmer. Using these
                                    newly acquired skills
                                    to build a career and slowly move away from my current job. Not that I don't love the people
                                    and community that
                                    I've long been a part of and served, but the time has come in my life to move forward onto
                                    greater things!
                        </p>

                                    <p className="text-primary font-italic">Thank you for checking
                                    out my portfolio and I hope to hear from you soon!
                        </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default About;