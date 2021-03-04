import React from "react";


function ImageThumb(props) {
    return (
        <div className="col-3 shuffle">
            <img alt={props.name} src={props.image} className="img-thumbnail" onClick={() => props.handleShuffle(props.id, props.clicked)} />
        </div>
    );
}

export default ImageThumb;