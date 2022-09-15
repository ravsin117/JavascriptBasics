// filter method -> Returns the elements of an array that meet the condition specified in a callback function.
const numbers = [1,3,4,5,6,7,2,8];

const isEvenArray = numbers.filter((number)=>{
    return number %2 ==0 ;
})

console.log(isEvenArray)
/*
[ 4, 6, 2, 8 ]
*/
// Variation : odd number segregation :

const OddNumbers = numbers.filter(isOdd)
function isOdd(number , index){
    return number % 2!=0;
}
console.log(OddNumbers)
/*
[ 1, 3, 5, 7 ]
*/
















