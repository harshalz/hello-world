(function() {
  'use strict';
  
  angular
    .module('testApp')
    .controller('EmpListCtrl', ['$scope', 'EmpService', EmpListCtrl]);
  
  function EmpListCtrl(scope, EmpService) {
    scope.header = 'header';
    var promise = EmpService.allEmps();
    promise
      .success(function(data) {
        scope.emps = data;
      })
      .error(function() {
        
      });
  }
}());