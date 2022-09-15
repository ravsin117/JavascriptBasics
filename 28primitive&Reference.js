// primitive and unprimitive data types
//PRIMITIVE :NUMBER TYPE
let num1 = 6;
let num2 = num1 ;
console.log(num1)//6
console.log(num2)//6
console.log(num1==num2); // true
num1++;
console.log(num1)//7
console.log(num2)//6
console.log(num1==num2); // false

// Reference types
//array
let arr1 = ['item1' , 'item2'];
let arr2 = arr1;
console.log(arr1);//["item1", "item2"]
console.log(arr2);//["item1", "item2"]
console.log(arr1===arr2)//true
arr1.push('item3')
console.log(arr1);//[ 'item1', 'item2', 'item3' ]
console.log(arr2);//[ 'item1', 'item2', 'item3' ]
console.log(["1","2"]==["1","2"]) // both the arrays are made in different locations in memeory :. and here internal values are not compared instead the reference to these arrays are being compared which are different :. false o/p

// primitives and reference type variable storage in memory








