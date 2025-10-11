function sum(args: (string | boolean | number )[]): number {
    return args.reduce(function (acc: number, value: string | number | boolean): number {
        const num = Number(value);
        return isNaN(num) ? acc : acc + num;
    }, 0);
}

const numArr = [1, -88, 10, 55, 105];
const numStr = ['15', '2', true, '10', '5'];
const mixArray = [23, 'two', false, 'something'];


console.log(sum(numArr));
console.log(sum(numStr));
console.log(sum(mixArray));

// function sortAlphabetically(arr) {
//     return arr.sort();
// }
function sortAlphabetically(arr: string[]): string[] {
    return arr.sort();
}

const fruits = ['Pear', 'Banana', 'Pineapple', 'Guava' ];

const sortedFruits = sortAlphabetically(fruits);
console.log( 'Sorted Strings:', sortedFruits);
