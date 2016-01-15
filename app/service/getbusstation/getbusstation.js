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
  function GetBusStationService() {

    /**
     * My property description.  Like other pieces of your comment blocks,
     * this can span multiple lines.
     *
     * @property propertyName
     * @type {Object}
     * @default "foo"
    //  */
    // var someProperty = {};

    // var getbusstationService = {
    //   someMethod: function() {
    //     return;
    //   }
    // };

    // return getbusstationService;

    var busstation = [
      {'name': '鴨池新町', 'latitude': 31.55416881, 'longitude': 130.55578930},
      {'name': 'ニュータウン中央', 'latitude': 31.55778126, 'longitude': 130.55729961},
      {'name': '県庁前', 'latitude': 31.56047685, 'longitude': 130.55692949}
    ];

    return busstation;

  }

})();
