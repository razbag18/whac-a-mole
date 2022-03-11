const squares = document.querySelectorAll(".square");
const mole = document.querySelector(".mole");
const timeLeft = document.querySelector("#time-left");
const score = document.querySelector("#score");

let result = 0;
let hitPosition;

function randomSquare() {
  let randomSquare = squares[Math.floor(Math.random() * squares.length)];

  squares.forEach((square) => {
    square.classList.remove("mole");
  });

  randomSquare.classList.add("mole");
  hitPosition = randomSquare.id;
}
