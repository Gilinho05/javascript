
// apanhar todos os botoes
let allButtons = document.getElementsByTagName('button'); // apanha todos os botoes do projecto
console.log('all buttons >', allButtons);

let copyAllButtons = []; // cria um array vazio e depois com o ciclo FOR carrega o array com os botoes
for (let i=0; i < allButtons.length; i++) {
    copyAllButtons.push(allButtons[i].classList[1])
}
console.log('copy all buttons >', copyAllButtons); 

function fButtonColorChange(selectedOption) {
    console.log('Selected option >', selectedOption.value); 
    if(selectedOption.value === "red"){
        fButtonsRed();
    } else if(selectedOption.value === "blue"){
        fButtonsBlue();
    } else if(selectedOption.value === "green"){
        fButtonsGreen();
    } else if(selectedOption.value === "random"){
        fButtonsRandom();
    } else {
        fButtonsReset();
    }
}

function fButtonsRandom(){

    let choices = ['btn-danger', 'btn-success', 'btn-primary', 'btn-warning'];
    for(let b=0; b < allButtons.length; b++){
        let randomChoice = choices[Math.floor(Math.random() * 4)];
        allButtons[b].classList.remove(allButtons[b].classList[1]);
        allButtons[b].classList.add(randomChoice);
        console.log('random choice >', randomChoice);
    }
}
function fButtonsReset(){
    for(let b=0; b < allButtons.length; b++){
        allButtons[b].classList.remove(allButtons[b].classList[1]);
        allButtons[b].classList.add(copyAllButtons[b]);
    }
}
function fButtonsRed(){
    for(let b=0; b < allButtons.length; b++){
        allButtons[b].classList.remove(allButtons[b].classList[1]);
        allButtons[b].classList.add('btn-danger');
    }
}
function fButtonsBlue(){
    for(let b=0; b < allButtons.length; b++){
        allButtons[b].classList.remove(allButtons[b].classList[1]);
        allButtons[b].classList.add('btn-primary');
    }
}
function fButtonsGreen(){
    for(let b=0; b < allButtons.length; b++){
        allButtons[b].classList.remove(allButtons[b].classList[1]);
        allButtons[b].classList.add('btn-success');
    }
}