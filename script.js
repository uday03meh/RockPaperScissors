let scores = [0, 0]; // [highScore, currentScore]
let highScoreEl = document.getElementById("highScore");
let highScore = 0;
let scoreAfter = 0;
let displayMove = "";
let scoresFromLocalStorage;
if(localStorage.getItem("scores") == "0,0") {
  scoresFromLocalStorage = null;
} else {
  scoresFromLocalStorage = JSON.parse(localStorage.getItem("scores"));
}

if (scoresFromLocalStorage) {
  highScore = parseInt(scoresFromLocalStorage[0]);
  scoreAfter = parseInt(scoresFromLocalStorage[1]);
  highScoreEl.textContent = "High score: " + highScore;
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
  function playSound(e) {
    if (e == "gameover")
      var audio = new Audio("sounds/" + e + ".wav");
    if (e == "Win")
      var audio = new Audio("sounds/" + e + ".mp3");
    if (e == "Draw")
      var audio = new Audio("sounds/" + e + ".wav");
    audio.play();
  }

  finalresult = document.getElementById("result").innerText;
  if (parseInt(scoreAfter) > highScore) {
    highScore = scoreAfter; // Updating high scores
    scores[0] = highScore;
    highScoreEl.textContent = "High score: " + highScore;
  }
  scores[1] = scoreAfter;
  scores[0] = highScore;
  localStorage.setItem("scores", JSON.stringify(scores)); // Uploading the new scores into Local Storage
  if (parseInt(scoreBefore) > parseInt(scoreAfter)) {
    document.getElementById("result").style.color = "red";
    playSound("gameover");
    document.getElementById("result").innerText = "You Lose!";

  } else if (parseInt(scoreBefore) < parseInt(scoreAfter)) {
    document.getElementById("result").style.color = "green";
    playSound("Win");
    document.getElementById("result").innerText = "You Won!";
  } else {
    document.getElementById("result").style.color = "yellow";
    playSound("Draw")
    document.getElementById("result").innerText = "Draw";
  }
}

function onClickRPS(playerChoice) {
  computerChoice = getComputerChoice(choices);
  getResult(playerChoice, computerChoice);

  showResult(scoreBefore, scoreAfter, playerChoice, computerChoice);
}

function playGame() {
  document.addEventListener("keydown", e => {
    switch (e.key) {
      case "r":
        onClickRPS("Rock");
        break;
      case "R":
        onClickRPS("Rock");
        break;
      case "p":
        onClickRPS("Paper");
        break;
      case "P":
        onClickRPS("Paper");
        break;
      case "s":
        onClickRPS("Scissors");
        break;
      case "S":
        onClickRPS("Scissors");
        break;

      default:
        break;
    }
  });
  
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
  highScoreEl.textContent = "High score: " + highScore;
  const endGameButton = document.getElementById("endGameButton");
  endGameButton.onclick = () => {
    scoreAfter = 0;
    scores[1] = scoreAfter;
    localStorage.setItem("scores", JSON.stringify(scores));
    highScoreEl.textContent = "High score: " + highScore;
    document.getElementById("player-score").innerText = scoreAfter;
    document.getElementById("result").innerText = "";
    document.getElementById("hands").innerText = "";
  };
}
function resetGame() {
  const resetButton = document.getElementById("resetButton");
  resetButton.onclick = () => {
    highScore = 0;
    scoreAfter = 0;
    scores[0] = highScore;
    scores[1] = scoreAfter;
    localStorage.setItem("scores", JSON.stringify(scores));
    highScoreEl.textContent = "High score: " + highScore;
    document.getElementById("player-score").innerText = scoreAfter;
    document.getElementById("result").innerText = "";
    document.getElementById("hands").innerText = "";
  };
}

// window.addEventListener('load', (e) => {
//   document.getElementById("endGameButton").textContent = "Start!"
// })

playGame();
endGame();
resetGame();
