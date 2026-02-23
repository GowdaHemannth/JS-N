// // // // // let S="oadi"
// // // // // for (i in S){ // Gets Indexes
// // // // //     console.log(i);

// // // // // }

// // // // //  FOR EACH
// // // // let arr = [10, 45, 67, 90, 99, 101];
// // // // let gii = {
// // // //   e: "Dhh",
// // // //   f: "efe",
// // // // };
// // // // arr.forEach((value, index, Raya) => {
// // // //   console.log(value ** 3);
// // // // });

// // // // // For Each returns Undefined

// // // // //MAP Works Same As the For Each
// // // // let results = arr.map((e, i, arr) => {
// // // //   // Value ,Index,Original Array
// // // //   e ** 2;
// // // // });

// // // // // Only Difffernce Between Map And For Each Here in Map We Can Return the Things But IN MAP we Can Not Iterate Through That

// // // // // In Map We can Iterate Over

// // // let FoodTaste = [
// // //   {
// // //     name: "kinley",
// // //     id: "1234",

// // //     price: "766",
// // //     inStock: "1",
// // //     isVeg: "egg",
// // //   },
// // //   {
// // //     name: "ice",
// // //     id: "1234",

// // //     price: "76613",
// // //     inStock: "1",
// // //     isVeg: "egg",
// // //   },
// // //   {
// // //     name: "rrtt",
// // //     id: "1234",

// // //     price: "900  ",
// // //     inStock: "1",
// // //     isVeg: "egg",
// // //   },
// // //   {
// // //     name: "kinley",
// // //     id: "1234",

// // //     price: "76613",
// // //     inStock: "1",
// // //     isVeg: "egg",
// // //   },
// // // ];

// // // let a=FoodTaste.filter((pre) =>
// // //   pre.price<=1300

// // // );
// // // console.log(a.map((df)=>
// // // df.name

// // // ));

// // // // let Numbers=[2,4,6,8,10]  
// // // //     prev%2==0
// // // // )
// // // // console.log(Even);

// // // // let arr = ["a", "e", "i", "o", "u"];
// // // // let Alphabets = [
// // // //   "a",
// // // //   "b",
// // // //   "c",
// // // //   "d",
// // // //   "e",
// // // //   "f",
// // // //   "g",
// // // //   "h",
// // // //   "i",
// // // //   "j",
// // // //   "k",
// // // //   "l",
// // // //   "m",
// // // //   "n",
// // // //   "o",
// // // //   "p",
// // // //   "q",
// // // //   "r",
// // // //   "s",
// // // //   "t",
// // // //   "u",
// // // //   "v",
// // // //   "w",
// // // //   "x",
// // // //   "y",
// // // //   "z",
// // // // ];

// // // // let r = Alphabets.filter((pr) => arr.includes(pr));
// // // // console.log(r);

// // // Remove Duplicates from Array
// // let Arr = [1,2,3,1,2,3,4,5,6,7];
// // let New = [];

// // Arr.filter((pe) => {
// //   if (!New.includes(pe)) {
// //     New.push(pe);
// //   }
// // });

// // console.log(New);

// // // Modify the Object Value Here  Using Map
// // let Objt=[{
// //   Name:"Hemanth",
// //   Age:"22",
// //   Skill:"Computer Science"
// // }]
// // let a=Objt.map((value)=>
// //     value.Name="Smaran",

// // )
// // console.log(a);

// // // Take a Array Double it Thwn Take the Each Value Doubleee it After taht value Should be Less tahn 10 and
// // // Should not be Even
// // let NewArray=[1,2,3,4,5,6,7,8]

// // let results=NewArray.map((Value)=>Value*2)
// // console.log(results.filter((value)=>value<10 && value%2!=0));

// // // Reduce Method

// let Arr = [1,2,3,4,5,6,7,8,9];
// let max = Arr.reduce((acc, value, index, arr) => {
//   // return acc=acc+value
//   //  if(value>=acc){
//   //   acc=value
//   //  }
//   //  return acc
//   // return value > acc ? (acc = value) : acc;
//   return acc=acc*value
// },1); // Then acc start from 100 And Also It Satrts From index 1
// console.log(max);


// let userData={
//   name:"Manoj",
//   age:90,
//   Married:true

// }

// let Data=JSON.stringify(userData)
// let NewData=JSON.parse(Data)
// console.log("IN JSon",Data,"In Object ",NewData);


//Global Execution Context JavaScript Engine
number=10
console.log(`the Value of Number is ${number}`);
let  number=20 
