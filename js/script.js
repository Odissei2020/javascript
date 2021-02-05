
'use strict';

// Объекты ассоциативные массивы

/* let counter = 0; */

const options = {
    name: `test`,
    width: 1024,
    height: 1024,
    color: {
        border: `black`,
        bg: `red`
    },
    makeTest: function() {
        console.log("Test");
    }
};

options.makeTest();
console.log(Object.keys(options).length);


/* console.log(options.color.bg);
console.log(options.color[`border`]);
delete options.width;
console.log(options); */

/* for (let key in options) {
    if (typeof(options[key]) === `object`) {
        for (let i in options [key]) {
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
            counter++;
        }
    } else {
        console.log(`Свойства ${key} имеет значение ${options[key]}`);
        counter++;
    }   
}
console.log(counter); */