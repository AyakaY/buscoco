(function() {
  'use strict';

  angular
    .module('buscoco.mock.service.getroute', [])
    .factory('GetRouteService', GetRouteService);

  function GetRouteService() {
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
