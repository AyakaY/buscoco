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

  GetRouteService.$inject = ['$resource'];

  /**
   * GetRouteService
   *
   * @class GetRouteService
   * @constructor
   */
  function GetRouteService($resource) {

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
      getRouteFile: function() {
        var routeFiles = $resource('/api/getRoute', {
          query: {
            method: 'GET',
            isArray: false,
            transformResponse: function(data) {
              return angular.formJson(data);
            }
          }
        });
        return routeFiles;
      }
    };

    return getrouteService;
  }

})();
