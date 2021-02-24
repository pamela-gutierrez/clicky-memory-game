import React from "react";
// import "./style.css";

function Header(props) {
    return (
        <header className="header">
            <h1>Wanderlust Clicky Game</h1>
            <p>Score: {props.score}</p>
            <p>{props.message}</p>
            <p>Top Score: {props.topScore}</p>
        </header>
    )
}

export default Header;