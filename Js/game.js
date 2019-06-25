const message=document.querySelector(".message");

const score=document.querySelector(".show-score");

const rebels=document.querySelector(".rebels");

const startButton=document.querySelector(".start");

const gameArea=document.querySelector(".player");


let keys={
    Up:false,
    Down:false,
    Left:false,
    Right:false
};

/* startButton.addEventListener("click",function(){

    message.style.display="none";
    startButton.style.display="none";
    player.score=0;
    player.totalRebels=5;
    player.play=true;
    updateScore();
}); */

document.addEventListener("keydown",pressKeyOn);

function pressKeyOn(event){
    console.log(event.key);
}

document.addEventListener("keyup",function(){

});

let player={

    score:0,
    totalRebels:0,
    play:false,
    speed:15

};

function updateScore(){
    score.textContent=player.score;
    rebels.textContent=player.rebels;
}