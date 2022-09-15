// param desructuring 

const person = {
    firstname : 'harshit',
    gender :'male'
}

function printDetails(person){
    console.log(person.firstname) // hsrahit 
    console.log(person.gender) // male 
}

printDetails(person)

// destructuring incoming object
 
function printdetail({firstname , gender}){
    console.log(firstname) // harshit
    console.log(gender) // male 
}
printdetail(person)





