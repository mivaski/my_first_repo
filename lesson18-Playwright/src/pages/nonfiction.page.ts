import { Page, Locator } from '@playwright/test';

export class NonFictionPage {
    private readonly page: Page;
    private readonly firstBuyButton: Locator;

    public constructor(page: Page) {
        this.page = page;
        this.firstBuyButton = page.getByText('Купити', { exact: true }).first();
    }

    public async open(): Promise<void> {
        await this.page.goto('/catalog/novynky-non-fiction');
    }

    public async addFirstBookToCart(): Promise<void> {
        await this.firstBuyButton.click();
    }
}
