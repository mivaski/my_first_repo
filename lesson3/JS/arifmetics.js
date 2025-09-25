let a = 10;
const b = 5;
let c = 'day';
const d = '5';
let e = true;
const f = false;
let g = undefined;


console.log(a + d);
console.log((e + e), typeof (e + e));
console.log(f - e);
console.log(c + d);
console.log((a - e ), typeof (a - e));
console.log(b - d);
console.log(b - g);
console.log(a * c);
console.log(a / f);
console.log(a % b);
console.log(a ** d);

a = true;
a *= a;
console.log(a);

c = '10';
c += c;
console.log(c);

g = NaN;
g = a + g;
console.log(g);

e = null;
e += a;
console.log(e);
