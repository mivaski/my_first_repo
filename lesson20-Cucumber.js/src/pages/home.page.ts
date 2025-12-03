import { Page } from '@playwright/test';
import { BasePage } from './base.page.ts';
import { NonFictionPage } from './nonfiction.page.ts';

export class HomePage extends BasePage {
    public constructor(page: Page) {
        super(page);
    }

    public async open(): Promise<void> {
        await this.page.goto('/');
    }

    public async openNonFictionViaMenu(): Promise<NonFictionPage> {
        await this.pageHeader.mainNavigation.hoverItem('Книги');

        const dropdown = await this.pageHeader.mainNavigation.getDropdown('Книги');

        await dropdown.clickSubmenuItem('Non-fiction іноземними мовами');
        return new NonFictionPage(this.page);
    }
}
