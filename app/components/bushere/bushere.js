/**
 * BusHere Components module.
 *
 * @module buscoco.components.bushere
 */
(function () {
  'use strict';

  angular
    .module('buscoco.components.bushere', [])
    .controller('BusHereController', BusHereController);

  BusHereController.$inject = [];

  /**
   * BusHereController
   *
   * @class BusHereController
   * @constructor
   */
  function BusHereController() {
    console.log('BusHereController Constructor');
  }

  /**
   * The controller activate makes it convenient to re-use the logic
   * for a refresh for the controller/View, keeps the logic together.
   *
   * @method activate
   */
  BusHereController.prototype.activate = function() {
    console.log('BusHereController activate Method');
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
