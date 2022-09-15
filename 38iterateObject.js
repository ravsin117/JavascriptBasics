const person = {
  name: "Ravinder",
  age: "24",
  hobbies: ["guitar", "swimming", "running"],
};

// iterate by for in loop 
// for(let key in person) 
// console.log(key);

// for printing value 
// for(let key in person)
// console.log(person[key]); // if we do person.key then we get undefined becz there is no key with name 'key' in our object 

// iterate by object.keys
// console.log(Object.keys(person))//[ 'name', 'age', 'hobbies' ]
// console.log(typeof Object.keys(person)) // object
// console.log(Array.isArray(Object.keys(person))) // true

// printing all the keys and respective values in array of keys
for(let key of Object.keys(person)){
  console.log(key , ":" , person[key])
}

















