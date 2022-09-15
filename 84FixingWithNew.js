function CreateUser(firstName, lastName, email, age, address) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
  this.age = age;
  this.address = address;
}
CreateUser.prototype.about = function () {
  return `${this.firstName} is ${this.age} years old `;
};
CreateUser.prototype.is18 = function () {
  return this.age >= 18;
};
CreateUser.prototype.sing = function () {
  return "sing a ling a ling ";
};
const user1 = new CreateUser("sahil", "rana", "sndknel", 90, "cwoincwoicnwokc");
const user2 = new CreateUser("rahil", "rana", "sndknel", 19, "cwoincwoicnwokc");
const user3 = new CreateUser(
  "sahil",
  "kapoor",
  "sndknel",
  20,
  "cwoincwoicnwokc"
);

console.log(user1.about()); // sahil is 90 years old
console.log(user2.about()); // rahil is 19 years old
console.log(user3.about()); // sahil is 20 years old

for(let key in user1){
  console.log(key)
}
/* ( all keys including the ones in prototye are printed)
firstName
lastName
email
age
address
about
is18
sing
*/
// if we only want the ones that are defined in function not the ones in prototype

for (let key in user1){
  if(user1.hasOwnProperty(key)){
    console.log(key)
  }
}
/*
firstName
lastName
email
age
address
 */










