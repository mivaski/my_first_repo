import { test } from './fixtures';

test.describe('Cart functionality', () => {

    test.beforeEach(async ({ nonFictionPage }) => {
        await nonFictionPage.open();
    });

    test.afterEach(async ({ cartPopup }) => {
        await cartPopup.forceCloseIfOpened();
    });

    test('Popup appears after adding book to cart', async ({ nonFictionPage, cartPopup }) => {
        await nonFictionPage.addFirstBookToCart();
        await cartPopup.waitForPopup();
    });

    test('User can clear cart and see empty cart message', async ({ nonFictionPage, cartPopup }) => {
        await nonFictionPage.addFirstBookToCart();
        await cartPopup.waitForPopup();

        await cartPopup.clearCart();
        await cartPopup.expectEmptyCartMessage();
    });

    test('Cart count equals 0 after clearing cart', async ({ nonFictionPage, cartPopup, pageHeader }) => {
        await nonFictionPage.addFirstBookToCart();
        await cartPopup.waitForPopup();

        await cartPopup.clearCart();
        await cartPopup.expectEmptyCartMessage();
        await cartPopup.closePopup();

        await pageHeader.expectCartCountToBe(0);
    });
});
