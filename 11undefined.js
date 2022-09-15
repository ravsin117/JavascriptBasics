// undefined -> placeholder that is assigned to a variable when it is not initiallized with a value

//possible to do so in let and var type variable when we dont initialize them with a value and so undefined is kept as a placeholder for future value 
let variable ;
// console.log(variable);

var variable2 ;
// console.log(variable2);

// Not possible in case of const variable as we must initialize it with some value at the time of declaration like 
const variable3 = 'some const value';
// if we do:
// const var4;
// console.log(var4); // uncaught syntax Error

// null means nothing 
let myVariable = null;
console.log(typeof myVariable) // object (bug in js (an error in js) , )

//BigInt
// we have a limit of storing a integer value in a varible in js i.e 9007199254740991
console.log(Number.MAX_SAFE_INTEGER) // 9007199254740991

let anumber = BigInt(12345432423423433754353242342333);
console.log(typeof anumber)
// we can make any number of bigint type (it need not to be a bigger integer value than the safe limit value)

let newNum = BigInt(12);
console.log(typeof newNum)
// another way of declaring a bigint type number 
let newNumber = 123n;
console.log(typeof newNumber)

// adding two bigint values
console.log(newNum + newNumber); //135n

// cant add bigint and int type varible 


