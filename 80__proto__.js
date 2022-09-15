// const obj1 = {
//     key1: 'value1',
//     key2: 'value2'
// }
// console.log(obj1.key1)
// console.log(obj1.key2)


// const obj2={
//     key3:'value3'
// }
// console.log(obj2.key3) // vaue 3
// console.log(obj2.key1) // undefined :. if we want javascript to check for key1 in obj1 if we dont have it in obj2 . then : 
 

// 1.  way of creating empty object 
/*
const obj = {}
obj.key3= 'value3'
*/
// second way of creating : 
// const obj = Object.create(obj1); //-> Creates an object that has the specified prototype or that has null prototype.
// here that specified prototype is obj1
// console.log(obj); // -> {} (i.e is the empty object )
// obj.key4 = 'value4'

// console.log(obj.key2) // value2 (obj doesnt have defined key2 but js finds it in obj1 which is prototype of obj)
/*
obj ={
    key4 : value4,
    __proto__:Object
}
*/
// console.log(obj.__proto__)//{ key1: 'value1', key2: 'value2' } // i.e obj1

// in officiaal ecmascript documentation : 

// __proto__ and [[prototype]] are same 

// obj.__proto__ = obj2
// console.log(obj.__proto__)//{ key3: 'value3' }// i.e obj2

// Now fixing the problem in previous code 

const userMethods = {
  about() {
    return `${this.firstName} is ${this.age} years old `;
  },
  is18() {
    return this.age >= 18;
  },
  sing(){
    return 'sing a ling a ling '
  }
};
function createUser(firstName, lastName, email, age, address) {
  // creating an object
  const user = Object.create(userMethods);
  // adding key value pair
  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;
  user.age = age;
  user.address = address;
  return user;
}
const user1 = createUser("sahil", "rana", "sndknel", 90, "cwoincwoicnwokc");
const user2 = createUser("rahil", "rana", "sndknel", 19, "cwoincwoicnwokc");
const user3 = createUser("sahil", "kapoor", "sndknel", 20, "cwoincwoicnwokc");

console.log(user1.about()); // sahil is 90 years old
console.log(user2.about()); // rahil is 19 years old
console.log(user3.about()); // sahil is 20 years old

// bcz in createuser method we create object by the help of Object.create and with prototype userMethods and hence it has access to usermethod keys (that are actually functions )





 