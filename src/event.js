export class Event {
  constructor(descStr, outcomesAry){
    this.description = descStr;
    this.outcomes = outcomesAry;
  }
}

export function initEvents() {
  let outcomes = new OutcomesList();

  let friendlyStranger = new Event("A kindly mutant offers to tell your party about a shortcut he knows. His one eye twinkles as he grins and begins to shuffle towards a dark alley", [outcomes['harvest'], outcomes['inceaseSpeed'], outcomes['doNothing']]);

  let sleepingMan = new Event("You come across a man laying in the street.  No one is looking.", [outcomes['doNothing'], outcomes['harvest']]);

  let robbed = new Event("You've been robbed in the night", [outcomes['minusFirstAid']]);

  let infection = new Event("A member of your party has contracted a blood infection and will lose health", [outcomes['minusHealth']]);

  let luckyFind = new Event("Your party came across the charred remains of an abandoned bourgan cart. You poked through it with a stick, and miracously find a pile of first aid supplies. Lucky you!", [outcomes['plusFirstAid']]);

  let nurseInDistress = new Event("Your party spots a boargan stuck in the mud and it's owner trying to help pull it out.  Turns out, shes a nurse and offers to heal one of your pary members in exhchange for your help.", [outcomes['harvest'], outcomes['plusHealth']]);

  return [friendlyStranger, sleepingMan, robbed, infection, luckyFind, nurseInDistress];
}

export class Outcome {
  constructor(text, funcInt){
    this.text = text;
    this.funcInt = funcInt;
  }
}

export class OutcomesList {
  constructor(){
    this.doNothing = new Outcome('you choose to do nothing',0);
    this.harvest = new Outcome('Harvest this person\'s body', 1);
    this.inceaseSpeed = new Outcome('your speed is increased', 2);
    this.decreaseSpeed = new Outcome('your speed is decreased', 3);
    this.minusFirstAid = new Outcome('you lost firstAid supplies', 4);
    this.plusFirstAid = new Outcome('gain first aid supplies',5);
    this.minusHealth = new Outcome('one party member loses health', 6);
    this.plusHealth = new Outcome('one party member gains health', 7);
  }
}

//build an event/outcome parser in the game object
//takes a number, and then calls the correct function according to the outcome objects funcInt
// 1 - harvestBody()
// 2 - increaseSpeed() or distance()
// 3 - decreaseSpeed()
// 4 - decreaseHealth()
// 5 - increaseHealthPack()
