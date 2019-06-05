import { Party } from './party';
import { initLocations } from './location';
import { Event, initEvents } from './event';
import {Donor } from './../src/donor';
import { Shop } from './../src/shop';

export class Game {
  constructor() {
    this.party = new Party();
    this.locations = initLocations();
    this.events = initEvents();
    //this.shop = new Shop();
    this.day = 0;
  }

  // checkLocation() {
  //   if (this.party.distanceTraveled > this.locations[0].distance) {
        //trigger that location stuff
        //unshift that location from array above
  //   }
  //}
  

  isGameOver() {
    if (this.party.donors.every(checkDead)) {
      return 'Lose';
    } else if (this.party.distanceTraveled > 1500) {
      return 'Win';
    } else {
      return false;
    }
  }

  gameWon() {
    //this will probably do something else
    return true;
  }

  gameLost() {
    //this will probably do something else
    return false;
  }

  dayEnd() {
    if (!this.isGameOver()) {
      this.party.checkIce();
      this.party.checkFirstAid();
      this.party.updateSpeed();
      this.party.updateDistanceTraveled();
      let random = Math.floor(Math.random() * (25 + 1 - 0)) + 0; 
      if (random % 3 === 0) {
        let event = randomize(this.events);
        // launch event could happen here
      }
      this.day++;
    //this.checkLocation();
    } else if (this.isGameOver() === 'Win'){
      console.log('here');
      return this.gameWon();
    } else if (this.isGameOver() === 'Lose') {
      return this.gameLost(); 
    } 
  } 
}

export function randomize(arr) {
  let max = arr.length - 1;
  let min = 0;
  let random = Math.floor(Math.random() * (max + 1 - min)) + min;
  return arr[random];
}

function checkDead(element) {
  return element.health < 1;
} 