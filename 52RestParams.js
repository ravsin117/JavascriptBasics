// rest params 
// function myfunc(a ,b,c , d){
//     console.log(`a is ${a}`)
//     console.log(`b is ${b}`)
//     console.log(`c is ${c}`)
//     console.log(`d is ${d}`)
// }
// myfunc(3,2,5)
// /*
// a is 3
// b is 2
// c is 5
// d is undefined
// */
// myfunc(4,5,6,7,8,9,1,2)
/*
a is 4
b is 5
c is 6
d is 7
*/
// :. all the rest of parameters were not used in second call as they had not been utilised by function but let say we want to use these rest of parameters to fill a array automatically in i/p arguments if the function my func
// so do the folloeinf changes in myfunc body

// function myfunc(a , b, ...c){
//     console.log(`a is ${a}`)
//     console.log(`b is ${b}`)
//     console.log(`c is ${c}`)
// }

// myfunc(4,5,6,7,8,9,1,2)
/*
a is 4
b is 5
c is 6,7,8,9,1,2
*/


// exercise
// with the help of rest operator take i/p as a array and calucate the sum of all numbers in array

function addAll(...arr){
    let sum = 0;
    for(let elem of arr)
    sum+=elem

    return sum ;
}

console.log(addAll(1,2,3,4,5,6,7,8,9)); // 45


