"use strict";
 //Функции//
//  function showFirstMessage() {
//     console.log('Hello World!')
//  }
//  showFirstMessage();

// function showFirstMessage(text) {
//     console.log(text)
// }
// showFirstMessage('Hello World!');

// let num = 20;
// function showFirstMessage(text) {
//     console.log(text)
//     num = 10;
// }
// showFirstMessage('Hello World!');
// console.log(num);

// let num = 20;
// function showFirstMessage(text) {
//     console.log(text)
//     let num = 10;
// }
// showFirstMessage('Hello World!');
// console.log(num);

// function calc (a,b) {
//     return (a + b);
//     console.log('unreacheble after return');
// }
// console.log(calc(1,2));
// console.log(calc(3,4));
// console.log(calc(5,6));

// let num = 10;
// function ret() {
//     const num = 50;
//     return num;
// }
// const innerNum = ret();
// console.log(innerNum);

// console.log(calc(3,4));
// function calc(a,b) { // function declaration
//     return (a + b);
// }

// const logger = function () {
//     console.log('Hello');  // function expression
// };
// logger();

// let calc = (a, b) => a + b ;
// calc(3, 4);

// const calc = a => a + b ;
// calc(3, 4);

// const calc = (a, b) => { return a + b};
// calc(3, 4);

// const calc = (a, b) => {
//     console.log('Hello');
//     return a + b;
// };
// calc(3, 4);

//СВОЙСТВА И МЕТОДЫ СТРОК И ЧИСЕЛ//

// const str = 'test';

// console.log(str.toUpperCase());
// console.log(str);

// const fruit = "Some apple";
// console.log(fruit.indexOf('apple'));

// const fruit = "Some apple";
// console.log(fruit.indexOf('q'));

// const logg = "Hello world";
// console.log(logg.slice(6, 10));

// const logg = "Hello world";
// console.log(logg.slice(6, 11));

// const logg = "Hello world";
// console.log(logg.slice(6));

// const logg = "Hello world";
// console.log(logg.slice(-5, -1));

// const logg = "Hello world";
// console.log(logg.substring(-6, 10));

// const logg = "Hello world";
// console.log(logg.substr(1, 3));

// const num = 12.2;
// console.log(Math.round(num));

// const test = '12.2';
// console.log(parseInt(test));

// const test = '12.2';
// console.log(parseFloat(test));

//ПРАКТИКА 3//

let numberOfFilms;

function start () {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
}

start();

const personalMovieDB = {
      count: numberOfFilms,
      movies:{},
      actors:{},
      genres:[],
      private: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = prompt('На сколько оцените его?', '');
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотренно довольно мало фильмов');
    } else if (personal.personalMovieDB.count >= 10 && personal.personalMovieDB.count < 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
}

detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.private);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}

// function writeYourGenres() {
//     let num = 1;
//     const a = prompt(`Ваш любимый жанр под номером ${num++}`),
//           b = prompt(`Ваш любимый жанр под номером ${num++}`),
//           c = prompt(`Ваш любимый жанр под номером ${num++}`);

//     personalMovieDB.genres[0] = a;
//     personalMovieDB.genres[1] = b;
//     personalMovieDB.genres[2] = c;
// }

writeYourGenres();