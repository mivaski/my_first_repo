import { IApiService } from './abstractions/i-api-service';

type HeadersDict = Record<string, string>;

export class FetchApiService implements IApiService<Response> {
    private baseUrl: string;
    private readonly secret: { apiKey?: string; basicToken?: string; bearerToken?: string };

    public constructor(baseUrl: string, secret?: { apiKey?: string; basicToken?: string; bearerToken?: string }) {
        this.baseUrl = (baseUrl ?? '').replace(/\/+$/, '');
        this.secret = secret ?? {};
    }

    public async get(uri: string, params?: Record<string, string | number | boolean>, headers?: HeadersDict): Promise<Response> {
        const url = this.resolveUrl(uri, params);
        const defaultHeaders = this.getDefaultHeaders(headers);
        return await fetch(url, { method: 'GET', headers: defaultHeaders });
    }

    public async post(uri: string, body: unknown, headers?: Record<string, string>): Promise<Response> {
        const url = this.resolveUrl(uri);
        const defaultHeaders = this.getDefaultHeaders({
            'Content-Type': 'application/json',
            ...(headers ?? {})
        });

        return await fetch(url, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: defaultHeaders
        });
    }

    public async postForm(uri: string, formData: FormData, headers?: Record<string, string>): Promise<Response> {
        const url = this.resolveUrl(uri);
        const defaultHeaders = this.getDefaultHeaders(headers);
        return await fetch(url, {
            method: 'POST',
            body: formData,
            headers: defaultHeaders
        });
    }

    public async delete(uri: string, body: unknown, headers?: Record<string, string>): Promise<Response> {
        const url = this.resolveUrl(uri);
        const defaultHeaders = this.getDefaultHeaders({
            'Content-Type': 'application/json',
            ...(headers ?? {})
        });

        return await fetch(url, {
            method: 'DELETE',
            body: JSON.stringify(body),
            headers: defaultHeaders
        });
    }

    private getDefaultHeaders(headers?: Record<string, string>): Record<string, string> {
        return {
            ...this.getAuthHeaders(),
            ...headers,
            Accept: 'application/json'
        };
    }

    private getAuthHeaders(): Record<string, string> {
        const headers: Record<string, string> = {};
        if (this.secret.apiKey) {
            headers['x-api-key'] = this.secret.apiKey;
        } else if (this.secret.basicToken) {
            headers['Authorization'] = `Basic ${this.secret.basicToken}`;
        } else if (this.secret.bearerToken) {
            headers['Authorization'] = `Bearer ${this.secret.bearerToken}`;
        }
        return headers;
    }

    private resolveUrl(uri: string, params?: Record<string, string | number | boolean>): string {
        const isAbsolute = /^https?:\/\//i.test(uri);

        if (isAbsolute) {
            const u = new URL(uri);
            if (params) {
                for (const [k, v] of Object.entries(params)) {
                    if (v !== undefined) u.searchParams.set(k, String(v));
                }
            }
            return u.toString();
        }

        const rawBase =
            (this.baseUrl ?? '') || (process.env?.CAT_API_BASE ?? '') || (process.env?.API_BASE_URL ?? '') || (process.env?.BASE_URL ?? '');

        const normalizedBase = String(rawBase).trim();
        const defaultBase = 'https://api.thecatapi.com/v1/';

        const base = /^https?:\/\//i.test(normalizedBase) ? normalizedBase : defaultBase;

        let u: URL;
        try {
            u = new URL(base);
        } catch {
            u = new URL(defaultBase);
        }

        const basePath = u.pathname.replace(/\/+$/, '');
        const relPath = String(uri ?? '').replace(/^\/+/, '');
        u.pathname = [basePath, relPath].filter(Boolean).join('/');

        if (params) {
            for (const [k, v] of Object.entries(params)) {
                if (v !== undefined) u.searchParams.set(k, String(v));
            }
        }

        return u.toString();
    }
}


