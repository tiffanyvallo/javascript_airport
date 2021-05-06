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

  it('planes can be instructed to takeoff', () => {
    plane.land(airport)
    plane.takeoff();
    expect(airport.planes()).not.toContain(plane);
  });
  
  it('blocks takeoff when weather is stormy', () => {
    plane.land(airport)
    spyOn(airport,'isStormy').and.returnValue(true);
    expect(function(){ plane.takeoff();}).toThrowError('cannot takeoff during storm');
    expect(airport.planes()).toContain(plane);
  });
});