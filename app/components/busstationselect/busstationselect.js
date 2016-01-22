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

    this.setDataA = 'dataSet';
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
    vm.stationList = [];
    var busStatioin = vm.GetBusStationService.getBusStationFile().query().$promise;
    // console.log(busStatioin);

    busStatioin
    .then(generateStationList)
    .catch(error);
    // console.log('vm', vm.stationList[0]);
    // console.log('this', this.stationList[0]);
  };

  var generateStationList = function (busstation) {
    console.log('call stationList!');
    busstation.forEach(function(data) {
      console.log(data.name);
      vm.stationList.push(data);
    });
    console.log(vm.stationList);
    // vm.buslist = busstation;
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
