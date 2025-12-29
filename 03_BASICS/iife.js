// to keep the global varible Non-polluted 

// Second Thing is there will be certain situaion where we might use same varible as global function to avoid in thosesituation we use 
// to avoid in those situation we use IMMEDIATLEY INVOKED FUNCTIONS 

(FUNK=()=>{
     const x=10; // here has we defides the x the value oof these will be 10 only if you acces it inside or else it will be 
     //
     console.log(x); 
})
FUNK()
x=20
console.log(x);  // Here you will get x value has 20 