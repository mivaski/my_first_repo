//Підготувати файл promises.js, у якому написати функцію, що відсилатиме за допомогою функції fetch запит на ресурс,
//  який повертає JSON. Через ланцюжок then() обробити цей запит і перевикористати цей JSON у іншій функції.

function loadJson() {
    return fetch('https://fake-json-api.mock.beeceptor.com/companies')
        .then(response => response.json())
        .then((response) => filterByEmployeeCount(response))
        .then(response => console.log(response))
        .catch ((err) => console.log('Error known as:', err));

};

loadJson();

export function filterByEmployeeCount(data) {
    return data.filter((item) => item.employeeCount <= 5000);
};

//https://fake-json-api.mock.beeceptor.com/companies
