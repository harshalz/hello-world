(function() {
  'use strict';

  angular
    .module('testApp')
    .controller('EmpDetailsCtrl', ['$scope', 
                                   '$routeParams', 
                                   '$location', 
                                   'EmpService', 
                                   EmpDetailsCtrl]);

  function EmpDetailsCtrl(scope, routeParams, location, EmpService) {
    var id = parseInt(routeParams.id, 10);

    var promise = EmpService.getEmp(id);
    promise
      .success(function(data) {
        scope.emp = data;
      })
      .error(function() {
        
      });

    scope.save = function() {
      EmpService.saveEmp(id, scope.emp);
      location.path('/emps');
    };
  }
}());