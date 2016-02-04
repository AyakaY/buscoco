/**
 * BusHere Components module.
 *
 * @module buscoco.components.bushere
 */
(function () {
  'use strict';

  angular
    .module('buscoco.components.bushere', [])
    .controller('BushereController', BushereController);

  BushereController.$inject = ['GetRouteService', '$q'];

  /**
   * BushereController
   *
   * @class BushereController
   * @constructor
   */
  function BushereController(GetRouteService, $q) {
    console.log('BushereController Constructor');
    this.GetRouteService = GetRouteService;
    this.$q = $q;
  }

  /**
   * The controller activate makes it convenient to re-use the logic
   * for a refresh for the controller/View, keeps the logic together.
   *
   * @method activate
   */
  BushereController.prototype.activate = function() {
    console.log('BushereController activate Method');
    vm = this;

    vm.route = [];
    vm.busposition = '';
    var routes = vm.GetRouteService.getRouteFile().query().$promise;

    routes
      .then(function(rotelist) {
        rotelist.forEach(function(data, i) {
          // console.log(data);
          vm.route.push(data);
          if (data.passing === 1) {
            vm.busposition = i;
            console.log(vm.busposition);
          }
        });
      })
      .catch(error);

  };

  var error = function(e) {
    vm.error = e;
  };

  BushereController.prototype.busmove = function() {
    if (vm.busposition < vm.route.length) {
      vm.route[vm.busposition].passing  = 2;
      vm.busposition += 1;
      vm.route[vm.busposition].passing = 1;
    }
  };

  /**
   * Angular ViewModel
   *
   * @property vm
   * @type {Object}
   */
  var vm;
})();
