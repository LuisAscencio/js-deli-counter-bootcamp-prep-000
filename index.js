function takeANumber (katzDeliLine, name){
  katzDeliLine.push(name)
  var position = katzDeliLine.length
  return "Welcome, " + name +". You are number "+ position +" in line."
}

var array = []

takeANumber(array) // => Welcome, you are number 1
takeANumber(array) // => Welcome, you are number 2
takeANumber(array) // => Welcome, you are number 3
takeANumber(array) // => Welcome, you are number 3
nowServing(array) // => Currently serving 1.



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
