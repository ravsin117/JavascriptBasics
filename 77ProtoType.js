const user = {
    firstName : 'harshit',
    lastName : 'vashistha ' , 
    email : 'abc@gmail.com ' , 
    age : 21 , 
    addresss : 'abcdef' , 
    about : function(){
        return `${this.firstName} is ${this.age} years old `
    } , 
    is18: function(){
        return this.age>=18 ;
    }
}

// lets make a function that do ;
// create object , add key value pair to it , returns the object 


function createUser(firstName , lastName , email , age , address){
    // creating an object 
    const user = {}
    // adding key value pair 
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email ; 
    user.age = age ; 
    user .address = address ;
    user.about = function(){
        return `${this.firstName} is ${this.age} years old `;
    } ;
    user.is18 = function(){
        return this.age>=18 ;
    }
    // returning the object ;
    return user
}
const user1 = createUser('raj' , 'singh' , 'abcln@ons', 9 , 'lknckwdnwdnwlk') ;
console.log(user1.about()) // raj is 9 years old
console.log(user1.is18()) // false
console.log(user1)

// drawbacks in this code explained in next file 



