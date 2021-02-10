
'use strict';

// Передача по ссылке или по значению Spread

let a = 5,
    b = a;

    b = b + a;
console.log(b);
console.log(a);

/* const obj = {
    a: 5,
    b: 1
};

const copy = obj; // передача данных по ссылке

copy.a = 10;

console.log(copy);
console.log(obj); */

function copy(mainObj) {
    let objCopy = {};
    let key;
    
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }
    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copy(numbers);

newNumbers.a = 10;

/* console.log(newNumbers);
console.log(numbers); */

const add = {
    d: 17,
    e: 20
};

console.log(Object.assign(numbers,add));
const clone = Object.assign({}, add);

clone.d = 20;

/* console.log(add);
console.log(clone); */

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'adadadsdsds';
console.log(newArray);
console.log(oldArray);