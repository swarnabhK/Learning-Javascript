const myCheckbox = document.getElementById("myCheckbox")
const visaBtn = document.getElementById("visaBtn")
const mastercardBtn = document.getElementById("mastercardBtn")
const paypalBtn = document.getElementById("paypalBtn")
const mySubmit = document.getElementById("mySubmit")
const subResult = document.getElementById("subResult")
const paymentResult = document.getElementById("paymentResult")

mySubmit.onclick = function(){
  if(myCheckbox.checked){
    subResult.textContent = "Thanks for subscribing! You are now a subscriber."
  }
  else{
    subResult.textContent = "You are not currently subscribed."
  }
  if(visaBtn.checked){
    paymentResult.textContent = "You are paying through Visa"
  }
  else if(mastercardBtn.checked){
    paymentResult.textContent = "You are paying through Mastercard"
  }
  else if(paypalBtn.checked){
    paymentResult.textContent = "You are paying through PayPal"
  }
  else{
    paymentResult.textContent = "No Payment method has been selected."
  }
}