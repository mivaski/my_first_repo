import puppeteer, { Browser, Page } from 'puppeteer';
import { expect } from 'chai';
import { NavigationPage } from '../src/pom/navigation.page';
import { CategoriesPage } from '../src/pom/categories.page';

describe('TC2: Search books by category', () => {

    let browser: Browser;
    let page: Page;
    let nav: NavigationPage;
    let categories: CategoriesPage;

    const BASE_URL = process.env.BASE_URL || 'https://nashformat.ua/';
    const CATEGORY_NAME = 'Трилер. Кримінал. Бойовик'; // крок 4
    const EXPECTED_H1 = 'Бойовик. Трилер'; // крок 5

    before(async () => {
        browser = await puppeteer.launch({
            headless: false,
            args: [
                '--no-sandbox',
                '--disable-setuid-sandbox',
                '--disable-notifications',
                '--disable-infobars',
                '--disable-geolocation'
            ]
        });
        page = await browser.newPage();
        await page.setViewport({ width: 1440, height: 900 });
        nav = new NavigationPage(page, BASE_URL);
        categories = new CategoriesPage(page);
    });

    after(async () => {
        await browser?.close();
    });

    beforeEach(async () => {
        await nav.open(); // 1. Open source link
        await nav.hoverCategoriesDropdown(); // 2. Hover ... -> active drop
        await nav.goToAllBooks(); // 3. Click all-books -> all-cat-categories
    });

    it('should open all categories', async () => {
        const grid = await page.$('.all-cat-categories');
        expect(grid).to.not.equal(null);
    });

    it('should open chosen category and check header', async () => {
        await categories.selectCategoryByExactName(CATEGORY_NAME); // 4
        await categories.waitForH1Exact(EXPECTED_H1); // 5
        const h1 = await categories.getH1Text();
        expect(h1).to.equal(EXPECTED_H1);
    });
});
