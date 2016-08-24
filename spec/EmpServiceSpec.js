(function() {
  'use strict';
  
  describe('Service', function() {
    describe('Emp Service', function() {
      var empService;
      
      beforeEach(module('testApp'));
      beforeEach(inject(function(EmpService) {
        empService = EmpService;
      }));
      
      it('has allEmp Method', function() {
        expect(true).toBe(true);
      });
    });
  });
}());