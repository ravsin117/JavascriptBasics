const users = [
  { userId: 1, firstName: "harshit", gender: "male" },
  { userId: 2, firstName: "hari", gender: "male" },
  { userId: 3, firstName: "harsh", gender: "male" },
];

const [user1 , user2 , user3] = users
console.log(user1) // { userId: 1, firstName: 'harshit', gender: 'male' }

// taking out firstname as name from fisrt object and userId  as id from 3rd object from inside of object
const [{firstName: name} , , {userId:id}] = users
console.log(name , id) // harshit 3

