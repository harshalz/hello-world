(function() {
  'use strict';
  
  angular
    .module('testApp')
    .service('EmpService', ['$http', function(http) {
      var baseUrl = 'http://localhost:8080/spring-rest-employee/rest/employeeController/getAllEmployee';
      
      this.allEmps = function() {
        return http.get(baseUrl);
      };
      
      this.getEmp = function(id) {
        return http.get(baseUrl+'/'+id);
      };
      
      this.saveEmp = function(id, emp) {
        emps.forEach(function(e) {
          if(e.id === id) {
            e = emp;
          }
        });
      };
    }]);
}());