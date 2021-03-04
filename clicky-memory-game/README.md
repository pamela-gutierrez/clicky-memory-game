# Clicky Memory Game

This is a memory game built using React. Users can test their memory skills as they click on different travel images from around the world. The applciation is still in production but currently includes a sort feature everytime a picture is clicked. This is meant to make the game more challenging and really test the user's memory! In future, the application will also keep track of the which images the user has clicked to provide a score and eventually a top score also. 

![Alt Text](clicky-game-screenshot.png)


## Deployed Link
* [Visit Live Site](https://pamela-gutierrez.github.io/clicky-memory-game/)

## Built With
* [React](https://reactjs.org/)
* [HTML](https://developer.mozihlla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [Git Hub](https://github.com/)
* [JavaScript](https://www.javascript.com/)
* [Express](https://expressjs.com/)
* [Node](https://nodejs.org/en/)
*  Git - used to track changes to code
______________________________________________________________________________
  
## Code Snippet
This application uses React props to send information from the App.js to the individual components. Below is a code snippet from the App.Js file in which the information is being passed to the components. The map method is use to iterate through the images.json file and pass infomation  the render function. 

```
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
```
The Header component in the snippet below is receiving "props" which carries the information for the code above. 

```
function Header(props) {
    return (
        <header className="header">
            <h1><strong>Wanderlust Clicky Game: </strong><small>Don't click the same image twice!</small></h1>
            <p>Score: {props.score}</p>
            <p>{props.message}</p>
            <p>Top Score: {props.topScore}</p>
        </header>
    )
}
```


The snippet below demonstrates part of the shuffle function and how it corresponds with the image.json file. The if statement is checking the condition of "click" which is listed in the image.json as false. If the user clicks on an image with the corresponding click value of false, then it matches the image.json file and the user is rewarded with a point. If the user clicks on an image whose "clicked" value is true, then the game is over. 

```
handleShuffle = (id, click) => {
    const places = this.state.images;
    if (click === false) {
      places.forEach((image, index) => {
        places[index].clicked = true;
      });
```
______________________________________________________________________________

## Author Links

* **PAMELA GUTIERREZ**
- [Link to Portfolio Site](https://pamela-gutierrez.github.io/updated-portfolio/)
- [Link to Github](https://github.com/pamela-gutierrez) 
- [Link to LinkedIn](www.linkedin.com/in/pamela-gutierrez)

* **UC Berkeley Coding Bootcamp**
  
______________________________________________________________________________

#### **License**

This project is licensed under the MIT License


   