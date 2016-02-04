/*
 * This is buscoco module.
 *
 * @module buscoco
 */
(function () {
  'use strict';

  angular
    .module('buscoco', [
      'ngNewRouter',
      'ngAnimate',
      'buscoco.config',
      'buscoco.components.busstationselect',
      'buscoco.components.bushere',
      'buscoco.service.getbusstation',
      'buscoco.service.getroute'
    ])
    .controller('AppController', AppController);

  AppController.$routeConfig = [
    {path: '/',       redirectTo: '/busstationselect'},
    {path: '/busstationselect',    component: 'busstationselect'},
    {path: '/bushere',   component: 'bushere'}
  ];

  AppController.$inject = [];

  /**
   * AppController
   *
   * @class AppController
   * @main buscoco
   * @constructor
   */
  function AppController () {}
})();
