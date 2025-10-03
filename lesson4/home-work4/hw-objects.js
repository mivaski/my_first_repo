
//Створити файл objects.js, у якому зробити комплексний об’єкт,
//що мав би мінімум 2 рівні ієрархії, масив та метод, який виводитиме значення

export const user = {
    get userHobbies() {
        return user.hobbies;
    },
    set userHobbies (value) {
        this.hobbies = value;
    },
    get userAddress() {
        return this.address;
    }
};

user.name = 'Mariia';
user['company'] = 'SoftServe';
user['jobPosition'] = 'manual QC engineer';
user.hobbies = ['reading', 'pub-quizzes', 'TRX'];
user.address = {
    country: 'Ukraine',
    citizenship: true,
    city: 'Ivano-Frankivsk',
    zip: 760010,

    get _zip () {
        return this.zip;
    },
    set _zip(value) {
        this.zip = value;
    }
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

user.getHobbies = function () {
    console.log ( 'My hobbies are:');
    console.log((this.hobbies.join(', ')));
};

user.location = function () {
    console.log( 'I live in' );
    console.log(this.address.city);
};

user.introduction();
user.getHobbies();
user.location();
