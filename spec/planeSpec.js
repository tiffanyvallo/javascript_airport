'use strict';

describe('Plane', () => {
  let plane;
  let airport;
  beforeEach(function() {
    plane = new Plane();
    airport = jasmine.createSpyObj('airport',['clearForLanding', 'clearForTakeOff']);
  });
  it('can land at an airport', function() {
    plane.land(airport);
    expect(airport.clearForLanding).toHaveBeenCalledWith(plane);
  });
  it('can takeoff from an airport', () => {
    plane.land(airport);
    plane.takeoff();
    expect(airport.clearForTakeOff).toHaveBeenCalled();
  });
});