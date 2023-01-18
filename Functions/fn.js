
// inputs = arguments = parameters

function logPets() {
    let pet = "cat"
    console.log(pet)
    pet = "dog"
    console.log(pet)
}

//logPets() //function call

// multiplyBy2(3, 6, 'hello')

function multiplyBy2 (num1, num2, str) {
   console.log(num1  * 2 / num2 + str)
}

function scope () {
    function temp() {
        let num = 6
        console.log(num)
    }
    temp()
}
// scope()


function square(n = 5) {
    let num = n * n
    return 'hello'
}

// console.log(square(2))
// console.log(square(4))
// console.log(square()) // default to the one in the function

let myNumber = 2

console.log(myNumber) // => 2

function sideEffect () {
    myNumber += 1 // myNumber = myNumber + 1
}

sideEffect()
console.log(myNumber) // => 3


function declaration() {
    console.log('declaration')
}

const expression = function(){
    console.log('expression')
}

// binds itself to parent object as opposed to expression
const arrow = n => n * n//console.log('arrow')

const arrowexpanded = (n) => {
    return n * n 
}

arrow(3)
