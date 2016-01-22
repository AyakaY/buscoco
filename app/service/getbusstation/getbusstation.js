/**
 * GetBusStation Service module.
 *
 * @module buscoco.service.getbusstation
 */
(function() {
  'use strict';

  angular
    .module('buscoco.service.getbusstation', [
      'ngResource'
      ])
    .factory('GetBusStationService', GetBusStationService);

  GetBusStationService.$inject = ['$resource'];

  /**
   * GetBusStationService
   *
   * @class GetBusStationService
   * @constructor
   */
  function GetBusStationService($resource) {

    /**
     * My property description.  Like other pieces of your comment blocks,
     * this can span multiple lines.
     *
     * @property propertyName
     * @type {Object}
     * @default "foo"
    //  */
    // var someProperty = {};

    var getbusstationService = {
      getBusStationFile: function() {
        var busstationFiles = $resource('/api/getBusStation', {
          query: {
            method: 'GET',
            isArray: false,
            transformResponse: function(data) {
              return angular.formJson(data);
            }
          }
        });
        return busstationFiles;
      }
      // getStatioinNameList: function(busStationData) {
      //   var stationNameList = [];
      //   for (var i = 0; i < busStationData.length; i++) {
      //     busStationData[i]
      //   }
      // }
    };

    return getbusstationService;

  }

})();
