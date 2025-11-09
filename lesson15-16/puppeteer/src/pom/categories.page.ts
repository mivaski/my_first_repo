import { Page, Locator } from 'puppeteer';

export class CategoriesPage {
    public constructor(private readonly page: Page) {}

    private get allCategoriesGrid(): Locator <Element>{
        // //div[@class="all-cat-categories"]
        return this.page.locator('xpath=//div[@class="all-cat-categories"]');
    }

    /** 4) Клік по категорії з точним текстом у span.category_name */
    public async selectCategoryByExactName(name: string): Promise<void> {
        await this.allCategoriesGrid.wait();
        const category = this.page.locator(
            `xpath=//div[@class="all-cat-categories"]//span[@class="category_name" and normalize-space(text())="${name}"]`
        );
        await category.wait();
        await category.click();
    }

    public async waitForH1Exact(text: string): Promise<void> {
        // //h1[normalize-space(text())="..."]
        const h1 = this.page.locator(`xpath=//h1[normalize-space(text())="${text}"]`);
        await h1.wait();
    }

    public async getH1Text(): Promise<string> {
        const el = await this.page.$('h1');
        if (!el) return '';
        const txt = await this.page.evaluate((n) => (n.textContent || '').trim(), el);
        return txt;
    }
}
