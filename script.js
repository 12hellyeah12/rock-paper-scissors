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
    console.log(computerChoice);
}
