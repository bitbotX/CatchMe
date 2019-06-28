//getting references to the HTML Objects
const message=document.querySelector(".message");

const score=document.querySelector(".show-score");

const rebels=document.querySelector(".rebels");

const startButton=document.querySelector(".start");

const playerBasket=document.querySelector(".player-basket");

let bounds=playerBasket.getBoundingClientRect();

const container=document.querySelector(".top-level-container");

let containerBound=container.getBoundingClientRect();
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
    generateRebels(6);
    requestAnimationFrame(startGame);
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

function startGame(){
    if(player.play==true){
        if(keys.ArrowDown && bounds.y < (containerBound.height - bounds.height)){
            bounds.y+=player.speed;
        }
        if(keys.ArrowUp && bounds.y>0){
            bounds.y-=player.speed;
        }
        if(keys.ArrowLeft && bounds.x>0){
            bounds.x-=player.speed;
        }
        if(keys.ArrowRight && bounds.x<(containerBound.width - bounds.width)){
            bounds.x+=player.speed;
        }
        playerBasket.style.left=bounds.x+"px";
        playerBasket.style.top=bounds.y+"px";
        requestAnimationFrame(startGame);

        let enemies=document.querySelectorAll(".bad");
        if(enemies.length==0){
            //stop the game
            message.style.display="block";
            message.textContent="Game Over!";
            startButton.style.display="block";
            playerBasket.style.display="none";
            player.play=false;
        }
        else{
            //move enemies
            for(let i=0;i<enemies.length;i++){
                moveEnemies(enemies[i]);
            }
        }
        console.log(enemies);
    }
}

function generateRebels(mReb){
    for(let morePlayers=0;morePlayers<mReb;morePlayers++){
        if(player.totalRebels>0){
            let nPlayers=player.totalRebels;
            player.totalRebels--;
            updateScore();
            let dElement=document.createElement("div");
            dElement.classList.add("bad");
            dElement.style.height=Math.floor(Math.random()*50)+50;
            dElement.x=Math.floor(Math.random()*containerBound.width-100);
            if(dElement.x<0){
                dElement.x=100;
            }
            dElement.y=(Math.floor(Math.random()*500)*-1)-200;
            dElement.speed=Math.ceil(Math.random()*10)+3;
            container.appendChild(dElement);
            dElement.style.left=dElement.x+"px";
            dElement.style.top=dElement.y+"px";
        }
    }
}

function moveEnemies(p){
    console.log(p);
    p.y+=p.speed;
    if (e.y>containerBound.height-100) {
        e.y=-100;
        e.x=Math.floor(Math.random()*containerBound.width-100);
        if(e.x<0){
            e.x=100;
        }
        e.style.left=e.x;
    }
    if(collision(playerBasket,p)){
        player.score++;
        container.removeChild(p);
        if(player.totalRebels>0){
            let nPlayers=player.totalRebels;
            player.totalRebels--;
            updateScore();
            let dElement=document.createElement("div");
            dElement.classList.add("bad");
            dElement.x=Math.floor(Math.random()*containerBound.width-100);
            if(dElement.x<0){
                dElement.x=100;
            }
            dElement.y=(Math.floor(Math.random()*500)*-1)-200;
            dElement.speed=Math.ceil(Math.random()*10)+3;
            container.appendChild(dElement);
            dElement.style.left=dElement.x+"px";
            dElement.style.top=dElement.y+"px";
        }
        updateScore();
    }
    p.style.top=p.y+"px";
}

function collide(e1,e2){
    let e1Bounds=e1.getBoundingClientRect();
    let e2Bounds=e2.getBoundingClientRect();
    return !((e1Bounds.bottom<e2Bounds.top)
    || (e1Bounds.top>e2Bounds.bottom)
    || (e1Bounds.right<e2Bounds.left)
    ||(e1Bounds.left>e2Bounds.right)    
    )
}