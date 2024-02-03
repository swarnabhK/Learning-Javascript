//Random number generator between 1-6, roll of dice.

const myBtn = document.getElementById("myBtn")
const mylabel = document.getElementById("mylabel")
const min = 1;
const max = 6;
let randomNum;

myBtn.onclick = function(){
  randomNum = Math.floor(Math.random()*max+min);
  mylabel.textContent = randomNum;
}