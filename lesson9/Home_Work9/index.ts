import {Tesla, ElectricCarStation  } from './electric-car';
import {BMW, GasStation} from './gas-car';

const tesla = new Tesla('Tesla', 'model 3', 2022, 69);
tesla.startEngine();
tesla.stopEngine();

const result = tesla.chargeBattery();
console.log(result.status);
console.log(`Current charge: ${result.charge}%`);

const electricCarChargeStation = new ElectricCarStation(tesla);
electricCarChargeStation.maintain();

console.log('---------------------------');

const bmw = new BMW('BMW', 'X5', 2024, 80, 0);
console.log(bmw.startEngine());
try {
    const distance = bmw.calculateMaxDistance();
    console.log(`Max distance: ${distance} km`);
} catch (error) {
    console.error('Error calculating distance:', (error as Error).message);
}
bmw.stopEngine();

const gasStation = new GasStation(bmw);
gasStation.maintain();
