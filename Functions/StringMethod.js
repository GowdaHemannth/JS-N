// Three Ways of Creating a String + One Way of Calling A Function
let str='Single'
let Str1="Double"
let x=10
console.log(`These is X value ${x}`);

let Str3=`${x}`
// Here the VAlue will be in Object
let str5=new String()

// Differnce Between "CharAt" and At Here IN CharAt we Cant Provide Negative Value 
// But Where As in "At" we Can Provide the Negative value 

let Abhi="Abhishek"
for(let i=0;i<Abhi.length;i++){
    console.log(Abhi.charAt(i));
    
}

// LowerCase
// .toUpperCase()
// .toLowerCase()

// TO See Particular String Line
let Hemanth="Hemanth Gowda C"
Hemanth.indexOf("Gowda")
console.log(Hemanth.indexOf("Gowda"));

// Accessing String From Last
console.log(Hemanth.lastIndexOf("a"));

// includes method it returns the Value in Boolean True or False
  
// slice give us the Part ofString 
console.log(Hemanth.slice(0,5)
);
console.log(Hemanth.slice(7,-6));  // // here we can go forward but not Backward


// SubStr here starting charcter and Number of Charctwr
console.log(Hemanth.substr(0,4));


// IN SUBSTRING WE CANT USE NEGATIVE VALUES 
// Here if we negative it will give Eroror  
console.log(Hemanth.substring(2,2));

// Another Function Called Replace but it will replace first occurance of the thing 

// to replace all chracters of that we will use replaceAll

// We Cant use it In the String Becuase Str

console.log(console.log(Hemanth)   // Here i Will Get Error Becuase Inner Log will return Nothing
);


// Split Function cONvert the String TO Array
console.log(Hemanth.split());
// Here It Gives Single Value 
console.log(Hemanth.split(''));

let DD="Penat,gon"
console.log(DD.split(','));

// Here we can Give Whtever You wnat Insed the Thingss 

// TrimStart And TrimEnd Trim
// Startswith EndsWith

let Abhi2="Abhishek"
console.log(Abhi2.charAt(1));

for(let i=0;i<Abhi2.length;i++){
    console.log(Abhi2.charAt(i));
    
}


// Array 
let Arr=[2,3,4,5]

// Push at end
Arr.push(124)
console.log(Arr);

// to Remove at lastt 

// pop
Arr.pop()
console.log(Arr);


// Unshift Uses TO ADD AT STARTING
Arr.unshift(2)
console.log(Arr);

// SHIFY USED TO REMOVE FROM THE STARTING
Arr.shift(5)
console.log(Arr);

// Includes // Here if It Finds Any Elements It eturns true
let ad=["Yash","Sudeep","Darshan","Puneeth"]
console.log(ad.includes("Yash"));

// Indexof checks elemsnt is Present if yes return true and index of Element
console.log(ad.indexOf("Darshan"));


//reverse() reverses the Enter Arr
console.log(ad.reverse());

// Converts Array into Strings
console.log(ad.join(' '));


// Reverse the String 
// 1st Split whch converts to AAryya 
// Reverse
// Join 

let Actual="BhuvaneshwarKumar"
let Reverse=Actual.split("").reverse().join('')
console.log(Reverse);
if(Reverse==Actual){
    console.log("palindroem");
    
}else{
    console.log("Not a Palindrome");
    
}

let rev=''
for(let i=0;i<Actual.length;i++){
    rev=Actual.charAt(i)+rev
}
console.log(rev);


let add=[1,2,3,4]
let add1=[5,6,7,8,9]
console.log(add.concat(add1));

//Slice Method 
console.log(add.slice(0,5));
console.log(add);


// Splice Method here it Works same as slice but It Tamper the Data gives result // where slice doesnt do that
add1.splice(0,3)
console.log(add1);


// For Each returns in key Value Pair
// here in for of retruns Key of Array