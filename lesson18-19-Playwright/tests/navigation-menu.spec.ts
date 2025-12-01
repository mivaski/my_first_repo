import { test, expect } from '@playwright/test';
import { HomePage } from '../src/pages/home.page';
import { expect as expectChai } from 'chai';

test.describe('Navigation components', () => {
    let homePage: HomePage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        await homePage.open();
    });

    test('verify main menu items', async() => {
        const menuItems = await homePage.pageHeader.mainNavigation.getNavigationItems();
        // console.log(items)
        expect(menuItems.length).toBeGreaterThan(0);
        expectChai(menuItems.map((items) => items.name)).to.include.members([ 'Книги', 'Всі автори', 'Всі видавництва', 'Електронні книжки', 'ТОП-книги', 'Контакти' ]);
    });

    test('verify dropdown functionality', async () => {

        const items = await homePage.pageHeader.mainNavigation.getNavigationItems();
        const authors = items.find((item) => item.name.includes('Всі автори'));
        expect(authors).toBeDefined();
        expect(authors?.hasDropdown).toBe(true);

        const topBooks = items.find((item) => item.name.includes('ТОП-книги'));
        expect(topBooks).toBeDefined();
        expect(topBooks?.hasDropdown).toBe(false);
    });

    test('Dropdown opens when hovering "Всі видавництва"', async () => {

        await homePage.pageHeader.mainNavigation.hoverItem('Всі видавництва');
        const dropdown = await homePage.pageHeader.mainNavigation.getDropdown('Всі видавництва');
        expect(dropdown['baseLocator']).toBeVisible();
    });
    
    test('Dropdown returns items for Книги', async () => {

        const dropdown = await homePage.pageHeader.mainNavigation.openSubmenu('Книги');
        const items = await dropdown.getAllSubmenuItems();

        expect(items).toContainEqual(expect.stringContaining('Розпродаж'));
    });
});

test.describe('Navigation + cart', () => {
    
    test('user can navigate via menu and add book to the cart', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.open();
    const nonFictionPage = await homePage.openNonFictionViaMenu();
    await nonFictionPage.addFirstBookToCart();
    await homePage.pageHeader.expectCartCountToBe(1);
    });
 });
