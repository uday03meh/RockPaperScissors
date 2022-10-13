let highScoreFromLocalStorage = localStorage.getItem("highScore");
let highScoreEl=document.getElementById("highScore");
let highScore=0;
if (highScoreFromLocalStorage) {
  highScore = highScoreFromLocalStorage;
  highScoreEl.textContent="High score: " + highScore;
}

const choices = ["Rock", "Paper", "Scissors"];
function getComputerChoice(choices) {
  return choices[Math.floor(Math.random() * choices.length)];
}
// console.log(getComputerChoice(choices));

function getResult(playerChoice, computerChoice) {
  scoreBefore = document.getElementById("player-score").innerText;
  if (playerChoice == "Rock") {
    if (computerChoice == "Rock") {
      //do nothing if tie
    } else if (computerChoice == "Paper") {
      document.getElementById("player-score").innerText--;
    } else {
      document.getElementById("player-score").innerText++;
    }
  }

  if (playerChoice == "Scissors") {
    if (computerChoice == "Rock") {
      document.getElementById("player-score").innerText--;
    } else if (computerChoice == "Paper") {
      document.getElementById("player-score").innerText++;
    } else {
      //do nothing if tie
    }
  }

  if (playerChoice == "Paper") {
    if (computerChoice == "Rock") {
      document.getElementById("player-score").innerText++;
    } else if (computerChoice == "Paper") {
      //do nothing if tie
    } else {
      document.getElementById("player-score").innerText--;
    }
  }
  scoreAfter = document.getElementById("player-score").innerText;
  return scoreBefore, scoreAfter;
}

let finalresult = document.getElementById("result").innerText;

function showResult(scoreBefore, scoreAfter, playerChoice, computerChoice) {
  document.getElementById("hands").innerText;
  if (computerChoice == "Rock") {
    document.getElementById("hands").innerText = " ✊ ";
  } else if (computerChoice == "Paper") {
    document.getElementById("hands").innerText = " 🤚 ";
  } else {
    document.getElementById("hands").innerText = " ✌ ";
  }

  finalresult = document.getElementById("result").innerText;
  if (parseInt(scoreAfter) > highScore) {
    highScore = scoreAfter;
    localStorage.setItem("highScore", highScore);
    highScoreFromLocalStorage = localStorage.getItem("highScore");
    highScoreEl.textContent="High score: " + highScoreFromLocalStorage;
  }
  localStorage.setItem("highScore", highScore);
  if (parseInt(scoreBefore) > parseInt(scoreAfter)) {
    document.getElementById("result").style.color = "red";
    document.getElementById("result").innerText = "You Lose!";
  } else if (parseInt(scoreBefore) < parseInt(scoreAfter)) {
    document.getElementById("result").style.color = "green";
    document.getElementById("result").innerText = "You Won!";
  } else {
    document.getElementById("result").style.color = "yellow";
    document.getElementById("result").innerText = "Draw";
  }
}

function onClickRPS(playerChoice) {
  computerChoice = getComputerChoice(choices);
  getResult(playerChoice, computerChoice);
  
  showResult(scoreBefore, scoreAfter, playerChoice, computerChoice);
}

function playGame() {
  const rpsButtons = document.querySelectorAll(".rpsButton");
  highScoreFromLocalStorage = localStorage.getItem("highScore");
  highScoreEl.textContent="High score: " + highScoreFromLocalStorage;
  rpsButtons.forEach(
    (rpsButton) =>
      (rpsButton.onclick = () => {
        onClickRPS(rpsButton.value);
      })
  );
}

function endGame() {
  localStorage.setItem("highScore", highScore);
  highScoreFromLocalStorage = localStorage.getItem("highScore");
  highScoreEl.textContent="High score: " + highScoreFromLocalStorage;
  const endGameButton = document.getElementById("endGameButton");
  endGameButton.onclick = () => {
    highScore = 0;
    localStorage.setItem("highScore",highScore);
    highScoreFromLocalStorage = localStorage.getItem("highScore");
    highScoreEl.textContent="High score: " + highScoreFromLocalStorage;
    document.getElementById("player-score").innerText = 0;
    document.getElementById("result").innerText = "";
    document.getElementById("hands").innerText = "";
  };
}

playGame();
endGame();
