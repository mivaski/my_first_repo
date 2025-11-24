import { test as base } from '@playwright/test';

import { AllBooksPage } from '../src/pages/allbook.page';
import { NewBooksPage } from '../src/pages/newbooks.page';
import { NonFictionPage } from '../src/pages/nonfiction.page';
import { CartPopup } from '../src/pages/cartpopup.page';
import { PageHeader } from '../src/pages/cartcount.page';

interface Fixtures {
    allBooksPage: AllBooksPage;
    newBooksPage: NewBooksPage;
    nonFictionPage: NonFictionPage;
    cartPopup: CartPopup;
    pageHeader: PageHeader;
};

export const test = base.extend<Fixtures>({
    allBooksPage: async ({ page }, use) => {
        await use(new AllBooksPage(page));
    },
    newBooksPage: async ({ page }, use) => {
        await use(new NewBooksPage(page));
    },
    nonFictionPage: async ({ page }, use) => {
        await use(new NonFictionPage(page));
    },
    cartPopup: async ({ page }, use) => {
        await use(new CartPopup(page));
    },
    pageHeader: async ({ page }, use) => {
        await use(new PageHeader(page));
    }
});

export const expect = base.expect;
