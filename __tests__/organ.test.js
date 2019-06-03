import { Organ, IntactOrgans } from '../src/organ';
import { exportAllDeclaration } from '@babel/types';

describe('organ', () => {
    let organ;

    beforeEach(()=>{
        organ = new Organ("testOrgan", 10, 10, 3);
    })


    describe('constructor', () => {

        test('should create instance of Organ', () => {
            expect(typeof organ).toBe('object');
            expect(organ.name).toEqual('testOrgan');
            expect(organ.saleValue).toEqual(10);
            expect(organ.healthValue).toEqual(10);
            expect(organ.count).toEqual(3);
        });
    });

    describe('organ methods', () => {
        test('should lower organ.count by 1', () => {
            expect(organ.lowerOrganCount()).toBe(true);
            expect(organ.count).toEqual(2);
            organ.count = 0;
            expect(organ.lowerOrganCount()).toBe(false);
        });
    });

    describe('related functions', () => {
        test('should inititalize an intact organ array', () => {
            let playerOrgans = new IntactOrgans();
            expect(Object.keys(playerOrgans).length).toEqual(7);
        });
    });

});

