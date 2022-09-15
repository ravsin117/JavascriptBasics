// fill method -> Changes all array elements from start to end index to a static value and returns the modified array
//  parameters ->  value , start , end 

// create an array with length = 10 and all entries -1 
const myArr = new Array(10).fill(-1);
console.log(myArr)

const newarr = [0,1,2,3,4,5,6,7,8];
// fill from 2nd index to 3rd index value = 0
newarr.fill(0,2,4);
console.log(newarr) // [ 0, 1, 0, 0, 4,5, 6, 7, 8]


