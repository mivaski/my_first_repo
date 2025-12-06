import { Page } from '@playwright/test';
import { CartPopup } from '../components/cart-popup.ts';
import { PageHeader } from '../components/base-header.component/cart-icon.ts';

export abstract class BasePage {
    public pageHeader: PageHeader;
    public cartPopup: CartPopup;

    protected constructor(protected readonly page: Page) {
        this.pageHeader = new PageHeader(page);
        this.cartPopup = new CartPopup(page);
    }
}
