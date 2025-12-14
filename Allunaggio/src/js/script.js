let schermo;
let context;
let immagine;
let stelle = [];
const altezzaSchermo = window.innerHeight, larghezzaSchermo = window.innerWidth; 
const gT = 0.1, gL = 1.66;

let razzo = {
    x : larghezzaSchermo/2,
    y : altezzaSchermo/2,
    larghezza : 130,
    altezza : 140,
    rotazione: 0, //in gradi
    velocità : 2,
    velocitàX: 0,
    velocitàY : 0
}

let telecamera = {
    x : 0,
    y : 0
}

window.onload = function(){
    schermo = document.getElementById('schermo');
    schermo.width = larghezzaSchermo;
    schermo.height = altezzaSchermo;
    context = schermo.getContext('2d');
    immagine = new Image();
    immagine.src = './assets/img/razzo.png'
    immagine.onload = function() {
        context.drawImage(immagine, razzo.x, razzo.y, razzo.larghezza, razzo.altezza)
    }
    for (let i = 0; i < 300; i++) {
        stelle.push({
            x : Math.random() * larghezzaSchermo,
            y : Math.random()* altezzaSchermo
        });
    }
    requestAnimationFrame(update);
    document.addEventListener('keydown', muoviNave);
}

function update() {
    requestAnimationFrame(update);
    console.log('update chiamato');
    

    razzo.velocitàY += gT; 

    razzo.y += razzo.velocitàY; 

    razzo.x += razzo.velocitàX;

    telecamera.x = razzo.x + razzo.larghezza / 2;
    
    telecamera.y = razzo.y + razzo.altezza / 2;

    context.setTransform(1, 0, 0, 1, 0, 0);

    context.clearRect(0, 0, schermo.width, schermo.height);

    context.translate(-telecamera.x + larghezzaSchermo / 2, -telecamera.y + altezzaSchermo / 2);

    generaStelle();

    context.save();

    context.translate(razzo.x + razzo.larghezza/2, razzo.y + razzo.altezza/2); //sposto il centro di rotazione al centro del razzo

    context.rotate((razzo.rotazione * Math.PI / 180)); //funzione che accetta radianti, trasformo con la formula


    context.drawImage(immagine, -razzo.larghezza/2, -razzo.altezza/2, razzo.larghezza, razzo.altezza);

    context.restore();
}

function muoviNave(e) {
    switch(e.code){
        case 'KeyW':
            razzo.velocitàX += Math.sin((razzo.rotazione * Math.PI / 180)) * razzo.velocità;
            razzo.velocitàY -= Math.cos((razzo.rotazione * Math.PI / 180)) * razzo.velocità;
            break;
        case 'KeyD':
            razzo.rotazione += 5;
            break;
        case 'KeyA':
            razzo.rotazione -= 5;
            break;
        
    }
}

function generaStelle(){
    const cellSize = 200;       // dimensione cella
    const stellePerCella = 3;   // massimo stelle nella cella
    const raggioVisibile = 3000; // quanto mondo vedere attorno alla telecamera

    // Calcolo cella centrale della telecamera
    let cx = Math.floor(telecamera.x / cellSize);
    let cy = Math.floor(telecamera.y / cellSize);

    // Quante celle disegnare attorno
    let celleRaggio = Math.ceil(raggioVisibile / cellSize);

    context.fillStyle = "white";

    // Ciclo su tutte le celle visibili
    for (let i = cx - celleRaggio; i <= cx + celleRaggio; i++) {
        for (let j = cy - celleRaggio; j <= cy + celleRaggio; j++) {
            let count = Math.floor(random(i, j) * stellePerCella);
            for (let k = 0; k < count; k++) {
                let offsetX = random(i + k, j) * cellSize;
                let offsetY = random(i, j + k) * cellSize;
                let x = i * cellSize + offsetX;
                let y = j * cellSize + offsetY;
                context.fillRect(x, y, 3, 3);
            }
        }
    }
}

function random(x, y) {
    return Math.abs(Math.sin(x * 928371 + y * 123123)) % 1;
}