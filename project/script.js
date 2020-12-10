'use strict'
//ДИНАМИЧЕСКАЯ ТИПИЗАЦИЯ В JS//

// console.log(typeof(String(null)));

// console.log(typeof(5 + ''));

// console.log(typeof(Number('4')));

// console.log(typeof(+'4'));

// console.log(typeof(parseInt('15px', 10)));

// let switcher = null;
// if (switcher) {
//     console.log('Working...');
// }

// let switcher = 1;
// if (switcher) {
//     console.log('Working...');
// }

// console.log(typeof(Boolean('4')));

// console.log(typeof(!!'4'));

//ЗАДАЧИ С СОБЕСЕДОВАНИЙ НА ПОНИМАНИЕ ОСНОВ//
// let x = 5;
// alert(x++); // 5
// постфиксная форма записи возвращает первоначальное значение а только потом прибавляет ему по еденице

// console.log([ ] + false - null + true);
// console.log([] + false); // false, пустой массив эквивалентен пустой строке [] = ''
// console.log([] + true); // true
// console.log(typeof([] + false)); //  string
// console.log([] + false - null);  // string - null = NaN
// console.log([] + false - null + true); // NaN

// let y = 1; let x = y = 2; alert(x); // = 2 последовательное присваивание справа на лево

// console.log([] + 1 + 2); // 12 пустая строка + 1 = '1' + 2 = '12'

// alert( "1"[0]); // 1 потому что это не массив а вывод индекса под номером 0 из строки
// alert( "15523232"[4]); // 3

// console.log(2 && 1 && null && 0 && undefined); // null оператор И всегда запинается на лжи, идет слева на право, натыкается на первый false и дальше код уже не срабатывает.
// console.log(2 && 1 &&  0 && undefined && null); // 0
// console.log(2 && 1 &&  undefined && null && 0); // undefined
// console.log(2 && 1); // 1
// console.log(2 && 3); // 3
// console.log(2 && 5 && 3 && 2 && 1 && 5); // оператор И дает вывод последнего true.
// console.log(2 && 1 && null); // null
// console.log(2 && 1 && null && 0); // null
// console.log(2 && 1 && 0); // 0

// разница между выражениями !!( a && b ) === (a && b); //false потому что !! это НЕ двойное отрицание это динамическая типизация - перевод в булинове значение.

//alert(null || 2 && 3 || 4); // 3 оператор ИЛИ всегда запинается на первом true, идет слева на право, натыкается на первый true и дальше код не срабатывает.
// см. таблицу приоритета операторов, в данном примере логическое И выполнится первым так как имеет приоритет перед логическим ИЛИ.

// const a = [1, 2, 3];
// const b = [1, 2, 3];
// console.log(a == b); // false потому что это две разные переменные хоть они и идентичны но это разные переменные.

// alert(+'Infinity'); // Infinity(с большой буквы!) потому что Infinity это число, через унарный плюс строка превратится в число аналогично (+'4').
// console.log(typeof(Infinity)); // number

// console.log('Ёжик' > 'яблоко'); // false - символьное и регистровое сравнение, см. таблицу юникода.
// console.log('яблоко' > 'Ёжик'); // true

// console.log(0 || "" || 2 || undefined || true || falsе); // 2 - потому что или запинается на первом true.

//ПОЛУЧЕНИЕ ЭЛЕМЕНТОВ СО СТРАНИЦЫ//

// document. - существует только внутри браузера.

// const box = document.getElementById('box'); // аргумент для getElementById задается в ковычках, аналогично html.
// console.log(box); // команда выведет в консоль браузера элемент с id box.

// const btns = document.getElementsByTagName('button'); // получает все элементы с тегом button в виде псевдомассива(не имеет методов), записывать в ковычках.
// // Даже если элемент будет единственный - он будет выводится в виде псевдомассива.
// console.log(btns); // веведет в консоль html коллекцию в виде псевдомассива.
// console.log(btns[0]); // первый элемент в консоль из коллекции.

// const btn = document.getElementsByTagName('button')[1]; // получить второй элемент из псевдомассива.

// const circles = document.getElementsByClassName('circle'); // по названию класса, в ковычках, работает точно так же как и метод по тегам.

// const hearts = document.querySelectorAll(); // принимает аргументы в виде любых селекторов.

// // основных видов селекторов всего несколько:
// const hearts = document.querySelectorAll(*); // любые элементы
// const hearts = document.querySelectorAll(div); // элементы с таким тегом
// const hearts = document.querySelectorAll(#id); // элементы с данным id
// const hearts = document.querySelectorAll(.class); // элементы с данным классом
// const hearts = document.querySelectorAll([name="value"]); // селекторы на атрибут
// const hearts = document.querySelectorAll(:visited); // псевдоклассы, остальные разные условия на элемент

// // селекторы можно комбинировать, записывая последовательно, без пробела:
// // .c1.c2 - элементы одновременно с двумя классами c1 и c2.
// // a#id.c1.c2:visited - элемент a с данным id, классами c1 и c2, и псевдоклассом visited.

// // // отношения 
// // В CSS предусмотренно 4 вида отношений между селекторами:
// // div p - элементы p, являющиеся потомками div.
// // div > p - только непосредственные потомки.

// // и два более редких:
// // div ~ p - правые соседи: все p на том же уровне вложенности, которые идут после div.
// // div + p - первый правый сосед: p на том же уровне вложенности, который идет сразу после div.
// // (если есть).

// const hearts = document.querySelectorAll('.heart');
// console.log(hearts); // веведет в консоль html коллекцию в виде псевдомассива, для querySelectorAll действует метод forEach.

// hearts.forEach(item => { // вывод каждого элемента по отдельности через callback ф-цию.
//     console.log(item)
// });

// const oneHeart = document.querySelector('.heart'); // запрашивает только ПЕРВЫЙ элемент данного селектора(класс, тег, айди, и т.д.).
// console.log(oneHeart); // выведет первый элемент с классом .heart

// const firstDiv = document.querySelector('div'); 

// ДЕЙСТВИЯ С ЭЛЕМЕНТАМИ НА СТРАНИЦЕ //

// const box = document.getElementById('box'),
// 	  btns = document.getElementsByTagName('button'),
// 	  circles = document.getElementsByClassName('circle'),
// 	  wrapper = document.querySelector('.wrapper'),
// 	  hearts = wrapper.querySelectorAll('.heart'),
// 	  oneHeart = wrapper.querySelector('.heart');

// box.style.backgroundColor = 'blue'; // все значения передаются в виде строки
// box.style.width = '500px';
// запись в виде ccsText для сразу нескольких параметров стилей:
//box.style.cssText = 'background-color: green; width: 100px';
// box.style.cssText = `background-color: blue; width: 500px; height: ${num}px`;

// btns[1].style.borderRadius = '100%';

// circles.style.backgroundColor = 'red'; // такая запись не сработает, потому что идет обращение к псевдомассиву
// circles[0].style.backgroundColor = 'red'; // обращение к конкретному элементу псевдомассива

// для обращения сразу к нескольким элементам псевдомассива можно использовать цикл или ф-цию forEach(только для querySelectorAll)
// for (let i = 0; i < hearts.length; i++) {
// 	hearts[i].style.backgroundColor = 'blue';
// }

// hearts.forEach(item => {
// 	item.style.backgroundColor = 'yellow';
// });

// создание элементов при помощи JS

// const div = document.createElement('div'); // Элемент существует только в виде скрипта

// const text = document.createTextNode('Тут был я'); // создание текстового узла

// div.classList.add('black'); // добавление класса к элементу

// document.body.append(div); // в тег родителя body ,в его конец добавляется элемент div

// document.querySelector('.wrapper').append(div); // добавление в конец .wrapper элемента div без использования переменной

// wrapper.prepend(div); // добавление элемента в начало родителя

// hearts[1].before(div); // вставить div перед hearts[1]

// hearts[1].after(div); // вставить div после hearts[1]

// circles[0].remove(); // удалить элемент

// hearts[0].replaceWith(div); // заменить элемент hearts[0] элементом div


// Устаревшие конструкции:

// wrapper.appendChild(div); // добавление элемента в конец родителя

// wrapper.insertBefore(div, hearts[2]); // вставить перед *первый аргумент - ЧТО, второй - КУДА(перед чем)

// wrapper.removeChild(hearts[1]); // удалить элемент

// wrapper.replaceChild(div, hearts[0]); // заменить элемент hearts[0] элементом div

// Редактирование элемента:

// div.innerHTML = 'Hello World'; // вставить текст внутрь элемента div

// div.innerHTML = '<h1>Hello World</h1>'; // вставить текст с заголовком h1 внутрь элемента div

// div.textContent = "Hi"; // textContent работает только с текстом, если вставить тег то он отобразится в виде строки

// когда предпологается использовать только текст то используется textContent, для работ со структурой - innerHTML(
// можно добавлять как HTML структуры так и скрипты)

// Комбинация методов:

// div.innerHTML = '<h1>Hello World</h1>';
// div.insertAdjacentHTML('beforebegin', '<h2>Hello</h2>'); // вставить HTML код перед элементом div(КУДА, ЧТО)

// div.insertAdjacentHTML('afterbegin', '<h2>Hello</h2>'); // вставить HTML код в начало элемента div(КУДА, ЧТО)

// div.insertAdjacentHTML('beforeend', '<h2>Hello</h2>'); // вставить HTML код в перед концом элемента div(КУДА, ЧТО)

// div.insertAdjacentHTML('afterend', '<h2>Hello</h2>'); // вставить HTML код после конца элемента div(КУДА, ЧТО)

// также можно вызывать элементы не из document а из уже вызванного элемента 
// чтобы конкретнее опеределить внутри чего искать нужный элемент

// const wrapper = document.querySelector('.wrapper'),
// 	     hearts = wrapper.querySelectorAll('.heart'),
// 	     oneHeart = wrapper.querySelector('.heart');