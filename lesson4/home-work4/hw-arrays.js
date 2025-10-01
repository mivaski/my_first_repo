
// Підготувати файл arrays.js, у якому додати 4 масиви, по 1 на кожен
// базовий тип (рядок, число, boolean, any), та виконати вивчені операції над
//  ними включно з перебором (forEach() та map())

console.log('-----Масив чисел--------');

const arr = [];
arr.push(12);
arr.push(10);
arr.push(10.25);
arr.push(103);

const element = arr.pop();
console.log(element, arr, arr.length);
const sum = arr.reduce((acc, item) => acc + item, 0);
console.log(sum);

arr.forEach(num => console.log(`Number: ${num}`));
const double = arr.map(num => num * 2);
console.log('Numbers x2:', double);


console.log('-----Масив string-ів--------');

const fruits = ['apple', 'pineapple', 'banana', 'cherry', 'pear'];

const startsWithP = fruits.filter(fruit => fruit.startsWith('p'));
console.log('Fruits starting with "p":', (JSON.stringify(startsWithP)));

fruits.forEach((fruit, index) => {
    console.log(`Fruit ${index + 1}: ${fruit}`);
});


console.log('-----Масив boolean--------');

const flags = [true, false, true, false];
flags.forEach((flag, index) => console.log(`Flag ${index + 1}: ${flag}`));
const toggled = flags.map(flag => !flag);
console.log('Inverssion:', toggled);


console.log('-------Масив типу any-------');

const mixed = ['text', 42, true, null];
mixed.forEach((item, i) => console.log(`Elemnt ${i + 1}:`, item));
const types = mixed.map(item => typeof item);
console.log('Types of elements:', types);
