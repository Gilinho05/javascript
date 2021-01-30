
// apanhar todos os botoes
var allButtons = document.getElementsByTagName('button'); // apanha todos os botoes do projecto
console.log('all buttons >', allButtons);

var copyAllButtons = []; // cria um array vazio e depois com o ciclo FOR carrega o array com os botoes
for (let i=0; i < allButtons.length; i++) {
    copyAllButtons.push(allButtons[i])
}
console.log('copy all buttons >', copyAllButtons); 


function fButtonColorChange(colorValue){
    console.log('cor selected >', colorValue.value);  
    
    copyAllButtons.forEach(botao => {            
        console.log('remover classes dos botoes >', botao); 
        botao.classList.remove('red', 'green', 'blue');
    });
    if(colorValue.value == "random") {  
        let listaOpcoes = ['red', 'blue', 'green'];
        console.log('lista de Opcoes >', listaOpcoes); 
        copyAllButtons.forEach(botao => {            
            console.log('botoes >', botao); 
            let randomOption = listaOpcoes[Math.floor(Math.random() * 3)];      
            console.log('random options >', randomOption); 
            botao.classList.add(randomOption);
        });
    } else if(colorValue.value == "red" || colorValue.value == "blue" || colorValue.value == "green") {
        copyAllButtons.forEach(botao => {            
            console.log('adicionar classe ao BOTAO >', botao); 
            botao.classList.add(colorValue.value);
        });
    }
}
