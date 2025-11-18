import { Page, Locator } from 'puppeteer';

export class NavigationPage {
    public constructor(
        private readonly page: Page,
        private readonly baseUrl = 'https://nashformat.ua/'
    ) {}

    // selectors
    private get navWrapper(): Locator<Element> {
        return this.page.locator('.navigation-wrapper');
    }
    private get publishTab(): Locator<Element> {
        return this.page.locator('.navigation-li_publish > a[data-page="8"]');
    }
    private get alphabetList(): Locator<Element> {
        return this.page.locator('#alphabet_list__');
    }

    //Open source link -> .navigation-wrapper should be visible
    public async open(): Promise<void> {
        await this.page.goto(this.baseUrl, { waitUntil: 'networkidle2' });
        await this.page.waitForSelector('.navigation-wrapper', { visible: true, timeout: 15000 });
    }

    //Click .navigation-li_publish > a[data-page="8"] -> #alphabet_list__ appeared
    public async openAlphabet(): Promise<void> {
        await this.publishTab.click();
        await this.page.waitForSelector('#alphabet_list__', { visible: true, timeout: 15000 });
    }

    //TC XPATH
    private get navPublishDrop(): Locator<Element> {
        return this.page.locator('xpath=//li[@class="navigation-li navigation-li_drop navigation-li_drop_red"]');
    }
    private get catDropActive(): Locator<Element> {
        return this.page.locator('xpath=//div[@class="navigation-cat-drop active"]');
    }

    public async hoverCategoriesDropdown(): Promise<void> {
        await this.navPublishDrop.hover(); // тільки hover
        await this.page.waitForSelector('.navigation-cat-drop.active', { visible: true, timeout: 15000 });
    }

    /** 3: Click //a[@href="all-books" and contains(@class,"bottom_item_link")] → відкрився .all-cat-categories */
    private get allBooksLink(): Locator<Element> {
        return this.page.locator('xpath=//a[contains(@class,"bottom_item_link") and (contains(@href,"/all-books") or @href="all-books")]');
    }

    public async goToAllBooks(): Promise<void> {
        await this.allBooksLink.click();
        await this.page.waitForSelector('.all-cat-categories', { visible: true, timeout: 15000 });
    }
}
