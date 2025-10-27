let userscore=0;
let compscore=0;
let userscore1=document.querySelector("#user-score");
let compscore1=document.querySelector("#comp-score");
const choices= document.querySelectorAll(".choice");
let result=document.querySelector(".result");
let win=document.querySelector(".final");
let res=document.querySelector("#res");
let winner=document.querySelector("#win");
// let myId = document.querySelector("#myId")

let num=prompt("Enter the score to win the game!");


const genCompChoice = () => {
    const options=["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}

const playGame= (userChoice, choice) => {
    const compChoice = genCompChoice();
    // myId.innerText = compChoice
    if((userChoice=="rock" && compChoice=="scissors") || (userChoice=="scissors" && compChoice=="paper") || (userChoice=="paper" && compChoice=="rock")){
        ++userscore;
        result.classList.remove("hide");
        res.style.backgroundColor="green";
        userscore1.innerText=userscore;
        res.innerText=("You scored a point");
        if(userscore==num){
            win.classList.remove("hidden");
            winner.innerText=("You won!");
            // choice.removeEventListener("click", func);
        }
    }
    else if((userChoice=="rock" && compChoice=="paper") || (userChoice=="scissors" && compChoice=="rock") || (userChoice=="paper" && compChoice=="scissors")){
        ++compscore;
        result.classList.remove("hide");
        res.style.backgroundColor="rgb(243, 113, 113)";
        compscore1.innerText=compscore;
        res.innerText=("Computer scored a point");
        if(compscore==num){
            win.classList.remove("hidden");
            winner.innerText=("Computer won!");
            // choice.removeEventListener("click", func);
        }
    }
    else{
        result.classList.remove("hide");
        res.style.backgroundColor="#081b31";
        res.innerText=("Draw");
    }
};

const handleClick = (event) => {
    const choice = event.currentTarget;
    console.log("event.currTarget = ", choice)
    const userChoice = choice.getAttribute("id");
    playGame(userChoice, choice);

    if (userscore == num || compscore == num) {
        choices.forEach((choice) => choice.removeEventListener("click", handleClick));
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", handleClick);
});