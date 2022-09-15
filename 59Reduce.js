// reduce method 
// const number = [1,2,3,4,5,6,7,8,9];
// let sum = number.reduce((accumulator , currentVal)=>{
//     // console.log(accumulator , " " , currentVal , " " , accumulator + currentVal) // to this to verify below explanation .
//     return accumulator + currentVal;
// })
// console.log(sum) // 45 

// acc  curr returned 
/* 1     2     3   ( this returned val stored in acc for IT2)
   3     3     6   (IT 2 is iteration 2 )
   6     4     10
   10    5     15
   15    6     21
   21    7     28
   28    8     36
   36    9     45   (last returned val stored in sum)
*/   
// in addition to callback function we can add another paramter in reduce methos that is the initial value of the accumulator . we can set it to be any integer value 

const userCart = [
    {ProductId :1 , productName : 'mobile' , price :1200},
    {ProductId :2 , productName : 'laptop' , price :1250},
    {ProductId : 3 , productName : 'tv' , price :1300},
]

const totolPrice  = userCart.reduce((acc, curr)=>{   
    return acc + curr.price; // curr stores entire obj
},0) // acc = 0 initially 
console.log(totolPrice)







