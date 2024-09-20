// function myFunction() {
//     console.log("mama");
    
//   }
  


// computer(){

//     pick=math.random(1-3)
//     if 1 :
//     then paper
//     ..
// }
// human(){
//     h_pick=button data 
//     if rock then 1
//     if paper then 2
//     . . .
// }
// play(){
//     R R = D
//     P P = D
//     S S = D
//     -----
//     R P = COM WINS 
//     --
    
// }
// button.addEventListener("click", myFunction);
function computer() {
  return Math.floor(Math.random() * 3) + 1; 
}
function get_human_choice(human_choice) {
  let human_c;
  if (human_choice.toLowerCase() === "rock") {
    human_c = 1;
  } else if (human_choice.toLowerCase() === "paper") {
    human_c = 2;
  } else if (human_choice.toLowerCase() === "scissors") {
    human_c = 3;
  } else {
    alert("Invalid choice. Please enter Rock, Paper, or Scissors.");
    return null;
  }
  return human_c;
}
function game(computer_c, human_c) {
  let human_score=0;
  let computer_score=0;
  if (human_c === null) {
    return; // Exit if the human choice was invalid
  }
  // Draw cases
  if (computer_c === 1 && human_c === 1) {
    alert("Computer chose Rock and you chose Rock too! It's a Draw!");
  } else if (computer_c === 2 && human_c === 2) {
    alert("Computer chose Paper and you chose Paper too! It's a Draw!");
  } else if (computer_c === 3 && human_c === 3) {
    alert("Computer chose Scissors and you chose Scissors too! It's a Draw!");
  // Win cases for the human
  } else if (computer_c === 1 && human_c === 2) {
    alert("Computer chose Rock and you chose Paper! You Win!");
  } else if (computer_c === 2 && human_c === 3) {
    alert("Computer chose Paper and you chose Scissors! You Win!");
  } else if (computer_c === 3 && human_c === 1) {
    alert("Computer chose Scissors and you chose Rock! You Win!");
  // Loss cases for the human
  } else if (computer_c === 1 && human_c === 3) {
    alert("Computer chose Rock and you chose Scissors! You Lose!");
  } else if (computer_c === 2 && human_c === 1) {
    alert("Computer chose Paper and you chose Rock! You Lose!");
  } else if (computer_c === 3 && human_c === 2) {
    alert("Computer chose Scissors and you chose Paper! You Lose!");
  }
}
for (let i = 0; i < 5; i++) {
let human_choice = prompt("What's your Choice?");
let computer_c = computer(); 
let human_c = get_human_choice(human_choice);
game(computer_c, human_c);
}


