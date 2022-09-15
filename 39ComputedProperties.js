// computed properties

const key1 = 'objectKey1';
const key2 = 'objectKey2';

const value1 = 'myval1'
const value2 = 'myval2'

//create an object with above mentioned key and values as 
// { objectKey1: 'myval1', objectKey2: 'myval2' }

// solution 1:  
const obj = { };
obj[key1] = value1;
obj[key2] = value2;

//solution2 
const obj2 = {
    [key1] : value1 ,
    [key2] : value2
}
console.log(obj)
console.log(obj2)










