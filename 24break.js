// break 
// print 1 to 10 


// following will print only from 1 to 3 only as when i ==4 then break statement breaks the execution of loop and execution jumps outside the loop
for(let i = 1; i<= 10 ;i++){
     if(i==4) break; 
    console.log(i);
}
console.log('after 3');


// continue :
// following will print 0 to 10 without printing 4 
for(let i = 0; i<= 10 ;i++){
    if(i==4) continue ; // when i==4 then all the line below it wont be executed and we jump to next iteration
    console.log(i);
}













