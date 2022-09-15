// and and or operator 

let firstName = 'Ravinder'
let age = 24;

if(firstName[0]=='R'){
    console.log('Name starting with R')

}
if(age>=20){
    console.log('age above 20')
}
//checking both condition together by && operator
if(firstName[0]=='R' && age>=20){
    console.log("name starts with R and age above 20")
}else{
    console.log('Either name doesnt starts with R or age not above 20 or both conditions false')
}

// || operator 
if(firstName[0]=='R' || age>= 18){
    console.log('first letter R or age >= 18 or both true')
}else{
    console.log('both false');
}









