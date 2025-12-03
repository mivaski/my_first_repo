import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { BookWorld } from '../worlds/book-store.world.ts';

Given('User is on the Non-fiction page', async function (this: BookWorld) {
    await this.nonFictionPage.open();
});

Given('User adds the first Non-fiction book to the cart', async function (this: BookWorld) {
    await this.nonFictionPage.addFirstBookToCart();
});

When('User closes the cart popup', async function (this: BookWorld) {
    await this.homePage.cartPopup.waitForPopup();
    await this.homePage.cartPopup.closePopup();
});

Then('the cart counter should be greater than 0', async function (this: BookWorld) {
    const cartCount = await this.homePage.pageHeader.getCartCount();
    expect(cartCount).toBeGreaterThan(0);
});

When('User clears the cart from the popup', async function (this: BookWorld) {
    await this.homePage.cartPopup.waitForPopup();
    await this.homePage.cartPopup.clearCart();
});

Then('User should see an empty cart message', async function (this: BookWorld) {
    await this.homePage.cartPopup.expectEmptyCartMessage();
});

Then('the cart counter should be 0', async function (this: BookWorld) {
    const cartCount = await this.homePage.pageHeader.getCartCount();
    expect(cartCount).toBe(0);
});
