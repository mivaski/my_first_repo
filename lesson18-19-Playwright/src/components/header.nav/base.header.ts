import { Locator, Page } from '@playwright/test';

export class BaseHeaderComponent {
    protected readonly baseLocator: Locator;

    public constructor(protected readonly page: Page) {
        this.baseLocator = page.locator('.navigation-wrapper');
    }

    public async waitFor(): Promise<void> {
        await this.baseLocator.waitFor({ state: 'visible' });
    }
}
