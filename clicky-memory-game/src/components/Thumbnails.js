import React from "react";
import "./style.css";

function ImageThumb(props) {
    return (
        <div class="row">
            <div class="col">
                <img alt={props.name} src={props.image} class="img-thumbnail" />
            </div>
        </div>
    );
}

export default ImageThumb;