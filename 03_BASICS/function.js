function SayMyname(){
    console.log("Data Has been Added")
    console.log("DATA HAS BEEN LOST")

}

//-->> HERE IF WE WRITE just SayMyname then its just the function's Refernce 
// -->> But if we write SayMyname()-- then its Function Will work 

// writitng FUNCTION BEFORE DEFINING THE FUNCTION IS MANDOTRY

// the values which we pass in while defing the function is known as Parameter 
// Values which we pass while calling the Function is Called as Arguments 

function loggedInMessege(username){
    return `${username} Just logged In`
}
const result=loggedInMessege("Hmenath")
console.log(result)
// Here Sometimes Inside the LoggedInMessege Name will not be Enters so in that Cases 
// we will get undefined when print it 
// Hence in the Function while Writting add if username==undefined then print PLese Enter the Username 


// THERE MIGHT BE A SITUATION WHERE WE WILL NOT BE KNOWING THE NUMBER OF INCOMING ARGUMNETS 
//--LIKE IN SHOPIING CART WE WILL NOT BE KNOWING HOW MUCH ADD OR NOT TO ADD 
// FOR THESE WILL BE USING THE REST FUNCTIONS 
function Calculate(num1){ /// Here it will return only the one num1 Value so sorted 
 return num1
}

// but if you want to return multiple argumnets 
// here as you know once the function defined only the  Mentioned ARGUMents we need to pass but has
// here we can pass as many possible 
function Calculate(...num1){ /// Here it will return as many arguments you pass  
 return num1
}

// 
function Calculate(val1,val2,...num1){ /// Here it will return onlty the values after the val1,val2
 return num1
}

//How to access the object inside the function 
const user={

    username:'Hemanth',
    email:'hemnathagalahalli2003@gmail.com'
}

function User(anyobject){
   console.log(`Enter your Username ${anyobject.username} and enter your EmalId ${anyobject.email}`);
   
}
User( user);

// Like Any User and We can Pass Any Array 
const GetArray=[200,300,400,500]

function Array(GetArray){ //Like these we can Pass any Array
    console.log(GetArray[1])
}

Array(GetArray)

// Next We will be Learning About LOcal Variable ,Global Variable
const a=300; // Here these is Global scope where value will be availv=ble throught the thing 

if(true){
    const a=30
    console.log(a); // Here these is a LOcal it wiill avialble inside the Function 
    
}

console.log(a) // These is 