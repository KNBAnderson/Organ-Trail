/* eslint-disable no-undef */
import { Location, initLocations } from './../src/location';

describe('Location', () => {
  describe('class constructor', () => {
    test('should create location object', () => {
      let location = new Location("test","test description", true, 100);
      expect(typeof location).toBe('object');
      expect(location.name).toEqual('test');
      expect(location.hasShop).toBe(true);
    });

    test('should return array of locations', () => {
      let locations = initLocations();
      expect(locations.length).toEqual(6);
      expect(locations[3].description).toEqual('Still boring');
    });
  });
});
