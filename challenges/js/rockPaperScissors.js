
// TUTORIAL VERSIONS

//fRpsGame = function rock paper scissor game

function fRpsGame(yourChoice) {
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;
    botChoice = fNumToChoice(fRandomBotChoice());

    results = decideWinner(humanChoice, botChoice);
    //console.log(results);
    //console.log('player escolheu >', humanChoice);
    //console.log('PC escolheu >', botChoice);

    message = finalMessage(results) // {'message': 'You Won', 'color': 'green'}
    //console.log('mensagem de resultado >', message);
    fRpsFrontEnd(humanChoice, botChoice, message);

}

// BOT CHOICE FUNCTIONS
function fRandomBotChoice(){
    // Math.random() -- retorna aleatoreamente valores entre o 0-1 (ex: 0.36740177150800557);
    // Math.random() * 3 -- retorna aleatoreamente valores entre o 0-2 (ex: 1.7448503973664191)
    // Math.floor(Math.random() * 3) -- com o Math.floor() arredonda o valor decimal para inteiro (ex: 2)
    return Math.floor(Math.random() * 3);
}
function fNumToChoice(number) {
    return ['rock', 'paper', 'scissor'][number]; // strings têm que ter o mesmo nome que o ID
}


function decideWinner(suaEscolha, pcEscolha) {
    // strings têm que ter o mesmo nome que o ID
    var gameDataBase = {
        'rock': {'rock': 0.5,'scissor': 1, 'paper': 0}, 
        'paper': {'rock': 1,'scissor': 0, 'paper': 0.5}, 
        'scissor': {'rock': 0,'scissor': 0.5, 'paper': 1} 
    }
    /*var gameDataBase = {
        'rockButton': {'rockButton': 0.5,'scissorButton': 1, 'paperButton': 0}, 
        'paperButton': {'rockButton': 1,'scissorButton': 0, 'paperButton': 0.5}, 
        'scissorButton': {'rockButton': 0,'scissorButton': 0.5, 'paperButton': 1} 
    }*/

    var yourScore = gameDataBase[suaEscolha][pcEscolha];
    var computerScore = gameDataBase[pcEscolha][suaEscolha];

    return [yourScore, computerScore];
}

function finalMessage([yourScore, computerScore]) {
    if(yourScore === 0) {
        return {'message': 'You Lost', 'color': 'red'}
    } else if(yourScore === 0.5) {
        return {'message': 'You Draw', 'color': 'yellow'}
    }else {
        return {'message': 'You Won', 'color': 'green'}
    }
}

function fRpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
    console.log('fRpsFrontEnd >', humanImageChoice, botImageChoice, finalMessage);

    var imagesDB = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissor': document.getElementById('scissor').src
    }
    console.log('imagesDB >', imagesDB[finalMessage]);

    // lets remove all the images
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();

    // show the results
    var humanDiv = document.createElement('div');
    var computerDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imagesDB[humanImageChoice] + "' />"
    computerDiv.innerHTML = "<img src='" + imagesDB[botImageChoice] + "' />"
    messageDiv.innerHTML = "<h1 style='color:" + finalMessage.color + "'>" + finalMessage.message + " </h1>"

    document.getElementById('rps-buttons').appendChild(humanDiv);
    document.getElementById('rps-buttons').appendChild(messageDiv);
    document.getElementById('rps-buttons').appendChild(computerDiv);

}