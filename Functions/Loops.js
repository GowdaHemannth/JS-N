// // let S="oadi"
// // for (i in S){ // Gets Indexes
// //     console.log(i);

// // }

// //  FOR EACH
// let arr = [10, 45, 67, 90, 99, 101];
// let gii = {
//   e: "Dhh",
//   f: "efe",
// };
// arr.forEach((value, index, Raya) => {
//   console.log(value ** 3);
// });

// // For Each returns Undefined

// //MAP Works Same As the For Each
// let results = arr.map((e, i, arr) => {
//   // Value ,Index,Original Array
//   e ** 2;
// });

// // Only Difffernce Between Map And For Each Here in Map We Can Return the Things But IN MAP we Can Not Iterate Through That

// // In Map We can Iterate Over

let FoodTaste = [
  {
    name: "kinley",
    id: "1234",

    price: "766",
    inStock: "1",
    isVeg: "egg",
  },
  {
    name: "ice",
    id: "1234",

    price: "76613",
    inStock: "1",
    isVeg: "egg",
  },
  {
    name: "rrtt",
    id: "1234",

    price: "900  ",
    inStock: "1",
    isVeg: "egg",
  },
  {
    name: "kinley",
    id: "1234",

    price: "76613",
    inStock: "1",
    isVeg: "egg",
  },
];

let a=FoodTaste.filter((pre) => 
  pre.price<=1300

);
console.log(a.map((df)=>
df.name
    
));





// let Numbers=[2,4,6,8,10]
// let Even =Numbers.filter((prev)=>
//     prev%2==0
// )
// console.log(Even);

// let arr = ["a", "e", "i", "o", "u"];
// let Alphabets = [
//   "a",
//   "b",
//   "c",
//   "d",
//   "e",
//   "f",
//   "g",
//   "h",
//   "i",
//   "j",
//   "k",
//   "l",
//   "m",
//   "n",
//   "o",
//   "p",
//   "q",
//   "r",
//   "s",
//   "t",
//   "u",
//   "v",
//   "w",
//   "x",
//   "y",
//   "z",
// ];

// let r = Alphabets.filter((pr) => arr.includes(pr));
// console.log(r);
