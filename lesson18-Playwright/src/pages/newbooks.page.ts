import { Page } from '@playwright/test';

export class NewBooksPage {
    private readonly page: Page;

    public constructor(page: Page) {
        this.page = page;
    }

    public async goToNonFiction(): Promise<void> {
        await this.page.goto('/catalog/novynky-non-fiction');
    }
}
