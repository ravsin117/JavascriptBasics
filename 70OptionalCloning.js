// optional chaining 
const user={
    firstName : 'harshit',
    address : {houseNumber : '1234'}
}

console.log(user) // { firstName: 'harshit', address: { houseNumber: '1234' } } 
console.log(user.address) // { houseNumber: '1234' }

let obj = {
//   firstName: "ravi",
  address: { houseNumber: "1234" },
};

console.log(obj?.firstName)
console.log(obj?.address?.houseNumber)







