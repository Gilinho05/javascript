// Objects in JS
// dictionaries in pyton

let student = {
    first: 'Gil', 
    last:'Palhares', 
    age: 31, 
    height:184,
    studentInfo: function(){
        return  'nome:' + this.first + ' ' + 'apelido:' + ' ' + this.last + '\n' + 'idade:' + ' ' + this.age + ' ' + 'altura:' + ' ' + this.height;
    }
};

student.first = 'Miguel'; // change value of object field
student.age++; // increment numbers like that
//console.log(student.first)
console.log(student.studentInfo());