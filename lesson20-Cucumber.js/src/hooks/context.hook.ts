import { After, Before } from '@cucumber/cucumber';
import * as fs from 'fs';
import { BrowserContextOptions } from 'playwright';
import { BookWorld } from '../worlds/book-store.world.ts';

const BASE_URL = 'https://nashformat.ua/';

export function browserContextHook(): void {
    Before(async function (this: BookWorld, { pickle }) {
        const featureName = pickle.uri
            .replace('.feature', '')
            .replace(':', '-')
            .replace('\\', '/');
        const scenarioName = pickle.name
            .split(':')
            .join('')
            .replace('/', '-')
            .replace('\\', '-');
        const path = 'videos/' + featureName + '/' + scenarioName;

        const browserOptions: BrowserContextOptions = {
            recordVideo: { dir: path },
            timezoneId: 'Europe/London',
            viewport: { width: 1280, height: 1024 },
            baseURL: BASE_URL
        };

        const workerId = process.env.CUCUMBER_WORKER_ID
            ? parseInt(process.env.CUCUMBER_WORKER_ID)
            : 0;

        if (fs.existsSync(`.auth/storage-state-${workerId}.json`)) {
            browserOptions.storageState = `.auth/storage-state-${workerId}.json`;
        }

        this.context = await BookWorld.browser.newContext(browserOptions);
    });

    After(async function (this: BookWorld) {
        await this.context.close();
    });
}
