// classes in js : 
class createUser{
    constructor(firstName,email, age){
        console.log('constructor called')
        this.firstName = firstName;
        this.email = email;
        this.age = age 
    }
    // methods 
    about(){
        return `name is ${this.firstName} age is ${this.age}`
    }
    is18(){
        return this.age>=18;
    }
    sing(){
        return 'singing ... '
    }
}
// without new keyword class constructor cannot be invoked 
let user1 = new createUser('ram','ram@gmail.com',19)
console.log(user1.about());
console.log(user1.is18());
console.log(user1.sing());
console.log(Object.getPrototypeOf(user1))
/*
an object wiht 
constructor
is18
sing 
about 

*/




