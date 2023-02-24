// let apple = {
//     type: 'Gala',
//     color: 'red',
//     ripeness: 'ripe',
//     owner: 'Tomer'
// }

// let mammal = {
//     reproduction: 'birth'
// }

// let arr = [
//     'cat'
// ]

// console.log(arr[0])
// console.log(mammal.reproduction) // dot notation
// console.log(mammal["reproduction-Method"]) // bracket notation

// let obj = {
//     firstName: "Calaunte",
//     lastName: "Winston"
// }

// let prop = "firstName"
// console.log(obj[prop]) // => "Caluante"

// prop = "lastName"
// console.log(obj[prop]) // => "Winston"

// let person = {
//     firstName: "Erika",
//     lastName: "Kim",
//     age: 25,
//     }

// console.log(person.firstName) // Logs 'Erika'

// person.firstName = "Jane" // Changes firstName property
// console.log(person.firstName) // Logs 'Jane'

// console.log(person)
// {
// firstName: 'Jane',
// lastName: 'Kim',
// age: 25
// } 

// console.log(person.hometown); // Logs 'undefined'

// person.hometown = 'Arkansas'; // Creates and sets hometown property to 'Arkansas'
// console.log(person.hometown); // Logs 'Arkansas'
// console.log(person)
// {
// firstName: 'Jane',
// lastName: 'Kim',
// age: 25,
// hometown: 'Arkansas'
// }

// let films = [
//     {name: "Friday", director: "F. Gary Gray", released: 1995}, // films[0].name
//     {
//     name: "Soul Plane",
//     director: "Jessy Terrero",
//     released: 2004,
//     },
//     {
//     name: "Best Man",
//     director: "Malcolm D. Lee",
//     released: 1999,
//     },
// ]
    
// console.log(films[1].name)

// let closet1 = {
//     winter: {
//         hands: "gloves",
//         head: "beenie"
//     },
//     summer: {
//         hands: "rings",
//         head: "baseball cap"
//     },
// }

// // let closet2 = {
// //     winter: {
// //         hands: "gloves",
// //         head: "beenie"
// //     },
// //     summer: {
// //         hands: "rings",
// //         head: "baseball cap"
// //     },
// // }

// let alphabet = [
//     'a', // alphabet[0]
//     'b', // alphabet[1]
//     'c'  // alphabet[2]
// ]

// // for (let i = 0; i < alphabet.length; i++){
// //     console.log(alphabet[i] + 'z')
// // }
// /*
//     i = 0 -> 0 < 3 -> alphabet[0] -> i = i + 1 // az
//     i = 1 -> 1 < 3 -> alphabet[1] -> i = i + 1 // bz
//     i = 2 -> 2 < 3 -> alphabet[2] -> i = i + 1 // cz
//     i = 3 -> 3 < 3 -> quits

// */

let films = [
    {name: "Friday", director: "F. Gary Gray", released: 1995}, // films[0].name
    {
    name: "Soul Plane",
    director: "Jessy Terrero",
    released: 2004,
    },
    {
    name: "Best Man",
    director: "Malcolm D. Lee",
    released: 1999,
    },
]
// for (let i = 0; i < films.length; i++) {
//     // console.log(films[i].name)
// }

// // console.log('\n')
// for (let element of films) { // for...of
//     // console.log(element.name)
// }

// let clos = {
//     winter: 'cold',
//     summer: 'hot'
// }

// let closet2 = {
//     winter: {
//         hands: "gloves",
//         head: "beenie"
//     },
//     summer: {
//         hands: "rings",
//         head: "baseball cap"
//     },
// }

// // console.log(mammal.reproduction) // dot notation
// // console.log(mammal["reproduction-Method"]) // bracket notation

// for (let property in clos){
//     console.log(clos[property])
// }

// for (let property in closet2){
//     console.log(closet2[property])
// }
// // how would we iterate through the object closet2 which holds objects using the for...in method

// let cat = {
// name: "Tom",
// type: "Domestic",
// }

// let catKeys = Object.keys(cat)
// console.log(catKeys) // => ['name', 'type']
// let catValues = Object.values(cat)
// console.log(catValues) // => ['Tom', 'Domestic']

// let arr = [10, 20, 30, 40, 50]
// arr.push(60)
// arr.unshift(0)

// let person1 = {
//     firstName: "Erika",
//     lastName: "Kim",
//     age: 25,
// }

// person1.favoriteColor = 'red'

// let person2 = {
//     age: 25,
//     firstName: "Erika",
//     lastName: "Kim",
//     1: 'id'
// }

// let fakeArray = {
//     pop: function() {
//     console.log("You've popped")
//     }
// }

// function pop() {
//     console.log("you've popped")
// }

// fakeArray.pop()

// // how would we create the somefn function as a method of the object obj
// let obj = {
//     somefn: function() {
//         let m = 0
//         let b = 8
//         return 'hi' // sending the results of the function back to the function call somefn()
//     }
// }

// console.log(obj.somefn())



// // difference between return and console.log
// function somefn (param) {
//     let m = 0
//     let b = 8
//     return 'hi' // sending the results of the function back to the function call somefn()
// }

// somefn(10)

// // slope formula
// // input -> param
// // function -> somefn
// // output -> return
// // y = mx + b

// console.log(somefn(10)) // prints out the returned result from the function call somefn()





// console.log(closet1 === closet2)
// console.log(closet.winter.hands)
// console.log(closet["summer"]["hands"])

// Problem One

/**
 * Task description: Write a method that verifies an argument is a plain object, not an array or null
 * Expected Result: True if object is plain, false otherwise. 
     ({ a: 1 }) => true, 
     ([1, 2, 3]) => false
 * Task complexity: 1 of 5
//  * @param element - element to verify
//  * @returns {boolean}
//  */
const isPlainObject = (element) => {
    if(typeof(element) === 'object' && Array.isArray(element) === false && element !== null){
        return true
    } 
    return false

};
const data = [1, 2, 3];
console.log(isPlainObject(data)); // true
