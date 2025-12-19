const Clock=document.getElementById('clock')

// Here We Need a method  Which In Each Second Should Continuosly Display The Time and Date
setInterval(function(){
    let date=new Date();
    Clock.innerHTML=date.toLocaleString()

},1000) //Here 1000 Means 1 second Lke Each Second You Want to Update the Time 