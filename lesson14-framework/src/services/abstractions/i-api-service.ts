export interface IApiService<T> {
    get(uri: string, params?: Record<string, string | number | boolean | undefined>, headers?: Record<string, string>): Promise<T>;
    post(uri: string, body: unknown, headers?: Record<string, string>): Promise<T>;
    postForm(uri: string, form: FormData | Record<string, string | Blob>, headers?: Record<string, string>): Promise<T>;
    delete(uri: string, body: unknown, headers?: Record<string, string>): Promise<T>;
}
