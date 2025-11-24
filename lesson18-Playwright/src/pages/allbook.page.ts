import { Page, Locator } from '@playwright/test';

export class AllBooksPage {
    private readonly page: Page;
    private readonly newBooksLink: Locator;

    public constructor(page: Page) {
        this.page = page;
        this.newBooksLink = page.getByRole('link', { name: 'Новинки' });
    }

    public async open():Promise<void> {
        await this.page.goto('/all-books');
    }

    public async goToNewBooks():Promise<void> {
        await this.newBooksLink.click();
    }
}
