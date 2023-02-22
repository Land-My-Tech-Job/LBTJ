let names = ["Ben", "Elle", "Matt", "Corey", "Joanne"];

//ES5;

//ES6;
names.forEach((name) => {
// console.log(name);
});
// console.log(`some var is ${somvar}`)

// for (let i = names.length - 1; i < names.length; i++) { // starts at last element
//     console.log(names[i]);
// }

const printName = (name) => console.log(name);
function printName2(name) {
    // console.log(name)
}

// names.forEach(printName2);

names.forEach(function (name, index) {
    // console.log(`${name} ${index}`);
    });   

// // index  1    2    3  
// let a = ['a', 'b', 'c']

// console.log(a[0])


// // let idAndTitlePairs = [];
    
//     // films.forEach((film) => {
//     // idAndTitlePairs.push({ id: film.id, title: film.title });
//     // });

// // console.log(idAndTitlePairs)

// let idAndTitlePairs = films.map(film => {
//     return { id: film.id, title: film.title };
// });

// // let arr = [1, 2, 3];

// // let doubled = arr.map((el) => {
// //     return el * 2;
// // });

// let doubled2 = arr.map((el) => el * 2);

// console.log(`${doubled}  ${doubled2}`)
// console.log(doubled + ' and ' + doubled2)


// let bestFilms = [];

// films.forEach((film) => {
//     if (film.rating === 5.0) {
//         bestFilms.push(film);
//     }
// });

// let arr = [1, 2, 3, 4, 5];
// arr.filter((el) => {
//     return el % 2 === 0;
// });

let films = [
    {
    id: 70111470,
    title: "Die Hard",
    boxart: "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: 4.0,
    },
    {
    id: 654356453,
    title: "Bad Boys",
    boxart: "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: 5.0,
    },
    {
    id: 65432445,
    title: "The Chamber",
    boxart: "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: 4.0,
    bookmark: [],
    },
    {
    id: 675465,
    title: "Fracture",
    boxart: "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: 5.0,
    bookmark: [{ id: 432534, time: 65876586 }],
    },
]

// forEach()
// map()
// filter()

films.forEach(function(film){
    // console.log(film.title)
})

films.forEach(film => {
    // console.log(film.title)
})

let title = films.map(film => film.title)
// console.log(title)

let titles = films.filter(film => film.title !== '')
// titles.forEach(title => console.log(title.title))


let bestFilmIds = films
.map((film) => film.id)
.filter((film) => film.rating === 5.0)

let bst = films.map(film => {
    return {id: film.id, film: film.title}
}).filter((film) => {
    return film.id < 100000
})

let days = ['monday', 'tuesday','wednesday', 'thursday', 'friday', 'saturday', 'sunday' ]
let temps = [70, 72, 73, 76, 72, 78, 68]
let tooCold = 73

let temp = []
// what days are too cold
// first check map
// check what days are less than 73
let tooColdDays = temps.map((element, index) => {
    return {day: days[index], temp: element}
}).filter((element)=> {
    return element.temp < tooCold
})

// tooColdDays.forEach((el)=> console.log(`${el.day} is ${el.temp} degree`))








/**
 * Divides a number by a string
 * 
 * @param {string} str - A string with any value
 * @param {number} n - A number with any value
 * @returns {NaN} - Not a Number, since this is an invalid operation in JavaScript
 */

let str = 'somestr'
let num = 10

console.log(divideByString(str, num))
function divideByString(str, n) {
    return str/n
}

