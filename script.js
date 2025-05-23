let userScore=0;
let compScore=0;
let choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
// let userscorePara=document.getElementById("#user-score");
// let compscorePara=document.getElementById("#comp-score");
let userscorePara = document.getElementById("user-score");  
let compscorePara = document.getElementById("comp-score");  

const genComputerChoice=()=>{
    const options=["rock","paper","scissors"];
    let opt=Math.floor(Math.random()*3);
    return options[opt];
}
const drawGame=()=>{
    console.log("game was draw");
    msg.innerText="GAME WAS DRAW";
}
const showWinner = (userWin) => {
    console.log("showWinner called, userWin:", userWin);
    console.log("userscorePara:", userscorePara);
    console.log("compscorePara:", compscorePara);
    if (userWin) {
        userScore++;
        console.log("User Score:", userScore);
        if (userscorePara) {
            userscorePara.innerText = userScore;
            msg.innerText = "User Won";
            msg.style.backgroundColor = "green";
        } else {
            console.error("userscorePara is null");
        }
    } else {
        compScore++;
        console.log("Comp Score:", compScore);
        if (compscorePara) {
            compscorePara.innerText = compScore;
            msg.innerText = "Computer Won";
            msg.style.backgroundColor = "red";
        } else {
            console.error("compscorePara is null");
        }
    }
};
const playGame=(userChoice)=>{
    console.log("userchoice = ",userChoice);
    const compChoice=genComputerChoice();
    console.log("compchoice",compChoice);
    if(userChoice==compChoice)
    {
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock" && compChoice==="paper")
        {
            userWin=false;
        }
        else if(userChoice==="rock" && compChoice==="scissors")
        {
            userWin=true;
        }
        else if(userChoice==="paper" && compChoice==="scissors"){
            userWin=false;
        }
        else if(userChoice==="paper" && compChoice==="rock")
        {
            userWin=true;
        }
        else if(userChoice==="scissors" && compChoice==="paper")
        {
            userWin=true;
        }
        else if(userChoice==="scissors" && compChoice==="rock"){
            userWin=false;
        }
        showWinner(userWin);
    }

};
choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
});