import React, { Component } from "react";
import Header from "./components/Header.js"
import Thumbnails from "./components/Thumbnails.js"
import pics from "./images/"

class App extends Component {
  // This is the starting "state" before anything has been clicked or changed.
  state = {
    score: 0,
    topScore: 0,
    clicked: false,
    message: "",
    images: pics
  };

  // This function will handle the onclicks and control functions once the images have been clicked. 
  handleClick = (id, click) => {
    const characters = this.state.images;
    if (click) {
      characters.forEach((image, index) => {
        characters[index].click = false;
      });
      return this.setState({
        images: characters.sort(() => Math.random() - 0.5),
        message: "Avada Kedavra!",
        count: 0
      })
    }

    else {
      characters.forEach((image, index) => {

      })
    }







  }















}









import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
