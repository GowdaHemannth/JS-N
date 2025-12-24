// Lets start with the object literal Here
// what is object literal it doesnt Mean Anything Simply it means One Object
const user = {
  username: "CAPTTAIN-AMERICA",
  obsessin: "I CAN DO THESE ALL DAY",
  // here i can write one more function
  getdeatils: function () {
    console.log("Steve-Rogers -Reporting");
    // we might Having Doubt that what is "THIS" KEYword it Means the Current Context
    // Current Context Can be current Function
    console.log(this);
    //         {  
    //   username: 'CAPTTAIN-AMERICA',
    //   obsessin: 'I CAN DO THESE ALL DAY',
    //   getdeatils: [Function: getdeatils]
    // }
  },
};
// ACSSING
console.log(user.obsessin);
console.log(user.getdeatils());

// THERE CAN TWO CONTEXT IF YU PRINT THIS  IN A FUNCTION THAT MENAS CURRENT FUNCTION,OBJECT 
// HERE IF I PRINT THESE IT WILL RETUN EMPTY BEAUCSE CURRENT CONTECT IS GLOBAL 

// why Constructor Is Used Constructor is Used to create Instance for object 
// thing in upside we have created one Object There i need to create 10 more same thing but differnt names 
// so for that reason we will be Using COnstructor 
function Hero(username,obsession){
    // Here i will be Acessing function 
    this.username=username
    this.obsessin=obsession
    return this 
}
// here i will be creating new instances by using Keyword NEW Where i will be using new Keyword 
const Hero1= new Hero("Captain","Last breath")
const Hero2= new Hero("Iron-Mn",'3000')
// you can keep these as a proof where beacuse here i have printed Hero1 still it showing iron man thing beacse i ahve not created new instnces 
// to do that i need to use new keyword
console.log(Hero1);
 
