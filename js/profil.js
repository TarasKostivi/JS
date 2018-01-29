
// Присвоення
// 1
a += 10, b *= 18, c -= 10;
x += a, y *= z, i *= 5 * y;

// 2
y *=y;

// Арифметичні оператори

// a

let a = 5; console.log(a++);
let a = 5; console.log(++a);

// b

let x =5;
x%2 === 0 ? console.log('Кратне') :  console.log('Некратне');

// Усмовні операторы

// 1
let hidd;

if (hidd == 'hidden') {
    hidd = 'visible';
} else {
    hidd = 'hidden';
}

// 2

let num = 1;

if (!num) {
    num = 1;
} else if (num < 0) {
    num = 'less then zero';
} else {
    num *= 10;
}

// Switch Case

let command = 'block';

switch (command) {
    
    case 'block' : console.log('block'); break;
    case 'none' : console.log('none'); break;
    case 'inline' : console.log('inline'); break;
    default: console.log('other');
}

// Переобразование типов

// 1

// оператор || запинаєця на true (0 false)
let a = 0 || 'string';
// виведе останнє true (запиняєця на false)
let a = 1 && 'string';
// запинаєця на true 
let a = null || 25;
// false
let a = null && 25;
// запинаєця на true
let a = null || 0 || 35;
// запинаєця на першому false
let a = null && 0 && 35;


// 2

// 2612 p - з ліва на право зпростиця сума 12 + 14 і піде складання 26 + '12'
12 + 14 + '12'
// 4 - арифметична дія крім 0 приводять до числових
3 + 2 - '1'
// 321 - Рядок з ліва на право пройде конкатенація рядка
'3' + 2 - 1
// 3 - так як true = 1
true + 2
// 11 - так як + звертаєця тип рядків в число
+ '10' + 1
// NaN - складення Undefined
undefined + 2
// 5 так як null = 0
null + 5
// NaN - cкладення числа true і несила undefined
true + undefined


// Задача на цикли

// 1
let str 'I am in easycode', newStr = str [0].toUpperCase();

for ( let i = 1; str.length - i > 0; i++) {
    if (str[i].charCodeAt() == 32 ) {

        newStr += str[i] + str[i+1].toUpperCase();
        i++;
    } else {

        newStr += str[i];
    }
}


console.log(newStr);

// 2

let str2 = 'tsed eht ma i', newStr2 = '';

for (let i = str2.length; i--) {
    newStr2 += str2[i];
}

// 3

let numFact = 10, fact = 1;

while (numFact) {
    fact *= numFact;
    numFact--;
}

console.log(fact);

// 4

let strScore = 'Считаем до 10-ти';

for (let score = 1; stringScore += '' + score, score++ < 10;);

console.log(strScope);

// 5

let str = 'JavaScript is a pretty good lenguage', newStr = str[0].toUpperCase();

for (let i=1; str.length - i > 0; i++){

    if ( str[i].charCodeAt() == 32) {
    
    newStr += str [i+1].toUpperCase();
    i++;

    } else {

    newStr += str[i];

    }
}

console.log(newStr);

// 6

let amounth = 17, strOdd ='';

for (let scope = 0; scope++ < amounth;) {
    strOdd += scope%2 ? scope : '';
}

console.log(strOdd);


