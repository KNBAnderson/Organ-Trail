import { Organ, initOrgans } from './organ';
import { IntactOrgans } from './IntactOrgans';

export class Donor {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.organs = new IntactOrgans();
    }

    canHarvest(organName){
        if(organName == "lung" && this.organs.lung.count > 1 && this.organs['lung'].healthValue < this.health){
            return true;
        }
        else if(this.organs.organName.healthValue < this.health) {
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
        this.health -= this.organs.organName.healthValue;
        return this.organs.organName;
    }
}