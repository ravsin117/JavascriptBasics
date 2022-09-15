//Arrays -> ordered collection of elements . 
// reference type datastructure .
let fruit = 'aaple';

let fruits = ['apple','mango' , 'straberry' , 'grapes'];
console.log(fruits)
// accessing element of array
console.log(fruits[0]) // apple 

let numbers = [1,2,3,4,5]
console.log(numbers)

// we can store any data type in array 
let mixed = ['String' , 1 , null , undefined , 3.4]
console.log(mixed)

// array is mutable 
fruits[0] = 'banana';
console.log(fruits)


// reference type are objects so array can be called object
// mean elements have particular index 
console.log(typeof fruits) // object

let obj ={} // this is object literal 
console.log(typeof obj) // object

//* for finding out if the entity is array or not 
// isArray checks if the passed entity is array or not 
console.log(Array.isArray(fruits)); // true 
console.log(Array.isArray(obj)) // false 











