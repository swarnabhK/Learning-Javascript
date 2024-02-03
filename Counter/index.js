// console.log(`Hello`)
// console.log(`I like pizza`)

// window.alert(`This is an alert!`)
// document.getElementById("myH1").textContent = `Hello`
// document.getElementById("myP").textContent = `I like Pizza!`
//This is a comment

//variables
// let fullName = "Swarnabh Kashyap";
// let age = 27;
// let student = true;

// document.getElementById("p1").textContent = `Your name is ${fullName}`
// document.getElementById("p2").textContent = `You are ${age} years old`
// document.getElementById("p3").textContent = `Are you a student? ${student}`

//Mathematical operators
let students = 30;
// students = students+1
// students = students-1
// students = students*2
// students+=1
// students++
// students--
// Order of precedence.
// pemdmas (parantheses, exponents, multi,divi,modulo,arithmetic,subtraction)

// How to accept user input
// 1. EASY WAY = window prompt
// 2. PROFESSIONAL WAY = HTML textbox

//1 . 

// let username;
// username = window.prompt("What's your username?");

// console.log(username)

// 2.
// let username;
// document.getElementById("mySubmit").onclick = function(){
//   username = document.getElementById("myText").value;
//   document.getElementById("myH1").textContent = `Hello ${username}`

// }

// type conversion

// let x = "pizza";
// let y = "pizza";
// let z = "pizza";

// x = Number(x);  //converting string to number will give NaN, Not a number
// y = String(y);
// z = Boolean(z); // will be true

// console.log(x, typeof x)
// console.log(y, typeof y)
// console.log(z, typeof z)

// const = a variable that can't be changed
// only numbers or booleans can be changed to const

// const PI = 3.1459, once declared as constant cannot be changed.

// const PI = 3.14159;
// document.getElementById("mySubmit").onclick = function(){
//   radius = document.getElementById("myText").value;
//   radius = Number(radius);
//   circumference = 2*PI*radius;
//   document.getElementById("myP").textContent = `The circumference of the circle is ${circumference}cm`

// }


// COUNTER PROGRAM
// declare the three variables

const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countlabel = document.getElementById("countlabel")

let count = 0

decreaseBtn.onclick = function(){
  count--;
  countlabel.textContent = `${count}`;
}

resetBtn.onclick = function(){
  count = 0;
  countlabel.textContent = `${count}`;
}

increaseBtn.onclick = function(){
  count++;
  countlabel.textContent = `${count}`;
}