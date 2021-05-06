'use strict';

describe ('Feature Test:', function() {
  let plane;
  let airport;
  

  beforeEach(() => {
    plane = new Plane();
    airport = new Airport();
  }); 

  describe('under normal weather condition', () => {
    beforeEach(() => {
      spyOn(Math,'random').and.returnValue(0);
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
  })

  describe('under stormy weather conditions', () => {
    
    it('blocks takeoff when weather is stormy', () => {
    spyOn(Math,'random').and.returnValue(0);
    plane.land(airport)
    spyOn(airport._weather,'isStormy').and.returnValue(true);
    expect(() => { plane.takeoff();}).toThrowError('Plane not taking off due to storm');
    expect(airport.planes()).toContain(plane);
   });

   it('blocks landing when weather is stormy', () => {
    spyOn(Math,'random').and.returnValue(1);
    expect(() => { plane.land(airport); }).toThrowError('Plane cannot land during storm');
    expect(airport.planes()).toEqual([]);
   });
  });
});