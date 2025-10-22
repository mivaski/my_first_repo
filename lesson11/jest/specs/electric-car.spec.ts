import {jest} from '@jest/globals';
import { ElectricCarStation, Tesla } from '../../../lesson9/Home_Work9/electric-car';

describe('electric-car.ts', () => {
    let car: Tesla;
    let station: ElectricCarStation;

    beforeEach(() => {
        car = new Tesla('Tesla', 'model 1', 2021, 29);
        station = new ElectricCarStation(car);

        jest.spyOn(car, 'startEngine').mockReturnValue();
        jest.spyOn(car, 'stopEngine').mockReturnValue();
        jest.spyOn(car, 'chargeBattery').mockReturnValue({ status: 'charging', charge: 60});
        jest.spyOn(car, 'replaceBattery').mockReturnValue();
        jest.spyOn(car, 'performMaintenance').mockReturnValue();
        jest.spyOn(car, 'tiresCheck').mockReturnValue();
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should call start/stop methods', () => {
        car.startEngine();
        car.stopEngine();

        expect(car.startEngine).toHaveBeenCalledTimes(1);
        expect(car.stopEngine).toHaveBeenCalledTimes(1);

    });

    it('should call charge method', () => {
        station.charge();

        expect(car.chargeBattery).toHaveBeenCalled();
    });

    it('should call replace battery service', () => {
        station.replaceBattery();

        expect(car.replaceBattery).toHaveBeenCalled();
    });

    it('should call service method', () => {
        station.service();

        expect(car.performMaintenance).toHaveBeenCalled();
    });

    it('should call tires check method', () => {
        station.tiresCheck();

        expect(car.tiresCheck).toHaveBeenCalled();
    });

    it('should call all methods for class Tesla', () => {
        station.maintain();

        expect(car.chargeBattery).toHaveBeenCalled();
        expect(car.replaceBattery).toHaveBeenCalled();
        expect(car.performMaintenance).toHaveBeenCalled();
        expect(car.tiresCheck).toHaveBeenCalled();

    });
});
