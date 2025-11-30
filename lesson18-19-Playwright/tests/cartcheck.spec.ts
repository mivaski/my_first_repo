import { test, expect } from '@playwright/test';
import { BasePage } from 'src/pages/base.page';
import { NonFictionPage } from '../src/pages/nonfiction.page';

test.describe('Cart functionality', () => {
    let basePage: BasePage;

    test.beforeEach(async ({ page }) => {
        basePage = new BasePage(page);
        const nonFictionPage = new NonFictionPage(page);

        await nonFictionPage.open();
        await nonFictionPage.addFirstBookToCart();
    });

    test.afterEach(async () => {
        await basePage.cartPopup.forceCloseIfOpened();
    });

    test('Adding book to the cart', async () => {
        await basePage.cartPopup.waitForPopup();
        await basePage.cartPopup.closePopup();

        const cartCount = await basePage.pageHeader.getCartCount();
        expect(cartCount).toBeGreaterThan(0);
    });

    test('User can clear cart and see empty cart message', async () => {
        await basePage.cartPopup.waitForPopup();
        await basePage.cartPopup.clearCart();
        await basePage.cartPopup.expectEmptyCartMessage();
    });

    test('Cart count equals 0 after clearing cart', async () => {
        await basePage.cartPopup.clearCart();
        await basePage.cartPopup.expectEmptyCartMessage();
        await basePage.cartPopup.closePopup();

        const cartCount = await basePage.pageHeader.getCartCount();
        expect(cartCount).toBe(0);
    });
});

test.describe('Navigation + cart', () => {
    test('user can navigate via menu and add book to the cart', async ({ page }) => {
        const basePage = new BasePage(page);
        const nonFictionPage = new NonFictionPage(page);
        await page.goto('/');

        await basePage.pageHeader.mainNavigation.hoverItem('Книги');
        const dropdown = await basePage.pageHeader.mainNavigation.getDropdown('Книги');
        await dropdown.clickSubmenuItem('Non-fiction іноземними мовами');
        await nonFictionPage.addFirstBookToCart();
        await basePage.pageHeader.expectCartCountToBe(1);
    });
});
