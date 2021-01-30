function log(message){
        console.log(message);
}


/*********************************************************************************************************** */


/* Manipulating de DOM with JS - the fancy way of saying, change the HTML with JS */
var vTitle = "Manipulating de DOM with JS";
//var vAge = prompt('what is your age?', '31');

document.getElementById('titulo').innerHTML = vTitle;
//document.getElementById('sometext').innerHTML = vAge +' anos';


/*********************************************************************************************************** */


/* NUMBERS IN JS */
var vNum1 = 10;

// increment vNum1 by 1
// vNum1++; or vNum1 = vNum1 + 1;
vNum1++;
log(vNum1);

// decrement vNum1 by 1
// vNum1--; or vNum1 = vNum1 - 1;
vNum1--;
log(vNum1);

/* Divide /, Multiply *, remainder % */
log('> 10 % 2 =' + vNum1 % 2) // remainder e o valor do resto
log('> 10 * 2 =' + vNum1 * 2) // Multiply
log('> 10 / 2 =' + vNum1 / 2) // Divide

/* Increment or decrement by whatever number you want */
vNum1 += 10;
log(vNum1);

