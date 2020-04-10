// jshint esversion: 7

//define helper functions here

let rollDie = () => {
  return Math.floor(Math.random() * 6) + 1;
};

//Define a controller to handle the button click
let controller = function() {
  let target, die1, die2, rollCount,
    die1URL, die2URL, imgElem1, imgElem2, cheeryMessage;

  // get the target number form the web page
  target = document.querySelector("input").value;
  console.log(target);

  // roll the target number from the web page

  do {
    // roll the dice
    die1 = rollDie();
    die2 = rollDie();
    // increment the roll counter
    i++;

    // log the dice and the counter
      console.log('${die1} ${die2} ${rollCount}');

  } while (die1 + die2 != target);

  // update images on web page
  die1URL = 'images/die$.gif';
  imgElem1 = document.querySelector("#imgElem1");
  imgElem1.setAttribute("src", die1URL);

  imgElem2 = document.querySelectorAll("img")[1];

  // display number of rolls on web page
  cheeryMessage = 'You hit your number in '${rollCount}' rolls!';
  document.querySelector("div").innerHTML = cheeryMessage;

};

//Register the controller after the DOM is complete
window.addEventListener("load", () => {
  //select the button
  let button = document.querySelector("button");

  //register the click handler for the button
  button.addEventListener("click", controller);
});
