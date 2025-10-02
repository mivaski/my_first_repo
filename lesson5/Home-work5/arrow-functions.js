const sum = (args) =>
    args.reduce((acc, value) =>
        acc + Number(value), 0);

const numArray = [1, -88, 10, 55, 105];
const numStray = ['15', '2', true, '10', '5'];

console.log(sum(numArray));
console.log(sum(numStray));


const sortAlphabetically = (arr) => arr.sort();

const fruits = ['Pear', 'Banana', 'Pineapple', 'Guava' ];

const sortedFruits = sortAlphabetically(fruits);
console.log( 'Sorted Strings:', sortedFruits);
