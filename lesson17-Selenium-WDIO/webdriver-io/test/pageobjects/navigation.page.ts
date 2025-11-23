import { ChainablePromiseElement } from 'webdriverio';
import { browser, $ } from '@wdio/globals';

export class NavigationPage {
    private readonly baseUrl: string;

    public constructor(baseUrl = 'https://nashformat.ua/') {
        this.baseUrl = baseUrl;
    }

    public async open(): Promise<void> {
        await browser.url(this.baseUrl);
    }

    private get navPublishDrop(): ChainablePromiseElement {
        return $('//li[@class="navigation-li navigation-li_drop navigation-li_drop_red"]');
    }

    private get catDropActive(): ChainablePromiseElement {
        return $('//div[@class="navigation-cat-drop active"]');
    }

    public async hoverCategoriesDropdown(): Promise<void> {
        await this.navPublishDrop.moveTo(); // аналог hover
        await this.catDropActive.waitForDisplayed({ timeout: 15000 });
    }

    private get allBooksLink(): ChainablePromiseElement {
        return $('//a[contains(@class,"bottom_item_link") and (contains(@href,"/all-books") or @href="all-books")]');
    }

    public async goToAllBooks(): Promise<void> {
        await this.allBooksLink.click();
        const allCatCategories = $('.all-cat-categories');
        await allCatCategories.waitForDisplayed({ timeout: 15000 });
    }
}
