import React, { Component } from "react";
import Header from "./components/Header.js"
import ImageThumb from "./components/Thumbnails.js";
import images from "./images.json";

// What do I want to happen with the onclick?
// If the card HAS NOT been clicked
// Display message 
// Add one point to score
// Shuffle cards

// If the card HAS been clicked
// Display message "You lost"
//Shufflecards 


class App extends Component {
  // This is the starting "state" before anything has been clicked or changed.
  state = {
    score: 0,
    topScore: 0,
    clicked: false,
    message: "",
    images: images
  };


  // This function will handle the onclicks and control functions once the images have been clicked. 
  handleShuffle = (id, click) => {
    console.log("banana")
    const places = this.state.images;
    // If an image is clicked, the "clicked" state stays the same which is already set in the image.JSON as false.
    if (click === false) {
      places.forEach((image, index) => {
        // This clicked is coming from the JSON file, this is just regular dot notation.
        places[index].clicked = true;
      });
      // If an image is clicked, sort the thumbnails. 
      return this.setState({
        images: places.sort(() => Math.random() - 0.5),
      })
    }
    // This is if the user gets it wrong (they have clicked on the same image twice)
    else {
      places.forEach((image, index) => {
        if (id === image.id) {
          places[index].clicked = false;
        }
        return this.setState({
          images: places.sort(() => Math.random() - 0.5),
        })
      })
    }
  }


  render() {
    return (
      <div className="container">
        <Header />
        <div className="row">
          {this.state.images.map(images => (
            <ImageThumb
              name={images.name}
              image={images.image}
              handleShuffle={this.handleShuffle}
              clicked={images.clicked}
            />
          ))}
        </div>
      </div>
    );
  }
};

export default App;


// INDIVIDUAL FUNCTIONS


firstClick = () => {
  this.setState({ this.state.count + 1 })
}

secondClick = () => {
  this.setState({
    clicked = true,
    // Resets score to 0.
    count = 0,
    // Send message that the game is over.
    message: "Game over and you're stuck at home."
  })
}

addToScore = () => {
  this.setState({ this.state.count + 1 })
}


// When game over, score will equal top score. 

handleShuffle = () => {
  const places = this.state.images;
}

// NOTES on the if statemenets. If it matches, I got it right, if it doesn't match, I got it wrong.
   // if (click === false)  = my score goes up
      // image.json has to be false

      // if click === true = my score goes down
      // image.json has to be false 

      // if click === true my score goes up
      // image.json has true

      // in this example we're assuming that banana is right and in the image.json click: banana
      // if it matches what's in the json that you got it right and the score goes up
      // if click === banana my score goes up
      // if click === apple my score goes down

      // if (tomorrow) ---- tomorrow ==== true (this is the default) TRUTHY
      // if B === true--- if you don't specify anything then it equals true. 
