// some method
const numbers = [3,5,8,9];

// check whether there are few elems in array which is even 

let ans = numbers.some((number)=>number%2==0);
console.log(ans); // true => 8 is even in array :. true

let num = [3,5,7,9];
console.log(num.some((number)=>number%2==0)); // false     :. ther is not a single elem that is even 


const userCart = [
  { ProductId: 1, productName: "mobile", price: 1200 },
  { ProductId: 2, productName: "laptop", price: 1250 },
  { ProductId: 3, productName: "tv", price: 130 },
  { ProductId: 4, productName: "mackbook", price: 2011300 },
];
// check if there is a product with price >= 200000
let ans2 = userCart.some(product => product.price>=200000)
console.log(ans2) // true 


