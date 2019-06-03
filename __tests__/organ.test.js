import { Organ } from '../src/organ';
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
    
});

