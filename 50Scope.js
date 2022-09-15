
// // block scope with let 
// // let type decalred varibles are block scope variable 
// {
//     let firstName = 'harshit' // let is only accessible inside this block  , outside this nlock it can't be accessed 
//     console.log(firstName) // harshit
// }

// // console.log(firstName); // ReferenceError: firstName is not defined . 

// {
//     let firstName = 'mohit'
//     console.log(firstName) // fistname
// }

// let firstName = 'garima'
// console.log(firstName) // garima 

// {
//     console.log(firstName) // garima :. when firstname is not found in this block then it is checked in scope of its lexical parent . and found there defined firstname as garima 
// }

// function scope and var 

// {
//     var  firstname = 'hari' ;
//     console.log(firstname) // hari
// }
// console.log(firstname) // as var type defined varibles have a function scope :. we can access it over here(even though it is defined inside the block {})

// {
//     var firstname = 'Ramu'
//     console.log(firstname)
// }
// console.log(firstname) 
// we can redeclar and reinitialise out var type variable 


// exercise
// if(true){
//     let firstName = 'harshit'
//     console.log(firstName)
// }
// console.log(firstName);// firstname is not defined  

// ex- 2
function myApp(){
    if(true){
        var firstName = 'harshit'
        console.log(firstName) // harshit 
    }
    console.log(firstName); // harshit
    if(1){
        console.log(firstName) // harshit
    }
}
console.log(firstName) // firstName not defined
myApp()

















