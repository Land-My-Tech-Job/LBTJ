/*
    > parameter [inside the function call] 
        input
    > function [manipulates the data] 
        manipulation/data handling
    > return [return whatever value is after the keyword]
        output

    function call is when you "call" the name of the function followed by ()
        fnCall()
    definition [declaration, expression, arrow/expanded] 
        lets the computer to do this when called
            look below for models
*/
// function declaration
    function declaration(para1, para2) { // addition 
        console.log(para1 + para2)
        return para1 + para2
    }
    
    // function expression
    const expression = function(para1, para2) { // subtraction
        console.log(para1 - para2)
        return para1 - para2
    }
    
    // arrow function
        // one liner arrow function
    const arrow = (para1, para2) => para1/para2 // division

    const arrowexpanded = (para1, para2) => { // print
        console.log(arrow(8, 2))
    }

arrowexpanded()

// callAllFunction()


function callAllFunction() {
    // (tempInFahrenheit × 9/5) + 32 
    const tempInFahrenheit = 85
    let tempInCelsius = convertToCelsius(tempInFahrenheit)
    tempfnCall()
    console.log(tempInCelsius)
}

function convertToCelsius(a) {
    return (a * 9/5) + 32
}

function tempfnCall() {
    console.log(`inside tempfnCall`)
}

// function declaration is when you say what the function does
// // DECLARE A FUNCTION
// // function declaration
//     // these are hoisted (pulled up top) before execution so can be called anywhere in the code
//     // expression are stricter and must be declared before being called
//     function declaration(para1, para2) { 
//         return 'function declaration example'
//     }

// function call is    when you tell the computer to execute a specific function 
//                     and only the function that are inside its scope


// inside tempfnCall
// inside convertToCelsius

