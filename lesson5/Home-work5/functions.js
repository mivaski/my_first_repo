//Сформувати файл functions.js, у якому створити функцію, яка приймає масив і робить операцію
// арифметичного додавання елементів і повертає результат операції. Після цього створити 2 масиви
// (один масив рядків, інший масив чисел) і передати їх як аргумент функції.
// Результат роботи функції вивести в консоль.

function sum (args) {
    return args.reduce(function (acc, value) {
        return acc + Number(value);
    }, 0);
}

const numArr = [1, -88, 10, 55, 105];
const numStr = ['15', '2', true, '10', '5'];
//const numStr = ['tree', '2', true, 'two', '5']; виведе NaN в термінал

console.log(sum(numArr));
console.log(sum(numStr));


function sortAlphabetically(arr) {
    return arr.sort();
}

const fruits = ['Pear', 'Banana', 'Pineapple', 'Guava' ];

const sortedFruits = sortAlphabetically(fruits);
console.log( 'Sorted Strings:', sortedFruits);

