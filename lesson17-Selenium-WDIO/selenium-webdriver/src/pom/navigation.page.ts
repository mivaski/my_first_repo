import { By, until, WebDriver } from 'selenium-webdriver';


export class NavigationPage {
    private readonly baseUrl = 'https://nashformat.ua/';

    private navWrapper = By.css('.navigation-wrapper');
    private publishTab = By.css('.navigation-li_publish > a[data-page="8"]');
    private alphabetList = By.css('#alphabet_list__');

    public constructor(private readonly driver: WebDriver) {}

    public async openBaseUrl(): Promise<void> {
        await this.driver.get(this.baseUrl);

        const nav = await this.driver.wait(until.elementLocated(this.navWrapper), 10000);
        await this.driver.wait(until.elementIsVisible(nav), 10000);
    }

    public async openAlphabet(): Promise<void> {
        const tab = await this.driver.wait(until.elementLocated(this.publishTab), 10000);
        await tab.click();

        const list = await this.driver.wait(until.elementLocated(this.alphabetList), 10000);
        await this.driver.wait(until.elementIsVisible(list), 10000);
    }
}
