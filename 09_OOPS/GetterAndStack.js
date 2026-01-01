// Here we will be Learning About the Getter and Setter 
// Here Learn About the how do we define the Getter and Setter 
// Then lear how do we deine getter and setter using objects and then fuccntion by adding prtotypes 

// Here // Here we will be Learning why dont we use class more often in JAVACRIPT
// EVEN THOUGH WE DEFINE CLASSES IN JAVASCRIPT BUT INTERBNLYY ITS JUST A FUNCTION WHICH USES PROTOTPE
// class Hero {
//   attack() {}
// }

// AS YOU CAN SEE IN THE ABOVE ITS A CLASS 'THIS IS A INTERNAL WORK'
// function Hero() {} // SO ABOVE CLASS IS NOTHING BUT A FUNCTION AND CONSTRUCTOR IS  PROTOTY[E ]
// Hero.prototype.attack = function () {};

// THEN ONE MORE THING WE HAVE DOUBT COMMNLY IS IN CLASS HERO WE HAVE ATTACK AS A CONSTRUCTOR
// BUT WE MIGHT AS THEN WHAT IS THIS CONST HERO=NEW HERO() EVEN THIS IS ALSO A CONSTRUCTOR RIGHT
// EXPLANATION IS GIVEN BELOW
//   class User {
//   constructor(name) {
//     this.name = name;
//   }
// }
// constructor is a special method

// It runs automatically when an object is created

// Used to set initial values

// You never call constructor directly.

// const user = new User("Hemanth");
// This does 4 things internally:

// 1️⃣ Creates a new empty object {}
// 2️⃣ Links it to User.prototype
// 3️⃣ Calls constructor with this bound to the new object
// 4️⃣ Returns the object
// constructor("Hemanth");
// is called by new.

// Here we will be defing how do define getter and Setter using constructor 

class Hemanth {
  constructor(email, password) {
    this.email = email;
    this._password = password;
  }

  get password() {
    return this._password.toUpperCase(); // Here while Getting from Database it will get you in uppercase or but actula stored in Lowercase  
  }

  set password(value) {
    this._password = value; // here if we set value less than something then it will show error 
  }
}

const hemu = new Hemanth("h@gmail.com", "secret");
console.log(hemu.password); // SECRET


// here we will be Seeing how do we Define Setter and Getter Using Functions 
function User(email,password){
    this._email=email;
    this._password=password;

    // Since we all know function is also a Object So we will be adding prototype functions Here
    // Here Define Property Used to set only the getterss and setters  
    Object.defineProperty(this,'email',{
        get:function(){
           return this._email=email;
        },
        set:function(value){
            return this._email=value;
           
        }
    })
}
// Here you might ask Why do we need to define the Function since we have added additional prototype we need to add these 
// Since fUNCTION IS ALSO A OBJECT 
const Happy=new User('Hemanth','h@gmail.com'); 
// like these Seter is used 
Happy._email='KAVYA@GMAIL.COM'
console.log(Happy._email);
