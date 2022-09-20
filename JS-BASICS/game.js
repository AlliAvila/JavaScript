const secretNumber = Math.floor(Math.random() * 100);
alert (secretNumber)
let userGuess=prompt("Please guess the number")
if (secretNumber < userGuess)
alert ("Go lower")
else if (secretNumber > userGuess)
alert ("Go higher")
else if (secretNumber == userGuess)
alert ("Congrats!")
while (userGuess !== secretNumber){
    userGuess=prompt("Please guess the number")
    console.log(userGuess)
  }