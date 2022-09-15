const userMethods = {
  about() {
    return `${this.firstName} is ${this.age} years old `;
  },
  is18() {
    return this.age >= 18;
  },
};
function createUser(firstName, lastName, email, age, address) {
  // creating an object
  const user = {};
  // adding key value pair
  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;
  user.age = age;
  user.address = address;
  user.about = userMethods.about; // reference to these functions stored here
  user.is18 = userMethods.is18;
  // returning the object ;
  return user;
}
const user1 = createUser("sahil", "rana", "sndknel", 90, "cwoincwoicnwokc");
const user2 = createUser("rahil", "rana", "sndknel", 19, "cwoincwoicnwokc");
const user3 = createUser("sahil", "kapoor", "sndknel", 20, "cwoincwoicnwokc");

console.log(user1.about()); // sahil is 90 years old
console.log(user2.about()); // rahil is 19 years old
console.log(user3.about()); // sahil is 20 years old
