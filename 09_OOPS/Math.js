// Here we will be Learning How to Change the Vallue of the Constant Thing like Pi and Etc
const des=Object.getOwnPropertyDescriptor(Math,'random')
// Here i the consle log or in Output You Can see Thatin writable it shows Not editable ,, So Has in You Can See that like thsee even we can do thee to our Object 
console.log((des));
// Here As you can see the Value of the Ranodom Can be Changble
Math.random=5
console.log(Math.random)

// In these Portion we will be Seeing How Can We Add Falgs to the Objects SO THAT iTS Not editable Liek Pi
const Heros={
    Name:"Captain-America",
    Obession:"I Can do these all Day",
    Powers:function(){
        console.log("Has Seret Superstar");
        
    }
}
console.log(Object.getOwnPropertyDescriptor(Heros,'Name'));
// {
//   value: 'Captain-America',
//   writable: true,  // Here You Can see that its Editable 
//   enumerable: true,
//   configurable: true
// }

// Why am i Applyomhg loops here ?
// Beucase here Deafult value is true so that you can apply the loops but once enmureble is fasle it cant be editablw 
// Since we have inserted one more Funcion under the Heros Object So you are getting it has Function itself to avoid it 

for ( let[key,value] of Object.entries(Heros)) {
    // Avoid getting function has Key VAlue Pair
if( typeof value!='function'){
   console.log(`${key}:${value}`);
}
   
    
    
}
//
// Object.defineProperty(Heros,'Name',{
//      writable: false,
//      enumerable: false

// })
// Here you can see you will get that its Not Editable 
// Here if i make enumeriatio n has False the you cannot apply Loop
// console.log(Object.getOwnPropertyDescriptor(Heros,'Name'));

