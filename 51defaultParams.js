// default params 

// function add2(a , b){
//     return a+b;
// }

// const ans = add2(4); 
// console.log(ans); // NaN
// :. value of b was undefined by default :. it becomes NaN on addition 

function add3(a , b ,c){
    if(typeof c === 'undefined'){
        c = 1 ;
    }
    return a+b+c;
}
console.log(add3(2,2)); // 5

// making defualt params 
function add4(a , b , c , d= 1){
    console.log(a+b+c+d);// 7 :. d by default is 1 
}
add4(2,2,2) //  










