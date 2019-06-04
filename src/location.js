export class Location {
  constructor(name, description, hasShopBool, distance){
    this.name = name;
    this.description = description;
    this.hasShop = hasShopBool;
    this.distance = distance;
  }
}

export function initLocations() {
  let local1 = new Location('BackAlley Butcher Shop', 'Get your fine meats here', true, 700);
  let local2 = new Location('Seedy Motel', 'There\'s a vacancy where your spleen used to be', false, 200);
  let local3 = new Location('RosUnwell, New Mexico', 'They say the filet mig\'non is out of this world.  It\'s just boargan', true, 500);
  let local4 = new Location('Salt Lake City, Gutah', 'Still boring', false, 800);
  let local5 = new Location('Boargan processing plant', 'And you thought they smelled back on the outside', true, 1000);
  let local6 = new Location('Organ City, Organ', 'End of the trail', false, 1500);
  return [local1, local2, local3, local4, local5, local6];
}