// call  -> Calls a method of an object, substituting another object for the current object.
// normal functionc alling : 
function hello(){
    console.log('hello...')
}
// hello.call()

// ex - 1
const user ={
    firstName : 'harshit ',
    age : 8 , 
    about : function(hobby , favMusician){
        console.log(this.firstName , this.age , hobby , favMusician);
    }
}
// user.about() // harshit  8
const user2={
    firstName:'mohit',
    age: 9 , 
}
// we dont have about method in user2 object but we will call the about method in user with help of call()
// user.about.call(user2); // mohit 9 undefined undefined
// user.about.call(user2 , 'guitar' , 'mozart'); // mohit 9 guitar mozart

/***************************************** */
// function info(hobby , favMusician){
//     console.log(this.firstName , this.age , hobby  ,  favMusician);
// }
// info.call(user2 , 'guitar' , 'mozart');// mohit 9 guitar mozart

// apply -> Calls the function, substituting the specified object for the this value of the function, and the specified array for the arguments of the function.
// info.apply(user , ['guitar' , 'mozart']) // harshit  8 guitar mozart

// bind -> For a given function, creates a bound function that has the same body as the original function. The this object of the bound function is associated with the specified object, and has the specified initial parameters.

// let func = info.bind(user , 'guitar' , 'bach')
// func() // harshit  8 guitar bach


// dont do this mistake 
const user3 = {
    firstName : 'harshit',
    age : 9 , 
    about : function(){
        // console.log(this); 
        console.log(this.firstName , this.age);
    }
}
const myfunc = user3.about;
myfunc(); // undefined undefined 
/* 
bcz: 
we did somthing like myfunc = function(){
    console.log(this.firstName , this.age);
}
:. this became meaningless here after the call and we got undefined . 
we are just storing refernce to the function in myfun and we are calling the function by myfunc()
for binding it with user1 we do 
cosnt myfunc = user.about.bind(user);
*/







