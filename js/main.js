"use strict";

//Que hacer:
//Registrar un evento en los tres botones
//Crear la función manejadora del evento con el código que se deberá ejecutar cuando el usuario clicke su opción escogida.
//Saber cual ha sido clickado por el usuario
//Generar aleatoriamente otro click para comparar ambos y saber quien gana
//Mostrar en la pantalla los aciertos del usuario
//Mostrar en pantalla los aciertos de la computadora.
//Registrar quién va ganando.

const allButtons = document.querySelectorAll("button");
console.log(allButtons);
const userClicked = document.querySelector(".userChoice");
const computerSelected = document.querySelector(".computerChoice");
const resultDisplay = document.querySelector(".result");

let userChoice;
let computerChoice;
let result;

const randomGenerator = function () {
  let generated = Math.trunc(Math.random() * 3);
  if (generated === 0) {
    computerChoice = "rock";
  }

  if (generated === 1) {
    computerChoice = "paper";
  }
  if (generated === 2) {
    computerChoice = "Scissors";
  }
  computerSelected.innerHTML = `Computer choice: ${computerChoice}`;
  console.log(generated);
  return generated;
  //console.log(generated);
};
/* let buttonIndex = 0;
for (let i = 0; i < allButtons.length; i++) {
  buttonIndex = [i];
  console.log(buttonIndex);
} */

const buttonClicked = function (ev) {
  userChoice = ev.currentTarget.id;
  userClicked.innerHTML = `Your choice: ${userChoice}`;
  randomGenerator();
  getResult();
};

function getResult() {
  if (
    (userChoice === "rock" && computerChoice === "rock") ||
    (userChoice === "paper" && computerChoice === "paper") ||
    (userChoice === "scissors" && computerChoice === "scissors")
  ) {
    resultDisplay.innerHTML = `It's a draw!`;
  }
  if (
    (userChoice === "rock" && computerChoice === "paper") ||
    (userChoice === "paper" && computerChoice === "scissors") ||
    (userChoice === "scissors" && computerChoice === "rock")
  ) {
    resultDisplay.innerHTML = `You lost!`;
  }
  if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "scissors" && computerChoice === "paper") ||
    (userChoice === "paper" && computerChoice === "rock")
  ) {
    resultDisplay.innerHTML = `You win!`;
  }
}

for (let i = 0; i < allButtons.length; i++) {
  allButtons[i].addEventListener("click", buttonClicked);
}
