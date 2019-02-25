function takeANumber (katzDeliLine, number){
  katzDeliLine.push(number)
  var position = katzDeliLine.length
  return "Welcome, you are number "+ position
}

var array = []

console.log(takeANumber(array, 1)) // => Welcome, you are number 1
console.log(takeANumber(array, 2)) // => Welcome, you are number 2
console.log(takeANumber(array, 3)) // => Welcome, you are number 3
console.log(currentLine(array)) // => The line is currently: 1. 1, 2. 2, 3. 3

nowServing(array) // => Currently serving 1.
nowServing(array) // => Currently serving 2.

takeANumber(array, 4) // => Welcome, you are number 4



function nowServing (katzDeliLine){
  
  var name
  
  if (katzDeliLine.length === 0){
    return "There is nobody waiting to be served!"
  }
    
  name = katzDeliLine.shift()
    
  return "Currently serving "+ name + "."

}

function currentLine(line){
  if (line.length === 0) {
    return "The line is currently empty.";
  }
  var nLM = [];
  
  for(var i=0; i < line.length; i++) {
    nLM.push(i+1 + ". "+ line[i]);
  }
  // console.log("The line is currently: " + nLM);
  return "The line is currently: " + nLM.join(', ');
}
