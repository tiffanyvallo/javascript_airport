'use strict';

describe('Plane', () => {
  let plane;
  let airport;
  beforeEach(function() {
    plane = new Plane();
    airport = jasmine.createSpyObj('airport',['clearForLanding']);
  });
  it('can land at an airport', function() {
    plane.land(airport);
    expect(airport.clearForLanding).toHaveBeenCalledWith(plane);
  });
});