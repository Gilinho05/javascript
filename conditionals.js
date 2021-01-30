// Conditionals, Control flows (if else)
// symbol && = and
// symbol || = or

// 18-35 years old, is my target demographic
let age = 31;
let status = new String();

if ( (age >= 18) && (age <= 35) ) {
    status = 'target demo';
    console.log(age);
} else {
    status = 'not my audience';
}
console.log(status);


// switch statements

// differentiate between weekday vs. weekend
// day 0 --> sunday
// day 6 --> saturday

//let d = new Date();
//let n = d.getDay();
switch (6) {
    case 0:
        text = 'weekend';
        break;
    case 6:
        text = 'weekend';
        break;
    default:
        text = 'weekday'
}
console.log(text)