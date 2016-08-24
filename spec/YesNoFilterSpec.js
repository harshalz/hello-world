(function() {
  'use strict';
  
  describe('Filters', function() {
    describe('Yes No Filter', function() {
      var yesNo;
      beforeEach(module('testApp'));
      beforeEach(inject(function($filter) {
        yesNo = $filter('YesNo');
      }));
      
      it('for true value', function() {
        var result = yesNo(true, true);
        expect(result).toBe('Yes');
      });
      
      it('for false value', function() {
        var result = yesNo(false);
        expect(result).toBe('No');
      });
      
      it('for undefined value', function() {
        var result = yesNo();
        expect(result).toBeUndefined();
      });
    });
  });
}());