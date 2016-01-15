(function() {
  'use strict';

  angular
    .module('buscoco.mock.service.getdestination', [])
    .factory('GetDestinationService', GetDestinationService);

  function GetDestinationService() {
    return {
      some: someSpy
    };
  }

  var someSpy = jasmine.createSpy().and.returnValue(
    function(cb) {
      return result;
    }
  );

  var result = {};
})();
