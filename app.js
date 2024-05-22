let choices = document.querySelectorAll(".choice");
let text = document.getElementById("text");
let userscore = 0;
let compscore = 0;
let us = document.getElementById("user-score");
let cs = document.getElementById("comp-score");
let reset = document.querySelector(".reset");
const audioTurn = new Audio('audioTurn.mp3');



choices.forEach((choice) => {
    choice.addEventListener('click', function getuserchoice() {
        audioTurn.play();
        choices.forEach((c) => {
            c.style.borderColor = "black";
        });
        let userchoice = choice.getAttribute("id");
        console.log(userchoice + " by user");
        let result = compchoice();
        let compdecide = document.getElementById(result);
        compdecide.style.borderColor = "rgb(202, 236, 53)";
        
        console.log(result + " by comp");

        checkWin(result, userchoice);
    });
});

function compchoice() {
    let arr = ["rock", "paper", "scissors"];
    let no = Math.floor(Math.random() * 3);
    return arr[no];
}

function checkWin(result, userchoice) {
    if (result === userchoice) {
        console.log("draw");
        text.innerText = "Draw";
    } else if (userchoice === "rock" && result === "scissors") {
        text.innerText = "You Won! :)";
        userscore += 1;
        us.innerText = userscore;
    } else if (userchoice === "paper" && result === "rock") {
        text.innerText = "You Won! :)";
        userscore += 1;
        us.innerText = userscore;
    } else if (userchoice === "scissors" && result === "paper") {
        text.innerText = "You Won! :)";
        userscore += 1;
        us.innerText = userscore;
    } else {
        text.innerText = "You lose :(";
        compscore += 1;
        cs.innerText = compscore;
    }
}

reset.addEventListener('click', function() {
    choices.forEach((c) => {
        c.style.borderColor = "black";
    });
    text.innerText = "";
    userscore = 0;
    compscore = 0;
    us.innerText = "0";
    cs.innerText = "0";
});
