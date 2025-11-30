import { test, expect } from '@playwright/test';
import { BasePage } from 'src/pages/base.page';
import { expect as expectChai } from 'chai';

test.describe('Navigation components', () => {
    let basePage: BasePage;

    test.beforeEach(async ({ page }) => {
        basePage = new BasePage(page);
        await page.goto('/');
    });

    test('verify main menu items', async() => {
        const menuItems = await basePage.pageHeader.mainNavigation.getNavigationItems();
        // console.log(items)
        expect(menuItems.length).toBeGreaterThan(0);
        expectChai(menuItems.map((items) => items.name)).to.include.members([ 'Книги', 'Всі автори', 'Всі видавництва', 'Електронні книжки', 'ТОП-книги', 'Контакти' ]);
    });

    test('verify dropdown functionality', async () => {

        const items = await basePage.pageHeader.mainNavigation.getNavigationItems();
        const authors = items.find((item) => item.name.includes('Всі автори'));
        expect(authors).toBeDefined();
        expect(authors?.hasDropdown).toBe(true);

        const topBooks = items.find((item) => item.name.includes('ТОП-книги'));
        expect(topBooks).toBeDefined();
        expect(topBooks?.hasDropdown).toBe(false);
    });

    test('Dropdown opens when hovering "Всі видавництва"', async () => {

        await basePage.pageHeader.mainNavigation.hoverItem('Всі видавництва');
        const dropdown = await basePage.pageHeader.mainNavigation.getDropdown('Всі видавництва');
        await expect(dropdown['baseLocator']).toBeVisible();
    });

    test('Dropdown returns all submenu items for "Книги"', async () => {

        await basePage.pageHeader.mainNavigation.hoverItem('Книги');
        const dropdown = await basePage.pageHeader.mainNavigation.getDropdown('Книги');

        const submenuItems = await dropdown.getAllSubmenuItems();
        // console.log('Submenu items:', submenuItems);

        expect(submenuItems.length).toBeGreaterThan(0);

        const target = submenuItems.find((targetItem) =>
            targetItem.includes('Розпродаж'));
        expect(target).toBeDefined();
    });


});
