'use strict';

//ПРАКТИКА 1//

//const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

//const personalMovieDB = {
//    count: numberOfFilms,
//    movies:{},
//    actors:{},
//    genres:[],
//    private: false
//};

//const a = prompt("Один из последних просмотренных фильмов?", ""),
//        b = prompt("На сколько оцените его?", ""),
//        c = prompt("Один из последних просмотренных фильмов?", ""),
//        d = prompt("На сколько оцените его?", "");

//personalMovieDB.movies[a] = b;
//personalMovieDB.movies[c] = d;

//console.log(personalMovieDB);

//УСЛОВИЯ//

//if (4==4) {
//    console.log('Ok!');
//} else {
//    console.log('Error');
//}

//const num = 50;
//if (num < 49) {
//    console.log('Error');
//} else if (num > 100) {
//    console.log('Много');
//} else {
//    console.log('Done');
//}

//const num1 = 50;
//(num1 === 50) ? console.log('Ok!') : console.log('Error'); //тернарный оператор

//const num2 = 30;
//switch (num2) {
//    case 49: // строгое сравнение
//        console.log('No');
//        break;
//    case 100:
//        console.log('More');
//        break;
//    case 30:
//        console.log('Yes');
//        break;
//    default: // значение по умолчанию
//        console.log('Not this time');
//        break;
//}

//ЦИКЛЫ//

//let num = 50;
//while (num <= 55) {
//    console.log(num);
//    num++;
//}

//do {
//    console.log(num);
//    num++;
//}
//while (num < 55);

//for (let i = 1; i < 8; i++) { // цикл итерации
//    console.log(i);
//}

//let num3 = 50;
//for (let i = 1; i < 8; i++) { // цикл итерации но для переменной num3, работает по условию 7 раз пока i < 8 для num3++
//    console.log(num3);
//    num3--;
//}

//for (let i = 1; i < 10; i++) { // цикл итерации но для переменной num3, работает по условию 7 раз пока i < 8 для num3++
//    if (i === 6) {
//      //break; 
//      continue; 
//    }
//    console.log(i);
//}

//ПРАКТИКА 2//

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    private: false
};

// for (let i = 1; i < 3; i++) { // цикл итерации
//     const a = prompt("Один из последних просмотренных фильмов?", ""),
//           b = prompt("На сколько оцените его?", "");
//         if (a === "" || b === "") {
//             i = 0;
//             console.log('Одна из строк пустая');
//             continue;
//         } else if (a === null || b === null) {
//             i = 0;
//             console.log('Кнопка отмены');
//             continue;
//         } else if (a.length > 50 || b.length > 50) {
//             i = 0;
//             console.log('Много символов');
//             continue;
//         } else {
//             i = 3;
//             personalMovieDB.movies[a] = b;
//             console.log('Успех!');
//             break;
//         }
// }

let num = 1;
do {
    const a = prompt("Один из последних просмотренных фильмов?", ""),
          b = prompt("На сколько оцените его?", "");
          if (a === "" || b === "") {
            num = 0;
            console.log('Одна из строк пустая');
            continue;
        } else if (a === null || b === null) {
            num = 0;
            console.log('Кнопка отмены');
            continue;
        } else if (a.length > 50 || b.length > 50) {
            num = 0;
            console.log('Много символов');
            continue;
        } else {
            num = 3;
            personalMovieDB.movies[a] = b;
            console.log('Успех!');
            break;
        }
}
while (num < 3);

// let num = 1;
// while (num < 3) {
//     const a = prompt("Один из последних просмотренных фильмов?", ""),
//           b = prompt("На сколько оцените его?", "");
//           if (a === "" || b === "") {
//             num = 0;
//             console.log('Одна из строк пустая');
//             continue;
//         } else if (a === null || b === null) {
//             num = 0;
//             console.log('Кнопка отмены');
//             continue;
//         } else if (a.length > 50 || b.length > 50) {
//             num = 0;
//             console.log('Много символов');
//             continue;
//         } else {
//             num = 3;
//             personalMovieDB.movies[a] = b;
//             console.log('Успех!');
//             break;
//         }
// }

for (let m = 1; m < 2; m++) {
    console.log(numberOfFilms);
    if (numberOfFilms < 10 ) {
        console.log('Просмотренно довольно мало фильмов');
        break;
    } else if (numberOfFilms > 10 && numberOfFilms < 30) {
        console.log('Вы классический зритель');
        break;
    } else if (numberOfFilms > 30) {
        console.log('Вы киноман');
        break;
    } else {
        console.log('Произошла ошибка');
        break;
    }
}
console.log(personalMovieDB);