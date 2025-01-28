let humanScore = 0;
let computerScore = 0;

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

const getHumanChoice = () => userChoice = window.prompt("Rock, Paper or Scissor?", "e.g. Rock, Paper or Scissor");

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
        console.log(`You loose! ${computerChoice} beats ${userChoice}`);
        computerScore += 1;
    } else if(isTie){
        console.log(`It is a ${computerChoice}-tie!`)
    } else {
        console.log(`You win! ${userChoice} beats ${computerChoice}`);
        humanScore += 1;
    } 
    console.log(`Computer Score: ${computerScore} User Score: ${humanScore}`);
}

const playGame = () => {
    
    for(let i = 0; i < 5; i++){
        const computerChose = getComputerChoice();
        const humanChose = getHumanChoice();
        playRound(computerChose, humanChose);
        console.log(`Round: ${i + 1}`);
    }
   
    if(computerScore > humanScore){
        console.log(`You loose! Computer wins ${computerScore} to ${humanScore}`);
    } else if(computerScore === humanScore){
        console.log(`It's a tie! Both have ${computerScore} points.`);
    } else {
        console.log(`You win ${humanScore} to ${computerScore}`);
    }

    //Reset Scores after Game
    computerScore = 0;
    humanScore = 0;
}
    

    
    
        
       

