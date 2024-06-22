let body = document.querySelector("body");

let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");
let btns = document.querySelectorAll(".btn");

let buttons = ["red", "yellow", "blue", "green"];

body.addEventListener("keypress", function(){
    if(started == false){
        console.log("game started");
        started = true;
        levelUp();
    }

});

function levelUp(){
    userSeq = []; 
    level++;
    h2.innerText = `Level ${level}`;

    let randIndex = Math.floor(Math.random() * 3);
    let randColor = buttons[randIndex];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    gameFlash(randBtn);
}

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 500);
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    }, 500);
}

// event listner for when we clicked any button
for(btn of btns){
    btn.addEventListener("click", btnPress);
}

function btnPress(){
    let btn = this;
    userFlash(btn);

    let userColor = btn.getAttribute("id");
    // console.log(userColor);
    userSeq.push(userColor);

    checkAns(userSeq.length - 1);
}


function checkAns(idx){
    if(userSeq[idx] == gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 700);
        }
    }else{
        h2.innerHTML = `Game Over! Your score was ----<b>${level}</b>---- <br> Press any key to start again..`;
        body.style.backgroundColor = "red";
        setTimeout(function() {
            body.style.backgroundColor = "white";
        }, 150);
        level = 0;
        started = false;
        gameSeq = [];
        userSeq = [];
    }
}