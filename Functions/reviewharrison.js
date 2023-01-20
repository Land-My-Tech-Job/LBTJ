let num = 2

function declaration(par1, par2, par3) {
    return par1 + par2 + par3
    // sends the output to the original function call
}

const expression = function() {
    let name = 'harrison'
    let currentYear = 2023
    // num = currentYear + num
    num += currentYear
    console.log(name + ' ' + currentYear)
}

const arrow = () => {
    console.log(num)
}
// alternative arrow function
    // const arrowcontracted = num => console.log(num)

const callCollect = () => {
    console.log('doing declaration')
    console.log( declaration(3, 5, num) )
    console.log('expression')
    expression()
    console.log('arrow')
    arrow()
}

callCollect()
