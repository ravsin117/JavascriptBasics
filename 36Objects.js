// objects 
// arrays are good but not sufficient fo real world data
// object store key and value pair 
// object dont have index 


// creating object: 
const person = {
    name:'Ravinder', 
    age:'24',
    hobbies:['guitar','swimming','running']
}

console.log(person )
console.log(typeof person ) //object

// acessing data of objects
console.log(person.name)
// console.log(person[name])//error
console.log(person['name']) // or put quotes in key in the array

//how to add key value pair in object 

person.gender = 'male';
console.log(person);
person[height] = '169cm'

// changing a prop of object 
person.name = 'hari' ;
console.log(person);
// even though our object is const type we can still make changes or append the key value in it 









