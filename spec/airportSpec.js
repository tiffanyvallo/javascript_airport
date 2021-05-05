'use strict';

describe('Airport', () => {
  let airport;
  let plane;
  beforeEach(function() {
    airport = new Airport();
    plane = jasmine.createSpy('plane',['land']);
  });
  it('has no planes by default', () => {
    expect(airport.planes()).toEqual([]);
  });
  it('can clear planes for landing', function() {
    airport.clearForLanding(plane);
    expect(airport.planes()).toEqual([plane]);
  });
});