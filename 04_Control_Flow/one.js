// These Control Flow is Nothing But a Thing Where i Want only certain Amunt of code at a Time 
//// Here 2=='2' These will be False But we will get executed 
// but if you want to check the Datatype of it then Check these
// truthy values and Falsey_Values 
const UserEmail=''
if(UserEmail){
    console.log("Got user Eamil")
}else{
    console.log("Doesnt Have Eamil")
}
// So Here As you can see if the User Just gets The email it will think it has True Then it Executes 
// Falsy Values -->>> 0,-0,BigInt,"",null,undefined,Nan
// Truthy Values 
// Any Values Added Isnide the Strings Are Considered As TRue Values  
// "0","false ", " ", [],{} , function(){}

// Nullish Coalesing Operator(??): null undefined 
// a ?? b
// Meaning:

//If a is null or undefined → return b

// Otherwise → return a
// Nullish And Ternary opeator  id Toytally Different From Nullish operator 

const iceCream=80
iceCream>=80?console.log("Ice cream is Value Less than 80"):console.log("Ice cream is 80")