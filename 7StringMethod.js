// trim -> Removes the leading and trailing white space and line terminator characters from a string.
let s = ' Ravinder  '
console.log(s.length) // 11 
console.log(s.trim().length) // 8 (three spaces removed )
// s.trim() returns new string and can be stored in new string 
let s2 = s.trim();


//toUpperCase()-> chnages all characters in string to uppercase
//toLowerCase()-> chnages all characters in string to lowercase
console.log(s2.toUpperCase())
console.log(s2.toLowerCase())


//slice
// params : start index  end index+1
let s3 = s2.slice(0,4)
console.log(s3)
let s4 = s2.slice(0)
console.log(s4)


