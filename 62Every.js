// every method -> Determines whether all the members of an array satisfy the specified test.
const numbers = [1,2,3,4,5,6,7,8,9];
// check if all elems of this array even or not 

let ans = numbers.every((number)=> number%2==0);
console.log(ans) // false

const numbers2 = [2,4,6,8];
console.log(numbers2.every((number)=>number%2==0)); // true
// :. all elems are even

const userCart = [
  { ProductId: 1, productName: "mobile", price: 1200 },
  { ProductId: 2, productName: "laptop", price: 1250 },
  { ProductId: 3, productName: "tv", price: 130 },
];

let ans2 = userCart.every((product)=>product.price<=1250);
console.log(ans2); // true //:. bcz all products have price less than or equal to 1250










