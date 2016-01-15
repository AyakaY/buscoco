/**
 * BusStationSelect Components module.
 *
 * @module buscoco.components.busstationselect
 */
(function () {
  'use strict';

  angular
    .module('buscoco.components.busstationselect', [])
    .controller('BusStationSelectController', BusStationSelectController);

  BusStationSelectController.$inject = [];

  /**
   * BusStationSelectController
   *
   * @class BusStationSelectController
   * @constructor
   */
  function BusStationSelectController() {
    console.log('BusStationSelectController Constructor');
  }

  /**
   * The controller activate makes it convenient to re-use the logic
   * for a refresh for the controller/View, keeps the logic together.
   *
   * @method activate
   */
  BusStationSelectController.prototype.activate = function() {
    console.log('BusStationSelectController activate Method');
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
