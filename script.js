const buttonroll = document.getElementById("button-roll")
const score1 = document.getElementById("current-score1")

function play () {
    let roll = Math.floor(Math.random() * 6) + 1;
    if(roll > 1) {
        alert('Vous avez marqué '+roll+' !');
        score1.innerHTML = roll;
    } else {
        alert('Vous avez marqué 1 donc vous avez perdu vos points')
        score1.innerHTML = 0;
    }
}

buttonroll.addEventListener('click', play)



