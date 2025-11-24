import { ChainablePromiseElement } from 'webdriverio';
import { $ } from '@wdio/globals';

export class CategoriesPage {

    private get allCategoriesGrid():ChainablePromiseElement{
        return $('//div[@class="all-cat-categories"]');
    }

    public async selectCategoryByExactName(name: string): Promise<void> {
        await this.allCategoriesGrid.waitForDisplayed();

        const category = $(
            `//div[@class="all-cat-categories"]//span[@class="category_name" and normalize-space(text())="${name}"]`
        );

        // await category.waitForClickable();
        await category.click();
    }

    public async waitForH1Exact(text: string): Promise<void> {
        const h1 = $(`//h1[normalize-space(text())="${text}"]`);
        await h1.waitForDisplayed();
    }

    public async getH1Text(): Promise<string> {
        const h1 = await $('h1');
        await h1.waitForDisplayed();
        return h1.getText();
    }
}
