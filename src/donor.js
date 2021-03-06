import { Organ, IntactOrgans} from './organ';

export class Donor {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.organs = new IntactOrgans();
  }

  canHarvest(organName){
    if(organName == "lung" && this.organs['lung'].count > 1 && this.organs['lung'].healthValue < this.health){
      return true;
    }
    else if(this.organs[organName].healthValue < this.health && this.organs[organName].count > 0 && organName !== 'lung') {
      return true;
    }
    else {
      return false;
    }
  }

  isDead(){
    return(this.health <= 0);
  }

  removeOrgan(organName){
    this.organs[organName].lowerOrganCount();
    this.health -= this.organs[organName].healthValue;
    return this.organs[organName];
  }

  getAvailableOrgans() {
    let propArray = Object.values(this.organs);
    let availableOrgans = [];
    propArray.forEach(organ => {
      if (organ.count > 0) {
        for (let i = 1; i <= organ.count; i++) {
          // organ.count = 1;
          availableOrgans.push(organ);
        }
      }
    });
    return availableOrgans;
  }

}


export function getPremadeParty() {
  let donor1 = new Donor('Little Jimmy');
  let donor2 = new Donor('Twelve-Toe Moe');
  let donor3 = new Donor('The Incredible Bat Girl');
  let donor4 = new Donor('Jane Doe');
  return [donor1, donor2, donor3, donor4];
} 

export class Boargan extends Donor {
  constructor(name){
    super(name);
    this.speed = 25;
  }
}