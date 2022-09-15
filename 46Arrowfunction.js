// Arrow function
// ex1 
const sing = ()=> console.log('hbd to you');
sing(); //hbd to you

//ex2
const isEven = (x) => x%2 == 0;
console.log(isEven(4)) // true


const findTarget = (arr , x) =>{
    for(let i in arr)
    if(arr[i]==x) return i;
    return -1;
}
console.log(findTarget([1,2,3,4,5] , 6)) // -1
console.log(findTarget([1,2,3,4,5] , 5)) // 4
