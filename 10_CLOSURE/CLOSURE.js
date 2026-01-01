// Here we will be Learning About the Closure and Lexical Scopping 
function Username(){
  let UserName='Hemanth-Gowda'

  function Inner(){
    // Here i could use the Username 
    console.log(UserName)
  }
  Inner()

}
 // Since we all know we cant Use the Username Outside function   
 Username()
// console.log(UserName);

// And One More impotant Thing Here if i call Inner function under Inner Function 
// Then Inner Function's Inner function will execute but we can not acces inner function varibles into another inner function 
// Becuase best Exmple is Parents share things btween children but children wont be Sharing Anythings 


// ABOVE THING WHICH I TOLD IS ACTUALLY IS LEXICAL SCOPPING  ENDS HERE 

// closure  Means Here You Need to 
