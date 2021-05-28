import React from "react";

function Photos(props) {

    return (
        <div>
            <div className="container card body photos">
                <h2 className="text-uppercase text-primary">Image Gallery:</h2>

                <p className="font-italic">Click to enlarge images!</p>

                <div className="row">

                    <div className="col-md-4">

                        {props.photos.map(item => (
                            <div className="thumbnail" key={item.id}>
                                <a href={item.link} rel="noopener noreferrer"
                                    target="_blank">
                                    <img src={item.image}
                                        alt={item.name} />
                                    <div className="caption" />
                                    <p>{item.description}</p>
                                </a>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Photos;