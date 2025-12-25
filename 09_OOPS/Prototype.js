// Prototype
let MyName="Hemanth  "
console.log(MyName.trim().length);

// Here we might be thinking we can not add any prototyp then how can we get truelenth 
// we might thinkng we will use trim but think from database if you get 1000 Data thwn how can you DAO THAT 
// ARE YOU GOING ADD TRIM TO EVRYTHING 
let Heros=['Captain-America','Iron-Man']
let heroPower={
    Captain:'I Can Do this All Day',
    Iron:'Love you 3000',
    getCaptainPower:function(){
        console.log(`Power is ${this.Captain}`);
        

    }

}
//
Object.prototype.hitesh=function(){
    console.log(("oh my Captain "));
    
}

heroPower.hitesh()

// AND ONE MORE IMPORTANT HING WHAT EVER PROTOTYPR AVAILBKLE IN OBJECTS ARE AVAIBLE FOR ARRAYS STRINGS ETC 

//  ARR---->> OBJECTS -->> NULL
// STRINGS ---->> OBJECTS -->> NULL
// SO NOW HAS YOU CANNN SEE WE HAVE DEFINED PROTOTYPE DIRETLY TO OBJECT CALLED HITESH IT CAN USED BY ALL THE REMAING ARRAYS STRIGS BECUASE THEYALL PASS THRUGH THESE 
Heros.hitesh()

// any power given to object can be used by aray or string but power given to array can notbe used by objects 
Array.prototype.heybuudy=function(){
    console.log("All Good");
    
}
Heros.heybuudy()
// heroPower.heybuudy() will get err 


// Lets us Learn inherirtance Here 
const user={
    logincount:"8"
}
const teacher={
    makeVideo:true

}

const TeachingSupport={
   isAvaible:true
}

const TASupport={
    makeAssignment:'JS ASSIGNMENT',
    fullTime:true,
    // Old Method of Linking Things 
    __proto__:TeachingSupport
}

// Another Way of Giving Support
// here teacher can acces all the Properties 
teacher.__proto__=user

// MOdern Syntax
// here teacher uses evrything of user
Object.setPrototypeOf(teacher,user)

// Starting there was problem of trimimg for removing the extra Space
let anotherName='ChaiAurCode   '
// here i want all true length we might thik use trim but for database we cant so taht right 
// 
String.prototype.truelength=function(){
    console.log(`TrueLength is :${this.trim().length}`);
    
}
anotherName.truelength()
"Hemanth".truelength()