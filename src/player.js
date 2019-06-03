import { Organ } from './organ'

export class Player {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.intactOrgans = Organ.addInitialOrgans;
    }
}