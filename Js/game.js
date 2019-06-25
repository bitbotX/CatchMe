//getting references to the HTML Objects
const message=document.querySelector(".message");

const score=document.querySelector(".show-score");

const rebels=document.querySelector(".rebels");

const startButton=document.querySelector(".start");

const playerBasket=document.querySelector(".player-basket");

//User keys
let keys={
    ArrowUp:false,
    ArrowDown:false,
    ArrowLeft:false,
    ArrowRight:false
};

//Adding event listener to our button
startButton.addEventListener("click",function(){

    message.style.display="none";
    startButton.style.display="none";
    player.score=0;
    player.totalRebels=5;
    player.play=true;
    updateScore();
    requestAnimationFrame(play);
});
document.addEventListener("keydown",function(event){
    console.log(event.key);
    event.preventDefault();
    keys[event.key]=true;
});

document.addEventListener("keyup",function(event){
    console.log(event.key);
    event.preventDefault();  
    keys[event.key]=false;
});

let player={
    score:0,
    totalRebels:0,
    play:false,
    speed:15

};

function updateScore(){
    score.textContent=player.score;
    rebels.textContent=player.totalRebels;
}

function play(){
    
}