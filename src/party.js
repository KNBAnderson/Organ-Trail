import { Donor, getPremadeParty } from './donor';
import { IceChest } from './iceChest';
import { Organ } from './organ';

export class Party {
  constructor() {
    this.donors = getPremadeParty();
    this.distanceTraveled = 0;
    this.speed = 0;
    this.score = 0;
    this.morals = 10;
    this.inventory = {
      ice: 0,
      bloodpack: 0,
      dialysis: false,
      redbull: 0,
      firstaid: 0,
      wallet: 0
    };
    this.boargans = [];
    this.iceChest = new IceChest();
  }

  harvestPartyOrgan(playerObject, organName) {
    if(playerObject.canHarvest(organName) && this.iceChest.capacity > this.iceChest.organInv.length)
    {
      let organObj = playerObject.removeOrgan(organName); 
      this.iceChest.organInv.push(organObj);
      this.inventory.wallet = organObj.saleValue;
      return true;
    } else {
      return false;
    }
  }

  updateSpeed() {
    let baseSpeed = 25;
    let boarganSpeed = this.boargans.length * 25;
    let blindSpeed = 0;
    this.donors.forEach(donor => {
      if (donor.organs['eye'].count === 0) {
        blindSpeed -= 10;
      }   
    })
    let redbullSpeed = this.inventory.redbull * 5;
    this.speed = baseSpeed + boarganSpeed + blindSpeed + redbullSpeed;
  }

  updateDistanceTraveled () {
    this.distanceTraveled += this.speed;
  }

  checkIce() {
    if(this.inventory['ice'] < 1 && this.iceChest.organInv.length > 1) {
      this.iceChest.organInv.pop();
      this.inventory.ice = 0;
    } else {
      this.inventory.ice--;
    }
  }

  checkFirstAid() {
    if (this.inventory['firstaid'] < 1) {
      this.donors.forEach(donor => {
        if (!donor.isDead()) {
          donor.health -= 5;
        }
      })
    }
  }
}