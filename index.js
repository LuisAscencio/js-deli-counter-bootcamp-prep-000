function takeANumber (katzDeliLine, name){
  katzDeliLine.push(name)
  var position = katzDeliLine.length
  return "Welcome, " + name +". You are number "+ position +" in line."
}

var array = ["Katie", "Luis", "Johann"]
console.log(currentLine(array)) // => The line is currently: 1. Katie, 2. Luis, 3. Johann
takeANumber(array, "Steven") // => Welcome, Steven. You are number 4 in line.

nowServing(array) // => Currently serving Katie.
console.log(currentLine(array)) // => The line is currently: 1. Luis, 2. Johann, 3. Steven
nowServing(array) // => Currently serving Luis.
nowServing(array) // => Currently serving Johann.
console.log(currentLine(array)) // => The line is currently: 1. Steven
nowServing(array) // => Currently serving Steven.
nowServing(array) // => There is nobody waiting to be served.


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
