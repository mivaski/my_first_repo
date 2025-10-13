// Виколристана Fake JSON API дає різний респонз при кожному запиті

import { ApiObjectsDto, ApiObjects } from './models/index';
import { Circle, Parallelepiped, Octagon } from './abstraction';

async function getApiObjectsData(): Promise<ApiObjectsDto[]> {
    const response = await fetch('https://fake-json-api.mock.beeceptor.com/customers');
    const json = await response.json();
    // console.log(json);
    return json as ApiObjectsDto[];
}

async function getApiObjectsAsObjectWithClass(): Promise<ApiObjects[]> {
    const response = await fetch('https://fake-json-api.mock.beeceptor.com/customers');
    const json = await response.json();
    return (json as Record<string, unknown>[]).map((row) => {
        const obj = new ApiObjects(row);
        // console.log('Object with added summary', obj);
        return obj;
    });
}

(async () => {
    const apiObjects = await getApiObjectsData();
    const filtered = apiObjects.filter((obj) => new Date(obj.created_at).getFullYear() !== 2025);
    const sortedUsernames = [...apiObjects]
        .map((obj) => obj.username)
        .sort((a, b) => {
            if (a < b) return -1;
            if (a > b) return 1;
            return 0;
        });
    console.log('Users crated not in 2025:', filtered);
    console.log('Sorted username:', sortedUsernames);

    const apiObjectsWithClass = await getApiObjectsAsObjectWithClass();
    const filteredObjects = apiObjectsWithClass.filter((obj) => new Date(obj.created_at).getFullYear() !== 2025);
    console.log('Users not created in 2025:', filteredObjects);
})();


const circle = new Circle(10);
circle.describeShape();
console.log('My area is', circle.calcArea());

const parallelepiped = new Parallelepiped(15, 8, 6.5);
parallelepiped.describeShape();
console.log('My area is', parallelepiped.calcArea());

const octagon = new Octagon(5);
octagon.describeShape();
console.log('My area is', octagon.calcArea());
