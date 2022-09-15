// find -> Returns the value of the first element in the array where predicate is true, and undefined otherwise.
const myArr = ['hello' , 'cat' , 'dog' , 'lion'];

// check if length of string is 3 in a function
function islength3(string){
    return string.length===3;
}
console.log(
    islength3('doggy')
)

// for passing all the strings in array 

let ans = myArr.find(islength3)
console.log(ans) // cat (first occurence where length is 3 )

// *************************************
const users = [
    {userId:1, userName : "pappu"},
    {userId:2, userName : "raju"},
    {userId:3, userName : "bablu"},
    {userId:4, userName : "bhola"},
]

let isUserId3 = users.find(findUserId3)
function findUserId3(user){
    return user.userId==3;
}
console.log(isUserId3) // { userId: 3, userName: 'bablu' }

// we cpuld have done 
let thirdUser = users.find((user)=>user.userId==3)
console.log(thirdUser) //  { userId: 3, userName: 'bablu' }








