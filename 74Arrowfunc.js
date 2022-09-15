const user1 = {
    firstName : 'harshit',
    age : 9 , 
    about : ()=>{
        console.log(this);
        console.log(this.firstName , this.age); 
    }
}

user1.about(); // undefined undefined 
// :. arrow function does not have it won this . if we try to access this inside arrow function then we will access window here bcz outside arrow function is our outermost level and we can access window there with this . 
// arrow function take this of the level outside it 
// even if we do something like 
user1.about.call(user1); // undefined undefined 














