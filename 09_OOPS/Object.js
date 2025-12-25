// We will be Learning about Prototype 
// So Prototype Means its just accseing another Object propeerie s
function MultiplyBY5(num){
    return num*5
}

// will be Learning is Function is also an Object yes it aslso function the it also acts a Object 
MultiplyBY5.power=2
console.log(MultiplyBY5(5))
console.log(MultiplyBY5.power) // We will be thinkng here we need to get Error but we are not getting Becuase 
// we ae added a property then accessing it but here if refernced to another refernce then we might a got an eroror 
// like Multiply5.divide then will get eroror 
console.log(MultiplyBY5.prototype)

// this keyword Beacuse this is a Current Context for a Function
// ince it is a Function if needed then we can also add another properties
function Heros(Name,Score){
    this.Name=Name
    this.Score=Score
}
// Like These i knid all Every Function to it 
Heros.prototype.Increment=function(){
    // here this for current context who ever calss them 
    this.Score++ 
}
Heros.prototype.Power=function(){
  console.log(`Score is ${this.Score}`) // who ever call us reply them so we used this Keyword here 
}

// The new Keyword Allow Accessing the thing 
// here when i used new keyword new Object is Created then 
// that Object will be Linked with The Protoype that i defined
const CaptainAmerica=new Heros("Captain-America",250)
const IronMan=new Heros("Iron-Man",250)
// Here you Can Access these without using prototype but 
// Without Using new Keyword You Can-not ANY Protoype thing and Access it 
CaptainAmerica.Increment()
