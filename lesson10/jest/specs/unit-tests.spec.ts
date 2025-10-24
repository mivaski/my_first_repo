import {Tesla} from '../../../lesson9/Home_Work9/electric-car';
import {GasCar} from '../../../lesson9/Home_Work9/gas-car';

describe('index', () => {
    it('should charge battery to 100%', () => {
        const tesla = new Tesla('Tesla', 'model 3', 2022, 75);
        const charge = tesla.chargeBattery();
        expect(charge).toEqual(expect.objectContaining({charge:100}));
    });

    it('should throw error when fuel level is equal 0', () => {
        const gasCar = new GasCar('VW', 'Golf', 1989, 30, 0);
        expect(() => gasCar.calculateMaxDistance()).toThrow('Fuel consumption must be greater than zero.');
    });
});
