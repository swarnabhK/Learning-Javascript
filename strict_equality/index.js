// equality ==
// strict equality === (checks for value and datatype)
// strict inequality !== (Checks for value and datatype)

// example just equality.(checks only for value)

const PI = 3.14;
// since we are checking just for value the if condition will return true
if(PI=="3.14"){
  console.log("This is PI")
}
else{
  console.log("This is not PI")
}

// example using strict equality
// sicne we are checking both value and datatype, the below if condition will evaluate to false.
if(PI==="3.14"){
  console.log("This is PI");
}
else{
  console.log("This is not PI");
}