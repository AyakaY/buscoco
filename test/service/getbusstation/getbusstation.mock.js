(function() {
  'use strict';

  angular
    .module('buscoco.mock.service.getbusstation', [])
    .factory('GetBusStationService', GetBusStationService);

  function GetBusStationService() {
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
