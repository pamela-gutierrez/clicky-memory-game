import React from "react";
// import "./style.css";

function NavBar(props) {
    <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 h1">Clicky Game</span>
        <p>Score: {props.score}</p>
        <p>Top Score: {props.topScore}</p>
    </nav>
}

export default NavBar;
