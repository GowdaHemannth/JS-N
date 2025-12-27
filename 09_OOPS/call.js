
 // VERY IMPORTAMT THING DIFFERNCE BETWEEN CALL AND THIS
// Here you Might be Thinkg Whats the use of these file
// here there are Two Function one Function Under Another Function so if you use this there then it can be 
// some sort of issue which will it access 
// if its in window then its shos Windows in node then it will Point to the Empty

function UserName(username){
    this.UserName=username
}

 function getDetails(username,email,phone){
    UserName.call(this,username)  // Here you will get .call funtion and add this so that called function use these thing

    this.email=email,
    this.phone=phone
}

const H=new getDetails("Hemanth","hemanth@gmail.com","9019512829")
console.log(H);
// Here YouCan Observe that You will Not be Able to get the Usename So henace 
// here is live example where you can not use this inside the functions then it will point towards emmpty