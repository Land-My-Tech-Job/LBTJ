// let num = 5

// if (num < 10){
//     console.log("num is less than 10")
// }


// print out only the numbers from 1 to 10 increasing the flag by 2
// let num = 100;


// while (num >= 1) {
//     if (num % 2 === 0){
//         console.log(`${num} is even`)
//     } else {
//         console.log(`${num} is odd`)
//     }
//     num += 10 // num = num + 10
// }

// for (let i = 100; i >= 1; i--){
//     if (i % 2 === 0){
//         console.log(`${i} is even`)
//     } else {
//         console.log(`${i} is odd`)
//     }
// }


// Log all multiples of 10 between 10 and 100
// Log all multiples of 10 between 100 and 0, descending
// for (let i = 10; i <= 100; i+=10) {
//     console.log(i)
// }
/*
    i = 10 -> i <= 100 -> print i -> add 10 to i
    i = 20 -> i <= 100 -> print i -> add 10 to i
    ...
    i = 100 -> i <= 100 -> print i -> add 10 to i
    i = 110 -> get out


*/



// Problem One

/** 
  * Task description: Write a method that creates a new array with given values 
  * Expected Result: (3, 'a') => ['a', 'a', 'a'] 
  * Task Complexity: 1 of 5 
  * @param {number} arraySize - size of array 
  * @param {?} value - value to fill 
  * @returns {Array} 
*/
// const fill = (arraySize, value) => {
//     let arr = []
//     for (let i = 0; i < arraySize; i++) {
//         arr.push(value)
//     } 
    /* 
        1 < 3 -> push to arr -> 1 + 1
        2 < 3 -> push to arr -> i = 3
        const valueToFill = 'a' -> valueToFill to the function call fill
        -> assigned value of valueTofill to the
    */    
//     return arr
// }
const data = 20;
const valueToFill = 'a';
// console.log(fill(data, valueToFill)) // ['a', 'a', 'a']


// write a loop that tells you what the hottest day of the week is 

let days = ['monday', 'tuesday','wednesday', 'thursday', 'friday', 'saturday', 'sunday' ]
let temps = [70, 72, 73, 76, 72, 78, 68]
/*
    match the each temp to the respective day 
    compare each day temp to the ones before it and record the higher one
*/
let hottest
let hotday
hottest = temps[0]

for (let i = 0;  i < temps.length; i++){
    if (temps[i] > hottest) {
        console.log(`hottest is ${i}`)
        hotday = i
    }
}

console.log(`hottest day was ${days[hotday]}`)
    /*
        i = 0 -> 70 -> not greater than hottest -> hottest is still temps[0] -> hottest = 70
        i = 1 -> 72 -> greater than hottest -> hottest is now temps[1] -> hottest = 72
        i = 2 -> 73 -> greater than hottest -> hottest is now temps[2] -> hottest = 73
        i = 3 -> 76 -> greater than hottest -> hottest is now temps[3] -> hottest = 76
        i = 4 -> 72 -> not greater than hottest -> hottest is still temps[3] -> hottest = 76
        i = 5 -> 78 -> greater than hottest -> hottest is now temps[5] -> hottest = 78
        i = 6 -> 68 -> not greater than hottest -> hottest is still temps[5] -> hottest = 78

    */


// for (let i = 0; i < days.length; i++) {
//     if(i % 2 !== 0){ // change to ===  for the other days
//         continue
//     }
//     console.log(days[i])
// }


// for (let day of days){
//     console.log(day)
// }

// let str = 'hello'
// // let str = ['h', 'e', 'l', 'l', 'o']

// for (let element of str) {
//     console.log(element)
// }



// Write a for...of loop that prints out every character in the string "hello" 

















// let errcode = 404
// errcode + 'error not found' //404error not found
// `${errcode} error not found` // 404 error not found





