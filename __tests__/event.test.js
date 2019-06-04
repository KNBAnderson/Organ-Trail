/* eslint-disable no-undef */
import { Event, Outcome, OutcomesList, initEvents } from './../src/event';

describe('Event Object', ()=>{

  describe('event constructor', ()=>{
    test('should create event object', ()=>{
      let newEvent = new Event('test', [1,2,3]);
      expect(typeof newEvent).toBe('object');
      expect(newEvent.description).toEqual('test');
      expect(newEvent.outcomes[1]).toEqual(2);
    });
  });
});

describe('Outcome object',()=>{

  describe('Outcome constructor', () => {

    test('should create new Outcome object ', () => {
      let newOutcome = new Outcome('harvest body', 1);
      expect(newOutcome.text).toEqual('harvest body');
      expect(newOutcome.funcInt).toEqual(1);   
    });
  });

  describe('OutcomesList object constructor', () => {
    test('should create new OutcomesList object ', () => {
      let ol = new OutcomesList();
      expect(ol['doNothing'].funcInt).toEqual(0);  
    });
  });

  describe('initEvents',()=>{
    test('should return an array of prebuilt events', () => {
      let eventList = initEvents();
      expect(eventList.length).toEqual(6);
      expect(eventList[0].description).toEqual('A kindly mutant offers to tell your party about a shortcut he knows. His one eye twinkles as he grins and begins to shuffle towards a dark alley');
      expect(eventList[1].outcomes.length).toBe(2);
    });
  });
});