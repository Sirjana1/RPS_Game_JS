let userScore = 0;
let computerScore = 0;
const choices = document.querySelectorAll(".choice");
//.choice =for class
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const computerScorePara = document.querySelector("#computer-score");

const genComputerChoice = () => {
    const options =["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random())* 3; //to get 0 to 3 rand num
    return options[randIdx];

};

const drawGame = () => {
    console.log("game was draw.");
    msg.innerText = "Game was Draw, Play Again";
};

const showWinner =(userWin, userChoice, ComputerChoice) => {
    if(userWin)
        {
            userScore++;
            userScorePara.innerText = userScore;        
            console.log("you win");
            msg.innerText = 'You win';
            msg.style.backgroundColor = "green";
        } else{
            computerScore++;
            computerScorePara.innerText = computerScore;
            console.log("you loose");
            msg.innerText = 'You loose';
            msg.style.backgroundColor =  "red";

        }
};

const playGame = (userChoice)=>{
    console.log("user choice = ", userChoice);
    //Generate computer choice-modular
    const ComputerChoice = genComputerChoice();
    console.log("computer choice = ", ComputerChoice)

    if(userChoice === ComputerChoice){
        drawGame()
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            //scissor and paper are available then
            userWin = ComputerChoice ==="paper"? false:true;

        }else if(userChoice==="paper")
            {
                userWin = ComputerChoice ==="scissors" ? false:true;
            }else {
                userWin= ComputerChoice === "rock" ? false: true;
            }
            showWinner(userWin, userChoice, ComputerChoice);

    }

};
 

choices.forEach((choice) => {
    // console.log(choice);
   
    choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    //getAttributes to get the id
    // console.log("choice was clicked", userChoice);
    playGame(userChoice);

    


    });
});