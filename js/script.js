/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

'use strict';

/* if (4 == 9) {
    console.log('Ok!');
} else {
    console.log('Error');
}



if (num<49) {
    console.log('Error');
} else if (num > 100) {
    console.log('Mного');
} else {
    console.log('Ok!');
}

(num === 50) ? console.log('Ok!') : console.log('Error'); */

const num = 'Hello';

switch  (num) {
    case 'NO':
        console.log('Неверно');
        break;
    case 'You':
        console.log('Неверно');
        break;
    case 'Hello':
        console.log('В точку');
        break;
    default:
        console.log('Не в этот раз');
        break;   
}