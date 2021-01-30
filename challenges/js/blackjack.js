
let blackjackGame = {
    'player': {
        'score-spam': '#playerResult', 
        'div': '#playerBox',
        'score': 0,
        'name': 'Jogador X'
    },
    'dealer': {
        'score-spam': '#dealerResult',
        'div': '#dealerBox',
        'score': 0,
        'name': 'DEALER'
    },
    'cards': ['2','3','4','5','6','7','8','9','10','J','Q','K','A'],
    'cardsValue': {'2': 2,'3': 3,'4': 4,'5': 5,'6': 6,'7': 7,'8': 8,'9': 9,'10': 10,'J': 10,'Q': 10,'K': 10,'A': [1, 11]},
    'totalWins': 0,
    'totalLosses': 0,
    'totalDraws': 0,
    'isStand': false,
    'turnsOver': false,
}

const PLAYER = blackjackGame['player'];
const DEALER = blackjackGame['dealer'];

// adicionar sons
const hitSound = new Audio('/challenges/audio/swish.m4a');
const winSound = new Audio('/challenges/audio/cash.mp3');
const loseSound = new Audio('/challenges/audio/aww.mp3');

let totalWins =  blackjackGame['totalWins'];
let totalLosses =  blackjackGame['totalLosses'];
let totalDraws =  blackjackGame['totalDraws'];


// identificar os botoes no HTML e criar evento que despara uma funcao ao clicar neles
document.querySelector('#hitButton').addEventListener('click', fHitCard);
document.querySelector('#standButton').addEventListener('click', fDealerLogic);
document.querySelector('#dealButton').addEventListener('click', fDealCard);


// funcoes declaradas para que o evento 'click' criado assima funcione
function fHitCard(){ // hit button 
    if(blackjackGame['isStand'] === false) {    
        console.log('PLAYER HIT');
        let card = fRandomCards();
        console.log('testing >>>>', card);
        fShowCard(card, PLAYER);
        fUpdateScore(card, PLAYER);
        console.log('testing score >>>>', PLAYER['score']);
        fShowScore(PLAYER);        
    }
}

// criar um funcao que retorna uma promisse
function sleep(mileseconds) {
    return new Promise(resolve => setTimeout(resolve, mileseconds));
}

async function fDealerLogic(){ // stand button
    blackjackGame['isStand'] = true;
    while (DEALER['score'] < 16 && blackjackGame['isStand'] === true && blackjackGame['turnsOver'] === false) {            
        console.log('DEALER HIT');
        let card = fRandomCards();
        fShowCard(card, DEALER);
        fUpdateScore(card, DEALER);
        fShowScore(DEALER);
        await sleep(1000); // dar carta passado 1 sec
    }   
    blackjackGame['turnsOver'] = true; // terminaram os turnos
    let winner = fDecideWinner();
    fShowResult(winner);
}

function fDealCard(){ // deal button
    if(blackjackGame['turnsOver'] === true) {                   
        console.log('RECOMEÇA');
        let yourImages = document.querySelector('#playerBox').querySelectorAll('img');    
        let dealerImages = document.querySelector('#dealerBox').querySelectorAll('img');
        console.log('lista todas as cartas player >', yourImages);
        console.log('lista todas as cartas do dealer >', dealerImages);

        for(let i = 0; i < yourImages.length; i++) {
            yourImages[i].remove();
        }
        console.log('cartas do player removidas >', yourImages);
        for(let i = 0; i < dealerImages.length; i++) {
            dealerImages[i].remove();
        }
        console.log('cartas do dealer removidas >', dealerImages);

        PLAYER['score'] = 0;
        DEALER['score'] = 0;
        
        document.querySelector(PLAYER['score-spam']).textContent = PLAYER['score'];           
        document.querySelector(PLAYER['score-spam']).style.color = 'white';  
        
        document.querySelector(DEALER['score-spam']).textContent = DEALER['score'];           
        document.querySelector(DEALER['score-spam']).style.color = 'white';  

        let message = "Let's Play";
        let messageColor = 'black';
        document.querySelector('#subtitleContent').textContent = message;
        document.querySelector('#subtitleContent').style.color = messageColor;
               
        blackjackGame['turnsOver'] = false;
        blackjackGame['isStand'] = false;
            
    } else {
        alert('ainda nao terminaram os turnos!!!');
    }
}

// cartas
function fRandomCards(){
    let randomIndex = Math.floor(Math.random()*13);    
    console.log('random Cards function >', randomIndex);
    return blackjackGame['cards'][randomIndex];
}

function fShowCard(card, activePlayer){
    if (activePlayer['score'] <= 21){
        let cardImage = document.createElement('img');
        cardImage.src = `/challenges/img/cards/${card}.png`;
        cardImage.classList.add('cards');
        document.querySelector(activePlayer['div']).appendChild(cardImage);
        hitSound.play();
    }    
}

// score
function fShowScore(activePlayer){
    if(activePlayer['score'] > 21){
        document.querySelector(activePlayer['score-spam']).textContent = 'BURST!!';
        document.querySelector(activePlayer['score-spam']).style.color = 'red';
    } else if(activePlayer['score'] == 21){
        document.querySelector(activePlayer['score-spam']).textContent = 'BLACKJACK!!';
    } else {        
        document.querySelector(activePlayer['score-spam']).textContent = activePlayer['score'];        
        document.querySelector(activePlayer['score-spam']).style.color = 'white';
    }
}
function fUpdateScore(card, activePlayer){
    if(card === 'A'){
        // id adding 11 keeps me below 21, add 11 otherwise, add 1
        if(activePlayer['score'] + blackjackGame['cardsValue'][card][1] >= 21){
            activePlayer['score'] += blackjackGame['cardsValue'][card][0]; // valor 0 do array da carta 'A' é 1
            console.log('testar o valor do A >>>', blackjackGame['cardsValue'][card][0]);
        } else {
            activePlayer['score'] += blackjackGame['cardsValue'][card][1]; // valor 1 do array carta 'A' é 11            
            console.log('2 testar o valor do A >>>', blackjackGame['cardsValue'][card][1]);
        }
    } else {
        activePlayer['score'] += blackjackGame['cardsValue'][card];
    }
}

// compute winner and return who just won
// update de wins losses and draws
function fDecideWinner(){
    let winner;

    if(PLAYER['score'] <= 21) {
        // condition: PLAYER tem que ter score mais alto que o DEALER ou o DEALER burst
        if(PLAYER['score'] > DEALER['score'] || (DEALER['score'] > 21)) {
            console.log('you player won!');
            winner = PLAYER['name'];
            totalWins++;
        } else if(PLAYER['score'] < DEALER['score']) {
            console.log('you player Lose!');
            winner = DEALER['name'];            
            totalLosses++;
        } else if(PLAYER['score'] === DEALER['score']) {
            console.log('you Draw!');
            winner = 'Draw!! same points';
            totalDraws++;
        }

    // condition: when PLAYER burst but the DEALER doesn't
    } else if(PLAYER['score'] > 21 &&  DEALER['score'] <= 21) {
        console.log('you player Lose! -> you burst');
        winner = DEALER['name'];
        totalLosses++;

    // condition: when PLAYER burst and the DEALER burst
    } else if(PLAYER['score'] > 21 &&  DEALER['score'] > 21) {
        console.log('you Draw! -> both burst');
        winner = 'Draw!! both burst';
        totalDraws++;
    }
    
    console.log('Winner is:->', winner);
    return winner;
}

function fShowResult(winner){
    let message, messageColor;

    if(blackjackGame['turnsOver'] === true) {
        if(winner === PLAYER['name']) {
            message = "You Won";
            messageColor = "green";
            winSound.play();
        } else if(winner === DEALER['name']) {
            message = "You Lost";
            messageColor = "red";
            loseSound.play();            
        } else {
            message = "You Draw!";
            messageColor = "black";
            loseSound.play();
        }
    
        document.querySelector('#subtitleContent').textContent = message;
        document.querySelector('#subtitleContent').style.color = messageColor;
    
        document.querySelector('#winScore').textContent = totalWins;
        document.querySelector('#drawScore').textContent = totalDraws;
        document.querySelector('#loseScore').textContent = totalLosses;

    }
    
}
