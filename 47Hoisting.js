// hoisting 


// case : function defination :

sing() // singing...
function sing(){
    console.log('singing ...')
}

// case :function expression
// funexp() //ReferenceError: Cannot access 'funexp' before initialization
// let funexp = function(){
//     console.log('function expression called');
// } 
// function expression are not hoisted . 
// call statement must appear after function declaration


// case var type variable

console.log(hello) // undefined
var hello = 'world'

// case  let 
// console.log(letvar) //ReferenceError: Cannot access 'letvar' before initialization
// let letvar = 'hello'

// case const 
console.log(constVar) //ReferenceError: Cannot access 'constVar' before initialization
const constVar = 'word'








