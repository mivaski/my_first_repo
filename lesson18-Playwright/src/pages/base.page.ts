import { Page } from "@playwright/test";
import { PageHeader } from './pageheader.page';
import { CartPopup } from "./cartpopup.page";


export class BasePage {
    public pageHeader: PageHeader;
    public cartPopup: CartPopup;

    public constructor(page: Page) {
        this.pageHeader = new PageHeader(page);
        this.cartPopup = new CartPopup(page);

    }
}
