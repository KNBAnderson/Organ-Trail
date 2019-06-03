import { Organ, IntactOrgans} from './../src/organ';
import { Donor } from './../src/donor';

describe('donor', () => {
    let donor;

    beforeEach(()=>{
        donor = new Donor("Test Donor");
    })

    describe('donor constructor', () => {
        test('should instantiate new donor object', () => {
            expect(typeof donor).toBe('object');
            expect(donor.name).toEqual('Test Donor');
            expect(donor.health).toEqual(100);
            expect(donor.organs['lung'].name).toEqual('lung');
        });
    });

    describe('donor methods', () => {
        test('return true if organ harvest won\'t kill donor', () => {
        expect(donor.canHarvest('finger')).toEqual(true);
        expect(donor.canHarvest('lung')).toEqual(true);
        donor.organs['finger'].count = 0;
        donor.organs['lung'].count = 1;
        expect(donor.canHarvest('finger')).toEqual(false);
        expect(donor.canHarvest('lung')).toEqual(false);
        })

        test('return true if the player is out of health', ()=>{
            expect(donor.isDead()).toBe(false);
            donor.health = 0;
            expect(donor.isDead()).toBe(true);
        })

        test('should return array of organs where count !=0', () => {
            let organs = donor.getAvailableOrgans();
            expect(organs.length).toEqual(22);
        });

        test('should lower players organ count', () => {
            donor.removeOrgan('finger');
            expect(donor.organs['finger'].count).toEqual(9);
            
        })
    });
});