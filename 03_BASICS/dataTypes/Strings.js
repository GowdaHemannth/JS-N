const Name = 'Hemnath';
const Repo = 50;

console.log(`My Name is ${Name} and Repo is ${Repo}`);


const gameName=new String('Hemanth Gaming');
console.log(gameName.length);

console.log(gameName.toUpperCase());
console.log(gameName[0]);// Gives CaretPosition
console.log(gameName.charAt('3'));
console.log(gameName.indexOf('G'));
//  gameName.substring(0,4) // it will give Substring from given Index
// Here Last cahrcter will Not Be Included 

// Trimmimg the Extra Sappce using Trim Method
const greeting='   Hello World  ';
console.log(greeting)
console.log(greeting.trim());

//
console.log(greeting.replace('World','Hemanth'));
// need to check whether the String incluedes anything or Not 
console.log(greeting.includes('Hello')); // it gives either true or Flase 
// here you need to split the string and Convert to array 
const myString='Hemanth-Gowda-x';
console.log(myString.split('-'));
// Here One thing is Clear that Original Value will not be Changed Beacuse it is a Primitive or Satck Memory