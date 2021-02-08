const buttonroll = document.getElementById("button-roll")
let score1 = document.getElementById("current-score1")
let score2 = document.getElementById("current-score2")
let current = 0
let player1 = 1
let player2 = 0

function Play() {
    if (player1 == 1 && player2 == 0) {
        let roll = Math.floor(Math.random() * 6) + 1;
        if(roll > 1) {
            alert('Le joueur 1 marque '+roll+' points !');
            current = current + roll;
            score1.innerHTML = current;
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
        } else {
            alert("Le joueur 2 a marqué 1 point donc vous avez perdu vos points ! Au joueur 1 de jouer");
            current = 0;
            score2.innerHTML = '00';
            player1 = 1;
            player2 = 0;
        }
    }
}

buttonroll.addEventListener('click', Play)