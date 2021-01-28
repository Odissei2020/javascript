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