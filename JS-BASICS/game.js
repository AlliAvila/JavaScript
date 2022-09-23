const secretNumber = Math.floor(Math.random() * 100);
let userGuess= null;
let trial=0;

while (userGuess !== secretNumber){
   userGuess=prompt("Please guess the number")
   trial+= 1;
   alert ('Guess Number: ' + trial)

  if (userGuess > secretNumber){
  alert ("Go lower")
  }

  else if ( userGuess < secretNumber){
  alert ("Go higher")
  }

  else if (userGuess==secretNumber ){
  alert ("Congrats!")
  break;
  }

  else {
    alert("Enter Number")
  }  

  if(trial>4){
    alert ("Game Over!!, the secret number was " + secretNumber)
    break;
  }
}