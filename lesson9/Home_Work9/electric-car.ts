import { Car } from './abstracts/abstract';
import { Maintainable } from './interface/interface';

export class ElectricCar extends Car {
    public constructor(
        brand: string,
        model: string,
        year: number,
        public chargePercentage: number
    ) {
        super(brand, model, year);
    }

    public startEngine(): void {
        console.log(`${this.getDescription()} - Charge: ${this.chargePercentage}%  left- engine is woof`);
    }

    public stopEngine(): void {
        console.log(`${this.getDescription()} - engine in unWoof!`);
    }
}

export interface Chargeable extends Maintainable{
    chargeBattery(): { status: string; charge: number };
    replaceBattery(): void;
}

export class Tesla extends ElectricCar implements Chargeable {

    public chargeBattery(): { status: string; charge: number } {
        console.log('charge battery');
        while (this.chargePercentage < 100) {
            this.chargePercentage = Math.min(100, this.chargePercentage + 10);
            console.log(`${this.getDescription()} - charging... ${this.chargePercentage}%`);
        }

        return {
            status: `${this.getDescription()} - fully charged!`,
            charge: this.chargePercentage
        };
    }

    public replaceBattery(): void {
        console.log(`${this.getDescription()} - Replacing battery...`);
    }

    public performMaintenance(): void {
        console.log(`${this.getDescription()} - Servicing...`);
    }

    public tiresCheck():void {
        console.log(`${this.getDescription()} - tire pressure is checking`);
    }
}

export class ElectricCarStation {
    public constructor(
        private car: Chargeable
    ) {}

    public charge(): { status: string; charge: number } {
        return this.car.chargeBattery();
    }

    public replaceBattery(): void {
        this.car.replaceBattery();
    }

    public service(): void {
        this.car.performMaintenance();
    }

    public tiresCheck(): void {
        this.car.tiresCheck();
    }

    public maintain(): void{
        this.charge();
        this.service();
        this.replaceBattery();
        this.tiresCheck();
    }

}

// const tesla = new Tesla('Tesla', 'model 3', 2022, 69);
// tesla.startEngine();
// tesla.stopEngine();

// const result = tesla.chargeBattery();
// console.log(result.status);
// console.log(`Current charge: ${result.charge}%`);

// const electricCarChargeStation = new ElectricCarStation(tesla);
// electricCarChargeStation.maintain();

