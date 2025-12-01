import { Page } from '@playwright/test';
import { CartPopup } from '../components/cart-popup/cart-popup';
import { PageHeader } from '../components/header.nav/cart-icon';

export abstract class BasePage {
    public pageHeader: PageHeader;
    public cartPopup: CartPopup;

    protected constructor(protected readonly page: Page) {
        this.pageHeader = new PageHeader(page);
        this.cartPopup = new CartPopup(page);
    }
}
