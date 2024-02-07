let userName = 'Swarny202';

console.log(userName.charAt(1));
console.log(userName.indexOf("n"));
console.log(userName.length);

let anotherString = " I have Spaces     ";
anotherString = anotherString.trim();
console.log(anotherString);
console.log(anotherString.toLowerCase())
console.log(anotherString.toUpperCase())
console.log(anotherString.repeat(3))

let example = " Hello there";
let result = example.startsWith(" ");

if(result){
  console.log("The string starts with a space!")
}
else{
  console.log(example)
}

let example2 = "Hello Hello ";
let result2 = example2.endsWith(" ");
if(result2){
  console.log("The string ends with a space!");
}
else{
  console.log(example2)
}

let phoneNumber = "123-456-7890";
phoneNumber = phoneNumber.replaceAll("-","/");
console.log(phoneNumber)


const fullName = "Swarnabh Kashyap";
// let firstName = fullName.slice(0,8);
// let lastName = fullName.slice(9,16);
// console.log(firstName)
// console.log(lastName)

// lastChar = fullName.slice(-2)
// console.log(lastChar)

const firstSpace = fullName.indexOf(" ")
console.log(firstSpace)
let firstName = fullName.slice(0,firstSpace)
let lastName = fullName.slice(firstSpace+1)
console.log(firstName)
console.log(lastName)

const email = "Swarnabh202@gmail.com"
const atTheRate = email.indexOf("@");
let username = email.slice(0,atTheRate);
let domain = email.slice(atTheRate+1);
console.log(username);
console.log(domain);