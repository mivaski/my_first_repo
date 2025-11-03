import type { IApiService } from '../services/abstractions/i-api-service';
import type { CatImage } from '../types/cat.dto';

export interface ImagesSearchParams extends Record<string, string | number | boolean | undefined> {
    limit?: number;
    order?: 'RANDOM' | 'ASC' | 'DESC';
    size?: 'full' | 'med' | 'small' | 'thumb';
    mime_types?: string;
    breed_ids?: string;
    has_breeds?: 0 | 1;
}

export class CatApi {
    public constructor(private readonly http: IApiService<Response>) {}

    public async imagesSearch(params?: ImagesSearchParams, headers?: Record<string, string>): Promise<CatImage[]> {
        const res = await this.http.get('/images/search', params, headers);

        if (!res.ok) {
            const text = await res.text().catch(() => '');
            throw new Error(`GET /images/search failed: ${res.status} ${res.statusText}\n${text}`);
        }

        return (await res.json()) as CatImage[];
    }
}
