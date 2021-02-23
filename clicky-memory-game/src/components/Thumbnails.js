import React from "react";


function ImageThumb(props) {
    return (
        // <div className="card">
        //     <div className="img-container">
        //         <img alt={props.name} src={props.image} />
        //     </div>
        // </div>

        // TESTING STUFF 
        <div>
            <div className="col-3">
                {/* Where does the onclick go? */}
                <img alt={props.name} src={props.image} className="img-thumbnail" />
            </div>
        </div >
    );
}

export default ImageThumb;