import { IWorldOptions, World } from '@cucumber/cucumber';
import { Browser, BrowserContext, Page } from 'playwright';
import { HomePage } from '../pages/home.page.ts';
import { NonFictionPage } from '../pages/nonfiction.page.ts';

export class BookWorld extends World {

    public static globalContext: Map<string, unknown> = new Map<string, unknown>();
    public static browser: Browser;
    public scenarioContext: Map<string, unknown>;
    public context!: BrowserContext;
    public page!: Page;

    public get browser(): Browser {
        return BookWorld.browser;
    }

    public get globalContext(): Map<string, unknown> {
        return BookWorld.globalContext;
    }

    public get homePage(): HomePage {
        if (!this._homePage) {
            this._homePage = new HomePage(this.page);
        }
        return this._homePage;
    }

    public get nonFictionPage(): NonFictionPage {
        if (!this._nonFictionPage) {
            this._nonFictionPage = new NonFictionPage(this.page);
        }
        return this._nonFictionPage;
    }

    private _homePage?: HomePage;
    private _nonFictionPage?: NonFictionPage;

    public constructor(options: IWorldOptions) {
        super(options);
        this.scenarioContext = new Map<string, unknown>();
    }
}

