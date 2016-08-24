(function() {
  'use strict';
  
  angular
    .module('testApp', ['ngRoute'])
    .config(['$routeProvider', function(rp) {
      rp
        .when('/emps', {
          templateUrl: 'partials/listView.html',
          controller: 'EmpListCtrl'
        })
        .when('/emp-details/:id', {
          templateUrl: 'partials/detailsView.html',
          controller: 'EmpDetailsCtrl'
        })
        .otherwise({
          redirectTo: '/emps'
        });
    }]);
}());