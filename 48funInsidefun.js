// function inside function 
const app = () =>{
    const myFunc = () =>{console.log('inside myfunc')}
    const addTwo = (x , y) => x+y;
    const mult = ( x, y) => x*y;
    console.log('inside app')
    myFunc();
    console.log(addTwo(2,3))
    console.log(mult(2,3))
}

app();
/*
inside app
inside myfunc
5
6
*/



