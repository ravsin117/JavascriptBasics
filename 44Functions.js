// functions in js -> are some set of statements that we want to execute again and again for some certain purpose . 
// 

// by default function returns undefined
function bday(){ // function declaration
    console.log('happy birthday');
}

// function expression
const singHappYBday =function(){
    console.log('happy birthday');

}
bday()
singHappYBday()

/*
happy birthday
undefined
*/
function sum(num1 , num2 , num3){
    return num1 +num2 + num3
}
console.log(sum(2,3 , 1)) // 6
console.log(sum(2,3,undefined)) // NaN

// odd even 
// i/p - a number 
// o/p - even or not
function isEven(num1){
    //m1 -> 
    // if(num1 %2!=0){
    //     return false;
    // }
    // return true;
    // m2 ->
    return num1%2==0;
}
console.log(isEven(3))

// function that takes string and returns the first character of that string
function firstChar(string){
    return string[0];
}
console.log(firstChar('hello')) //h

// return the index of number that is given in a array as an i/p to function 
function findIndex(array , target){
    for(let i in array){
        if(array[i]== target){
            return i;
        }
    }
    return -1;
}
let x = findIndex([2,4,6,8] , 10)
console.log(x==-1?"NOT FOUND":x)


//  arrow functions 

const arrowfunction = ()=>{
    console.log('this is a arrow function')
}
arrowfunction()

// check if a number is odd or not 
const isOdd = (number)=>{
    return number%2!=0 ;
}
console.log(isOdd(9)) // true
console.log(isOdd(8)) // false










