const holes = document.querySelectorAll(".hole");
const scoreBoard = document.querySelector(".score");
const moles = document.querySelectorAll(".mole");

let score = 0;
let timeUp = false;

function randTime(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}

function randHole(holes){
    const idx = Math.floor(Math.random() * holes.length);
    return holes[idx];
}

function peek(){
    const time = randTime(200, 1000);
    const hole = randHole(holes);
    hole.classList.add('up');
    setTimeout(() => {
        hole.classList.remove('up');
        if(!timeUp) peek();
    }, time);
}

function startGame(){
    score = 0;
    scoreBoard.textContent = score;
    timeUp = false;
    peek();
    setTimeout(() => {
        timeUp = true;
    }, 10000)
}

function bonk(e){
    if(!e.isTrusted){
        return; //cheater!
    }
    score++;
    this.classList.remove('up');
    scoreBoard.textContent = score;
}

moles.forEach(mole => mole.addEventListener('click', bonk));