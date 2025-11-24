import { Page, Locator, expect } from '@playwright/test';

export class PageHeader {
    private page: Page;
    private cartCount: Locator;

    public constructor(page: Page) {
        this.page = page;
        this.cartCount = page.locator('i.cart-count');
    }

    public async expectCartCountToBe(value: number):Promise<void> {
        await expect(this.cartCount).toHaveText(String(value));
    }
}
