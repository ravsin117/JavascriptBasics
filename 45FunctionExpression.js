// function expression
let sing = function(){
    console.log('Happy birthday to you')
}
sing() ;

//ex 2
let isEven = function(x){
    return x%2==0;
}
console.log(isEven(9)) // false;

//ex 3:
let findTarget = function(arr , x){
    for(let i in arr){
        if(arr[i] == x){
            return i;
        }
    }
    return -1;
}
console.log(findTarget([1,2,3,4,5] , 3)) // 2
console.log(findTarget([1,2,3,4,5] , 6)) // -1















