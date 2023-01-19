// FUNCTION SYNTAX

//keyword   Name    Parameter
//                  input
//                  temp variable received from the function call
//                  local to function
  function  fnName  (num) {
//  keyword output 
    return  'name of this function' + num
  }

/* ********************** - ***************** */

// FUNCTION CALL

// name     input
    fnName(123456)

/* ********************** - ***************** */

// SCOPE

// global variable
let gName = 'global' //outside the function so accessible to every function

function scope(){ // start of scope
    //              when nothing is passed as parameter => default to value
    function scope1(temp = 'default'){
        // local
        let lname = 'local'
        console.log(temp)
    }
    console.log(gName) // accessible b/c global
    console.log(lName) // not accessible b/c local to scope1
} // end of scope if return isn't used

/* ********************** - ***************** */

// DECLARE A FUNCTION
// function declaration
    // these are hoisted (pulled up top) before execution so can be called anywhere in the code
    // expression are stricter and must be declared before being called
function declaration(para1, para2) { 
    return 'function declaration example'
}

// function expression
const expression = function(para1, para2) {
    return 'function expression example'
}

// arrow function
const arrowexpanded = (para1, para2) => {
    return 'expanded arrow function example'
}

// one liner arrow function
    // when only one parameter is passed no parentheses is required
    // when no more than a return is required the return keyword is implied (one liner function)
const arrow = num => 'contracted arrow function example' 

// BUILT IN FUNCTION
    // predefined function associated with a library
//  module   function
    console.log()
