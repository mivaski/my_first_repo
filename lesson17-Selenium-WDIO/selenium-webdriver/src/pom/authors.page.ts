import { By, WebDriver, WebElement, WebElementPromise, until } from 'selenium-webdriver';

export class AuthorsPage {
    // 3) Click a[href="/authors/letter-14"]
    private get letterK(): WebElementPromise {
        return this.driver.findElement(By.css('a[href="/authors/letter-14"]'));
    }

    // 6) observe .publishers_list
    private get publishersList(): WebElementPromise {
        return this.driver.findElement(By.css('.publishers_list'));
    }

    // 7) each .publishers_list__li has a[href*="authors/"] which contains 'k'
    private get publisherItems(): WebElementPromise {
        return this.driver.findElement(By.css('.publishers_list__li'));
    }

    private async publisherLinks(): Promise<WebElement[]> {
        return this.driver.findElements(By.css('.publishers_list__li a[href*="authors/"]'));
    }

    public constructor(private readonly driver: WebDriver) {}

    public async openLetterK(): Promise<void> {
        const letterK = await this.driver.wait(until.elementLocated(By.css('a[href="/authors/letter-14"]')), 15000);
        await letterK.click();

        await this.driver.wait(until.elementLocated(By.css('.publishers_list')), 15000);
    }

    public async collectAuthorLinks(): Promise<string[]> {
        const elements = await this.publisherLinks();
        const hrefs: string[] = [];

        for (const el of elements) {
            const href = await el.getAttribute('href');
            if (href) hrefs.push(href);
        }

        return hrefs;
    }
}
