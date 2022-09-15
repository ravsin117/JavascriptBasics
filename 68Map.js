// Map 
// it is a iterable 
// stores data in ordered fashion
//stores key value pair (like objevt)
// duplicate keys are not allowed like objects 
// different between maps and objects 
// in a map we can use anything as key :- like array , number , string 



// objects can only have string or symbol as key
// key = either string or symbol 

// const person = { // object literal form of declaration
//     firstName :'harshit',
//     age :7 ,
//     1:'one'
// }
// console.log(person.firstName);
// console.log(person['firstName']);
// console.log(person[1]);

// for(let key in person){
//     console.log(typeof key);
// }


//***************** */
// Map creation
// const person = new Map();
// person.set('firstName','harshit');
// person.set('age',7)
// console.log(person)
/* 
Map(2) { 'firstName' => 'harshit', 'age' => 7 }
*/
// with map we can keep key of any type
// person.set(1,'one');

// accessing value from key in set
// cant use the methods that we use in case of objects

// in MAP:
// console.log(person.get(1)); // one

// to print all  keys of a map
// console.log(person.keys()) // [Map Iterator] { 'firstName', 'age', 1 }

// since map is a iterable we can iterate it with loop 
// for(let key of person.keys()){
//     console.log(key , typeof key)
// }
/*
firstName string
age string
1 number
*/

// creating an array as a key in map 
// person.set([1,2,3],'onetwothree');
// console.log(person)

/* 
Map(4) {
  'firstName' => 'harshit',
  'age' => 7,
  1 => 'one',
  [ 1, 2, 3 ] => 'onetwothree'
}
*/

// typeof (array) => object 

// applying for loop on Map
// for(let key  of person){
//   console.log(key);
// }
/*
O/P : (here key value pair returned in array )
[ 'firstName', 'harshit' ]
[ 'age', 7 ]
[ 1, 'one' ]
[ [ 1, 2, 3 ], 'onetwothree' ]
*/

// using array destructuring here to segregate key and value 
// for(let [key,value] of person){
//   console.log(key , value);
// }
/*
firstName harshit
age 7
1 one
[ 1, 2, 3 ] onetwothree
*/

// IMP : ORDER OF INSERTION IS MAINTAINED HERE AND IT CAN BE OBSERVED ABOVE 


// another way of creating a map 
const person1 = new Map([['firstName' , 'harshit'],['age',24],[1 , 'one']])

console.log(person1)
//Map(3) { 'firstName' => 'harshit', 'age' => 24, 1 => 'one' }

// creating key and value as object 
const person2 = {
  id:1,
  firstName:'harshit'
}
const personInfo = new Map()
personInfo.set(person2,{age:8 , gender: 'male'})
console.log(personInfo)
/*
Map(1) {
  { id: 1, firstName: 'harshit' } => { age: 8, gender: 'male' }
}
*/
console.log(personInfo.get(person2)) // { age: 8, gender: 'male' }
console.log(personInfo.get(person2).age);// 8
console.log(personInfo.get(person2).gender);// male
