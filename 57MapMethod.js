// map method
// const numbers = [2,3,4,5,6];

// const square = numbers.map((number)=>{
//     return number* number;
// })
// console.log(square);
/*
[ 4, 9, 16, 25, 36 ]
*/
// ***********************************
// instead of arrow function we could have defined the function name in map only and defined the function outside the body of map() {done below} :

// const sqaured = numbers.map(calcSq) // no need to pass params
// function calcSq(number , index){ // number ,index received by default 
//     return `index is ${index} , number is ${number} and Sqaure => ${number * number} `
// }
// console.log(sqaured)
/*
[
  'index is 0 , number is 2 and Sqaure => 4 ',
  'index is 1 , number is 3 and Sqaure => 9 ',
  'index is 3 , number is 5 and Sqaure => 25 ',
  'index is 4 , number is 6 and Sqaure => 36 '
]
*/

// *****************************
const users = [
  { firstName: "hari", age: 23 },
  { firstName: "pappu", age: 24 },
  { firstName: "bulbul", age: 25 },
];
let arr = users.map((user)=>{
    return user.firstName;
})
console.log(arr)
/*
[ 'hari', 'pappu', 'bulbul' ]
*/









