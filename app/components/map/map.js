/**
 * Map Components module.
 *
 * @module buscoco.components.map
 */
(function () {
  'use strict';

  angular
    .module('buscoco.components.map', [])
    .controller('MapController', MapController);

  MapController.$inject = [];

  /**
   * MapController
   *
   * @class MapController
   * @constructor
   */
  function MapController() {
    console.log('MapController Constructor');
  }

  /**
   * The controller activate makes it convenient to re-use the logic
   * for a refresh for the controller/View, keeps the logic together.
   *
   * @method activate
   */
  MapController.prototype.activate = function() {
    console.log('MapController activate Method');
    vm = this;
  };

  /**
   * Angular ViewModel
   *
   * @property vm
   * @type {Object}
   */
  var vm;
})();
