export class  ApiObjects {
    public id: number;
    public username: string;
    public password: string;
    public name: string;
    public email: string;
    public phone: string;
    public address: ApiObjectsData;
    public created_at: string;

    public summary: string;


    public constructor(row: Record<string, unknown>) {
        this.id = row['id'] as number;
        this.username = row['username'] as string;
        this.password = row['password'] as string;
        this.name = row['name'] as string;
        this.email = row['email'] as string;
        this.phone = row['phone'] as string;
        this.address = new ApiObjectsData(row['address'] as Record<string, unknown>);
        this.created_at = row['created_at'] as string;

        this.summary = `UserName: ${this.username}; Phone: ${this.phone}; Created At: ${this.created_at}`;
    }
}
class ApiObjectsData {
    public street: string;
    public city: string;
    public country: string;
    public zipcode: string;

    public constructor(row: Record<string, unknown>) {
        this.street = row?.['street'] as string;
        this.city = row?.['city'] as string;
        this.country = row?.['country'] as string;
        this.zipcode = row?.['zipcode'] as string;
    }
}
