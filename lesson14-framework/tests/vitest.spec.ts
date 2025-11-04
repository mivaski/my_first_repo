import { describe, test, expect } from 'vitest';
import { createCatApi } from '../src/services/config.service';
import { CatImage } from '../src/types/cat.dto';

describe('Cat API — /images/search', () => {

    const api = createCatApi();

    test('should return array', async () => {
        const res = await api.imagesSearch();

        expect(Array.isArray(res)).toBe(true);
        expect(res.length).toBeGreaterThan(0);
    });

    test('should have imageID', async () => {
        const res = await api.imagesSearch();

        expect(res[0]).to.have.property('id');
    });

    test('image url should include image ID', async () => {
        const res = await api.imagesSearch();

        expect(res).toHaveLength(1);
        expect(res[0].url).toContain(res[0].id);
    });

    test('width and height should be a number', async () => {
        const res = await api.imagesSearch();
        const img = res[0];

        expect(img).toHaveProperty('width');
        expect(img).toHaveProperty('height');
        expect(typeof img.width).toBe('number');
        expect(typeof img.height).toBe('number');
    });

    test('should return limited number of results', async () => {
        const limit = 3;
        const res = await api.imagesSearch({ limit });

        expect(res).toHaveLength(limit);

        res.forEach((img: CatImage) => {
            expect(img).toHaveProperty('id');
            expect(img).toHaveProperty('url');
        });
    });

    test('should return jpg or png (mime_types)', async () => {
        const res = await api.imagesSearch({ limit: 2, mime_types: 'jpg,png' });
        expect(res.length).toBeGreaterThan(0);
        res.forEach((img: CatImage) => {
            expect(img.url.endsWith('.jpg') || img.url.endsWith('.png')).toBe(true);
        });
    });
});
