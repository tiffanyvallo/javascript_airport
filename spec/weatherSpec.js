'use strict';

describe('Weather', () => {
let weather;
beforeEach(() => {
  weather = new Weather();
});
  it ('can rarely produces stormy weather', () => {
    spyOn(Math,'random').and.returnValue(1);
    expect(weather.isStormy()).toBeTruthy();
  });
  it('can give not stormy weather majority of the time', () => {
    spyOn(Math,'random').and.returnValue(0);
    expect(weather.isStormy()).toBeFalsy();
  });
});