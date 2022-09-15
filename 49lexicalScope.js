// lexcial scope
// function myApp(){
//     const myVar = 'value1'
//     function myFunc(){

//     }
//     const myFunc2 = function (){}
//     const myFunc3 = ()=>{}
//     console.log(myVar)
// }
// myApp() // value 1

// example 2 :

// function myApp(){
//     const myVar = 'value1'
//     function myFunc(){
//         const myVar = 'value2'
//         console.log('inside myFunc : ' , myVar);
//     }
// //     const myFunc2 = function (){}
// //     const myFunc3 = ()=>{}
//     console.log('Inside app:',myVar)
//     myFunc()
// }
// myApp();
/*
O/P
Inside app: value1
inside myFunc :  value2
*/


// if we didnt had const myVar = 'value 2', then the o/p will be :
/*
Inside app: value1
inside myFunc :  value1

*/


// EXMAPLE 3 :
const myVar = 'value 1'
const app = function (){
    function myfunc(){
        console.log('inside myfunc :' , myVar);
    }
    console.log('inside app : ' , myVar);
    myfunc()
}
app()
/*
O/P - 
inside app :  value 1
inside myfunc : value 1
*/



