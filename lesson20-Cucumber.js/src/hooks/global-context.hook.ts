import { BeforeAll } from '@cucumber/cucumber';
import { BookWorld } from '../worlds/book-store.world.ts';

export function globalContextHook(): void {
    BeforeAll(function() {
        BookWorld.globalContext = new Map();
    });
}
