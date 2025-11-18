import puppeteer, { Browser, Page } from 'puppeteer';
import { expect } from 'chai';
import { NavigationPage} from '../src/pom/navigation.page';
import { AuthorsPage } from '../src/pom/authors.page';

describe('TC1: Search authors via alphabet (letter "k")', function () {
    this.timeout(45000);

    let browser: Browser;
    let page: Page;
    let nav: NavigationPage;
    let authors: AuthorsPage;

    const BASE_URL = process.env.BASE_URL || 'https://nashformat.ua/';

    before(async () => {
        browser = await puppeteer.launch({ headless: false,
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
        authors = new AuthorsPage(page);
    });

    after(async () => {
        await browser?.close();
    });

    beforeEach(async () => {
        await nav.open();  // 1) Open source link -> .navigation-wrapper visible
        await nav.openAlphabet();  // 2) Click publish tab -> #alphabet_list__ appeared
        await authors.openLetterK();   // 3) Click letter K + 4) observe .publishers_list
    });

    it('can open alphabet list', async () => {

        await nav.open();
        const exists = await nav.openAlphabet();
        expect(exists).to.not.equal(null);
    });

    it('letter K page shows publishers list', async () => {

        const exists = await authors.openLetterK();
        expect(exists).to.not.equal(null);
    });

    it('open site -> alphabet -> letter K -> verify links', async () => {

        const hrefs = await authors.collectAuthorLinks();
        expect(hrefs.length).to.be.greaterThan(0);

        for (const href of hrefs) {
            const lower = href.toLowerCase();
            expect(lower).to.include('authors/');
            const after = lower.split('authors/')[1] || '';
            expect(after).to.include('k');
        }
    });
});
