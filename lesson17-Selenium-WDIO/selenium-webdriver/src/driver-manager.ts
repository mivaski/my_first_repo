import { Browser, Builder, WebDriver } from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome';

export async function getBrowserInstance(): Promise<WebDriver> {
    const options = new chrome.Options();

    options.addArguments(
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-notifications',
        '--disable-infobars',
        '--disable-geolocation'
    );

    if (process.env.HEADLESS === 'true') {
        options.addArguments('--headless');
    }

    const driver = await new Builder()
        .forBrowser(Browser.CHROME)
        .setChromeOptions(options)
        .build();

    await driver.manage().window().maximize();
    return driver;
}

export async function closeBrowserInstance(driver: WebDriver): Promise<void> {
    try {
        await driver.quit();
    } catch (e) {
        console.warn('Error while quitting driver', e);
    }
}
