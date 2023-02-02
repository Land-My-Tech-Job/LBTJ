// let person = ['harrison', 25, 180]

// let animals = ['cat', 'dog', 'raccoon', 'giraffe']
// animals[1] = 'zebra'
// console.log(animals)

//question make the following array equal to this  /* [1,2,3,4,5,6,7,8,9]*/



/*[ 5, 4, 3, 2, 1 ]*/ 
// let arr = [5,4,3,2,1]

// arr[4] = 9 
// arr[3] = 8
// arr[2] = 7
// arr[1] = 6

// arr.pop()
// arr.pop()
// arr.pop()
// arr.pop()

// arr.unshift(1,2,3,4)
// arr.push(6,7,8,9)

// console.log(arr)




// array manipulation functions basic
// arr.push(10)

// arr.pop()

// arr.unshift(10)

// arr.shift()

// console.log(arr.join(', '))

// console.log(arr)

// let collection = [1,2,3,4,5,6,7,8,9]

// console.log(collection.slice(4))

// let str = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui provident consequuntur vel omnis quisquam rem harum, maxime expedita, ullam ut dolore!' 
// let word = str.split(' ')

// let a = [1, 2, 3];
// let b = [4, 5, 6];
// let c = a.concat(b)
// console.log(a.concat(b)) // [1, 2, 3, 4, 5, 6]
// console.log(a) // [1, 2, 3]
// console.log(b) // [4, 5, 6]

// Problem One

/** 
  * Task description: Write a method that reverts input array 
  * Expected Result: [1, 2, 3] => [3, 2, 1] 
  * Task Complexity: 1 of 5 
  * @param {Array} array - Array of any elements 
  * @returns {Array} 
*/

/* 
    1 2 3
    3 2 3
    3 2 1

    we have 3 rooms: 0 1 2
    tenants : 
*/
// const reverse = (array) => {
//     // array.unshift(array[1]) // [2, 1, 2, 3]
//     // array.unshift(array[3]) // 
//     // array.pop()
//     // array.pop()
//     let temp = array[0] // 1 // [ 1 2 3 ]
//     array[0] = array[2] // [3 2 3]
//     array[2] = temp// [3 2 3]

//     return array
// }
// const data = [5, 6, 100000];
// console.log(reverse(data)); // [3 6 1]

// let str1 = 'hello'
// let str2 = 'hello'
// console.log(str1 === str2) // true
// let arr1 = [2, 3, 4] // house number 1: 2 3 4
// let arr2 = [2, 3, 4] // house number 2: 2 3 4
// console.log(arr1 === arr2) // false
// // will log: false

// let matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]

// let matrix2 = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]
    
// console.log(matrix[0]) // => [1, 2, 3]
// console.log(matrix[0][0]) // => 1
// console.log(matrix[0][1]) // => 2
// console.log(matrix[2][2]) // => 9

// console.log(matrix[1][1])
// console.log(matrix === matrix2) //false
// console.log(matrix[1][1] === matrix2[1][1]) //true

// let a;
// let b;

// [a, b] = ['Hello', 'Dolly']

// console.log(a) // => Hello
// console.log(b) // => Dolly

const reverse = (array) => {
    // [array[2], array[0]] = [array[0], array[2]]
    [array[0], array[1], array[2], array[3], array[4], array[5] ] = [array[5], array[4], array[3], array[2], array[1], array[0] ]

    return array
}
const temp = [5, 6, 7, 8, 9, 10];
// console.log(reverse(temp)); // [3 6 1]
// let params = [ "hello", true, 7 ]
// let other = [ ...data, ...params ] // [ 5, 6, 7, 8, 9, 10, "hello", true, 7 ] 
// let str = 'hello'
// let char = [...str]// 'h' 'e' 'l' 'l' 'o'
/** 
  * Task description: Write a method that returns the array if it's not false, undefined, empty strings, zero, null 
  * Expected Result: [0, 1, false, 2, undefined, '', 3, null] => [1, 2, 3] 
  * Task Complexity: 1 of 5 
  * @param {Array} array - An array of any elements 
  * @returns {Array} 
*/
const compact = (array) => {
    if ((array[0] === 0) || (array[0] === false) || (array[0] === undefined) || (array[0] === '') || array[0] === null){

    // } else if (array[0] === false) {

    // } else if (array[0] === undefined){
 
    // } else if(array[0] === ''){

    // } else if(array[0] === null) {

    } else {
        return array
    }
}
const info = [1];
console.log(compact(info)) // [1, 2, 3]



   




























   // Problem Four
   
   /** 
     * Task description: Write a method that returns an object composed of key-value pairs. 
     * Expected Result: [['a', 1], ['b', 2]] => { a: 1, b: 2 } 
     * Task Complexity: 2 of 5 
     * @param {Array} array - a deep array of pairs 
     * @returns {Array} 
   */
//    const fromPairs = (array) => {
//     throw new Error('Put your solution here');
//    }
//    const data = [['a', 1], ['b', 2]];
//    console.log(fromPairs(data)) // { 'a': 1, 'b': 2 }



