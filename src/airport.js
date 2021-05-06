'use strict';
class Airport{
  constructor(capacity = 2) {
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
    this._hangar.push(plane);
  };
  clearForTakeOff(plane) {
    if(this.isStormy()) {
      throw new Error('Plane not taking off due to storm');
    }
    this._hangar.pop(plane);
  }
   isStormy() {
     return false;
   }
};
