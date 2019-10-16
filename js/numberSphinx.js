var solution;
var gameType = document.getElementById("gameType");
var userInterface = document.getElementById("userInterface");
var output = document.getElementById("output");
var number;
var max = 1;
var min = 100;

function chooseComputerNumber() {
  gameType.style.display = "none";
  solution = Math.floor(Math.random() * 100) + 1;
  console.log("solution" + solution);
  userInterface.innerHTML = "Your number <input type='number' id='number'><button onclick='sendUserGuess()'>Guess</button>";
  document.getElementById("output").innerHTML = "Can you guess what number I'm thinking about?<br>";
  var input = document.getElementById("number");
  input.value = "";
}

function chooseUserNumber() {
  gameType.style.display = "none";
  output.innerHTML = "Think of a number between 1 and 100 and I will try to guess it!";
  userInterface.innerHTML = "<button onclick='computerGuess(3)'>Guess Away!</button>";
}

function computerGuess(value) {
  if ((value != 2) && (min == max)) {
    output.innerHTML = "I am pretty sure that " + number + " is your number... You... you wouldn't lie to me, wouldn't you?";
    return;
  }

  userInterface.innerHTML = "<button onclick='computerGuess(0)'>No mine is lesser</button><button onclick='computerGuess(1)'>No mine is greater</button><button onclick='computerGuess(2)'>Yes you're correct</button>";

  if (value == 3) {
    min = 1;
    max = 100;
    number = 50;
    output.innerHTML = "Is this your number: " + number + " ?";
    console.log("min: " + min + " max: " + max + " number: " + number);
  } else if (value == 0) {
    max = number - 1;
    number = Math.floor((min + (max - min) / 2));
    output.innerHTML += "<br>Is this your number: " + number + " ?";
    console.log("min: " + min + " max: " + max + " number: " + number);
  } else if (value == 1) {
    min = number + 1;
    number = Math.floor((min + (max - min) / 2));
    output.innerHTML += "<br>Is this your number: " + number + " ?";
    console.log("min: " + min + " max: " + max + " number: " + number);
  } else {
    alert("Good game! Wanna play again? (Lucky number was: " + number + ")");
    gameType.style.display = "inline";
    output.innerHTML = "";
    userInterface.innerHTML = "";
    number = "";
    min = 1;
    max = 100;
  }
}


function sendUserGuess() {
  var input = document.getElementById("number");
  var userNumber = parseInt(input.value);

  input.value = "";
  if (solution == userNumber) {
    output.innerHTML += "You won: " + solution + " is the solution.<br>";
    alert("You won: " + solution + " is the solution.");
    gameType.style.display = "inline";
    output.innerHTML = "";
    userInterface.innerHTML = "";
  } else {
    if (solution < userNumber) {
      output.innerHTML += "My number is less than : " + userNumber + " Try again.<br>";
    } else {
      output.innerHTML += "My number is greater than : " + userNumber + " Try again.<br>";
    }
  }
}