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
      throw new Error('the hangar is full')
    }
    this._hangar.push(plane);
  };
  clearForTakeoff(plane) {
    this._hangar.pop(plane);
   };
   
};
