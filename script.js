let scores = [0,0];
let scoresFromLocalStorage = JSON.parse(localStorage.getItem("scores"));
let highScoreEl = document.getElementById("highScore");
let highScore = 0;
let scoreAfter = 0;
let displayMove = "";
if (scoresFromLocalStorage) {
  highScore = parseInt(scoresFromLocalStorage[0]);
  scoreAfter = parseInt(scoresFromLocalStorage[1]);
  highScoreEl.textContent="High score: " + highScore;
  document.getElementById("player-score").innerText = scoreAfter;
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
  scoreAfter = parseInt(document.getElementById("player-score").innerText);
  scores[1] = scoreAfter;
  localStorage.setItem("scores", JSON.stringify(scores));
  return scoreBefore, scoreAfter;
}

let finalresult = document.getElementById("result").innerText;

function showResult(scoreBefore, scoreAfter, playerChoice, computerChoice) {
  document.getElementById("hands").innerText;
  if (playerChoice == "Rock") {
    displayMove = "✊";
  } else if (playerChoice == "Paper") {
    displayMove = "🤚";
  } else {
    displayMove = "✌";
  }
  if (computerChoice == "Rock") {
    document.getElementById("hands").innerText = displayMove + " ✊";
  } else if (computerChoice == "Paper") {
    document.getElementById("hands").innerText = displayMove + " 🤚";
  } else {
    document.getElementById("hands").innerText = displayMove + " ✌";
  }

  finalresult = document.getElementById("result").innerText;
  if (parseInt(scoreAfter) > highScore) {
    highScore = scoreAfter;
    scores[0] = highScore;
    highScoreEl.textContent="High score: " + highScore;
  }
  scores[1] = scoreAfter;
  scores[0] = highScore;
  localStorage.setItem("scores", JSON.stringify(scores));
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
  rpsButtons.forEach(
    (rpsButton) =>
      (rpsButton.onclick = () => {
        onClickRPS(rpsButton.value);
      })
  );
}

function endGame() {
  scores[0] = highScore;
  scores[1] = scoreAfter;
  localStorage.setItem("scores", JSON.stringify(scores));
  highScoreEl.textContent="High score: " + highScore;
  const endGameButton = document.getElementById("endGameButton");
  endGameButton.onclick = () => {
    scores[1] = 0;
    localStorage.setItem("scores",JSON.stringify(scores));
    highScoreEl.textContent="High score: " + highScore;
    document.getElementById("player-score").innerText = 0;
    document.getElementById("result").innerText = "";
    document.getElementById("hands").innerText = "";
  };
}

playGame();
endGame();
