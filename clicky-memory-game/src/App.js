import React, { Component } from "react";
import Header from "./components/Header.js"
import ImageThumb from "./components/Thumbnails.js";
import images from "./images.json";
// import { Hermione, Neville } from "./images";



// What do I want to happen with the onclick?
// If the card HAS NOT been clicked
// Display message 
// Add one point to score
// Shuffle cards

// If the card HAS been clicked
// Display message "You lost"
// 


class App extends Component {
  state = {
    score: 0,
    topScore: 0,
    clicked: false,
    message: "",
    images: images
  };

  // This is the starting "state" before anything has been clicked or changed.


  // This function will handle the onclicks and control functions once the images have been clicked. 
  // handleClick = (id, click) => {
  //   const characters = this.state.images;
  //   // If an image is clicked, the "clicked" state stays the same.
  //   if (click) {
  //     characters.forEach((image, index) => {
  //       characters[index].click = false;
  //     });
  //     // If an image is clicked, sort the thumbnails. 
  //     return this.setState({
  //       images: characters.sort(() => Math.random() - 0.5),
  //       message: "Avada Kedavra!",
  //       count: 0
  //     })
  //   }

  //   else {
  //     characters.forEach((image, index) => {
  //       if (id === image.id) {
  //         characters[index].click = true;
  //         const updateScore = this.state.count + 1;
  //       }

  //     })
  //   }
  // }
  render() {
    return (
      <Wrapper>
        <Header />
        {this.state.images.map(images => (
          <ImageThumb image={this.state.props} />
        ))}
      </Wrapper>

    );
  }
}


export default App;
