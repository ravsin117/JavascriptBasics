// array DEstrucure 

const myArr = ['value1' , 'value2'];
let myVar1 = myArr[0];
let myVar2 = myArr[1];
console.log(myVar1 , myVar2); // value1 value2

// shortcut to do this by array destructuring
// let[mv1 , mv2] = myArr
// console.log(mv1 , mv2) //value1 value2 


// const [mvar1 , mvar2] = myArr
// mvar1 = '23' // error assign to const variable


const arr = [];
let[v1 , v2 ] = arr;
console.log(v1,v2) // undefined undefined

arr.push('item1' , 'item2' , 'item3');
let [mv1 , ,mv3] = arr;
console.log(mv1 , mv3)//item1 item3

const newArr = ['1' , '2' , ' three' , 'four' , 'five' ];
let [n1 , n2 , ...newArr2] =  newArr;
console.log(newArr2)//[(" three", "four", "five")];











