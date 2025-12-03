import { Page, Locator } from '@playwright/test';
import { BasePage } from './base.page.ts';

export class NonFictionPage extends BasePage {
    private readonly firstBuyButton: Locator;

    public constructor(page: Page) {
        super(page);
        this.firstBuyButton = this.page.getByText('Купити', { exact: true }).first();
    }

    public async open(): Promise<void> {
        await this.page.goto('/catalog/non-fiction-inozemnymy-movamy');
    }

    public async addFirstBookToCart(): Promise<void> {
        await this.firstBuyButton.click();
    }
}
