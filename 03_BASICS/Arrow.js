// Here we will be Learning About This and Arrow Function
const user={
    username:"Hemanth",
    Password:'123',

    WelcomeMessege:function(){
       // console.log(`${this.username},Welcome `)  // Here THIS keyword is Nothing But Reffering to Current Object
    }
}

// console.log(this) // Here 

//--->>> And one more Important thing in ABOUT THIS 
// -->> THIS KEYWORDWILL NOT WORK IN THE FUNCTION // YOU VANN USE IT IN THE FUNCTION BUT NOT WITH THE FUNCTION 
// BUT WITH THE FUNCTION Properties 


 test=()=> {
  console.log(this);
}
test();    // this → window (in browser)

// Arrow Function
Fctin=(num1,num2)=>{
   return num1+num2
}

f=(n1,n2)=>(n1+n2)  // these function Also Works Only if you Use Brackets Instead of Curly Brace 