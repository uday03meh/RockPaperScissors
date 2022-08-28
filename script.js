
const choices = ['Rock', 'Paper', 'Scissors'];
function getComputerChoice(choices) {
      return choices[Math.floor(Math.random() * choices.length)];
}
// console.log(getComputerChoice(choices));

function getResult(playerChoice, computerChoice) {
    if(playerChoice == 'Rock'){
        if(computerChoice == 'Rock'){
            document.getElementById("player-score").innerText;
        }
        if(computerChoice == 'Paper'){
            document.getElementById("player-score").innerText--;
        }
        else{
            document.getElementById("player-score").innerText++;
        }
    }

        if(playerChoice == 'Scissors'){
        if(computerChoice == 'Rock'){
            document.getElementById("player-score").innerText--;
        }
        if(computerChoice == 'Paper'){
            document.getElementById("player-score").innerText++;
        }
        else{
            document.getElementById("player-score").innerText;
        }
    }

        if(playerChoice == 'Paper'){
        if(computerChoice == 'Rock'){
            document.getElementById("player-score").innerText++;
        }
        if(computerChoice == 'Paper'){
            document.getElementById("player-score").innerText;
        }
        else{
            document.getElementById("player-score").innerText--;
        }
    }
  score = document.getElementById("player-score").innerText
     return score;
}
   
let finalresult = document.getElementById('result').innerText;

function showResult(score, playerChoice, computerChoice) {
            document.getElementById('hands').innerText
    if(computerChoice == 'Rock'){
        document.getElementById('hands').innerText = ' ✊ ';
    }
    else if(computerChoice == 'Paper'){
        document.getElementById('hands').innerText = ' 🤚 ';
    }
    else{
        document.getElementById('hands').innerText = ' ✌ ';
    }

    finalresult = document.getElementById('result').innerText;
    if(score == -1){
        document.getElementById('result').innerText = 'You Lose!'
    }
    else if(score == 1){
document.getElementById('result').innerText = 'You Won!';   
    }
    else{
        document.getElementById('result').innerText = 'Draw'
    }
    
}

function onClickRPS(playerChoice) {
    computerChoice = getComputerChoice(choices)
  getResult(playerChoice,computerChoice);
    showResult(score,playerChoice,computerChoice);
}


function playGame() {
    const rpsButtons = document.querySelectorAll('.rpsButton')

    rpsButtons.forEach(rpsButton => rpsButton.onclick=() => {
        onClickRPS(rpsButton.value);
    })

}

function endGame() {
  const endGameButton = document.getElementById('endGameButton');
    endGameButton.onclick = () => {
        document.getElementById("player-score").innerText = 0;
        document.getElementById('result').innerText = '';
        document.getElementById('hands').innerText = ''
    }
}


playGame()
endGame() 