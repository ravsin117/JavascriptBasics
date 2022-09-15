//clone or making a copy of array
let arr1 = ['item1', 'item2'];
let arr2 = arr1;
console.log(arr1===arr2) // true

// by spread operator
let arr3 = [...arr1]; // new array of same elemts will be formed at a different location in memory 
console.log(arr1===arr3) // false

// by slice method (fastest method)
let arr4 = arr1.slice(0);// starting from 0th index all elements are copied here in new array i.e arr4 
console.log(arr4===arr1);// false

// by concat method 
let arr5 = [].concat(arr1);
console.log(arr5);
console.log(arr5===arr1);// false

// making clone and also adding extra elements in that array 
let arr6 = arr1.slice(0).concat(['item4','item5'])
console.log(arr6) // [ 'item1', 'item2', 'item4', 'item5' ]

// or 
let arr7 = [...arr1 , 'item4', 'item5'];
console.log(arr7)



