// spread operator

const arr1 = [1,2,3,4];
const arr2 = [5,6,7,8];

// spread to create clone of arr1 
const newArr = [...arr1];
// console.log(newArr)

// cloning all elems of arr1 , arr2 
const newArr2 = [...arr1 , ...arr2]
// console.log(newArr2)

const newArray3 = [...'abc']
// console.log(newArray3)//[ 'a', 'b', 'c' ]

const newArr4 = [...'123456789'];
// console.log(newArr4) // ['1', '2', '3','4', '5', '6',  '7', 8', '9']
// const arr = [...1234567];
// console.log(arr); // TypeError: 1234567 is not iterable 
// Number is not  iterable 
/// strings and arrays are iterable 

// spread operators in objects 
const obj1 = {
    key1 : 'value1',
    key2 : 'value2',
}

// object always contains unique key  , if we have same key twice with 2 different defined values , then the second value will be considered for the duplicate key (in oteher words it overrides the previus value)


const obj2 ={
    key1:'valueX',
    key3 : 'value3',
    key4 : 'value4'
}
// in a new obj copying the values of obj1 , obj2
const newObj = {...obj1 , ...obj2}
console.log(newObj)//{ key1: 'valueX', key2: 'value2', key3: 'value3', key4: 'value4' }

// string to object
const newobj2 = {...'abc'}
console.log(newobj2) // { '0': 'a', '1': 'b', '2': 'c' }

// array to object
const newobj3 = {...['item1','item2']}
console.log(newobj3)//{ '0': 'item1', '1': 'item2' }































