// array methods 

// push pop -> changes original array 
// by adding or by removing elements from array

let fruits = ['apple ', 'mango ' , 'grapes '];
console.log(fruits)// same as above 
fruits.push('banana');
console.log(fruits) // added banana here 

let removed = fruits.pop(); // pop() method also returns the removed element from the array . we can print that in console.log
console.log(removed); // banana 
console.log(fruits); // removes banana from last of fruits array 


// shift and unshift 
// addition or removal of element takes place at the starting of element

fruits.unshift('banana');
console.log(fruits); // banana added at the front of array 

// shift removes array at the starting 
console.log(fruits.shift()) // banana 


// push and pop are fast as comapred to shift and unshift 
// shift and unshift have to shift all the elements of the array inorder to complete the given task











