(function() {
  'use strict';
  
  describe('A Calculator', function() {
    describe('Addition', function() {
      var scope;
      beforeEach(module('testApp'));
      beforeEach(inject(function($controller) {
        scope = {};
        var controller = $controller('TestCtrl', { $scope: scope });
      }));
      
      it('adds 2 number', function() {
        scope.add(2, 4);
        expect(scope.sum).toBe(1);
      });
    });
  });
}());