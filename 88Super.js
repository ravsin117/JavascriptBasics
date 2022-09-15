// super keyword
class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  eat() {
    return `${this.name} is eating`;
  }
  isSuperCute() {
    return this.age <= 1;
  }
  isCute() {
    return true;
  }
}
const animal = new Animal("tom", "2");
console.log(animal);
console.log(animal.eat());
console.log(animal.isSuperCute());
console.log(animal.isCute());

// create a cat class

class Dog extends Animal {}
const tommy = new Dog("tommy", 1);

console.log(tommy);
console.log(tommy.isCute());
console.log(tommy.isSuperCute());
