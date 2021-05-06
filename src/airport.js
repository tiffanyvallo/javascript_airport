'use strict';
class Airport{
  constructor(weather, capacity = 2) {
    this._weather = typeof weather !== 'undefined' ? weather : new Weather();
    this._hangar = []
    this._capacity = capacity
  }
  planes() {
    return this._hangar;
  }
  clearForLanding(plane) {
    if(this._hangar.length > this._capacity) {
      throw new Error('Airport is over-capacity')
    }
    if(this._weather.isStormy()) {
      throw new Error('Plane cannot land during storm');
    }
    this._hangar.push(plane);
  };
  clearForTakeOff(plane) {
    if(this._weather.isStormy()) {
      throw new Error('Plane not taking off due to storm');
    }
    this._hangar.pop(plane);
  }
   isStormy() {
     return false;
   }
};
