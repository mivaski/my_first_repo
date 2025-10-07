// Зробити файл try-catch.js, у якому надсилатиметься запит на сервіс, якого не існує,
// і внаслідок помилки запит направлятиметься на той, що існує. Якщо і на іншому ресурсі
// з якихось причин буде хибна відповідь від сервера —згенерувати власну помилку.


async function sendFakeJsonRequest() {
    console.log('sending request...');
    try {
        const response = await fetch('https://json-apa.mock.beeceptorrrr.com/companies');
        const json = await response.json();
        return json;
    } catch (error) {
        if (error.message === 'fetch failed') {
            const response = await fetch('https://json-apa.mock.beeceptor.com/companies');
            if (!response.ok) {
                throw new Error('Data cannot be found');
            }
            const json = await response.json();
            return json;
        }

        throw error;
    }
}

(async function () {
    const response = await sendFakeJsonRequest();
    console.log(response);
})();
