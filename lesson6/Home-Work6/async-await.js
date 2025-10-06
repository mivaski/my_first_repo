//Сформувати файл async-await.js, що робитиме те саме, що і в promises.js, але цього разу — через підхід async/await.

import {filerByEmployeeCount} from './promises.js';

async function loadJson() {
    try {
        const response = await fetch('https://fake-json-api.mock.beeceptor.com/companies');
        const data = await response.json();
        const employeeCount = filerByEmployeeCount(data);
        console.log(employeeCount);
    } catch (err) {
        console.log('Error known as:', err);
    }
}

loadJson();

