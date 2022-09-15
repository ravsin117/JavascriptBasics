let numbers  = [1,2,3,4,5];
console.log(numbers);
// we have number of properties in an array that has some specific task 
// where are these properties coming from : -> prototype 


/************************************** */
//but prototype is only provided to function 
// internally array is created like : 

// let nums = new Array(1,2,3);
/* REMEMBER -> new keyword maintains the relation of => let new obj =  Object.create(createUser.prototype); */ 
// just like above relation -> we know array is an object and it is created internally with new keyword that means Array has internal prototype which will be a storing space for methods and functions  
// console.log(Array.prototype); // Array that has a number of predefined methods defined on it 

// we just create array by let num = [1,2,3,4]

/****************************************** */
// alternatively to Array.prototype we can do 
console.log(Object.getPrototypeOf(numbers));
// getPrototypeOf -> Returns the prototype of an object.
/*
returns an array with lot of functions in an array 
*/
// we know that prototype is a object in case of function on printting , but here we get an array (in javascript array is also an objet)

/*
if we have a function say xyz defined and we do xyz.prototype -> we get an object which has constructor whose value is the function itself
*/

function hello(){

}
console.log(hello.prototype)// {constructor : f }

// we can do 
hello.prototype = [] // to set prototype to an array 
hello.prototype.push(1);
console.log(hello.prototype) // [1]

// js introduced class keyword n es6 (es2015)
/*
in js class keyword is fake bcz internally we the working is done as what we did in createUser function
*/





