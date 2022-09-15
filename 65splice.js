// splice method -> Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
// params -> start , delete , insert

const myArr = ["item1", "item2", "item3", "item4"];

// delete
// console.log(myArr.splice(1,1)); // [ 'item2' ] // this is deleted value 
// starting from 1st index , delete only 1 elem 
// console.log(myArr); // [ 'item1', 'item3', 'item4' ]


// insert 
// myArr.splice(1 , 0 , 'inserted item') 
// console.log(myArr)// [ 'item1', 'inserted item', 'item2', 'item3', 'item4' ]

// ********************************************** 

// insert and delete together
myArr.splice(1,2,'inserted item');//[ 'item1', 'inserted item', 'item4' ]
console.log(myArr)


