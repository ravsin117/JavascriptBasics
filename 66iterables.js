// ITERABLES 
// datatypes onw hich we can apply for of loop 
//like string and array
const firstName = 'harshit'
for(let char of firstName){
    console.log(char)
}
/*
h
a
r
s
h
i
t
*/

// similar can be done on array 

// ****************
// objects are NOT iterables 
// const users= {'key1':'value1' , 'key2':'value2'}
// for(let item of users){
//     console.log(item)
// } // TypeError: users is not iterable


//****************** */

// Note 
//ARRAY LIKE OBJECTS
// on which we can apply length property 
// and whose elements can be accessed by index 

const firstName2 = 'harshit'
console.log(firstName2.length)
console.log(firstName2[0])




