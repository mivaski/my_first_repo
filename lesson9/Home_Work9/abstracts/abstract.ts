
export abstract class Car {
    public constructor(
        protected brand: string,
        protected model: string,
        protected year: number
    ) {}

    public abstract startEngine(): void;

    public abstract stopEngine(): void;

    public getDescription(): string {
        return `Brand: ${this.brand}, model type: ${this.model}, year: ${this.year}`;
    }
}
