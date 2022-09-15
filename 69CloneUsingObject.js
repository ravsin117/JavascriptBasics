// clone using object.assign


const obj ={
    key1 : 'value1',
    key2 : 'value2',
}
const obj2 = obj ; //both objects points to same memory location in memory
console.log(obj); // { key1: 'value1', key2: 'value2' }
console.log(obj2); // { key1: 'value1', key2: 'value2' }

obj.key3 = 'value3'

console.log(obj); // { key1: 'value1', key2: 'value2' , key3: 'value3' }
console.log(obj2); // { key1: 'value1', key2: 'value2',key3: 'value3'}

// cloneing by spread(new way)
const obj3 = {...obj}
console.log(obj); // { key1: 'value1', key2: 'value2',key3: 'value3'}

// old way by Object.assign()
const obj4 = Object.assign({} , obj);
console.log(obj4) // // { key1: 'value1', key2: 'value2',key3: 'value3'}





