// Here in the Arrays of Javascript You can Store Multiple Values in a Single Variable 
// Resize THese are Refernce based  Array So they are Shallow Copy
// Shallow Copy Means you Can add the array but in the backend there will be new object created 
const Array=[1,2,3,4,5,6,7,8,9];
console.log(Array.length)
//Can add Value 
Array.push(10);
console.log(Array);

// Like push and pop there is value called unshift and shift
// HERE UNSHIFT ARRAY WILL BE ADDED AT THE BEGINING
// THEN HERE IN SHIFT ARRAY WILL BE ADDED AT THE BACK 
// PUSH ADDING AT THE BACK THEN POP WILL BE REMOVING AT THE END

// inludes Method tells whether the elemsnt present in thier or not 
// indexof method tells The index of Arrays

// Ther eis Opreration called join where you can add the Arrays 
// .join
// HERE YOU CAN USE JOIN BUT IT WILL BE CONVERTED INTO ARRAY
//\

// Slic,splice
console.log('A',)
// Slice Cuts the Array but Original Array is Same 

// Splice here it includes the 2nd Range 
// And Now The Original Arry will be 
// Original will be without the splice

// Concat Used to Merge Two are Arrays and give the Result in Combine Array
const Marvel_Heros=['Captain America','Thor','Spiderman'];
const Dc_Heros=['Superman','Flash','Batman'];

//Spread Operator 
// THESE SPREAD OPERATOR WILL ADD TWO ARRAYS 
const All_heros=[...Dc_Heros,...Marvel_Heros];
console.log(All_heros);

// if you ever  Have tow or more sub-Arrayx 
// Just Use the Flat it will give in single arrays 
const arr2 = [1, [2, [3, [4, [5]]]]];
const arr1=arr2.flat(Infinity);  // Inide flat you need to mention How many Layers You want add 
// console.log(arr1);

//Here in some moments you will get webpage it will not in from of array here you need to convert so we use 
// isArray Or to convert use from 