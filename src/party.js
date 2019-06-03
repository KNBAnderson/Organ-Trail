export class Party {
    constructor(players) {
        this.players = players;
        this.day = 0;
        this.speed = 100;
        this.score = 0;
        this.morals = 10;
        this.inventory = [];
        this.firstAidkits = 20;
        this.boargans = [];
        this.iceChest = new IceChest();
    }
}