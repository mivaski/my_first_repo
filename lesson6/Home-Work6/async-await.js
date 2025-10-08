//Сформувати файл async-await.js, що робитиме те саме, що і в promises.js, але цього разу — через підхід async/await.

import { filterByEmployeeCount } from './promises.js';

async function loadJson() {
    try {
        const response = await fetch('https://fake-json-api.mock.beeceptor.com/companies');
        const data = await response.json();
        const employeeCount = filterByEmployeeCount(data);
        return employeeCount;
    } catch (err) {
        console.log('Error known as:', err);
    }
}

(async () => {
    const employee = await loadJson();
    console.log(employee);
})();
