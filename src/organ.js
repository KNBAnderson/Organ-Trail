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
        
    addInitialIntactOrgans() {
        let finger = new Organ('finger', 5, 5, 10);
        let liver = new Organ('liver', 30, 15, 2);
        let kidney = new Organ('kidney', 50, 15, 2);
        let appendix = new Organ('appendix', 5, 10, 1);
        let heart = new Organ('heart', 100, 100, 1);
        let eye = new Organ('eye', 20, 10, 2);
        let lung = new Organ('lung', 45, 15, 4);
        let organArray = [finger, liver, kidney, appendix, heart, eye, lung];
        return organArray;
    } 
}