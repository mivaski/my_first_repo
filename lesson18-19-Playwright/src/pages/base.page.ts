import { Page } from '@playwright/test';

import { CartPopup } from './cartpopup.page';
import { PageHeader } from './pageheader.page';

export class BasePage {
    public pageHeader: PageHeader;
    public cartPopup: CartPopup;

    public constructor(page: Page) {
        this.pageHeader = new PageHeader(page);
        this.cartPopup = new CartPopup(page);

    }
}
