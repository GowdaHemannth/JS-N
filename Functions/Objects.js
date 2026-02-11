let Data={
    "First name":"Manoj SiddanaGowda Patil",
    age:"23",
    college:"Gat",
    per:"99",
    married:"false",
    3:'lucky'   
}
// console.log(Data["First name"]);
// console.log(Data['age']);


// creat 6 Differnt Object Should Consists of 10 Properties 
let bestfriend = {
    "first name": 'Manoj venkanagowda Siddanagowda Patil',
    age: 22,
    College: 'Global Academy of Tecjnology',
    Location: 'Bengalore',
    gender: 'Female',
    3: 'luckey'
}
// console.log(bestfriend);]

// create a 6 different user object which atleast should consist of 10 properties


let abhi = [
    {
        name: "Ramesh",
        age: 25,
        gender: "male",
        city: "Bangalore",
        phno: "9876543210",
        salary: 40000,
        email: "ramesh@gmail.com",
        company: "Infosys",
        experience: 2,
        fatherName: "Suresh"
    },
    {
        name: "suresh",
        age: 23,
        gender: "male",
        city: "Mysore",
        phno: "9123456780",
        salary: 35000,
        email: "suresh@gmail.com",
        company: "Wipro",
        experience: 1,
        fatherName: "Raghav"
    },
    {
        name: "Kiran",
        age: 28,
        gender: "male",
        city: "Hubli",
        phno: "9012345678",
        salary: 50000,
        email: "kiran@gmail.com",
        company: "TCS",
        experience: 4,
        fatherName: "Mahesh"
    },
    {
        name: "faheed",
        age: 26,
        gender: "male",
        city: "Dharwad",
        phno: "9988776655",
        salary: 42000,
        email: "faheed@gmail.com",
        company: "Capgemini",
        experience: 3,
        fatherName: "Ramesh"
    },
    {
        name: "Arjun",
        age: 24,
        gender: "male",
        city: "Belgaum",
        phno: "9090909090",
        salary: 38000,
        email: "arjun@gmail.com",
        company: "HCL",
        experience: 2,
        fatherName: "Kumar"
    },
    {
        name: "Abhiu",
        age: 27,
        gender: "male",
        city: "Mangalore",
        phno: "9345678123",
        salary: 47000,
        email: "abhi@gmail.com",
        company: "IBM",
        experience: 4,
        fatherName: "Ravi"
    },
    {
        name: "Rahul",
        age: 29,
        gender: "male",
        city: "Shimoga",
        phno: "9887766554",
        salary: 55000,
        email: "rahul@gmail.com",
        company: "Accenture",
        experience: 5,
        fatherName: "Shankar"
    },
    {
        name: "Yaha",
        age: 22,
        gender: "male",
        city: "Tumkur",
        phno: "9776655443",
        salary: 32000,
        email: "yaha@gmail.com",
        company: "Tech Mahindra",
        experience: 1,
        fatherName: "Manjunath"
    },
    {
        name: "Vijay",
        age: 30,
        gender: "male",
        city: "Bijapur",
        phno: "9665544332",
        salary: 60000,
        email: "vijay@gmail.com",
        company: "Oracle",
        experience: 6,
        fatherName: "Prakash"
    },
    {
        name: "sachin",
        age: 24,
        gender: "male",
        city: "Udupi",
        phno: "9554433221",
        salary: 39000,
        email: "sachin@gmail.com",
        company: "Cognizant",
        experience: 2,
        fatherName: "Rajesh"
    }
];

// Functions
let User1={
    name:"Hemanth",
    age:"24",
    Job:()=>{
        console.log("I am Unemployed");
        
    },
    Address:{
        state:"Karnataka",
        city:"Bengaluru",
        pinCode:"78609"
        
    }

    
}
    
// console.log(Object.values(User1));
// console.log(Object.entries(User1));
// Object.freeze(User1)

// User1.name="Abhishek"
// console.log(User1.name);


// Delete The Object 
// delete User1.Job
// console.log(User1);


// Assign methods Object 
// it Accepts Two Things One is Target One Is Source
const dummy={
    Palyer:"KL Rahul"
}
const dummy2={
    Palyer2:'ViartKohli'
}
console.log(Object.assign({},dummy,dummy2,User1));

Object.freeze(User1)
delete User1.name
console.log(User1.name);

// When Its Come to Seal Wecan Update the Things But we can not Delete the Object
// THe dIFFEERNCE IS CLear We can not UPdate in Freeze but we can in Seal
Object.seal(User1)
User1.name=""
console.log(User1.name);


// Object.f=function(){
//     console.log("hii");
    
// }
// console.log(User1.f());






// abhi.map((Hemanth)=>{
//     console.log(Hemanth);
    
// })
let num=-9.1
console.log(Math.floor(num));

console.log(Math.max);
console.log(Math.round(-9.9));
console.log(Math.trunc(9.9999));


//abs




