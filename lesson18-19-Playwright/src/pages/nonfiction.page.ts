import { Page, Locator } from '@playwright/test';
import { BasePage } from './base.page';

export class NonFictionPage extends BasePage {
    private readonly page: Page;
    private readonly firstBuyButton: Locator;

    public constructor(page: Page) {
        super(page);
        this.page = page;
        this.firstBuyButton = page.getByText('Купити', { exact: true }).first();
    }

    public async open(): Promise<void> {
        await this.page.goto('/catalog/non-fiction-inozemnymy-movamy');
    }

    public async addFirstBookToCart(): Promise<void> {
        await this.firstBuyButton.click();
    }
}
