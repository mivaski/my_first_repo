import { Locator, Page } from '@playwright/test';
import { NavItemDto } from '../models/nav-item.dto';
import { BaseHeaderComponent } from './base.header';
import { DropdownMenuComponent } from './dropdown-menu.component';

export class MainNavigationComponent extends BaseHeaderComponent {
    public constructor(page: Page) {
        super(page);
    }

    private get mainItems(): Locator {
        return this.baseLocator.locator('ul.navigation-list.navCategories > li.navigation-li');
    }

    private getAnchor(item: Locator): Locator {
        return item.locator('> a');
    }

    public async getNavigationItems(): Promise<NavItemDto[]> {
        const result: NavItemDto[] = [];
        const listItems = await this.mainItems.all();

        for (const li of listItems) {
            const anchor = this.getAnchor(li);
            const name = (await anchor.innerText()).trim();
            const className = await li.getAttribute('class');

            result.push({
                name,
                hasDropdown: className?.includes('navigation-li_drop') ?? false,
                isActive: className?.includes('active') ?? false
            });
        }

        return result;
    }

    public async hoverItem(name: string): Promise<void> {
        const link = this.mainItems.locator('> a').filter({ hasText: name }).first();
        await link.hover();
    }

    public async clickItem(name: string): Promise<void> {
        const link = this.mainItems.locator('> a').filter({ hasText: name }).first();
        await link.click();
    }

    public async getDropdown(name: string): Promise<DropdownMenuComponent> {
        const link = this.mainItems.locator('> a').filter({ hasText: name }).first();
        const item = link.locator('..');

        await item.hover();

        const dropdownRoot = item.locator('div.navigation-cat-drop');
        await dropdownRoot.waitFor({ state: 'visible' });

        return new DropdownMenuComponent(dropdownRoot);
    }
}
