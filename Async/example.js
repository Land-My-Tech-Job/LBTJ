// doSomething(result => {
//     doSomethingElse(result, newResult => {
//         doThirdThing(newResult, finalResult => {
//             console.log('Got the final result: ' + finalResult);
//         }, failureCallback);
//     }, failureCallback);
// }, failureCallback);

// //adding .then() turns a function all or callback function into a promise
// doSomething().then(result=> {
//     return doSomethingElse(result);
// })
// .then(newResult => {
//     result
// return doThirdThing(newResult);
// })
// .then(finalResult => {
// console.log('Got the final result: ' + finalResult);
// })
// .catch(failureCallback);



// new Promise(function(resolve, reject) {
//     setTimeout(() => resolve(1), 2000);
// }).then((result) => {
//      console.log(result);
//     return result + 2;
// }).then((result) => {
//     console.log(result);
//     return result + 2;
// }).then((result) => {
//     console.log(result);
//     return result + 2;
// });


new Promise(function(resolve, reject) {
    setTimeout(() => resolve(1), 2000);
}).then((result) => {
    console.log(result);
    return result + 2;
}).then((result) => {
    throw new Error('FAILED HERE'); // <--------- throwing 
    console.log(result);
    return result + 2;
}).then((result) => {
    console.log(result);
    return result + 2;
}).catch((e) => {
    console.log('error: ' + e)
});


/*
    Database (to get data)
        connect to the database
        send your instruction
        retrieve you data
    Populate your website (think youtube )
*/