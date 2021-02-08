const buttonRoll = document.getElementById("button-roll")
const buttonHold = document.getElementById("button-hold")
const score1 = document.getElementById("current-score1")
const score2 = document.getElementById("current-score2")
const globalScore1 = document.getElementById("global-score1")
const globalScore2 = document.getElementById("global-score2")
let current = 0
let player1 = 1
let player2 = 0
let global1 = 0
let global2 = 0
let globalScoreSaved1 = 0
let globalScoreSaved2 = 0

function Play() {
    if (player1 == 1 && player2 == 0) {
        let roll = Math.floor(Math.random() * 6) + 1;
        if(roll > 1) {
            alert('Le joueur 1 marque '+roll+' points !');
            current = current + roll;
            score1.innerHTML = current;
            buttonHold.addEventListener('click', Hold);
        } else {
            alert("Le joueur 1 a marqué 1 point donc vous avez perdu vos points ! Au joueur 2 de jouer");
            current = 0;
            score1.innerHTML = '00';
            player1 = 0;
            player2 = 1;
        }
    } else if (player1 == 0 && player2 == 1) {
        let roll = Math.floor(Math.random() * 6) + 1;
        if(roll > 1) {
            alert('Le joueur 2 marque '+roll+' points !');
            current = current + roll;
            score2.innerHTML = current;
            buttonHold.addEventListener('click', Hold);
        } else {
            alert("Le joueur 2 a marqué 1 point donc vous avez perdu vos points ! Au joueur 1 de jouer");
            current = 0;
            score2.innerHTML = '00';
            player1 = 1;
            player2 = 0;
        }
    }
}

function Hold () {
    if (player1 == 1 && player2 == 0) {
        global1 = global1 + current;
        globalScore1.innerHTML = globalScoreSaved1 + global1;
        alert("Le joueur 1 a sauvegardé son current! Au joueur 2 de jouer");
        score1.innerHTML = '00';
        player1 = 0;
        player2 = 1;
        current = 0;
    } else if (player1 == 0 && player2 == 1) {
        global2 = global2 + current;
        globalScore2.innerHTML = globalScoreSaved2 + global2;
        alert("Le joueur 2 a sauvegardé son current! Au joueur 1 de jouer");
        score2.innerHTML = '00';
        player1 = 1;
        player2 = 0;
        current = 0;
    }
}

buttonRoll.addEventListener('click', Play)



