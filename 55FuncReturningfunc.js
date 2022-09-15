//function returning function

// function returning a normal character
// function myfunc(){
//     return 'a'
// }
// const ans = myfunc()
// console.log(ans) //a 

// ************
// function returning a function 
function a(){
    console.log('inside function a')
    return function b(){
        console.log('inside function b')
        return 'something returned by function b'
    }
}
// const result = a() //functiona returns function b here i.e stored inside result 
// console.log(result) // result becomes a function here as it stores a function named b 
// console.log(result()) // it is called here 
/*
inside function a
[Function: b]
inside function b
something returned by function b
*/


// ***************** 

// ex -2 

console.log(a()()) // function b is returned by function a which is then called again then statements inside function b are executed
/*
inside function a
inside function b
something returned by function b
*/

// HIGHER ORDER FUNCTION : THAT RETURNS OR TAKES FUNCTION AS A PRAMETER OR FOLLOWS BOTH THESE PROPERTIES 










