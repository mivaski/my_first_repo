import { GasCar } from '../../../lesson9/Home_Work9/gas-car';;
import { describe } from 'mocha';
import { expect } from 'chai';

describe('GasCar', () => {
    describe('startEngine', () => {
        it('should return appropriate message in case fuel level is equal 0 ', () => {
            const gasCar = new GasCar('VW', 'Golf', 1989, 30, 0);
            const message = gasCar.startEngine();
            const desc = gasCar.getDescription();
            expect(message).equal(`${desc} - fuel empty. Engine cannot start.`);
        });

        it('should return appropriate message in case fuel level less then 0 ', () => {
            const gasCar = new GasCar('VW', 'Golf', 1989, 30, -1);
            const message = gasCar.startEngine();
            const desc = gasCar.getDescription();
            expect(message).equal(`${desc} - fuel empty. Engine cannot start.`);
        });

        it('should return appropriate message in case there is enough fuel', () => {
            const gasCarFuelLevel = 15;
            const gasCar = new GasCar('VW', 'Golf', 1989, 30, gasCarFuelLevel);
            const message = gasCar.startEngine();
            const desc = gasCar.getDescription();
            expect(message).equal(`${desc} - ${gasCarFuelLevel}L left - engine is vroom-vroom`);
        });
    });

    describe('calculateMaxDistance', () => {
        it('should return an error if fuel level equal 0', () => {
            const gasCar = new GasCar('VW', 'Golf', 1989, 30, 0);
            // const maxDistance = gasCar.calculateMaxDistance();
            expect(() => gasCar.calculateMaxDistance()).to.throw('Fuel consumption must be greater than zero.');
        });

        it('should calculate max distance', () => {
            const gasCar = new GasCar('VW', 'Golf', 1989, 60, 6);
            const result = gasCar.calculateMaxDistance();
            //Math.round(this.fuelCapacity / this.fuelLevel) * 100
            expect(result).to.be.closeTo((60 / 6) * 100, 2);
        });
    });
});
