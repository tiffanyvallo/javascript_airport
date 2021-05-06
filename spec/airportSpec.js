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
  it('can clear planes for landing', function() {
    airport.clearForLanding(plane);
    expect(airport.planes()).toEqual([plane]);
  });
  it('can clear planes for takeoff', function() {
    airport.clearForLanding(plane)
    airport.clearForTakeoff(plane)
    expect(airport.planes()).toEqual([]);
  });
  it('has a default capacity', () => {
    expect(airport._capacity).toEqual(2)
  });
  it('raises an error when airport is full', () => {
    airport.clearForLanding(plane)
    airport.clearForLanding(plane)
    airport.clearForLanding(plane)
    expect(() => { airport.clearForLanding(plane) }).toThrowError('the hangar is full')
    
  });
});

