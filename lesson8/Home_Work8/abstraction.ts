export abstract class Shape {
    public abstract name: string;
    public abstract calcArea(): number;

    public describeShape(): void{
        console.log(`My shape is a ${this.name}`);
    }
}

export class Circle extends Shape {
    public name = 'Circle';
    private radius: number;

    public constructor(radius: number){
        super();
        this.radius = radius;
    }

    public calcArea(): number {
        return Math.PI * (this.radius * this.radius);
    }

}

export class Parallelepiped extends Shape {
    public name = 'Parallelepiped';
    private length: number;
    private width: number;
    private height: number;

    public constructor(length: number, width: number, height: number){
        super();
        this.height = height;
        this.width = width;
        this.length = length;
    }

    public calcArea(): number {
        return 2 * ((this.height * this.length) + (this.length * this.width) + (this.width * this.height));
    }
}

export class Octagon extends Shape {
    public name = 'Octagon';
    private a: number;

    public constructor(a: number){
        super();
        this.a = a;
    }
    public calcArea(): number {
        return 2 * (1 + Math.sqrt(2)) * Math.pow(this.a, 2);

    }
}


// const circle = new Circle(10);
// circle.describeShape();
// console.log('My area is', circle.calcArea());

// const parallelepiped = new Parallelepiped(15, 8, 6.5);
// parallelepiped.describeShape();
// console.log('My area is', parallelepiped.calcArea());

// const octagon = new Octagon(5);
// octagon.describeShape();
// console.log('My area is', octagon.calcArea());

