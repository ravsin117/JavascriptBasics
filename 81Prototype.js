// in javascript function is also treated as an object
// js function == > function + object

function hello(){
    console.log('hello...');
}
// Although we have here :
console.log(typeof hello) // function 
// but still we consider 
// since function is an object so it has some properties as well like name property 
console.log(hello.name) // name property gives name of the function that it is called upon

// we can add our own new properties in function as well

hello.myOwnProp = 'value of new property'
console.log(hello.myOwnProp) //value of new property

// function provides more useful properties like call , bind  , apply 

// function also gives us some free space(i.e empty object ).
// & this free space decribed above is called prototype 
console.log(hello.prototype)//{}
// this empty object has a constructor whose value is the function itself , here it is hello()
hello.prototype.constructor() // hello... // function hello called 

// ** only functions provide prototype property **

if(hello.prototype){
    console.log('prototype is present') // printed
}else{
    console.log('prototype is not present')
}

const hello2 = {}
if(hello2.prototype){
    console.log('prototype is present ')
}else{
    console.log('prototype is not present ') // printed
}

// how  to add property in a prototype 
hello.prototype.abc = 'def'
hello.prototype.ghi = 'jkl'
console.log(hello.prototype) // { abc: 'def', ghi: 'jkl' }





