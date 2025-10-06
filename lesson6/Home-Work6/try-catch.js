// Зробити файл try-catch.js, у якому надсилатиметься запит на сервіс, якого не існує,
// і внаслідок помилки запит направлятиметься на той, що існує. Якщо і на іншому ресурсі
// з якихось причин буде хибна відповідь від сервера —згенерувати власну помилку.

async function sendRequest(url) {
    const response = await fetch(url);
    const json = await response.json();
    return json;
};

async function sendFakeJsonRequest() {
    console.log('sending request...');
    try {
        const response = await sendRequest('https://json-apa.mock.beeceptor.com/companies');
        console.log(response);
        return response;
    } catch (error) {
        if (error.message.includes('Hey ya!')) {
            try {
                const response = await sendRequest('https://json-api.mock.beeceptor.com/companies');
                return response;
            } catch (error) {
                if (error.message.includes('Hey ya!')) {
                    throw new Error('You cannot reach the URL');
                }
                throw new Error('Something Went Wrong');
            }
        }

        throw new Error('Something Went Wrong');
    }
};

(async function() {
    const response = await sendFakeJsonRequest();
    console.log(response);
})();
