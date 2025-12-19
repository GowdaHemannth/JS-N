const a=300; // Here these is Global scope where value will be availv=ble throught the thing 

if(true){
    const a=30
   // console.log(a); // Here these is a LOcal it wiill avialble inside the Function 
    
}

// console.log(a) 

// Writting the Function Inside the another Function 


// --->>> Here Name is elder Function And Two is Younger Function So When Younger Function Asks Elder We will Give 
function Name(){
    const username='Hemanth';

    function Two(){
        const video='Youtube-Video'   
        console.log(username)
    }
   // console.log(video)--> Here you will Get Error Beecause Elder is aking Younger Function 
    Two()
}
Name()

