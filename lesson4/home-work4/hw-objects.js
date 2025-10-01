
//Створити файл objects.js, у якому зробити комплексний об’єкт,
//що мав би мінімум 2 рівні ієрархії, масив та метод, який виводитиме значення

const user = {};

user.name = 'Mariia';
user['company'] = 'SoftServe';
user['job position'] = 'manual QC engineer';
user.hobbies = ['reading', 'pub-quizzes', 'TRX'];
user.address = {
    country: 'Ukraine',
    citizenship: true,
    city: 'Ivano-Frankivsk',
    zip: 760010
};

console.log(user);
console.log(JSON.stringify(user));

console.log('---------object methods--------');

const userKeys = Object.keys(user);
const userValues = Object.values(user);
const userEntries = Object.entries(user);
console.log(userKeys, userValues, userEntries);

console.log('---------this--------');

user.introduction = function () {
    console.log('Hi, my name is');
    console.log( (this.name));
};

user.hobbies = function () {
    console.log ( 'My hobbies are:');
    console.log((this.hobbies.join(', ')));
};

user.location = function () {
    console.log( 'I live in' );
    console.log(this.address.city);
};

user.introduction();
user.hobbies();
user.location();
