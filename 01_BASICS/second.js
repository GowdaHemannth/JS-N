// Primitive 
// call by value  here you will get the copy of the Original Value 
// They are Strings ,NUmber ,boolean ,null,undefined ,symbol

// reference type or Non Primitive 
// Arrays ,objects ,Functions 

// Here you can store function in Keyword also
const functionName=function(){
    console.log("Hello World");
}

functionName();


// Here we will be Discsuing About Stsck Memory and Heap Memory
// Stack Memory Will be Used in Primitive Data Types
// Learn Perfectly about Stack (Primitive)memory-->> Where Copy of the Original Value is Stored 
// Then Heap (Non-Primitive) Memory--> Where refernce of the Original Value is Stored ...

let youtubeName='Code With Harry';
let anotherYoutubeName=youtubeName;

anotherYoutubeName='Love Babbar';
console.log(youtubeName);
console.log(anotherYoutubeName);
// Here output will be Differnt Beacuse both are stored in Stack Memory;

// Here in the Same way you do that in Non-Primitive Data  The Second Changes Data Will also be Changes 
