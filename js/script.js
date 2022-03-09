let randomNumber = Math.floor(Math.random() * 3 + 1);

let computerMove = 'nieznany ruch';

if (randomNumber == 1){ computerMove = 'kamień';
} else if (randomNumber == 2){ computerMove = 'papier';
} else { computerMove = 'nożyce';
}
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if(playerInput == '1'){
  playerMove = 'kamień';
} else if (playerInput == '2'){
    playerMove = 'papier';
} else {
    playerMove = 'nożyce';
}

printMessage('Twój ruch to: ' + playerMove + ', a ruch przeciwnika to: ' + computerMove);
if (playerMove == 'nieznany ruch'){
    printMessage('Nie wybrałeś poprawnego ruchu');
} else if (computerMove == 'kamień' && playerMove == 'kamień'){
    printMessage('Mamy remis');
} else if (computerMove == 'kamień' && playerMove =='papier'){
    printMessage('Wygrałeś!');
} else if (computerMove == 'kamień' && playerMove == 'nożyce'){
    printMessage('Przegrałeś!');
} else if (computerMove == 'papier' && playerMove == 'kamień'){
    printMessage('Przegrałeś!');
} else if (computerMove == 'papier' && playerMove == 'papier'){
    printMessage('Mamy remis');
} else if (computerMove == 'papier' && playerMove == 'nożyce'){
    printMessage('Wygrałeś!');
} else if (computerMove == 'nożyce' && playerMove == 'kamień'){
    printMessage('Wygrałeś');
} else if (computerMove == 'nożyce' && playerMove =='papier'){
    printMessage('Przegrałeś!');
} else if (computerMove == 'nożyce' && playerMove == 'nożyce'){
    printMessage('Mamy remis');
}
