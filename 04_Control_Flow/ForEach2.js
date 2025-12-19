// // There majorly Two Types OF Function Explicit and Implicit 
// // for Example ()=> here you can define some function then there is no need to return anyting it will return Automaticaly 
// // And you can Print That
// // But for implicir here 
// // ()=>{ here you need to return Statement is MANDOTORY}

// const Nums=[1,2,3,4,5,6]
// // const B=Nums.filter((N)=> N>5) // This is Implicit Function So  if you use Scope That is {} then you need to return thing 

// // console.log(B)

// // One More Method CHAINING IN MAPS WHERE MAP INTRODUCED INSIDE ANOTHER MAP where you can use Two Maps Like One Map And ANother MAp 
// const b=Nums.
// map((N)=> {return N+10}).
// map((N)=>{ return N-10}).
// filter((N)=> N>2)          // Here you might THink i will get the values Dirrsvtly But the Thing after adding 10 you wiill get the Values

// // Here in the Output After Each Operatiosn Then only You will get the Answes 
// console.log(b)


// REDUCE FUNCTION 
// Can be Used for the Total Amount For the Shopping Website 
const myNums=[1,2,3,4,5]
const N=myNums.reduce((acc,currval)=>acc+currval,0)
console.log(N)