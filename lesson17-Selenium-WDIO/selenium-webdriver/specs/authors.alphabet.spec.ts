import { WebDriver } from 'selenium-webdriver';
import { expect } from 'chai';
import { NavigationPage } from '../src/pom/navigation.page';
import { AuthorsPage } from '../src/pom/authors.page';
import { getBrowserInstance, closeBrowserInstance } from '../src/driver-manager';

describe('TC1: Search authors via alphabet (letter "k")', function () {
    this.timeout(45000);

    let driver: WebDriver;
    let navPage: NavigationPage;
    let authors: AuthorsPage;

    beforeEach(async () => {
        driver = await getBrowserInstance();
        await driver.manage().setTimeouts({ implicit: 0 });

        navPage = new NavigationPage(driver);
        authors = new AuthorsPage(driver);
    });

    afterEach(async () => {
        await closeBrowserInstance(driver);
    });

    it('can open alphabet list', async () => {
        await navPage.openBaseUrl();
        await navPage.openAlphabet();

        const alphabetList = await driver.findElements({ css: '#alphabet_list__' });
        expect(alphabetList.length).to.be.greaterThan(0);
    });

    it('letter K page shows publishers list', async () => {
        await navPage.openBaseUrl();
        await navPage.openAlphabet();
        await authors.openLetterK();

        const publishers = await driver.findElements({ css: '.publishers_list' });
        expect(publishers.length).to.be.greaterThan(0);
    });

    it('open site -> alphabet -> letter K -> verify links', async () => {
        await navPage.openBaseUrl();
        await navPage.openAlphabet();
        await authors.openLetterK();

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
