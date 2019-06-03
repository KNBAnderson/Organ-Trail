export class Organ {
    constructor(name, saleValue, healthValue, count) {
        this.name = name;
        this.saleValue = saleValue;
        this.healthValue = healthValue;
        this.count = count;
    }

    lowerOrganCount() {
        if(this.count > 0) {
            this.count--;
            return true;
        } else {
            return false;
        }
    }
        
}
       
export class IntactOrgans {
    constructor(){
        this.finger = new Organ('finger', 5, 5, 10);
        this.liver = new Organ('liver', 30, 15, 2);
        this.kidney = new Organ('kidney', 50, 15, 2);
        this.appendix = new Organ('appendix', 5, 10, 1);
        this.heart = new Organ('heart', 100, 100, 1);
        this.eye = new Organ('eye', 20, 10, 2);
        this.lung = new Organ('lung', 45, 15, 4);
    }
}