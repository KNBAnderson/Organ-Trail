/* eslint-disable no-undef */
import { Donor, Boargan } from './../src/donor';
import { Organ, IntactOrgans } from './../src/organ';
import { Party } from './../src/party';

describe('party', () => {
  let testParty;

  beforeEach(()=>{
    testParty = new Party();
  });

  describe('party constructor', () => {
    test('should instantiate new party object', () => {
      expect(typeof testParty).toBe('object');
      expect(testParty.donors[2].name).toEqual('The Incredible Bat Girl');
      expect(testParty.day).toEqual(0);
      expect(testParty.speed).toEqual(0);
      expect(testParty.distanceTraveled).toEqual(0);
      expect(testParty.score).toEqual(0);
      expect(testParty.morals).toEqual(10);
      expect(testParty.inventory.firstaid).toEqual(0);
      expect(testParty.boargans.length).toEqual(0);
      expect(typeof testParty.iceChest).toBe('object')
    });
  });

  describe('testParty methods', () => {
    test('shopuld update player, wallet, and ice chest values if an organ is harvested', () => {
      testParty.iceChest.capacity = 7;
      expect(testParty.harvestPartyOrgan(testParty.donors[1], 'finger')).toEqual(true);
      expect(testParty.iceChest.organInv[0].name).toEqual('finger');
      expect(testParty.donors[1].organs['finger'].count).toEqual(9);
      expect(testParty.donors[1].health).toEqual(95);
      expect(testParty.inventory['wallet']).toEqual(5);
      testParty.harvestPartyOrgan(testParty.donors[1], 'appendix');
      expect(testParty.harvestPartyOrgan(testParty.donors[1], 'appendix')).toBe(false);
    });
    
    
  });
})