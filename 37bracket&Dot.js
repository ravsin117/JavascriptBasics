const person = {
  name: "Ravinder",
  age: "24",
  'person hobbies': ["guitar", "swimming", "running"],
};
console.log(person['person hobbies']) 

const key = 'email';
// making the above defined key as a key in object and assigning a value to it 
person[key] = 'abc@gmail.com'
console.log(person);


