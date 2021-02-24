## Clicky Memory Game

This is a memory game built using React. Users can test their memory skills as they click on different images or volcanoes around the world. Click once, your score goes up! Click twice and it's game over! 

![Alt Text](bucketlist.gif)
* [Deployed Link](https://pamela-gutierrez.github.io/clicky-memory-game/)

## **Built With**
* [React](https://reactjs.org/)
* [HTML](https://developer.mozihlla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [Git Hub](https://github.com/)
* [JavaScript](https://www.javascript.com/)
* [Express](https://expressjs.com/)
* [Node](https://nodejs.org/en/)
*  Git - used to track changes to code
______________________________________________________________________________
  
#### **Code Snippet**
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

### **Author Links**

* **PAMELA GUTIERREZ**
- [Link to Portfolio Site](https://pamela-gutierrez.github.io/updated-portfolio/)
- [Link to Github](https://github.com/pamela-gutierrez) 
- [Link to LinkedIn](www.linkedin.com/in/pamela-gutierrez)

* **UC Berkeley Coding Bootcamp**
  
______________________________________________________________________________

#### **License**

This project is licensed under the MIT License


   