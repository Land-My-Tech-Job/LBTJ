const button = document.querySelector("button");

// function fireRequest(e) {
//     e.preventDefault()
//     axios
//     .get("https://jsonplaceholder.typicode.com/posts/900")
//     .then(response => {
//         console.log(response);
//     })
//     .catch(err => {
//         console.log(`The error that was thrown: ${err}`);
//     });
// }
async function fireRequest(e) {
    e.preventDefault()
    try {
        response = await axios.get("https://jsonplaceholder.typicode.com/posts/900");
        console.log(response.data);
    } catch (err) {
        console.log(`The error that was thrown: `, err) // using ${err} displays error name, and message only
    }
}

/* 
    take 15 minute and
     as Direct message and in your own words
        define synchronicity // sequential execution(do stuff from top to bottom)
        define asynchronicity // parrallel runs (stuff can happen at the same time)
        define 2 use case for using Asynchronicity (populate website with data, getting food while game is loading)
        what is the difference between synchronous and asynchronous (sync assumes everything is done when moving on, async can have pending items)
        when would you use Asynchronous call (when waiting on a resource like user Data, or waiting until a response is confirmed for a long time background task)
*/

// Local scope for chaining calls
// const makeRequest = (e) => {
//     e.preventDefault()

//     axios.get("https://jsonplaceholder.typicode.com/posts")
//         .then((data)=> {
//             console.log(data)
//             return data
//         })
//         .then( () => {
//             console.log(data)
//         })
// }

// manipulating chaining calls 
// const makeRequest = () => {
//     return promise1().then(value1 => {
//         // do something
//         return promise2(value1).then(value2 => {
//             // do something
//             return promise3(value1, value2)
//         })
//     })
// }

// const makeRequest = async () => {
//     const value1 = await promise1()
//     const value2 = await promise2(value1)
//     return promise3(value1, value2)
// }



// const fireRequest = async (e) => {
//     e.preventDefault()

//     let response = axios.get("https://jsonplaceholder.typicode.com/posts/900");
//     console.log(response.data);
// };

button.addEventListener("click", fireRequest);
