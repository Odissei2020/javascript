'use strict';

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      hearts = document.querySelectorAll('.heart'),
      oneHeart = document.querySelector('.heart'),
      wrapper = document.querySelector('.wrapper');

/* box.style.backgroundColor = 'blue';
box.style.width = '500px'; */

box.style.cssText = `background-color: blue; width: 500px`;

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

/* for (let i = 0; i < hearts.length; i++) {
    hearts[i].style.backgroundColor = 'blue';
} */

hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});

const div = document.createElement('div');

div.classList.add('black');
/* document.querySelector('.wrapper').append(div); 
если переменная используется один раз в коде*/
 wrapper.append(div);
/* wrapper.appendChild(div); тоже самое что и append но старое */

/* wrapper.prepend(div); метот вставки объекта вначале блока Н:wrapper*/

/* hearts[0].before(div); метод before публикует объект вначале блока Н:hearts*/
/* wrapper.insertBefore(div, hearts[1]); старый метод аналог before */

/* hearts[0].after(div); метод after публикует объект после блока Н:hearts*/

/* circles[0].remove();  метод удаляет элемент*/
/* wrapper.removeChild(hearts[1]);  старый метод remove*/

/* hearts[0].replaceWith(circles[0]); Заменяет элементы Н: hearts на circles */
/* wrapper.replaceChild(circles[0], hearts[0]);  Старое, тоже самое что и replaceWith*/

/* div.innerHTML = '<h1>Hello World</h1>'; метод Вставляет текст и hTML код в блок*/
/* div.textContent = "Hello"; метод Вставляет текст в болк*/
div.innerHTML = '<h1>Hello World</h1>';
div.insertAdjacentHTML('afterend', '<h2>Привет</h2>');