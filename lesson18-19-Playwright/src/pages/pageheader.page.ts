import { Page, Locator, expect } from '@playwright/test';
import { BaseHeaderComponent } from '../components/base.header';
import { MainNavigationComponent } from '../components/main-navigation';

export class PageHeader extends BaseHeaderComponent {
    private cartCount: Locator;
    public readonly mainNavigation: MainNavigationComponent;

    public constructor(page: Page) {
        super(page);
        this.cartCount = page.locator('i.cart-count');
        this.mainNavigation = new MainNavigationComponent(page);
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
