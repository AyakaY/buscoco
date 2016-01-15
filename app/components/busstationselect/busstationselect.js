/**
 * BusStationSelect Components module.
 *
 * @module buscoco.components.busstationselect
 */
(function () {
  'use strict';

  angular
    .module('buscoco.components.busstationselect', [
      // 'buscoco.service.getbusstationservice'
      ])
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
    // this.GetBusStationService = GetBusStationService;

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
    // var busStatioin = vm.GetBusStationService.get
  };

  /**
   * Angular ViewModel
   *
   * @property vm
   * @type {Object}
   */
  var vm;
})();
