// if you Use it has literal the it will act has Singleton
// Or Else It will Act has Constructor
// Above we are telling how objects Forms 

// CREATING BOJECT LITERALS 
//--->> THESE ARE OBJECT LITERALS 

// To Add the Symbol 
const sym=Symbol['key1']// __>> If i want use these Symbol as key in my object then use [sym] sym inside these 
const objetcs={
    name:'Hemanth', // If here i "Name":'Hemanth  --->> Then we cannot Access the Name Directly
    age:18,
    [sym]:'key1',
    email:'hemantha@gmail.com',
    location:'Jaipur'
}
// how to Change the Value of theObjects 
// objects.email='somevalue';
// for Freeze like dont want to change then object.freeze(email)

// Here if i want to add function in it 
// 

//How to add the Function inside the Objects
objetcs.greeting=function(){
    console.log("Hello Greeting")
}

//How to Use Any objects Parameter in Function
objetcs.parameter=function(){
    console.log(`Hello Js User ${this.name}`) // here in place of these you can use Objects since here we are refering to the single user hence we wil uisng that 

}

console.log(objetcs.greeting()); //here if i Use Only Greeting than it will throw Error 
console.log(objetcs.parameter());
console.log(objetcs.age)
console.log(objetcs["email"])

// Single to objects 
//---> Defing a Single ton Object 
//const Tinderuser=new Object()
//Creating Nested Objests 
const TinderUser={
    email:'hemanthagalahalli2003@gmail.com',
    userFullname:{
        fullname:{
            firstname:'Hemanth',
            LastName:'Gowda'
        }

    }
}

// --->> How to Use Nested Objects 
console.log(TinderUser.userFullname.fullname.firstname);

// How to Add Multiple Objects 
const obj1={1:'a',2:'b'}
const obj2={3:'a',4:'b'}

const obj3=Object.assign({},obj1,obj2) // Here the Empty Paranthesis is Optioanl You Can use or Ignore it 

console.log(obj3)

//Spread Operator Also usedto Join the Onjects 
//--- NOTE THESE SPREAD OPERATOR ALSO USE DTO JOIN THE ARRAYS 
const obj4={...obj1,...obj2}
console.log(obj4)

// ---Here if We Wanted to Get all the Keys From 
console.log('A',Object.keys(TinderUser))
console.log(Object.values(TinderUser))

