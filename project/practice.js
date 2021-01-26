const personalMovieDB = {
    count: 0,
    movies:{},
    actors:{},
    genres:[],
    private: false,
    start: function() {
      personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");

      while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
          personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
      }
    },
    rememberMyFilms: function() {
      for (let i = 0; i < 2; i++) {
          const a = prompt('Один из последних просмотренных фильмов?', ''),
                b = prompt('На сколько оцените его?', '');
      
          if (a != null && b != null && a != '' && b != '' && a.length < 50) {
              personalMovieDB.movies[a] = b;
          } else {
              i--;
          }
      }
    },
    detectPersonalLevel: function() {
      if (personalMovieDB.count < 10) {
          console.log('Просмотренно довольно мало фильмов');
      } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
          console.log('Вы классический зритель');
      } else if (personalMovieDB.count >= 30) {
          console.log('Вы киноман');
      } else {
          console.log('Произошла ошибка');
      }
    },
    showMyDB: function(hidden) {
      if (!hidden) {
          console.log(personalMovieDB);
      }
    },
    writeYourGenres: function() {
      for (let i = 1; i <= 3; i++) {
          let geners = prompt(`Ваш любимый жанр под номером ${i}`);
          if (geners == '' || geners == null) {
              i--;
          } else {
              personalMovieDB.genres[i - 1] = geners;
          }
      }
      personalMovieDB.genres.forEach((item, i) => {
          console.log(`Любимый жанр ${i + 1} это ${item}`);
      });
    },
    toggleVisibleMyDB: function() {
      if (personalMovieDB.private) {
          personalMovieDB.private = false;
      } else {
          personalMovieDB.private = true;
      }
    }
};

personalMovieDB.start();

personalMovieDB.rememberMyFilms();

personalMovieDB.detectPersonalLevel();

personalMovieDB.toggleVisibleMyDB(personalMovieDB.private);

personalMovieDB.showMyDB(personalMovieDB.private);

personalMovieDB.writeYourGenres();

//TEST//

// toggleVisibleMyDB: function(hidden) {
//     if (!hidden) {
//         personalMovieDB.private = true;
//         console.log(personalMovieDB.private);
//     } else if (hidden) {
//         personalMovieDB.private = false;
//         console.log(personalMovieDB.private);
//     }
// }

// writeYourGenres: function() {
//     for (let i = 1; i <= 3; i++) {
//         personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
//         if (personalMovieDB.genres[i - 1] == '' || personalMovieDB.genres[i - 1] == null) {
//             i--;
//         } else {
//             console.log('Done');
//         }
//     }
//     personalMovieDB.genres.forEach(function(item, i) {
//         console.log(`Любимый жанр ${i + 1} это ${item}`);
//     });
// }