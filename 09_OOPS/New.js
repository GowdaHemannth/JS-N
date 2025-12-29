// Here we will be Learning why dont we use class more often in JAVACRIPT
// EVEN THOUGH WE DEFINE CLASSES IN JAVASCRIPT BUT INTERBNLYY ITS JUST A FUNCTION WHICH USES PROTOTPE
class Hero {
  attack() {}
}

// AS YOU CAN SEE IN THE ABOVE ITS A CLASS 'THIS IS A INTERNAL WORK'
function Hero() {} // SO ABOVE CLASS IS NOTHING BUT A FUNCTION AND CONSTRUCTOR IS  PROTOTY[E ]
Hero.prototype.attack = function () {};

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
