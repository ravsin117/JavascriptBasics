// callback function -> A callback is a function passed as an argument to another function.

function function2(){
    console.log('inside call back function')
}
function function1(callbackfunction){
    console.log('inside function1')
    console.log('calling callback function  now ...')
    callbackfunction(); // callback function called 
    console.log('some work inside function1 ...')
}
function1(function2) //callback function passed as an argument here 
/*
inside function1
calling callback function  now ...
inside call back function
some work inside function1 ...
*/












