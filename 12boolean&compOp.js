// boolean and comparision operator 

let num1 = 5 ;
let num2 = 9 ;
// comparision operator 
// console.log(num1>num2) // false 
// console.log(num1>=num2) // false 
// console.log(num1<num2) // true 
// console.log(num1<=num2) // true 

// == or ===
// == does loose checking (doesnt check datatype)
let num3 = 5 ;
let num4 = 5 ;
let num5 = '5' ;
// console.log(num3 ==num4)// true
// console.log(num3 ==num5)// true

// // === does strict checking (checks datatype)
// console.log(num3 ===num4) // true
// console.log(num3 ===num5) // false (:. datatype different here).

// !=  & !==
//!= only checks inequality of value
let num6 = 8;
console.log(num3 != num4) // false
console.log(num3 != num6) // true (value different for both)
console.log(num3!=num5) // false (:. both num3 and num5 have same value but different datatype (which is not checked in !=))

//!== checks both datatype and value 
console.log(num3!==num5) // num3 is of Number type and num5 is of string type and both are different types :. true is returned here













