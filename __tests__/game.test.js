import { Game, randomize } from './../src/game';
import { Organ } from '../src/organ';

describe('game', () => {
  let testGame;

  beforeEach(()=>{
    testGame = new Game();
  });

  describe('Game constructor', () => {
    test('should instantiate new Game object', () => {
      expect(typeof testGame).toBe('object');
      expect(typeof testGame.party).toBe('object');
      expect(testGame.locations.length).toEqual(6);
      expect(testGame.events.length).toEqual(6);
      expect(testGame.day).toEqual(0);
    });
  });

  describe('game methods', () => {
    test('should check if game is over', () => {
      expect(testGame.isGameOver()).toBe(false);
      let loseGame = new Game();
      loseGame.party.donors.forEach(donor => {
        donor.health = 0;
      });
      expect(loseGame.isGameOver()).toEqual('Lose');
      let winGame = new Game();
      winGame.party.distanceTraveled = 2000;
      expect(winGame.isGameOver()).toEqual('Win');
    })

    test('should check that the game does things at the end of the day', () => {
      testGame.party.iceChest.organInv.push(new Organ('test', 3, 3, 5));
      testGame.party.iceChest.organInv.push(new Organ('other organ', 34, 23, 12));
      testGame.dayEnd();
      expect(testGame.party.iceChest.organInv.length).toEqual(1);
      expect(testGame.party.donors[2].health).toEqual(95);
      testGame.party.inventory['ice'] = 5;
      testGame.dayEnd();
      expect(testGame.party.inventory['ice']).toEqual(4);
      testGame.party.distanceTraveled = 3000;
      expect(testGame.dayEnd()).toEqual(true);
      testGame.party.distanceTraveled = 4;
      testGame.party.donors.forEach(donor => {
        donor.health = 0;
      });
      expect(testGame.dayEnd()).toBe(false);
    })

    test('should return random element from an array', () => {
      let array = [7, 8, 9, 10];
      expect(typeof randomize(array)).toBe('number');
      expect(randomize(array)).toBeGreaterThan(7);
      expect(randomize(array)).toBeLessThan(11);
    })
  })
})