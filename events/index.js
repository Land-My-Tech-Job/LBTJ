// practice problem 5 solution
/*
    Mouse Coordinate Tracker

Add a div with the id="coords". Using document.addEventListener('mousemove', …), update the text of the div with the x and y coordinates of the mouse cursor.
You will need to nest your code in a callback to a DOMContentLoaded event listener.
*/
document.addEventListener('DOMContentLoaded', () => {

    let coords = document.getElementById('coords');
    
    document.addEventListener('mousemove', (e) => {
    coords.innerHTML = `x: ${e.clientX}, y: ${e.clientY}`;
    });
    
});

// document.addEventListener("DOMContentLoaded", () => {
//     let ul = document.getElementById("unordered-list")

//     ul.addEventListener("click", (event) => {
//         // console.log(ul.textContent.toUpperCase())
//         event.target.textContent = event.target.textContent.toUpperCase()
//     })

//     // let ol = document.getElementById("ordered-list")

//     // ol.addEventListener("click", (event) => {
//     //     console.log("ol sees the click")
//     // })

//     // let orderedFirst = document.getElementById("ordered-first")

//     // orderedFirst.addEventListener("click", (event) => {
//     //     console.log("ordered first sees the click")
//     // })

//     // let body = document.querySelector("body")
//     //     body.addEventListener("click", (event) => {
//     //     console.log("body sees the click")
//     // })
// })


// document.addEventListener("DOMContentLoaded", () => {
//     let p = document.querySelectorAll("p")
//     // window.alert(`${p}`)
//     for(let e of p ) {
//         console.log(e)
//     }
// })
// element.addEventListener('eventToBeWaitedOn', callbackFn)

// document.addEventListener("DOMContentLoaded", () => {
//     // querySelector() is a method that pulls the first instance of 
//     // the element in the parameter/parentheses of querySelector 
//     // and returns its content
//     let favoriteButton = document.querySelector("#favoriteButton")
//     favoriteButton.addEventListener("click", () => {
//     window.alert("You clicked on my favorite button!")
//     })
// })

// // create an eventListener for the document to make sure that element has loaded
// document.addEventListener('DOMContentLoaded', () => {
//     // find and assign the h1 element into a variable
//     let header1 = document.querySelector('h1')
//     header1.addEventListener('mouseover', () => {
//         window.alert('you moused over the heading')
//     })
    
// })


// document.addEventListener("DOMContentLoaded", () => {
//     let form = document.querySelector("form")
//     form.addEventListener("submit", (event) => {
//     console.log("You have submitted your form")
//     event.preventDefault()
//     })
// })



// single thread synchronous -> execute fn1 > waits for fn1 to finish > execute fn2 > waits for fn2 to finish > executes fn3 > .... 
    // think as a narrow escalator
// single thread asynchronous -> execute fn1 > send a message to event loop while executing fn2 > 
    // wider escalator
        // if run asynchronously function will run without stopping the event loop


/*
    * change the .textContent
    * of any clicked-on element
        * find all clicked-on element
        * assign to variable
    * change content to uppercase   
*/

