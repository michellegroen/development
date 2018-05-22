var element = ('Steen', 'Papier', 'Schaar');


window.onload = function() {
    console.log("tekst");
    document.getElementById("steen").onclick = function(event) {
        calculateResult(0);
    }
    document.getElementById("papier").onclick = function(event) {
        calculateResult(1);
    }
    document.getElementById("schaar").onclick = function(event) {
        calculateResult(2);
    }
}
console.log(Math.random());

function calculateResult(humanChoice) {
    var computerChoice = Math.floor(Math.random() * 3);
    console.log(computerChoice);
    console.log(humanChoice);

    if (humanChoice + 1 === computerChoice) {
        console.log('computer heeft: ' + computerChoice + ' human heeft: ' + humanChoice, 'computer wins');
    }
    if (humanChoice === computerChoice) {
        console.log('Computer heeft:' + computerChoice + ' human heeft: ' + humanChoice, 'Its a tie');
    } else {
        console.log('Computer heeft:' + computerChoice + ' human heeft: ' + humanChoice, 'human wins');
    }
};