// important array method 
const numbers = [ 4,2,5,8] 


function multiplyBy2(number , index){
    console.log('index is : ' , index);
    console.log(`product is : ${number} * 2 => ` ,  number * 2);
}
// multiplyBy2(numbers[0] , 0)
/*
index is :  0
product is : 4 * 2 =>  8
*/

// doing the above task for all the elems of array

// for(let i in numbers){
//     multiplyBy2(numbers[i] , i );
// }
/*
index is :  0
product is : 4 * 2 =>  8 
index is :  1
product is : 2 * 2 =>  4 
index is :  2
product is : 5 * 2 =>  10
index is :  3
product is : 8 * 2 =>  16
*/
// doing the above done work with forEach loop

// numbers.forEach(multiplyBy2) // yeilds same output as above

// ex - 2
// doing the task done above  in another way (only 1 forEach)

// numbers.forEach(function(number , index ){
//     console.log(`index is ${index} , number is ${number} , Product is => ${number * 2} `)  
// })
// we took anonymous function as a paramter here 
// its our choice to pass number or index or array in callback function .

/*
index is 0 , number is 4 , Product is => 8 
index is 1 , number is 2 , Product is => 4 
index is 2 , number is 5 , Product is => 10
index is 3 , number is 8 , Product is => 16
*/

// ex - 3

const users=[
    {firstName:'hari' , age : 23},
    {firstName:'pappu' , age : 24},
    {firstName:'bulbul' , age : 25},
]
// for(let user of users){
//     console.log(user.firstName);
// }

/*
hari
pappu
bulbul
*/

// 2nd way by forEach 
users.forEach(user=> console.log(user.firstName))
/*
hari
pappu
bulbul
*/






