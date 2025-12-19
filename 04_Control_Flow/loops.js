// // here We will be talkking About High Order Loops
// // Here you will be using these loops if you want directly Iterate throughthe Loops
// const map1 = new Map([
//   ["name", "Hemanth"],
//   ["age", 21]
// ]);

// for (let item of map) {
//  // console.log(item);
// }

// const arr=[1,2,3,4]
// for (const num of arr){
//    // console.log(`Value is ${num}`)
// }
// // Map is also Object
// // Speciality of Maps in Javascript id It Remmebers the Order of Insertion
// Another Speciality is You can not Store Dupicate Vlues Here
// const map = new Map();
// map.set("in", "India");
// map.set("USA", "AMERICA");
// map.set("UN", "ENGLAND");
// map.set("SL", "SRI-LANKA");
// console.log(map)

// // HERE FOR PRINTING THE Key and VAlue Pair
// for(const [key,value] of map){
//     console.log(key,'Value-->',value)
// }

// for of loop is Not Iteratable Through key ,value
const object = {
  js: "Javascipt",
  c: "C-Progrraming",
  J: "Java",
};

// When you Run the Below the you will get Eroro becasu for of Doesnt Apply
// for(const key of object){
//     console.log(`They key is -->> ${key}and Value is-->>>${object[key]}`)
// }

// for(const key in object){ // Works for For in
//     console.log(`They key is -->> ${key}and Value is-->>>${object[key]}`)
// }

//Arrays Alsso Has kEY nothing But Jut the Things Like 0,1,2,

// FOR EACH LOOPS
const Coding = ["JS", "JAVA", "PYTHON", "C++"];
Coding.forEach((item) => {
  console.log(item);
});
// Here it is Not Nessecery that i need to Define The Define Function there
// Here You Can Define the Function somewhere you can Write it Here

// WHEN YOU HAVE ARRAY OF OBJECTS THE  YOU USE THE FOR EACH LOOP
// This is Very important Beacuse you will be Getiign Majority of the thing in array of Objects in Database
const A = [
  {
    languageName: "Javascipt",
    Shortcut: "JS",
  },
   {
    languageName: "JAVA",
    Shortcut: "J",
  },
   {
    languageName: "RUST",
    Shortcut: "R",
  },
]

// IMportant Thing Is For Each Doesnt Return Any Thing so that is One DrawBack
A.forEach((value)=>{
    console.log(value.languageName)
    
    console.log(value.Shortcut)
})
