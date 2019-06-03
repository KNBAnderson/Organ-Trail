
export class IceChest {
    constructor(){
        this.capacity = 0;
        this.organInv = [];
    }

    addOrgan(organObject) {
        if(this.organInv.length < this.capacity){
            this.organInv.push(organObject)
            return true;
        }
        else {
            return false;
        }
    }

    addCapacity() {
        this.capacity += 5;
    }

    checkCapacity(){
        return this.capacity;
    }

    isUnderCapacity(){
        return(this.capacity < 20);
    }
}