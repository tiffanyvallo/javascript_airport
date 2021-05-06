'use strict';

describe ('Feature Test:', function() {
  let plane;
  let airport;
  

  beforeEach(() => {
    plane = new Plane();
    airport = new Airport();
  }); 

  it('can land a plane',function() {
    plane.land(airport);
    expect(airport.planes()).toContain(plane)
  });

  it('can let plane takeoff', function() {
    plane.land(airport);
    plane.takeoff(airport);
    expect(airport.planes()).not.toContain(plane)
  });
});