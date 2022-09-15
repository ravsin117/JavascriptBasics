// sort method in js ->Sorts an array in place. This method mutates the array and returns a reference to the same array.
let number = [34,56,2,3,56,8,84,23,45,1];
number.sort();

// console.log(number)
/*
[
   1,  2, 23, 3, 34,
  45, 56, 56, 8, 84
]
*/
// js doesnt sorts by number  , it sort by considering the values in array as string 
// [34,56,2,3,56,8,84,23,45,1];
// [51,53,50,51,53,56,56,50,52,49]  // ascii values of first charceter of each number in array and acc to these numbers the actuall array is sorted :. since 49 is smallest 1 corresponding to it appears first in resultant array

/*
'0':48
'1':49
'2':50
'3':51
'4':52
'5':53
'6':54
'7':55
'8':56
'9':57

*/ 
// Above given o/p is wrong 
// but for 
const users = ['hari' , 'mohit' , 'rahul' , 'abcd','ABC']
// console.log(users.sort())
// [ 'abcd', 'hari', 'mohit', 'rahul' ] (is correct ans)
// if we had ['hari' , 'mohit' , 'rahul' , 'abcd'  , 'ABC']
// we got o/p ->
//[ 'ABC', 'abcd', 'hari', 'mohit', 'rahul' ]
// :. bcz ascii of uppercase < ascii of lowercase 


// TO GET EXPECTED OUTPUT IN CASE OF NUMBERS
const numbers = [9,5,1200,410,3000]
numbers.sort((a,b)=>{
    // console.log(a , b)
    // a-b logic for ascending 
    return a- b; // for descending do b-a 
})
console.log(numbers) //[ 5, 9, 410, 1200, 3000 ]

//ex -> a =1200 b =410
//  a- b = 790 >0 :. put  b first then a => b a 
// a= 5 , b = 9 
// a-b = -4 :. keep a first then b => a b 
// if a-b == 0 then keep a , b as it is 

const Product = [
  { ProductId: 1, productName: "mobile", price: 1700 },
  { ProductId: 2, productName: "laptop", price: 250 },
  { ProductId: 3, productName: "tv", price: 120 },
  { ProductId: 4, productName: "watch", price: 12220 },
];
Product.sort((a , b)=>{
    return a.price - b.price;
})
// low to high
console.log(Product); // sorting done on basis of price
/*
[
  { ProductId: 3, productName: 'tv', price: 20 },
  { ProductId: 2, productName: 'laptop', price: 250 },
  { ProductId: 1, productName: 'mobile', price: 1700 } ,
  { ProductId: 4, productName: 'watch', price: 12220 }
]
*/

// high to low sorting on basis of price of each item
Product.sort((a,b)=>{
    return b.price - a.price;
})
console.log(Product)
/*
[
  { ProductId: 4, productName: 'watch', price: 12220 },
  { ProductId: 1, productName: 'mobile', price: 1700 },
  { ProductId: 2, productName: 'laptop', price: 250 },
  { ProductId: 3, productName: 'tv', price: 120 }
]
*/














