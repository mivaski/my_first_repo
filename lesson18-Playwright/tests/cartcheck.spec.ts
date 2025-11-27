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

