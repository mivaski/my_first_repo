const a = 10;
const b = '10';
const d = false;
const f = null;

console.log('------logical &&------');

console.log(a + b && 20 );
console.log(a == b && b >= 5);
console.log(f && 0);
console.log(a > f || b === 5);

console.log('------logical ||------');

console.log(a > b || b >= 5);
console.log(a < b || b >= 5);
console.log(a < d || true);
console.log((a < f || b === 5) && true);

console.log('------logical NOT------');

console.log(!(a > d));
console.log(!(a < d));

const e = f ?? 10;
console.log (e);


