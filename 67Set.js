// Set is a iterable
// stores data
// set also have its own method
// no index - based accessed 
// order is not guaranteed
// unique items only (no duplicate allowed)

const numbers = [1,2,3];// array making

// MAKING SET
const numbersS = new Set([1,2,3,4,4,4,5,5])
console.log(numbersS) // O/P :Set(5) { 1, 2, 3, 4, 5 }
console.log(numbersS[2]) // undefined (cant access here in set)

// bcz there is not index based access , the order of insertion is not maintained 
const chars = new Set('abc');
console.log(chars); // Set(3) { 'a', 'b', 'c' }

const newnums = new Set()
newnums.add(1);
newnums.add(1);
newnums.add(1);
console.log(newnums) // Set(1) { 1 }
newnums.add(2)
newnums.add(3)
newnums.add(3)
console.log(newnums) // Set(3) { 1, 2, 3 }
// we can add different data types in set 
const arr = [1,2,3,4,5];
newnums.add(arr)
console.log(newnums) // Set(4) { 1, 2, 3, [ 1, 2, 3, 4, 5 ] }
// if we do following :
newnums.add(['item1' ,'item2']);
newnums.add(['item1' ,'item2']);
// both the array will be made in 2 different locations :. different arrays and can be stored more than once
// console.log(newnums) 
/* O/P:
Set(6) {
    1,
    2,
    3,
    [ 1, 2, 3, 4, 5 ],
    [ 'item1', 'item2' ],
    [ 'item1', 'item2' ]
}
*/
// we can also add set in a set 
newnums.add(numbersS)
// console.log(newnums)
/*
Set(7) {
  1,
  2,
  3,
  [ 1, 2, 3, 4, 5 ],
  [ 'item1', 'item2' ],
  [ 'item1', 'item2' ],
  Set(5) { 1, 2, 3, 4, 5 }
}
*/
// finding if a number is present in Set or not 
// if(newnums.has(1)){
//     console.log('1 is present');
// }else{
//     console.log('1 is not present ')
// }
// 1 is present
// ****************************
// for of loop  on Set: 
// for(let item of newnums){
//     console.log(item)
// }


// ***************
//converting from array to set 
const myArr = [1,2,3,4,4,5,5,6,6];
const uniqueElems = new Set(myArr); 
console.log(uniqueElems) // Set(6) { 1, 2, 3, 4, 5, 6 }
// myArr is not changesd but uniqueElems set is created 

let length = 0 ; 
for(let elem of uniqueElems){
    length++;
}
console.log(length) // 6





