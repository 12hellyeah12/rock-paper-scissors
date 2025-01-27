// Declare score variables
let humanScore = 0;
let computerScore = 0;

// Create function getComputerChoice
const getComputerChoice = () => {
    // Initalize 1 variable "computerChoice"
    let computerChoice;
    // Set the Math.random method to return a value between 0 and 2.
    const ranNum = Math.floor(Math.random() * 3);
    // If value 0 is returned
    if(ranNum === 0){
        // Assign "computerChoice" the value "Rock"
        computerChoice = "Rock";
    }
    // If value 1 is returned 
    else if(ranNum === 1){
        // Assign "computerChoice" the value "Scissor"
        computerChoice = "Scissor";
    }
    // If value 2 is returned
    else if(ranNum === 2){
        // Assing "computerChoice" the value "Paper"
        computerChoice = "Paper";
    }
    // Return "computerChoice"
    return computerChoice;
}

// Create a function called getHumanChoice
// Prompt the user for input and assign it to userChoice
// Return userChoice
const getHumanChoice = () => userChoice = window.prompt("Rock, Paper or Scissor?", "e.g. Rock, Paper or Scissor");

// Create a functionn called playRound with two parameters "computerChoice" and "userChoice"
// Make the arguments case insensitive
const playRound = (computer, user) => {
    // Make arguments case insensitive
    const computerChoice = computer.toLowerCase();
    const userChoice = user.toLowerCase();
    // Define winner variable
    let computerWins = false;
    let isTie = false;
    // Define cases for computer to win
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

    // If "computerChoice" beats "userChoice" 
    if(computerWins){
        // Then display result in the console 
        console.log(`You loose! ${computerChoice} beats ${userChoice}`);
         // Add one point to the computers score and display the scores in the console
         computerScore += 1;
    } else if(isTie){
        console.log(`It is a ${computerChoice}-tie!`)
    } else {
        console.log(`You win! ${userChoice} beats ${computerChoice}`);
        humanScore += 1;
    } 
    console.log(`Computer Score: ${computerScore} User Score: ${humanScore}`);
}

// Create a function playGame that allows the user to play 5 rounds. 
const playGame = () => {
    //Call the playRound function 5 times
    for(let i = 0; i < 5; i++){
        const computerChose = getComputerChoice();
        const humanChose = getHumanChoice();
        playRound(computerChose, humanChose);
        console.log(`Round: ${i + 1}`);
    }
    //Declare the winner
    //When Computer Score is greater than Human Score 
    if(computerScore > humanScore){
        //Computer wins
        console.log(`You loose! Computer wins ${computerScore} to ${humanScore}`);
    //When Computer Score and Human Score are equal
    } else if(computerScore === humanScore){
        //Then there is no winner
        console.log(`It's a tie! Both have ${computerScore} points.`);
    //When Computer does not win and there is no tie
    } else {
        // Then Human wins
        console.log(`You win ${humanScore} to ${computerScore}`);
    }

    //Reset Scores after Game
    computerScore = 0;
    humanScore = 0;
}
    

    
    
        
       

