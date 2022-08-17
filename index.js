const { validateUseBuiltInsOption } = require("@babel/preset-env/lib/normalize-options");

// Code your solutions in this file
 const names = ["Guadalupe", "Ollie", "Aki"];
 const event = "surprise"

function writeCards(names, event ) {
  const newNames = []
  for(let i = 0 ; i < names.length; i++){
  newNames.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }
  return newNames;
}
 
 countDown(10)
function countDown(number){
  while (number >= 0){
  console.log(number);
  number --;
  }
}