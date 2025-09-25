const a = 2;
let b = 5;
let c = '2';
let d = true;
const e = null;
const f = false;

console.log('---- приведення до типів ----');
console.log(a == c);
console.log(a === c);
console.log(a != c);
console.log(a !== c);
console.log(e == f);
console.log(e === f);
console.log(a !== b);
console.log(a !== c);

b = '3';
c = '5';
d = false;

console.log('---- порівняння ----');
console.log(a > d);
console.log(a > e);
console.log(c < b);
console.log(a < c);
console.log(c >= b);
console.log(d >= e);
console.log(b <= c);
console.log(a <= c);

console.log('---- порівняння рядків ----');
b = 0;
c = false;

console.log(b > c);
console.log(b < c);
console.log(b >= c);
console.log(b <= c);

