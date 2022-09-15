// function createUser(firstName , age){
//     this.firstName = firstName;
//     this.age = age;
// }
// createUser.prototype.about = function(){
//     console.log(this.firstName , this.age);
// }
// const user1 = new createUser('harshit' , 6);

// new keyword :
// 1. creates an empty object this = {}
// 2. return this
// 3. maintains the relation of => Object.create(createUser.prototype);

// user1.about() // harshit 6
// console.log(user1.__proto__) // { about: [Function (anonymous)] }

/* *********************************************** */
// modifying previous example : 

function createUser(firstName, lastName, email, age, address) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
  this.age = age;
  this.address = address;
  
}
createUser.prototype.about = function () {
  return `${this.firstName} is ${this.age} years old `;
};
createUser.prototype.is18 = function () {
  return this.age >= 18;
};
createUser.prototype.sing = function () {
  return "sing a ling a ling ";
};
const user1 = new createUser("sahil", "rana", "sndknel", 90, "cwoincwoicnwokc");
const user2 = new createUser("rahil", "rana", "sndknel", 19, "cwoincwoicnwokc");
const user3 = new createUser("sahil", "kapoor", "sndknel", 20, "cwoincwoicnwokc");

console.log(user1.about()); // sahil is 90 years old
console.log(user2.about()); // rahil is 19 years old
console.log(user3.about()); // sahil is 20 years old
 
