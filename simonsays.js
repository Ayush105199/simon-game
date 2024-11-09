// 


let gameSeq = [];
let userSeq = [];
let btns = ["yellow", "red", "purple", "green"];
let started = false;
let level = 0;
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if (!started) {
        
        h2.innerText="Game is Started";
        started = true;
        levelUp();
    }
});

function gameFlash(btn) {
    btn.classList.add(".flash");
    setTimeout(function () {
        btn.classList.remove(".flash");
    }, 250);
}

function userFlash(btn) {
    btn.classList.add(".userflash");
    setTimeout(function () {
        btn.classList.remove(".userflash");
    }, 250);
}

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 4); // Changed randon() to random()
    let randColor = btns[randIdx]; // Changed btns(randIdx) to btns[randIdx]
    let randBtn = document.querySelector(`.${randColor}`);
    
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}

function checkAns(idx) { // Changed idx1 to idx for clarity
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length === gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
        h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br> Press any key to Start`;
        document.querySelector("body").style.backgroundColor = "red"; // Fixed spelling of backgroundColor
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white"; // Fixed spelling of backgroundColor
        }, 500); // Added duration for timeout
        reset();
    }
}

function btnPress() {
    let btn = this;
    userFlash(btn);
    let userColor = btn.getAttribute("id"); // Fixed typo: userColor instead of userColor
    userSeq.push(userColor);
    checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (let btn of allBtns) { // Added let before btn
    btn.addEventListener("click", btnPress);
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}
