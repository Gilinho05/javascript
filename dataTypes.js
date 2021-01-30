
/********************************************************************************************** */
// Data Types
/********************************************************************************************** */
let yourAge = 18; // Number
let firstName = 'Gil'; // String
let fullName = {first: 'Gil', last:'Palhares'}; // Object
let truth = false; // Boolean
let groceries = ['apple','banana','orange'] // Array - list of things
let random; // undefined - var without value
let nothing = null // value null


/********************************************************************************************** */
// strings in JS (common methods)
/********************************************************************************************** */

let fruit = 'banana, apple, orange';
let moreFruits = 'banana\napple'; // "\n" is new line
console.log(moreFruits);
console.log(fruit.length);
console.log(fruit.indexOf('n')); // captura o lugar/index onde se encontra a 1ª letra, sendo "b = 0; a = 1; n = 2"
console.log(fruit.slice(2, 6)); // inclui o que estiver entre o index/lugar 2 e o 6
console.log(fruit.replace('ban', '123')); // substitui todos os "ban" para "123"
console.log(fruit.toUpperCase()); // letras maiusculas
console.log(fruit.toLowerCase()); // letras minusculas
console.log(fruit.charAt(2)); // apanhar um caracter por indexacao/lugar
console.log(fruit[2]); // apanhar um caracter por indexacao/lugar - ou seja é o mesmo que o "charAt"

//metodo "split" nao funciona com number dataType
console.log(fruit.split('')); // separar info por characters tornando-a num array ou lista 
console.log(fruit.split(',')); // separar info por virgulas tornando-a num array ou lista 


/********************************************************************************************** */
// Arrays in JS (common methods)
/********************************************************************************************** */

// como trabalhar com arrays

// duas formas de criar e declarar um Array/lista de coisas
let fruits = ['apple','banana','orange','pineapple'];
//let fruits = new Array('apple','banana','orange','pineapple');
console.log(fruits); // retorna a lista/Array
console.log(fruits[3]); // retorna o value da coisa no lugar/index 3

fruits[0] = 'pear'; // muda o value da posicao 0 da lista pelo novo
console.log(fruits)

for (y = 0; y < fruits.length; y++) {
    console.log(fruits[y]);
}

// converter em string
console.log(fruits.toString());
// juntar character
console.log(fruits.join(' * '));

// .pop() serve para retirar da lista uma das coisas, desta forma consegue-se ver no console o que foi retirado e com vai ficar a lista
//console.log(fruits.pop(), fruits); // remove last item
console.log(fruits.pop(), fruits); // remove last item
console.log(fruits.shift(), fruits); // remove first item
console.log(fruits.push('blackberries'), fruits);// acrescenta item no fim da lista
console.log(fruits.unshift('kiwi'), fruits);// acrescenta item no inicio da lista

//para acrescentar items a lista pode ser destas formas
fruits.push('novo fruto');
fruits[fruits.length] = 'new fruit';
console.log(fruits);


let vegetables = ['aspasrgurs', 'tomato', 'broccoli'];

//unir as duas listas de items fruits e vegetables
let allGroceries = fruits.concat(vegetables); // combinar listas/arrays - sendo que os vegetables veêm a seguir
console.log(allGroceries)
console.log(allGroceries.slice(0,6)); // so mostra items do 0 ao 6 lugar
console.log(allGroceries.reverse()); // tras os vegetables primeiro

console.log(allGroceries.sort()); // ordernar alfabeticamente


let someNumbers = [5,10,2,25,3,1,2,334,213]

console.log(someNumbers.sort(function(a, b){return a-b})); // ordenar numericamente do menor para o maior
console.log(someNumbers.sort(function(a, b){return b-a})); // ordenar numericamente do maior para o menor

//criar um array vazio e adicionar items
let newNumberList = new Array();
for (n = 0; n < 10; n++) {
    newNumberList.push(n);
}
console.log(newNumberList);
