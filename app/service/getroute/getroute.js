/**
 * GetRoute Service module.
 *
 * @module buscoco.service.getroute
 */
(function() {
  'use strict';

  angular
    .module('buscoco.service.getroute', [])
    .factory('GetRouteService', GetRouteService);

  GetRouteService.$inject = [];

  /**
   * GetRouteService
   *
   * @class GetRouteService
   * @constructor
   */
  function GetRouteService() {

    /**
     * My property description.  Like other pieces of your comment blocks,
     * this can span multiple lines.
     *
     * @property propertyName
     * @type {Object}
     * @default "foo"
     */
    var someProperty = {};

    var getrouteService = {
      someMethod: function() {
        return;
      }
    };

    return getrouteService;
  }

})();
