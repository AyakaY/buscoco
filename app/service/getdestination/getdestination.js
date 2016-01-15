/**
 * GetDestination Service module.
 *
 * @module buscoco.service.getdestination
 */
(function() {
  'use strict';

  angular
    .module('buscoco.service.getdestination', [])
    .factory('GetDestinationService', GetDestinationService);

  GetDestinationService.$inject = [];

  /**
   * GetDestinationService
   *
   * @class GetDestinationService
   * @constructor
   */
  function GetDestinationService() {

    /**
     * My property description.  Like other pieces of your comment blocks,
     * this can span multiple lines.
     *
     * @property propertyName
     * @type {Object}
     * @default "foo"
     */
    var someProperty = {};

    var getdestinationService = {
      someMethod: function() {
        return;
      }
    };

    return getdestinationService;
  }

})();
