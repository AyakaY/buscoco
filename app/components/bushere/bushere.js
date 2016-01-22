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

  BushereController.$inject = [];

  /**
   * BushereController
   *
   * @class BushereController
   * @constructor
   */
  function BushereController() {
    console.log('BushereController Constructor');
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
  };

  /**
   * Angular ViewModel
   *
   * @property vm
   * @type {Object}
   */
  var vm;
})();
