import React from "react";


function ImageThumb(props) {
    return (
        // <div className="card">
        //     <div className="img-container">
        //         <img alt={props.name} src={props.image} />
        //     </div>
        // </div>

        // TESTING STUFF 
        // <div>
        <div className="col-3 shuffle">
            {/* Where does the onclick go? */}
            <img alt={props.name} src={props.image} className="img-thumbnail" onClick={() => props.handleShuffle(props.id, props.clicked)} />
        </div>
        // </div >
    );
}

export default ImageThumb;