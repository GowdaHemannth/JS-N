// Generating the Number Between 1 to 100
let rondomNumber=(parseInt(Math.random()*100+1));
const submit=document.querySelector('#subt')
const UserInput=document.querySelector('#guessField')
const GuessSlot=document.querySelector('.guesses')
const remaining=document.querySelector('.lastResult')
const lOrh=document.querySelector('.LowOrHigh') 
const StartOver=document.querySelector('.resultParas')

const p=document.createElement('p')
let prevGuess=[]
let numguess=1
let playGame=true

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault()
      const guess=  parseInt(UserInput.value)
      console.log(guess);
      
      Validate(guess)
   
    })
}

function Validate(guess){
    // validate Whether i Given Number is Correct or Not 
    if(isNaN(guess)){
        alert('Please Enter The Number')
    }else if(guess<1){
           alert('Please Enter The Number')

    }else if(guess>100){
        alert('Please Enter the Number Less than the 100 ')
    }else{
        prevGuess.push(guess)
        if(numguess===11){
          displayguess(guess)
          displayMessege(`Game Over Slots Finished`)
          endGame()
        }else{
            displayguess(guess)
            checkguess(guess)
        }
    }
}

function checkguess(guess){
    // Whether the Given Number is Low or Hihg or IS i the Exact number 
    if(guess===rondomNumber){
        displayMessege(`Yes you Guessed it Right the Number is ${guess}`)
        endGame()
    }else if(guess<rondomNumber){
         displayMessege(`Yes you Guessed  the Number is to loww`)

    }else if(guess>rondomNumber){
         displayMessege(`Yes you Guessed  the Number is High`)

    }

}

function displayguess(guess){
    // need to clean the input for entering the new Data and updating the Previous Values then Updating the prevous gess then count of Numbers 
    UserInput.value='' // Here after enterd the Value We need to Clean the Space
    GuessSlot.innerHTML+=`${guess} ,`
    numguess++;
    remaining.innerHTML=`${11-numguess}`
}

function displayMessege(Message){
    lOrh.innerHTML=`<h2>${Message}</h2>`

}
function endGame(){
    // After these You need to Clean the Slot
    UserInput.value=''
    // Now How to Stop The Game 
    UserInput.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML=`<h2 id='newGame'>Start new Game</h2> `;
    
    StartOver.appendChild(p);
    playGame=false;
    newGame()


}

function newGame(){
    const newButton=document.querySelector('#newGame')
    newButton.addEventListener('click',function(e){
   rondomNumber=(parseInt(Math.random()*100+1));
    prevGuess=[];
    numguess=1;
    GuessSlot.innerHTML=''
    remaining.innerHTML=`${11-numguess}`;
    UserInput.removeAttribute('disabled');
    StartOver.removeChild(p);
    playGame=true;

    })
 
}