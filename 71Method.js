// methods :
// functions inside object 

const person = {
    firstName: 'harsh' , 
    age : 18 , 
    about : function(){
        console.log(`person name is ${this.firstName} and age is ${this.age}`); // this ? why?  
    } 
}
person.about()
// this is used to define the properties of object upon which it is called with for ex if peron has properties age name and gender then person p1 is object . now this will be used to access properties(age , gender , name ) of the object p1

const person2 = {
    firstName:'mohit',
    age: 19,
    about : personInfo
}
const person3 = {
    firstName:'Rohit',
    age: 20,
    about : personInfo
}
function personInfo(){
    console.log(`person name is ${this.firstName} and age is ${this.age}`);
    
}

person2.about()
person3.about()









