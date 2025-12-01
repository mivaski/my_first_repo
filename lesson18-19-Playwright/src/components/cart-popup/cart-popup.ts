import { expect, Locator, Page } from '@playwright/test';

export class CartPopup {
    private page: Page;
    private popup: Locator;
    private clearCartLink: Locator;
    private emptyCartMessage: Locator;
    private closeButton: Locator;

    public constructor(page: Page) {
        this.page = page;
        this.popup = page.locator('#cartPopup');
        this.clearCartLink = this.popup.locator('a.cart_popup_clear.remove_all');
        this.emptyCartMessage = this.popup.getByText(/Кошик порожній/i);
        this.closeButton = this.popup.locator('button.closePopup');
    }

    public async waitForPopup(): Promise<void> {
        await this.popup.waitFor({ state: 'visible', timeout: 8000 });
    }

    public async clearCart(): Promise<void> {
        await this.clearCartLink.evaluate((el) => (el as HTMLElement).click());
    }

    public async expectEmptyCartMessage(): Promise<void> {
        await expect(this.emptyCartMessage).toBeVisible({ timeout: 5000 });
    }

    public async closePopup(): Promise<void> {
        await this.closeButton.evaluate((el) => (el as HTMLElement).click());
        await this.popup.waitFor({ state: 'hidden', timeout: 8000 });
    }

    public async forceCloseIfOpened(): Promise<void> {
        if (await this.popup.isVisible()) {
            if (await this.closeButton.isVisible()) {
                await this.closeButton.evaluate((el) => (el as HTMLElement).click());
            }
        }
    }
}
