const promiseOne=new Promise(function(resolve,reject){
    // Do an Async Task
    setTimeout(function(){
        console.log('Async Call is Executed and Completed')
    },1000)
} )