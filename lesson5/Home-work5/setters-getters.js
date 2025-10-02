import { user } from '../../lesson4/home-work4/hw-objects.js';

user.summary = function () {
    user.userHobbies = ['sleeping', 'coding'];
    user.address._zip = 76000;

    const hobbies = user.userHobbies;
    const address = user.userAddress;

    return `My name is ${user.name} 
My hobbies are ${hobbies.join(', ')},
I work in the ${this.company} as ${this.jobPosition}
My address is ${address.country}, ${address.city}, ${address.zip}
    `;
};

console.log('User Summary');
console.log(user.summary());

