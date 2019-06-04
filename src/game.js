import { Party } from './party';
import { initLocations } from './location';
import { Event, initEvents } from './event';

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

  //   }
  }

  isGameOver () {
    if (this.party.donors.every(donor => {donor.health <= 0;})) {
      return 'Lose';
    } else if (this.party.distanceTraveled > 1500) {
      return 'Win';
    } else {
      return false;
    }
  }

  dayEnd() {
    if (!this.isGameOver()) {
    //check ice
    if(this.party.invetory.ice < 1 && this.party.iceChest.organInv.length > 1) {
      this.party.iceChest.organInv.pop();
      this.party.invetory.ice = 0;
    } else {
      this.party.invetory.ice--;
    }
    //check first aid level
    if (this.party.inventory.firstaid < 1) {
      this.party.donors.forEach(donor => {
        if (!donor.isDead()) {
          donor.health -= 5;
        }
      })
    }
    this.party.updateSpeed();
    this.party.updateDistanceTraveled();
    let random = Math.floor(Math.random() * (25 + 1 - 0)) + 0; 
    if (random % 3 === 0) {
      let event = randomize(this.events);
     // event.launchEventdsiplay();
    }
    this.day++;
    this.checkLocation();
    } else if (this.isGameOver() === 'Win'){
      //stuff if game won
    } else if (this.isGameOver() === 'Lose') {
      //stuff if game lost
    } else {
      console.log('Error with endGame function at dayEnd')
    }
  } 
}
export function randomize(arr) {
  let max = arr.length;
  let min = 0;
  let random = Math.floor(Math.random() * (max + 1 - min)) + min;
  return arr[random];
}

