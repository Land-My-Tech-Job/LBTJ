// const button = document.querySelector("button");

// button.addEventListener("click", fireRequest);

// function fireRequest(e) {
// e.preventDefault();
// const data = { name: 'My Name' };

// const fetchData = {
//     method: 'POST',
//     body: data,
//     headers: new Headers(),
// };

// fetch("https://jsonplaceholder.typicode.com/posts", fetchData)
// .then(response => {
//     if(!response.ok) {
//         throw Error(`Something went wrong, status ${response.status}`);
//     }
//     return response.json();
// })
// .then(response => {
//     console.log(response)
// })
// .catch(err => {
//     console.log(err)
// })
// }

// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, 'foo');
// });

// Promise.all([promise1, promise2, promise3]).then((values) => {
//   console.log(values);
// });



// function loadCountries(e) {
//     e.preventDefault();
//     const searchTerm = document.querySelector("#country-name-input").value;
    
//     fetch("https://restcountries.com/v3.1/name/" + searchTerm)
//     .then((response) => {
//         if(!response.ok) {
//             throw Error(`Something went wrong, status ${response.status}`);
//         }
//         return response.json();
//     })
//     .then((countries) => {
//         countries.forEach((country) => {
//             console.log(country);
//         });
//     })
//     .catch((error) => {
//         console.log(error);
//     });
// }


document.querySelector("form").addEventListener("submit", loadCountries);

async function loadCountries(e) {
    e.preventDefault();
    const searchTerm = document.querySelector("#country-name-input").value;
    try {
        const res = await axios.get("https://restcountries.com/v3.1/name/" + searchTerm)
        const countries = res.data;
        countries.forEach((country) => {
            let capitalText = document.getElementById('country-container')
            capitalText.textContent = country.capital[0]
            console.log(country.capital[0]);
        });
    } catch (error) {
        console.log(error);
    }
}