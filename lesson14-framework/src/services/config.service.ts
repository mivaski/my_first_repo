import 'dotenv/config';
import { FetchApiService } from './fetch-api.service';
import { CatApi } from '../apis/images.api';

export function createCatApi(): CatApi {
    const BASE_URL = (process.env.BASE_URL ?? 'https://api.thecatapi.com/v1').trim();
    const API_TOKEN = (process.env.API_TOKEN ?? '').trim();

    if (!BASE_URL) {
        throw new Error('BASE_URL is missing. Please check your .env file');
    }

    const http = new FetchApiService(BASE_URL, {
        apiKey: API_TOKEN
    });

    return new CatApi(http);
}
