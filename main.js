const rps = ["Rock", "Paper", "Scissors"]
const rpsi = document.querySelector(".rpsi");
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

function randomize(deck) {
  let random = Math.floor(Math.random() * 4);
  let bigdawg = deck[random];
  return bigdawg;
}

rock.addEventListener("click", function() {
console.log(randomize(deck));
});

function game(rps){
}