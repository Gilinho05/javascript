// MY VERSION OF PEDRA PAPEL TESOURA

/*

1- criar a funcao do jogo
2- o que vou precisar??
- descubrir as escolhas do jogador e do Pc
- trazer o resultado das escolhas em numeros
- crias as mensagens possiveis --> "win, lose, draw"

*/


function fJakempoGame(yourChoice) {

    var playerChoice = yourChoice.id
    // definir escolhas aleatorias do PC
    var escolhasPossiveis = ['pedra', 'papel', 'tesoura']
    //var computerChoice = Math.floor(Math.random(escolhasPossiveis) * 3); // desta forma tras a indexação / numero da escolha
    var computerChoice = escolhasPossiveis[Math.floor(Math.random() * 3)];


    // possiveis resultados
    var resultadosPossiveis = {
        'pedra': {'pedra': 0.5, 'papel': 0, 'tesoura': 1},
        'papel': {'pedra': 1, 'papel': 0.5, 'tesoura': 0},
        'tesoura': {'pedra': 0, 'papel': 1, 'tesoura': 0.5},
    }
    var playerScore = resultadosPossiveis[playerChoice][computerChoice];
    var computerScore = resultadosPossiveis[computerChoice][playerChoice];

    var scores = [playerScore, computerScore];


    // trabalhar a mensagem
    var mensagem = '';
    var smsColor = '';

    var message = {
        'winingMessage': {
            'text': 'You Win!',
            'color': 'green'
        },
        'drawMessage': {
            'text': 'Draw!',
            'color': 'yellow'
        },
        'loseMessage': {
            'text': 'You Lose!',
            'color': 'red'
        }
    }

    if(playerScore == 0.5){
        mensagem = message.drawMessage.text;
        smsColor = message.drawMessage.color;
    } else if(playerScore == 0) {
        mensagem = message.loseMessage.text;
        smsColor = message.loseMessage.color;
    } else {
        mensagem = message.winingMessage.text;
        smsColor = message.winingMessage.color;
    }

    
    // apanhar as imagens das escolhas para colocar nos resultados
    var playerImageChosen = yourChoice.src;
    var computerImageChosen = document.getElementById(computerChoice).src;


    // mostrar resultados    
    document.getElementById('resultChoices').innerHTML ="";

    var playerChosen = document.createElement('div');
    var mensagemFinal = document.createElement('div');
    var computerChosen = document.createElement('div');

    playerChosen.innerHTML = "<img src='" + playerImageChosen + "' class='playerImgChosen'>";
    mensagemFinal.innerHTML = "<h1 style='color:" + smsColor +"'>" + mensagem + "</h1>";
    computerChosen.innerHTML = "<img src='" + computerImageChosen + "' class='computerImgChosen'>";

    document.getElementById('resultChoices').appendChild(playerChosen);
    document.getElementById('resultChoices').appendChild(mensagemFinal);
    document.getElementById('resultChoices').appendChild(computerChosen);
}

