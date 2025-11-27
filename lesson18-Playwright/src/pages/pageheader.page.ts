import { Page, Locator, expect } from '@playwright/test';

export class PageHeader {
    private page: Page;
    private cartCount: Locator;

    public constructor(page: Page) {
        this.page = page;
        this.cartCount = page.locator('i.cart-count');
    }

    public async expectCartCountToBe(value: number): Promise<void> {
        await expect(this.cartCount).toHaveText(String(value));
    }

    public async getCartCount(): Promise<number> {
        const text = await this.cartCount.innerText();
        const num = Number(text.trim());
        return isNaN(num) ? 0 : num;
    }
}
