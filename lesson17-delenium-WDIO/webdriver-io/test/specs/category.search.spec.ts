
import { browser, $, expect } from '@wdio/globals';
import { NavigationPage } from '../pageobjects/navigation.page';
import { CategoriesPage } from '../pageobjects/categories.page';

describe('TC2: Search books by category', () => {

    const BASE_URL = 'https://nashformat.ua/';
    const CATEGORY_NAME = 'Трилер. Кримінал. Бойовик';
    const EXPECTED_H1 = 'Бойовик. Трилер';

    const nav = new NavigationPage(BASE_URL);
    const categories = new CategoriesPage();

    beforeEach(async () => {
        await browser.url(BASE_URL);
        await nav.hoverCategoriesDropdown();
        await nav.goToAllBooks();
    });

    it('should open all categories', async () => {
        const grid = await $('.all-cat-categories');
        await expect(grid).toBeDisplayed();
    });

    it('should open chosen category and check header', async () => {
        await categories.selectCategoryByExactName(CATEGORY_NAME);
        await categories.waitForH1Exact(EXPECTED_H1);

        const h1 = await categories.getH1Text();
        expect(h1).toEqual(EXPECTED_H1);
    });
});
