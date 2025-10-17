import { Car } from './abstracts/abstract';
import { Maintainable } from './interface/interface';

class ElectricCar extends Car {
    public constructor(
        brand: string,
        model: string,
        year: number,
        private chargePercentage: number
    ) {
        super(brand, model, year);
    }

    public startEngine(): void {
        console.log(`${this.getDescription()} - left ${this.chargePercentage}% - engine is woof`);
    }

    public stopEngine(): void {
        console.log(`${this.getDescription()} - engine in unWoof!`);
    }
}

interface Chargeable extends Maintainable{
    chargeBattery(): void;
    replaceBattery(): void;
}

export class Tesla extends ElectricCar implements Chargeable {
    public chargeBattery(): void {
        console.log(`${this.getDescription()} - is charging`);
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

    public charge(): void {
        this.car.chargeBattery();
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

// const electricCarChargeStation = new ElectricCarStation(tesla);
// electricCarChargeStation.maintain();

