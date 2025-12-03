import { After, Before } from '@cucumber/cucumber';
import { BookWorld } from '../worlds/book-store.world.ts';

export function pageHook(): void {
    Before(async function(this: BookWorld) {
        this.page = await this.context.newPage();
    });

    After(async function(this: BookWorld) {
        await this.page.close();
    });
}
