// Here we will be doing How does the Javascript excecutes the code 
// Javascipt Execution Contenxt
// Steps How Javacript Works 

//---->>> REFER TO THE IMAGE.PNG THING 

let val1=10
let val2=5
function addnum(num1,num2){
    let total =num1+num2
    return total

}
let results =addnum(val1,val2)
let result2=addnum(10,2)

// from the above code we will learn how the javascipt code works 
// step 1 global Execuation starts 
// window execuation or this 
// step 2 Memory Phase starst 
// All the varible wil be notified 
 // val1--> will go undefined 
 // val2--> will go undefined 
 // function add num will also go defined in Executaion phase  

 // resultss 1 undefined 
 // results 2 undefined 

 // STEP3 
 // EXECUATION PHSE 
 // VAL-->> 10
 // val 2 will be 5

 // Now definng function here it will cretae another execution contect
 // new  variable environmnet +execuation thread -->> Renmae it has Box
 // how many times the function runs those many times the Box
 // Agian whole the Memory pahse and ececutaion phase starsts 
 // Now when goes to the memory phase 
 // Again Memory phase goesto function here val 1,val2 
// val1,val2 is Undefined na then in the function here you will get 
// Total will get Undefined  


// Now the Exeutaion Pahse 
// num1-->>10 ,,num2-->> 5 ,total-->> 15 ,, now for the return key word 
// return keyword will go the --->>>>> Global Executaion 
// Now Executaion thread gets delte 
// now result one will get as value as 15

// Now again u have Result2 Here you will Go the Function--->>> Where you will get the Memory Phase and Execuation Thread 
// Same Memmroy phase and executaion Context 




// now here call Stack Gets Created where 
// first thing that goes Here is global Execuation 
// as Function comes it will goes Inside the Stack 
// then returns the function 
// there will be Situation where one    Function works under Another Function 
// Ex-->> Function anmes Two() executes inside the function One()
// // So Here first One() goes to stack then Two() Goes to Satck
// Since it is a Stack last in first out so two() Executes First then goes back of stack 
// Then here first executes  










