// // A Promise is an object that represents the eventual completion or failure of an asynchronous operation.
// // Promise States (Easy)
// // State	Meaning
// // Pending	Waiting
// // Fulfilled	Success
// // Rejected	Failed
// // Without the Promise Javascript Will Crash
// const promiseOne = new Promise(function (resolve, reject) {
//   // Do an Async Task
//   setTimeout(function () {
//     console.log("Async Call is Executed and Completed");
//     resolve();
//   }, 1000);
// });
// promiseOne.then(function () {
//   console.log("Promise Consumed"); // these will not be Completed till the Resolve will be Written
//   // Since the Promise is Completed Here we Need to Print
// });

// // HERE WE WILL WRITTING HOW TO WRITE WITHOUT THE VARIBLE THING
// // new Promise(function(resolve,rejecct){
// //     console.log("Async Task2")
// //     resolve()
// // }).then(function(){
// //     console.log("AS-PROMISED- TASK COMPLTED ")
// // })
// // HERE WE WILL BE LEARNING HW TO PASS
// const SpiderMan = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve({ username: "Super-Man", email: "SuperMan@gmail.com" }); // What-Ever you Pass Here it Will be Passed on to then Function
//   }, 1000);
// });

// SpiderMan.then(function (user) {
//   console.log(user);
// });

// Here Promise Will be of Both Resolve and Reject
const CaptainAmerica = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (error === true) {
      resolve({
        username: "Captain-America",
        Obsession: "I CAN DO THIS ALL DAY",
      });
    } else {
      reject("Username Not Found ");
    }
  }, 1000);
});

CaptainAmerica.then(function (user) {
  console.log(user);
  return user.username; // Here in-order to Acess these Username i need one more Promise cycle
})
  .then(function (CapsName) {
    console.log(CapsName);
  })
  .catch(function (err) {
    console.log(err);
  })

  // Here at the Each Promise statement We will be Learning New Things 
const IronMan=new Promise(function(resolve,reject){
    setTimeout(function(){
       let error=false;
       if(!error){
        resolve({username:'Iron-Man',Obsession:"JRAVIS"})
       }else{
        // Here You Might Be Thinking Since i have Stored if i get error that wil be Sorted thn you are Wrong
        // if you didnt use try catch or then catch you will get Erroro 
        console.log("Jravis Not Found") 
       }
    },1000)
})
// Here we will be learning About the Usage of Async and Await insated of Then and Caatch
async function PromiseFive(){
    try{
       
        const response=await IronMan
        console.log(response)

    }
    catch(err){
        console(err);


    }
}


// Using the Fetch Key 
// YOU NEED TO KEEP ONE THING IN YOUR MIND THAT FETCH ITSELF RETURNS PROMISE SO BE BRAVE 
// async function GetHeros(){
//   try{
//     const response=await fetch()
//     // Here we will be Adding Awwait Becomes to Convert the Data we need Lot Of time 
//     const data= await response.json
//     console.log(data);
    

//   }
//   catch(err){
//     console.log(err)
//   }
// }

fetch("https://api.github.com/users/GowdaHemannth")
.then(function(response){
 return response.json
})
.catch(function(err){
console.log("Some Eroro ");

})