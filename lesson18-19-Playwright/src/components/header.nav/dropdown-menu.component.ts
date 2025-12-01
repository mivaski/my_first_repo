import { Locator } from '@playwright/test';

export class DropdownMenuComponent {
    public constructor(private readonly baseLocator: Locator) {}

    private get links(): Locator {
        return this.baseLocator.locator('.main_fav_cat_link a');
    }

    public async getAllSubmenuItems(): Promise<string[]> {
        const items = await this.links.allInnerTexts();
        return items.map(text => text.trim()).filter(Boolean);
    }

    public async clickSubmenuItem(name: string): Promise<void> {
        const link = this.links.filter({ hasText: name }).first();
        await link.click();
    }
}
