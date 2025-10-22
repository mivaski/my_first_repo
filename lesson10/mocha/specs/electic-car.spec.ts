import { Tesla } from '../../../lesson9/Home_Work9/electric-car';
import { describe } from 'mocha';
import { expect } from 'chai';

describe('Tesla chargeBattery', () => {
    it('should charge battery till 100%', () => {
        const tesla = new Tesla('Tesla', 'model 3', 2022, 65);
        const result = tesla.chargeBattery();
        expect(tesla.chargePercentage).to.equal(100);
        expect(result.charge).to.equal(100);
    });

    it('should return appropriate message when battery is charged', () => {
        const tesla = new Tesla('Tesla', 'model 3', 2022, 53);
        const result = tesla.chargeBattery();
        expect(result.status).to.include('fully charged');
    });

    it('should do nothing when battery is 100%', () => {
        const tesla = new Tesla('Tesla', 'model 3', 2022, 100);
        const result = tesla.chargeBattery();
        expect(result.charge).to.equal(100);
        expect(tesla.chargePercentage).to.equal(100);
    });
});
