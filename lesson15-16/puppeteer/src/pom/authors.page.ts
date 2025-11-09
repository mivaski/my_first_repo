import { Page, Locator } from 'puppeteer';

export class AuthorsPage {
    public constructor(private readonly page: Page) {}

    // 3) Click a[href="/authors/letter-14"]
    private get letterK(): Locator<Element> {
        return this.page.locator('a[href="/authors/letter-14"]');
    }

    // 6) observe .publishers_list
    private get publishersList(): Locator<Element> {
        return this.page.locator('.publishers_list');
    }

    // 7) each .publishers_list__li has a[href*="authors/"] which contains 'k'
    private get publisherItems(): Locator<Element> {
        return this.page.locator('.publishers_list__li');
    }

    public async openLetterK(): Promise<void> {
        await this.page.waitForSelector('a[href="/authors/letter-14"]', { visible: true, timeout: 15000 });
        await this.letterK.click();
        await this.page.waitForSelector('.publishers_list', { visible: true, timeout: 15000 });
    }

    public async collectAuthorLinks(): Promise<string[]> {
        const href = await this.page.$$eval('.publishers_list__li a[href*="authors/"]', (as) =>
            as.map((a) => a.getAttribute('href') || '')
        );
        return href;
    }
}
