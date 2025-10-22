import {jest} from '@jest/globals';
import {BMW, GasStation} from '../../../lesson9/Home_Work9/gas-car';

describe('gas-car', () => {
    let car: BMW;
    let station: GasStation;

    beforeEach(() => {
        car = new BMW('BMW', 'X5', 2021, 80, 15);
        station = new GasStation(car);

        jest.spyOn(car, 'startEngine').mockReturnValue('start');
        jest.spyOn(car, 'stopEngine').mockReturnValue();
        jest.spyOn(car, 'refuelTank').mockReturnValue();
        jest.spyOn(car, 'changeOil').mockReturnValue();
        jest.spyOn(car, 'tiresCheck').mockReturnValue();
        jest.spyOn(car, 'performMaintenance').mockReturnValue();

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

    it('should call refuel method', () => {
        station.refuel();

        expect(car.refuelTank).toHaveBeenCalled();
    });

    it('should return change oil method', () => {
        station.changeOil();

        expect(car.changeOil).toHaveBeenCalled();
    });

    it('should call tire check method', () => {
        station.tiresCheck();

        expect(car.tiresCheck).toHaveBeenCalled();
    });

    it('should call maintenance method', () => {
        station.performMaintenance();

        expect(car.performMaintenance).toHaveBeenCalled();
    });

    it('should call maintain method', () => {
        station.maintain();

        expect(car.refuelTank).toHaveBeenCalled();
        expect(car.changeOil).toHaveBeenCalled();
        expect(car.tiresCheck).toHaveBeenCalled();
        expect(car.performMaintenance).toHaveBeenCalled();
    });
});


