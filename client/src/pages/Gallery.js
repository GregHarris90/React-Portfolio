import React from "react";
import Photos from "../components/Photos";
import photos from "../photos.json";

function Gallery() {
    return(
        <div>
            <Photos photos={photos}/>
        </div>
    )
}

export default Gallery;