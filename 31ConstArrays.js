// creating array with const 
const fruits = ['apple', 'mango']

fruits.push('banana');
console.log(fruits); // even though array is const type still the banana is pushed in the array :. fruits store the address to the place where actually the array is stored .
// we are not changing the stored address but the value stored at that place 

// we cant do something like 
// fruits = ['grapes' , 'pineapple']; // gives error

// if the array was let type then we could have done the above operation












