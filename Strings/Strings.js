// let pretend = 'my name is harrison and I say \'hello\''

// for (let i = 0; i < pretend.length; i++) {
//     console.log(pretend[0])
// }

// let str = 'hello'
// str += ' there'
// console.log(str + " beautiful!")
// => hello there beautiful!

// let str = ''
// let num = 5
// for (let i = 1; i <= num; i++) {
// str += i + ', '
// }
// console.log(str)

// console.log(pretend.toUpperCase())

/*
    'j' 'a' 'n' 'e'
        at some point iterate through this
            use a for loop
            str.length - 1
        change the first character to upper case
            name[0].toUpperCase
            need new variable to hold the change
        combine the new variable with capital first element with the rest
            use the iteration
*/

// let name = 'jane'
// // J
// let Cname = name[0].toUpperCase() // capitalize the first element of the string Name
// //Cname = J

// for (let i = 1; i < name.length; i++){ // Start at 1 because the first element was already capitalized above
//     Cname += name[i]
// }
// // console.log(Cname)

// let change = 'HARRISON'
// let lChange = change[0]

// for (let i = 1; i < change.length; i++) {
//     lChange += change[i].toLowerCase()
// }

// console.log(lChange)


// let arr = ['cat', 'dog', 'rat']

// console.log(pretend[pretend.length])

// console.log(pretend.length)

// let name = 'alice'
// let copy = name.slice(1,3) // will return just the letters at index 1 and 2, **not index 3**.
// // console.log(name, copy)
// // => alice li

// let change = 'HARRISON'
// // using slice() method we can access sections of the string
// //      change.slice(1)
// console.log(change[0] + change.slice(1).toLowerCase())
// let lChange = change.slice(1)


let pretend = 'my name is harrison and I say hello. I am pretty old.'
let words = pretend.split(' ')

let Cwords 
let newWord = ''

for (let i = 0; i < words.length; i++){
    Cwords = words[i] // 'my'
    newWord = Cwords[0].toUpperCase() + Cwords.slice(1)
    words[i] = newWord
}
console.log(words)

// let str = 'My favorite number is: '
// let num = '42'
// let sentence = Number(num)
// console.log(sentence) //My favorite number is: 42
// console.log(typeof(sentence)) //string

let name = "Matt"
let sentence = `Hello, my name is ${name}.`
console.log(sentence)
// => Hello, my name is Matt.