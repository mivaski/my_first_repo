import { test, expect } from '@playwright/test';
import { HomePage} from '../src/pages/home.page';
import { NonFictionPage } from '../src/pages/nonfiction.page';

test.describe('Cart functionality', () => {
    let homePage: HomePage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        const nonFictionPage = new NonFictionPage(page);

        await nonFictionPage.open();
        await nonFictionPage.addFirstBookToCart();
    });

    test.afterEach(async () => {
        await homePage.cartPopup.forceCloseIfOpened();
    });

    test('Adding book to the cart', async () => {
        await homePage.cartPopup.waitForPopup();
        await homePage.cartPopup.closePopup();

        const cartCount = await homePage.pageHeader.getCartCount();
        expect(cartCount).toBeGreaterThan(0);
    });

    test('User can clear cart and see empty cart message', async () => {
        await homePage.cartPopup.waitForPopup();
        await homePage.cartPopup.clearCart();
        await homePage.cartPopup.expectEmptyCartMessage();
    });

    test('Cart count equals 0 after clearing cart', async () => {
        await homePage.cartPopup.clearCart();
        await homePage.cartPopup.expectEmptyCartMessage();
        await homePage.cartPopup.closePopup();

        const cartCount = await homePage.pageHeader.getCartCount();
        expect(cartCount).toBe(0);
    });
});

