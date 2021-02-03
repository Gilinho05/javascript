


// using Promise 
fetch("object.json") 
	.then(response => response.json()) 
	.then(parsed => /* parsed contains the parsed json object */); 
 
// or if you can use async/await 
let response = await fetch("object.json"); 
let parsed = await response.json(); 
