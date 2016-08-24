(function() {
  'use strict';
  
  angular
    .module('testApp')
    .filter('YesNo', function() {
      return function (input, fullForm) {
        if (fullForm) {
          return input ? 'Yes' : 'No';
        } else {
          return input ? 'Y' : 'N';
        }
      }
    });
}());