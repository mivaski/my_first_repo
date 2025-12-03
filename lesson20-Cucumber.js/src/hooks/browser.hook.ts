import { AfterAll, BeforeAll } from '@cucumber/cucumber';
import { chromium } from 'playwright';
import { BookWorld } from '../worlds/book-store.world.ts';

export function browserHook():void {
    BeforeAll(async function() {
        BookWorld.browser = await chromium.launch({ headless: false });
    });

    AfterAll(async function() {
        await BookWorld.browser.close();
    });
}
