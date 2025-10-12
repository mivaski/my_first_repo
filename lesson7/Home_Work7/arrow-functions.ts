export {};
const sum = (args: (string | number | boolean)[]):number =>
    args.reduce(function (acc: number, value: string | number | boolean): number {
        const num = Number(value);
        return isNaN(num) ? acc : acc + num;
    }, 0);

const numArray = [1, -88, 10, 55, 105];
const numStray = ['15', '2', true, '10', '5'];
const mixArray = [23, 'two', false, 'something'];

console.log(sum(numArray));
console.log(sum(numStray));
console.log(sum(mixArray));


// const sortAlphabetically = (arr) => arr.sort();
const sortAlphabetically = (arr: string[]): string[] => arr.sort();

const fruits = ['Pear', 'Banana', 'Pineapple', 'Guava' ];

const sortedFruits = sortAlphabetically(fruits);
console.log( 'Sorted Strings:', sortedFruits);
