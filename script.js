let humanScore = 0;
let computerScore = 0;
let foundWinner = false;
const buttons = document.querySelectorAll("button");
const scores = document.querySelectorAll(".score");
const roundResults = document.querySelector(".round-results");

scores[0].textContent = `Computer Score: ${computerScore}`;
scores[1].textContent = `Your Score: ${humanScore}`;

const getComputerChoice = () => {
    
    let computerChoice;
    // Set the Math.random method to return a value between 0 and 2.
    const ranNum = Math.floor(Math.random() * 3);
    
    if(ranNum === 0){
        computerChoice = "Rock";
    } else if(ranNum === 1){
        computerChoice = "Scissor";
    } else if(ranNum === 2){
        computerChoice = "Paper";
    }
    return computerChoice;
}

const playRound = (computer, user) => {
    // Make arguments case insensitive
    const computerChoice = computer.toLowerCase();
    const userChoice = user.toLowerCase();
    let computerWins = false;
    let isTie = false;
    
    if(computerChoice === "rock" && userChoice === "scissor"){
        computerWins = true;
    } else if(computerChoice === "paper" && userChoice === "rock"){
        computerWins = true
    } else if(computerChoice === "scissor" && userChoice === "paper"){
        computerWins = true;
    } else if(computerChoice === userChoice){
        isTie = true;
    }
    else {
        computerWins = false;
    }

    if(computerWins){
        roundResults.innerHTML += 
        `<div>You loose! ${computerChoice} beats ${userChoice}</div>`;
        computerScore += 1;
    } else if(isTie){
        roundResults.innerHTML += 
        `<div>It is a ${computerChoice}-tie!</div>`;
        console.log(``)
    } else {
        roundResults.innerHTML += 
        `<div>You win! ${userChoice} beats ${computerChoice}</div>`;
        humanScore += 1;
    }

    scores[0].textContent = `Computer Score: ${computerScore}`;
    scores[1].textContent = `Your Score: ${humanScore}`;
}

const displayWinner = () => {
    
    if(computerScore === 5){
        roundResults.innerHTML = `<div>You loose!</div>`;
        roundResults.style.color ="red";
        foundWinner = true;
    } else if(humanScore === 5){
        roundResults.innerHTML = `<div>You win!</div>`;
        roundResults.style.color ="green";
        foundWinner = true;
    }
}

const resetGame = () => {
    humanScore = 0;
    computerScore = 0;
    foundWinner = false;

    roundResults.innerHTML = "";
    roundResults.style.color ="black";
    scores[0].textContent = `Computer Score: ${computerScore}`;
    scores[1].textContent = `Your Score: ${humanScore}`;
}

//Each of the three buttons in the NodeList button is assigned a event listener
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const userChoice = button.value;
        const computerChoice = getComputerChoice();

        playRound(computerChoice, userChoice);
        displayWinner();

            if(foundWinner){
                setTimeout(resetGame, 1000);
            }
    });
});

    
    
        
       

