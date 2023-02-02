// console.log("The following lines should say TRUE")
// console.log(45 === 45)
// console.log(-9 < 9)
// console.log(100 < 100000)
// console.log(5.6 > 5.5)
// console.log("hello" !== "dog")
// console.log("Danny" === "Danny")

// console.log(2 < 10)
// console.log(22 === 22)
// console.log( 0 > -5)
// console.log(3.3 < 3.5)
// console.log("frog" !== "prince")


/* ==== EXERCISE 1 ====
replace the blank with a conditional statement so that the lunch invitation is only printed if isHungry is true. 
Change the boolean in the isHungry variable to check and see if your conditional statement works.
*/

// if isHungry is true
// lunch invitation is only printed
// let isHungry = true

// if (isHungry) {
//     console.log("Do you want to grab some lunch?")
// }

/* ==== EXERCISE 2 ====
Replace the blank with a conditional statement that tests to see if a number is positive or negative.
*/
let firstNumber = 56
if (firstNumber < 0) {
    console.log("That number is negative!")
} else {
    console.log("That number is positive!")
}

// below 0 then number is negative
// above 0 then number is positice


/* ==== EXERCISE 4 ====
Replace the blank with a conditional statement that only adds a fee to the ticket price if the luggage weight is over 50 pounds
*/

let luggageWeight = 55
let ticketPrice = 150

if (luggageWeight > 50) {
    ticketPrice = ticket + 20
    console.log("An extra $20.00 fee was added to the plane ticket for going over the maximum weight.")
} else {
    console.log("No extra fees, have a nice flight!")
}

/* ==== EXERCISE 5 ====
replace the blanks with a conditional statement that prints the correct statement depending on the carSpeed that you input.
*/ 
let carSpeed = 40
const maximumSpeed = 75
const minimumSpeed = 45


if (carSpeed > maximumSpeed) {
    console.log("Slow down, you're speeding!")
} else if (carSpeed < minimumSpeed) {
    console.log("Speed up, you're holding up traffic!")
} else {
    console.log("You are at a great speed, just keep driving.")
}