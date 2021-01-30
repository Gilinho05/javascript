
var myBirthYear = 1989;
var atualYear = new Date().getFullYear();
console.log(atualYear);

var age = atualYear-myBirthYear;
console.log(age);
var myAge = 365*age;

console.log('my age in days: ', myAge);



function fAgeInDays() {
    var ageInDays = prompt('how old are you?');
    console.log('age in days function result', ageInDays);
    var myIdade = ageInDays*365;

    //document.getElementById('divResult').innerHTML = "you have lived for" + " <span class='font-bold fs-16'>" + myIdade + "</span> " + "Days";

    var h1 = document.createElement('h1');
    var textResult = document.createTextNode("You have lived for" + " " + myIdade + " " + "Days")
    h1.setAttribute('id', 'spanAgeDays');
    h1.appendChild(textResult);

    document.getElementById('divResult').appendChild(h1)
}

function fResetAge() {
    document.getElementById('spanAgeDays').remove();
}