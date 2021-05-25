import React from "react";

function Photos(props) {

    return (
        <div>
            <div class="container card body">
                <h2 class="text-uppercase text-primary">Image Gallery:</h2>

                <p class="font-italic">Click to enlarge images!</p>

                <div class="row">

                    <div class="col-md-4">

                        <div class="thumbnail">
                            {props.photos.map(item => (
                                <a href={item.link}
                                target="_blank">
                                <img src={item.image}
                                    alt={item.name} />
                                <div class="caption" />
                                <p>{item.description}</p>
                            </a>
                            ))}
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Photos;