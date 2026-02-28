// // // // // // // // let S="oadi"
// // // // // // // // for (i in S){ // Gets Indexes
// // // // // // // //     console.log(i);

const { log } = require("node:console");

// // // // // // // // }

// // // // // // // //  FOR EACH
// // // // // // // let arr = [10, 45, 67, 90, 99, 101];
// // // // // // // let gii = {
// // // // // // //   e: "Dhh",
// // // // // // //   f: "efe",
// // // // // // // };
// // // // // // // arr.forEach((value, index, Raya) => {
// // // // // // //   console.log(value ** 3);
// // // // // // // });

// // // // // // // // For Each returns Undefined

// // // // // // // //MAP Works Same As the For Each
// // // // // // // let results = arr.map((e, i, arr) => {
// // // // // // //   // Value ,Index,Original Array
// // // // // // //   e ** 2;
// // // // // // // });

// // // // // // // // Only Difffernce Between Map And For Each Here in Map We Can Return the Things But IN MAP we Can Not Iterate Through That

// // // // // // // // In Map We can Iterate Over

// // // // // // let FoodTaste = [
// // // // // //   {
// // // // // //     name: "kinley",
// // // // // //     id: "1234",

// // // // // //     price: "766",
// // // // // //     inStock: "1",
// // // // // //     isVeg: "egg",
// // // // // //   },
// // // // // // //   {
// // // // // // //     name: "ice",
// // // // // // //     id: "1234",

// // // // // // //     price: "76613",
// // // // // // //     inStock: "1",
// // // // // // //     isVeg: "egg",
// // // // // // //   },
// // // // // // //   {
// // // // // // //     name: "rrtt",
// // // // // // //     id: "1234",

// // // // // // //     price: "900  ",
// // // // // // //     inStock: "1",
// // // // // // //     isVeg: "egg",
// // // // // // //   },
// // // // // // //   {
// // // // // // //     name: "kinley",
// // // // // // //     id: "1234",

// // // // // // //     price: "76613",
// // // // // // //     inStock: "1",
// // // // // // //     isVeg: "egg",
// // // // // // //   },
// // // // // // // ];

// // // // // // // let a=FoodTaste.filter((pre) =>
// // // // // // //   pre.price<=1300

// // // // // // // );
// // // // // // // console.log(a.map((df)=>
// // // // // // // df.name

// // // // // // // ));

// // // // // // // // let Numbers=[2,4,6,8,10]
// // // // // // // //     prev%2==0
// // // // // // // // )
// // // // // // // // console.log(Even);

// // // // // // // // let arr = ["a", "e", "i", "o", "u"];
// // // // // // // // let Alphabets = [
// // // // // // // //   "a",
// // // // // // // //   "b",
// // // // // // // //   "c",
// // // // // // // //   "d",
// // // // // // // //   "e",
// // // // // // // //   "f",
// // // // // // // //   "g",
// // // // // // // //   "h",
// // // // // // // //   "i",
// // // // // // // //   "j",
// // // // // // // //   "k",
// // // // // // // //   "l",
// // // // // // // //   "m",
// // // // // // // //   "n",
// // // // // // // //   "o",
// // // // // // // //   "p",
// // // // // // // //   "q",
// // // // // // // //   "r",
// // // // // // // //   "s",
// // // // // // // //   "t",
// // // // // // // //   "u",
// // // // // // // //   "v",
// // // // // // // //   "w",
// // // // // // // //   "x",
// // // // // // // //   "y",
// // // // // // // //   "z",
// // // // // // // // ];

// // // // // // // // let r = Alphabets.filter((pr) => arr.includes(pr));
// // // // // // // // console.log(r);

// // // // // // // Remove Duplicates from Array
// // // // // // let Arr = [1,2,3,1,2,3,4,5,6,7];
// // // // // // let New = [];

// // // // // // Arr.filter((pe) => {
// // // // // //   if (!New.includes(pe)) {
// // // // // //     New.push(pe);
// // // // // //   }
// // // // // // });

// // // // // // console.log(New);

// // // // // // // Modify the Object Value Here  Using Map
// // // // // // let Objt=[{
// // // // // //   Name:"Hemanth",
// // // // // //   Age:"22",
// // // // // //   Skill:"Computer Science"
// // // // // // }]
// // // // // // let a=Objt.map((value)=>
// // // // // //     value.Name="Smaran",

// // // // // // )
// // // // // // console.log(a);

// // // // // // // Take a Array Double it Thwn Take the Each Value Doubleee it After taht value Should be Less tahn 10 and
// // // // // // // Should not be Even
// // // // // // let NewArray=[1,2,3,4,5,6,7,8]

// // // // // // let results=NewArray.map((Value)=>Value*2)
// // // // // // console.log(results.filter((value)=>value<10 && value%2!=0));

// // // // // // // Reduce Method

// // // // // let Arr = [1,2,3,4,5,6,7,8,9];
// // // // // let max = Arr.reduce((acc, value, index, arr) => {
// // // // //   // return acc=acc+value
// // // // //   //  if(value>=acc){
// // // // //   //   acc=value
// // // // //   //  }
// // // // //   //  return acc
// // // // //   // return value > acc ? (acc = value) : acc;
// // // // //   return acc=acc*value
// // // // // },1); // Then acc start from 100 And Also It Satrts From index 1
// // // // // console.log(max);

// // // // // let userData={
// // // // //   name:"Manoj",
// // // // //   age:90,
// // // // //   Married:true

// // // // // }

// // // // // let Data=JSON.stringify(userData)
// // // // // let NewData=JSON.parse(Data)
// // // // // console.log("IN JSon",Data,"In Object ",NewData);

// // // // //Global Execution Context JavaScript Engine
// // // // number=10
// // // // console.log(`the Value of Number is ${number}`);
// // // // let  number=20

// // // // // Global Execuation Context and Functional Execution Context

// // // // let a=20
// // // // console.log(`The Value of number is ${a}`);

// // // // function Greet(){
// // // //     console.log("Welcome");

// // // // }
// // // // console.log("End of Conetx After the Deleton of memory");

// // // // Set TimeOut

// // // // let Number=20
// // // // setTimeout(()=>{
// // // //     console.log("The Number is ",Number);

// // // // },2000)
// // // // console.log("Stack Empty");

// // // // Lexical Scopping And Closure
// // // // function main() {
// // // //   Dispaly = () => {
// // // //     console.log(name);
// // // //   };
// // // //   var name = "Mozilla";
// // // //   Dispaly();
  
// // // // }
// // // // main();
// // // // console.log(name);


// // // //  Promises
// // // fetch("https://api.github.com/users/GowdaHemannth")
// // // .then(function(response){
// // //   console.log(response.json());
  
// // // }
 
// // // )
// // // .catch(function(err){
// // // console.log("Error Acoord During API CSLL");

// // // })

// // //  INstead Of Using the Then And Catch
// // async function Fetch (){
// //  let data= await fetch("https://api.github.com/users/GowdaHemannth")
// //  // Now Think these Data Aslo has One MorE Promise the n Use Await
// //  let FinalDaat=await data.json()
// // console.log(FinalDaat);

// // }


// //  // Using Then And Catch
// //  fetch("https:/fakestoreapi.com/products")
// //  .then((UserData)=>{
// //     console.log(UserData);
    
// //  })
// //  .catch((err)=>{
// //     console.log("An Error Found ");
    
// //  })

// //  // Now by using Await Async 
// //  async function Feh(){
// // try{
// //     let D=await fetch("https:/fakestoreapi.com/products")
// //     console.log(D);
    
// // }
// // catch(err){
// //     console.log("Errro Ocuured During the Loading of Api");
    
// // }
// //  }


// //   Call Back Hell

// function Step1(callback){
    
//     setTimeout(()=>{
//         callback()
//         console.log("Captain Here ");
        
//     },1000)
    
// }

// function Step2(callback){
   
//     setTimeout(()=>{
//          callback()
//         console.log(" Iron-Man");
        
//     },1000)
    
// }
// function Step3(callback){
//     // callback()
//     setTimeout(()=>{
//         callback()
//         console.log("hii");
//         // console.log(" Iron-Man");
        
//     },1000)
  
// }

// Step1(()=>{
//     Step2(()=>{
//         Step3(()=>{
//       console.log("Completed");
      
//         })
//     })
// })

// console.log("Start The Programme");

// let promise=new Promise((resolve,reject)=>{
// let Authenticated=true
// if(Authenticated){
//     resolve("Yes Authunticated")
// }else{
//     reject("Not Authenticated")
// }
// })

// promise.then((res)=>{
//     console.log(res);
    

// }).catch((err)=>{
//     console.log(err)

// })

function Step1(){
    return new Promise((resolve,reject)=>{
        console.log("Step1 Done");
        resolve()
        
    })
}

function Step2(){
    return new Promise((resolve,reject)=>{
        
        // resolve()
        reject("Not Done")
    })
}

function Step3(){
    return new Promise((resolve,reject)=>{
        console.log("Step3 Done");
        resolve()
        
    })
}
Step1().then(()=>{
    Step2().then((res)=>{
        console.log(res)

    }).catch((err)=>{
   console.log(err);
   
    })
})


