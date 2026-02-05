// These is Higher Order Function
function area(shape,l,b){
    return shape(l,b)
}

function Triangle(l,b){
    return 0.5 *l*b

}
function rectangle(l,b){
    return l*b;
}
console.log(area(Triangle,10,20));


// 
function Circle(Type,r){
    return Type(r)
}

function Circmference(r){
    return 2*3.14*r
}

function Area(r){
   return 2*3.14*r
}

console.log(Circle(Area,5));
console.log(Circle(Circmference,5));

//Nested Functions Two Ways OF Calling it 

// function GrandParent(){
//     console.log("These is A GrandParent Function")
//     return  function parent(){
//         console.log("These is Parent Function")
//        return function Children(){
//         console.log("These Is Child Function");
        

//        }
        
//     }
// }
// GrandParent()()() And need to Retuen the Thing 

// Now the Another Method
let z=40
function GrandParent(){
    console.log("d");
   let x=10;
    function Parent(){
        console.log("f");
       let y=20;
        function child(params) {
            console.log("h");
            console.log(x+y+z);
            
            
        }
        child()
        
    }
    Parent()
    
}


// Here Has you can see Child Function it doesnt Have x And Y Value still its Returning the Value by finding the Value Inide the Fnction thats Closure
// Lexical Scopping Means Here z is Not in Any of the Function but By Taking Global thing thats Lexical Scopping

// Hoisting Tried to Acquire the Value before its Initialize its Only Possible in Var
// Not possible in Let and Const

// Temporal DeadZone -->>> Time Gap between Varible Intilization and Declaration 

// Need to know More ABout the Generstor Function