'use strict';

describe('Airport', () => {
  let airport;
  let plane;
  let weather;

  beforeEach(function() {
    plane = jasmine.createSpy('plane',['land']);
    weather = jasmine.createSpyObj('weather', ['isStormy']);
    airport = new Airport(weather, 2);
  });

  it('has no planes by default', () => {
    expect(airport.planes()).toEqual([]);
  });

  it('has a default capacity', () => {
    expect(airport._capacity).toEqual(2)
  });

  it('raises an error when airport is full', () => {
    airport.clearForLanding(plane)
    airport.clearForLanding(plane)
    airport.clearForLanding(plane)
    expect(() => { airport.clearForLanding(plane) }).toThrowError('Airport is over-capacity')
  });

  it('can override the default capacity',() => {
    let airport = new Airport(weather, 3)
    airport.clearForLanding(plane)
    airport.clearForLanding(plane)
    airport.clearForLanding(plane)
    airport.clearForLanding(plane)
    expect(() => { airport.clearForLanding(plane) }).toThrowError('Airport is over-capacity')
  });
  
  describe('under normal weather conditions', () => {
    beforeEach(() => {
      weather.isStormy.and.returnValue(false);
    });

    it('can clear planes for landing', function() {
      airport.clearForLanding(plane);
      expect(airport.planes()).toEqual([plane]);
    });

    it('can clear planes for takeoff', () => {
      airport.clearForLanding(plane);
      airport.clearForTakeOff(plane);
      expect(airport.planes()).toEqual([]);
    });
  });
  
  describe('under stormy weather conditions', () => {
    beforeEach(() => {
      weather.isStormy.and.returnValue(true);
    });
    it('does not clear planes for landing when stormy', () => {
      expect(() => { airport.clearForLanding(plane); }).toThrowError('Plane cannot land during storm');
    });
    it('does not clear planes for takeoff when stormy', () => {
      spyOn(airport,'isStormy').and.returnValue(true);
      expect(() => { airport.clearForTakeOff(plane); }).toThrowError('Plane not taking off due to storm');
    });
  });
});

