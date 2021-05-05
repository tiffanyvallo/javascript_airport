describe ('Airport', function(){
  let airport;

  beforeEach(() => {
    airport = new Airport();
  }); 

  describe('land method', function() {
    it('can respond to land',function() {
      expect(airport._isLanded()).toBe(true)
    });
  });


});