import React from "react";
import "./style.css";

function Header(props) {
    return (
        <header>
            <h1>Harry Potter Memory Game</h1>
            <p>Score: {props.score}</p>
            <p>Top Score: {props.topScore}</p>
        </header>
    )
}

export default Header;