// Відвідувачам молодшим 18ти і старшим 90ти років вхід заборонений. Введіть всій вік в
// змінну 'a' щоб дізнатись чи ви отримаєте доступ

const a = 91; // введіть свій вік
const b = undefined;

if ( a >= 90) {
    console.log ('too old');
} else if ((a < 18) || b) {
    console.log('no entry');
} else  {
    console.log('Welcome!');
}

// for fun
const star = 5;
if ( star )
    console.log('я молодець');
