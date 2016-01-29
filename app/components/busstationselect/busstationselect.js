/**
 * BusStationSelect Components module.
 *
 * @module buscoco.components.busstationselect
 */
(function () {
  'use strict';

  angular
    .module('buscoco.components.busstationselect', [
      'buscoco.service.getbusstation'
      ])
    .controller('BusstationselectController', BusstationselectController);

  BusstationselectController.$inject = ['GetBusStationService', '$location', '$q'];

  /**
   * BusstationselectController
   *
   * @class BusstationselectController
   * @constructor
   */
  function BusstationselectController(GetBusStationService, $location, $q) {
    console.log('BusstationselectController Constructor');
    this.GetBusStationService = GetBusStationService;
    this.$location = $location;
    this.$q = $q;

  }

  /**
   * The controller activate makes it convenient to re-use the logic
   * for a refresh for the controller/View, keeps the logic together.
   *
   * @method activate
   */
  BusstationselectController.prototype.activate = function() {
    console.log('BusstationselectController activate Method');
    vm = this;
    // バス停リスト作成
    vm.stationList = [];
    var busStatioin = vm.GetBusStationService.getBusStationFile().query().$promise;
    busStatioin
    .then(generateStationList)
    .catch(error);

    // 乗車バス路線
    vm.busline = [];
  };

  var generateStationList = function (busstation) {
    console.log('call stationList!');
    busstation.forEach(function(data) {
      console.log(data.name);
      vm.stationList.push(data);
    });
    console.log(vm.stationList);
  };

  var error = function(e) {
    vm.error = e;
  };

  /**
   * Angular ViewModel
   *
   * @property vm
   * @type {Object}
   */
  var vm;
})();
