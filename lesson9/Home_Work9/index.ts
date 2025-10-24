import {Tesla, ElectricCarStation  } from './electric-car';
import {BMW, GasStation} from './gas-car';

const tesla = new Tesla('Tesla', 'model 3', 2022, 69);
tesla.startEngine();
tesla.stopEngine();

const electricCarChargeStation = new ElectricCarStation(tesla);
electricCarChargeStation.maintain();


const bmw = new BMW('BMW', 'X5', 2024, 80, 9);
bmw.startEngine();
console.log(`Max distance: ${bmw.calculateMaxDistance()} km`);
bmw.stopEngine();


const gasStation = new GasStation(bmw);
gasStation.maintain();
