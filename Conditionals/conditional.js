// console.log('not executed')

// const str = ''
// const some = 'I am ' + str
// const somestr = `I am ${str}`

// if (str) {
//     console.log('hello')
// }
// console.log(somestr)

// if (true) {
// console.log("It is true");
// }

// let numOfDays = 365
// const leapyear = 0

// if (leapyear) {
//     numOfDays += 1
// }

// const display = `there are ${numOfDays} in a year`

// console.log(display)

// && both has to be true for the expression to be true
// || one has to be true for the expression to be true
// ! that flips the evaluation of the variable

// const num1 = 64
// const num2 = 55

// //      true            false
// if(num1 > num2 && num2 % 2 === 0) {
// console.log("Success!")
// } else {
//     console.log('fail')
// }

// function checkNum(num) {
//     if (!num) {
//         console.log("It's larger than 2");
//     }
//         console.log("done checking");
// }

// if (num1 > 1){
//     checkNum(4)
// }
//     // It's larger than 2
//     // done checking
    
//     checkNum(2)
//     // done checking

// function some() {
//     let userAge = 22;

//     if (userAge < 18) {
//         console.log("Parental supervision is required");
//     } else if (userAge < 21) {
//         console.log("Parental permission is required");
//     } else {
//         console.log("You may proceed");
//     }

//     if (userAge > 18) {
//         console.log("supervision is required");
//     } 
//     if (userAge > 21) {
//         console.log("permission is required");
//     } 
//     if (userAge >= 21) {
//         console.log("proceed");
//     }

//     // 0               <       18      <           21
//     // supervision     permission      no requirement

// }

// some()

function some() {
    let userAge = 22;

    if (userAge < 18) {
        console.log("Parental supervision is required");
    } else if (userAge < 21) {
        console.log("Parental permission is required");
    } else {
        console.log("You may proceed");
    }
    // 0               <       18      <           21
    // supervision     permission      no requirement

    let day = "Monday";

    if (day === "Saturday" || day === "Sunday") {
        console.log("Have a nice weekend!");
    } else if (day === "Friday") {
        console.log("The weekend is almost here!");
    } else {
        console.log("Have a nice day.");
    }

    if (userAge < 18 || userAge > 45) {
        console.log('hello')
    }

    if (1 === 1){
        console.log(true)
    } else {
        console.log(false)
    }

    1 === 1 ? "it is equal" : 'not equal'

    let amIOld = age > 30 ? "old" : "young"


}

some()

function switch1 () {
    let userAge = 22

    if (userAge < 18) {
        console.log("Parental supervision is required");
    } else if (userAge < 21) {
        console.log("Parental permission is required");
    } else {
        console.log("You may proceed");
    }

    switch (userAge) {
        case 18:
        console.log("Parental supervision is required");
        break;
        case 19:
        console.log("Parental permission is required");
        default:
        console.log("You may proceed");
    }

    let day = "Monday";

    if (day === "Saturday" || day === "Sunday" || day === 'holiday') {
    console.log("Have a nice weekend!");
    } else if (day === "Friday") {
    console.log("The weekend is almost here!");
    } else {
    console.log("Have a nice day.");
    }
}

