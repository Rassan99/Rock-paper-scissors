
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
let human_score=0;
let computer_score=0;
function Round(computer_c, human_c) {

  if (human_c === null) {
    return; // Exit if the human choice was invalid
  }
  // Draw cases
  if (computer_c === 1 && human_c === 1) {
    div.innerHTML = "Computer chose Rock and you chose Rock too! It's a Draw!";
  } else if (computer_c === 2 && human_c === 2) {
    div.innerHTML = "Computer chose Paper and you chose Paper too! It's a Draw!";
  } else if (computer_c === 3 && human_c === 3) {
    div.innerHTML = "Computer chose Scissors and you chose Scissors too! It's a Draw!";
  // Win cases for the human
  } else if (computer_c === 1 && human_c === 2) {
    div.innerHTML ="Computer chose Rock and you chose Paper! You Win!"
    human_score++;
  } else if (computer_c === 2 && human_c === 3) {
    div.innerHTML ="Computer chose Paper and you chose Scissors! You Win!"
    human_score++;
  } else if (computer_c === 3 && human_c === 1) {
    div.innerHTML ="Computer chose Scissors and you chose Rock! You Win!"
    human_score++;
  // Loss cases for the human
  } else if (computer_c === 1 && human_c === 3) {
    div.innerHTML ="Computer chose Rock and you chose Scissors! You Lose!"
    computer_score++;
  } else if (computer_c === 2 && human_c === 1) {
    div.innerHTML ="Computer chose Paper and you chose Rock! You Lose!"
    computer_score++;
  } else if (computer_c === 3 && human_c === 2) {
    div.innerHTML ="Computer chose Scissors and you chose Paper! You Lose!"
    computer_score++;
  }
}
function game(){
for (let i = 0; i < 5; i++) {
  const humanChoice = document.querySelectorAll("button");
  humanChoice.forEach((button) => {
    button.addEventListener("click", () => {
      choice = get_human_choice(button.id);
      Round(computer(), choice);
    });
  });
  }
}

game()
if (human_score>computer_score){
  alert(`Congrats You won ${human_score} Times And the computer Won ${computer_score}! You beat the computer`);
}
if (human_score<computer_score){
  alert(`Unfortunately You won ${human_score} Times And the computer Won ${computer_score}! Computer beat You`);
}
const humanChoice = document.querySelectorAll("button");


const div = document.getElementById('result');


