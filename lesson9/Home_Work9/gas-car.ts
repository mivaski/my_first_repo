import { Car } from './abstracts/abstract';
import { Maintainable } from './interface/interface';

export class GasCar extends Car {
    public constructor(
        brand: string,
        model: string,
        year: number,
        private fuelCapacity: number,
        private fuelLevel: number
    ) {
        super(brand, model, year);
    }

    public startEngine(): string {
        if (this.fuelLevel <= 0) {
            return `${this.getDescription()} - fuel empty. Engine cannot start.`;
        }
        return `${this.getDescription()} - ${this.fuelLevel}L left - engine is vroom-vroom`;
    }

    public stopEngine(): void {
        console.log(`${this.getDescription()} - engine in unvroom-vroom!`);
    }

    public calculateMaxDistance(): number {
        if (this.fuelLevel <= 0) {
            throw new Error('Fuel consumption must be greater than zero.');
        }

        return Math.round(this.fuelCapacity / this.fuelLevel) * 100;
    }

}

interface Refuelable extends Maintainable {
    refuelTank(): void;
    changeOil(): void;
}

export class BMW extends GasCar implements Refuelable {
    public refuelTank(): void {
        console.log(`${this.getDescription()} - fuel is supplied`);
    }
    public changeOil(): void {
        console.log(`${this.getDescription()} - oil is changed`);
    }
    public tiresCheck():void {
        console.log(`${this.getDescription()} - tire pressure is checking`);
    }
    public performMaintenance(): void {
        console.log(`${this.getDescription()} - Servicing...`);
    }
}

export class GasStation {
    public constructor(
        private car: Refuelable
    ) {}

    public refuel(): void {
        this.car.refuelTank();
    }

    public changeOil(): void {
        this.car.changeOil();
    }

    public tiresCheck(): void {
        this.car.tiresCheck();
    }

    public performMaintenance(): void {
        this.car.performMaintenance();
    }

    public maintain(): void{
        this.refuel();
        this.changeOil();
        this.tiresCheck();
        this.performMaintenance();
    }

}

// const bmw = new BMW('BMW', 'X5', 2024, 80, 0);
// console.log(bmw.startEngine());
// try {
//     const distance = bmw.calculateMaxDistance();
//     console.log(`Max distance: ${distance} km`);
// } catch (error) {
//     console.error('Error calculating distance:', (error as Error).message);
// }
// bmw.stopEngine();

// const gasStation = new GasStation(bmw);
// gasStation.maintain();

