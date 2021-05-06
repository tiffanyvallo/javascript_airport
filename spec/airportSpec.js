'use strict';

describe('Airport', () => {
  let airport;
  let plane;
  beforeEach(function() {
    airport = new Airport(2);
    plane = jasmine.createSpy('plane',['land']);
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
    let airport = new Airport(3)
    airport.clearForLanding(plane)
    airport.clearForLanding(plane)
    airport.clearForLanding(plane)
    airport.clearForLanding(plane)
    expect(() => { airport.clearForLanding(plane) }).toThrowError('Airport is over-capacity')
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

  it('can check for stormy conditions', () => {
    expect(airport.isStormy()).toBeFalsy();
  });

  describe('under stormy conditions', () => {
    it('does not clear planes for takeoff', () => {
      spyOn(airport,'isStormy').and.returnValue(true);
      expect(() => { airport.clearForTakeOff(plane); }).toThrowError('Plane not taking off due to storm');
    });
  });

});

