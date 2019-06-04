/* eslint-disable no-undef */
import { IceChest } from '../src/iceChest';
import { exportAllDeclaration } from '@babel/types';

describe('iceChest', () => {
  let iceChest;

  beforeEach(() => {
    iceChest = new IceChest();
  });

  describe('constructor' , () => {
    test('should create instance of IceChest', () => {
      expect(typeof iceChest).toBe('object');
    });
  });

  describe('iceChest methods', () => {
    test('should add an Organ object to iceChest.organInv', () => {
      let organ = new Object();
      iceChest.capacity = 5;
      iceChest.addOrgan(organ);
      expect(iceChest.organInv.length).toEqual(1);
      expect(iceChest.addOrgan(organ)).toBe(true);
    });

    test('should not add an Organ object when capacity is full', () => {
      let organ = new Object();
      iceChest.capacity = 1;
      iceChest.addOrgan(organ);
      expect(iceChest.addOrgan(new Object)).toBe(false);
    });

    test('should increase iceChest.capacity', () => {
      iceChest.addCapacity();
      expect(iceChest.capacity).toEqual(5);
    });

    test('should check the capacity of iceChest', () => {
      expect(iceChest.checkCapacity()).toEqual(0);
      iceChest.addCapacity();
      expect(iceChest.checkCapacity()).toEqual(5);
    });

    test('should determine if max capacity possible has been reached', () => {
      expect(iceChest.isUnderCapacity()).toEqual(true);
      iceChest.capacity = 20;
      expect(iceChest.isUnderCapacity()).toEqual(false);
    });
  });
});