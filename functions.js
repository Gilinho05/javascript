
/* FUNCTIONS 
step 1. create a function;
step 2. call the function;
*/

function fFun() {
    console.log("this is my function");
}
fFun();

/*function fWelcome() {
    var vName = prompt('what is your name?');
    log('Hello ' + vName);
    var vResult = vName;
    document.getElementById('welcome').innerHTML = 'Hello' + ' ' + vResult;
}
fWelcome();*/


// how do arguments wor in functions?
// how do we add 2 numbers or strings together in a function?

function fSomeAguments(nome, apelido, idade) {
    var vResult = nome + ' ' + apelido + ' ' + idade;
    console.log("fSomeAguments > retornar argumentos da função" + " " + vResult);
}
fSomeAguments('gil', 'palhares', '31 anos');

var vInfo = prompt('tell us about you');
function fGreedings(yourData){
    vResult = 'Sobre mim:' + ' ' + yourData;
    console.log('fGreedings >' + vResult);
    document.getElementById('descricao').innerHTML = vResult;
}
fGreedings(vInfo);
