const username = prompt('Welkom, wat is je naam?');
alert('Hey ' + username + '!');

const startGame = function () {
    const playerWins = Math.floor(Math.random() * 10);
    let stringInput = prompt('Voer een nummer in van 0 tot 25 om te beginnen met raden...');
    const numberInput = parseInt(stringInput);
    let i = 1;

    while (numberInput !== playerWins && i < 5) {
        stringInput = prompt(`Dat is fout, je hebt nog ${5 - i} pogingen over`);
        i++
        console.log(numberInput);
    };
    numberInput === playerWins ? alert('Gefeliciteerd, je hebt gewonnen!' + ' Dag ' + username) : alert('Je hebt verloren');
};

startGame();