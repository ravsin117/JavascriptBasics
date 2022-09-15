// const userMethods = {
//   about() {
//     return `${this.firstName} is ${this.age} years old `;
//   },
//   is18() {
//     return this.age >= 18;
//   },
//   sing(){
    //     return 'sing a ling a ling '
    //   }
    //};
    // function createUser(firstName, lastName, email, age, address) {
//   // creating an object
//   const user = Object.create(userMethods);
//   // adding key value pair
//   user.firstName = firstName;
//   user.lastName = lastName;
//   user.email = email;
//   user.age = age;
//   user.address = address;
//   return user;
// }
// const user1 = createUser("sahil", "rana", "sndknel", 90, "cwoincwoicnwokc");
// const user2 = createUser("rahil", "rana", "sndknel", 19, "cwoincwoicnwokc");
// const user3 = createUser("sahil", "kapoor", "sndknel", 20, "cwoincwoicnwokc");

// console.log(user1.about()); // sahil is 90 years old
// console.log(user2.about()); // rahil is 19 years old
// console.log(user3.about()); // sahil is 20 years old

// console.log(user1.__proto__) 
/*
{
  about: [Function: about],
  is18: [Function: is18],
  sing: [Function: sing]
}
*/

// we know that in function we get an empty object so we can user it here intead of using a new object like UserMethod

function createUser(firstName, lastName, email, age, address) {
    // creating an object
    const user = Object.create(createUser.prototype);
    // adding key value pair
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    return user;
}
createUser.prototype.about = function (){
    return `${this.firstName} is ${this.age} years old` ;
}
createUser.prototype.is18 = function (){
    return this.age >= 18;
}
createUser.prototype.sing = function (){
    return 'sing a ling a ling '
}

const user1 = createUser("sahil", "rana", "sndknel", 90, "cwoincwoicnwokc");
const user2 = createUser("rahil", "rana", "sndknel", 19, "cwoincwoicnwokc");
const user3 = createUser("sahil", "kapoor", "sndknel", 20, "cwoincwoicnwokc");

console.log(user1.is18()); // true
console.log(user2.about());// rahil is 19 years old
console.log(user3.sing()); // sing a ling a ling 




