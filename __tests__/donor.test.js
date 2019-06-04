/* eslint-disable no-undef */
import { Organ, IntactOrgans} from './../src/organ';
import { Donor, Boargan, getPremadeParty } from './../src/donor';

describe('donor', () => {
  let donor;

  beforeEach(()=>{
    donor = new Donor("Test Donor");
  });

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
    });

    test('return true if the player is out of health', ()=>{
      expect(donor.isDead()).toBe(false);
      donor.health = 0;
      expect(donor.isDead()).toBe(true);
    });

    test('should return array of organs where count !=0', () => {
      let organs = donor.getAvailableOrgans();
      expect(organs.length).toEqual(22);
    });

    test('should lower players organ count', () => {
      donor.removeOrgan('finger');
      expect(donor.organs['finger'].count).toEqual(9);
    });
  });

  describe('boargan child class', () => {
    test('should create boargan instance', () => {
      let newBoargan = new Boargan("Boargan Freenman");
      expect(typeof newBoargan).toBe('object');
      expect(newBoargan.speed).toEqual(25);
      expect(newBoargan.health).toEqual(100);
      newBoargan.removeOrgan('kidney');
      expect(newBoargan.organs['kidney'].count).toEqual(1);
    });
  });

  describe('premade party array of donors', () => {
    test('should create a party of four donors', () => {
      let donors = getPremadeParty();
      expect(donors.length).toEqual(4);
    })
  })
});