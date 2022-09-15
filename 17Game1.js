/// wining Number

// 19 is your winning number 
// 17 too low 
// 20 too high 

let winningNum = 19 ;
let userGuess = +prompt('Enter a Number')

if(userGuess === winningNum){
    console.log('Your Guess is right');
}else{
    if(userGuess<winningNum){
    console.log('Number guessed too low')
    }else{
        console.log('Number guessed too high')
    }
} 




