// {
//     "id": 1,
//     "username": "Presley80",
//     "password": "4itvnsh7rv0RHr2",
//     "name": "John Doe",
//     "email": "john@example.com",
//     "phone": "123-456-7890",
//     "address": {
//       "street": "912 Gerhold Estate",
//       "city": "South Dakota",
//       "country": "Jamaica",
//       "zipcode": "61223"
//     },
//     "created_at": "Thu May 08 2025 19:20:36 GMT+0000 (Coordinated Universal Time)"
//   },

export interface ApiObjectsDto {
    id: number;
    username: string;
    password: string;
    name: string;
    email: string;
    phone: string;
    address: ApiObjectsDataDto;
    created_at: string;
}
interface ApiObjectsDataDto {
    street: string;
    city: string;
    country: string;
    zipcode: string;
}
