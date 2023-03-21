const returnOne = async () => { // this is how to use async with ES6 syntax
    return 1;
}

returnOne().then(alert => console.log(alert));