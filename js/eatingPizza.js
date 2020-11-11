console.log("Pizza script running")

let count = 0;
//Step One: Select the button you would like to interact with and put it in a variable
let pizzaButton = document.querySelector('#button');
//Step Two: Confirm that you have selected your button by logging it into the console
console.log(pizzaButton);
//Step 3: Select the div with the id of “status” and put it into a variable
let status = document.querySelector('#status');
//Step 4: Confirm that you have selected the right element by logging it into the console
console.log(status);
//Step 5: Select the div with the id of “image-container” and put it into a variable
let imgcon = document.querySelector('#image-container');
//Step 6: Confirm that you have selected the right element by logging it into the console
console.log(imgcon);
//Step 7: Add an event listener to the petButton 
pizzaButton.addEventListener('click', (e) =>{
  console.log('Congrats! Your button works! Plus you got some pizza.');
  count+=1; //Increment count
  status.innerHTML = `<h4> You have eaten ${count} slices of pizza! </h4> `; //Updated value of count appears
  
  //For each count, a respective number of slices are gone from the pizza pie.
  if(count == 1) {
    imgcon.innerHTML =`<img src="https://cdn.discordapp.com/attachments/677906357567094786/776034041769230356/one_slice_eaten.png">`;
  }
  if(count == 2) {
    imgcon.innerHTML = `<img src="https://cdn.discordapp.com/attachments/677906357567094786/776034391452811274/two_slices_eaten.png">`;
  }
  if(count == 3) {
    imgcon.innerHTML = `<img src="https://cdn.discordapp.com/attachments/677906357567094786/776034849864941578/three_slices_eaten.png">`;
  }
  if(count == 4) {
    imgcon.innerHTML = `<img src="https://cdn.discordapp.com/attachments/677906357567094786/776035075141664768/four_slices_eaten.png">`;
  }
  if(count == 5) {
    imgcon.innerHTML = `<img src="https://cdn.discordapp.com/attachments/677906357567094786/776035469636927498/five_slices_eaten.png">`;
  }
  if(count == 6) {
    imgcon.innerHTML = `<img src="https://cdn.discordapp.com/attachments/677906357567094786/776035651967385610/six_slices_eaten.png">`;
  }
  if(count == 7) {
    imgcon.innerHTML = `<img src="https://cdn.discordapp.com/attachments/677906357567094786/776035999692226590/seven_slices_eaten.png">`;
  }
  if(count == 8) {
    imgcon.innerHTML = `<img src="https://cdn.discordapp.com/attachments/677906357567094786/776036106864164874/eight_slices_eaten.png">`;
  }
  if(count>8){
    //imgcon.innerHTML =`<img src="https://www.bravotv.com/sites/bravo/files/field_blog_image/2016/10/unleashed-doug-the-pug.jpg">`;
    status.innerHTML = `<h4> Uh oh, there's no more pizza.</h4>`;
  }
})
//Step 8: Go back to your index.html and create a new button and add an event listener confirming the button is clicked
