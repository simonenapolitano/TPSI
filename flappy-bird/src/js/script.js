//gestione del canvas
const board = document.getElementById('board');
const canvasWidth = 360;
const canvasHeight = 640;
const context = board.getContext('2d'); //per disegnare sul canvas

//gestione dell'uccello
let bird = {
    x : canvasWidth/8,
    y : canvasHeight/2,
    width : 34,
    height : 24,
    image : new Image
}

//gestione dei tubi
let pipes = [];
let pipeWidth = 64;
let pipeHeight = 512;
let pipeX = canvasWidth;
let pipeY = 0;
let topPipeImg = new Image;
let bottomPipeImg = new Image;

//gestione della fisica del movimento
let velocityX = -2; //la velocità a cui i tubi si muovono verso sinistra
let velocityY = 0; //lo spazio che percorre l'uccello sull'asse y quando salta
const gravity = 0.4; //la gravità, simula la caduta, ad esempio 0.4 pixel al secondo

let gameover = false;
let score = 0;

window.onload = function(){
    board.width = canvasWidth;
    board.height = canvasHeight;
    bird.image.src = './assets/img/flappybird.png';
    bird.image.onload = function(){
        context.drawImage(bird.image, bird.x, bird.y, bird.width, bird.height);
    }

    topPipeImg.src = './assets/img/toppipe.png';
    bottomPipeImg.src = './assets/img/bottompipe.png';

    requestAnimationFrame(update);
    setInterval(placePipes, 1500); //chiama la funzione 'placePipes' ogni 1500 millisecondi(1.5 secondi)
    document.addEventListener('keydown', moveBird);
}

function update(){
    requestAnimationFrame(update);
    if(gameover){
        context.fillStyle = 'red';
        context.fillText('game over', canvasWidth/3, 45); 
        return;
    }

    context.clearRect(0, 0, canvasWidth, canvasHeight);

    //applica la gravita alla velocitàY, massimo l'altezza del canvas, quindi non può sotto quel valore
    velocityY += gravity;
    bird.y = Math.max(bird.y + velocityY, 0) //applica la velocitàY all'uccello, per un massimo di 0, quindi non può andare sopra 0
    context.drawImage(bird.image, bird.x, bird.y, bird.width, bird.height);

    if(bird.y > canvasHeight){
        gameover = true;
    }

    for (let i = 0; i < pipes.length; i++) {
        let pipe = pipes[i];
        pipe.x += velocityX; //la facciamo muovere verso sinistra
        context.drawImage(pipe.img, pipe.x, pipe.y, pipe.width, pipe.height);

        if(!pipe.passed && bird.x > pipe.x + pipe.width) {
            pipe.passed = true;
            score += 0.5;
        }

        if(detectCollision(bird, pipe)) {
            gameover = true;
        }
    }

    //togliere i tubi che sono andati fuori schermo dall'array
    while(pipes.length > 0 && pipes[0].x < -pipeWidth){ //controlla se il primo tubo a sinistra va oltre il canvas allora lo cancella facendo lo shift
        pipes.shift(); //toglie il primo elemento dall'array
    }

    context.fillStyle = 'white';
    context.font = '45px sans-serif';
    context.fillText(score, 5, 45); 
}

function placePipes(){
    if(gameover){
        return;
    }

    //pipeHeight/4 serve per far vedere solo 3/4 del tubo a schermo
    //Math.random()*(pipeHeight/2) il (pipeHeight/2) randomizza il range tra -128 e -256, quindi da -1/4 dell'altezza a -3/4 dell'altezza
    let randomPipeY = pipeY - pipeHeight/4 - Math.random()*(pipeHeight/2); //randomizza la posizione Y del tubo
    const openingSpace = board.height/5;

    let topPipe = {
        img : topPipeImg,
        x : pipeX,
        y : randomPipeY,
        width : pipeWidth,
        height : pipeHeight,
        passed : false
    }
    pipes.push(topPipe);

    let bottomPipe = {
        img : bottomPipeImg,
        x : pipeX,
        y : randomPipeY + pipeHeight + openingSpace,
        width : pipeWidth,
        height : pipeHeight,
        passed : false
    }
    pipes.push(bottomPipe);
}

function moveBird(e){
    if(e.code == 'Space' || e.code == 'ArrowUp'){
        velocityY = -6;

        //resettare il gioco se si ha perso
        if(gameover){
            bird.y = canvasHeight/2;
            pipes = [];
            score = 0;
            gameover = false;
        }
    }
}

//2 rettangoli, a e b, a è l'uccello, b invece è il tubo
function detectCollision(a, b){ //questa funzione ritorna un valore vero o falso in base alle posizioni del tubo e dell'uccello
    return  a.x < b.x + b.width && //se la posizione x dell'uccello è minore della posizione x del tubo sommata alla sua larghezza &&(riga sotto)
            a.x + a.width > b.x && //se la posizione x dell'uccello sommata alla sua larghezza è maggiore della posizione x del tubo &&(riga sotto)
            a.y < b.y + b.height && //se la posizione y dell'uccello è minore della posizione y del tubo sommata alla sua altezza &&(riga sotto)
            a.y + a.height > b.y //se la posizione y dell'uccello sommata alla sua altezza è maggiore della posizione y del tubo
                                 //allora ritorna vero, senò falso
}