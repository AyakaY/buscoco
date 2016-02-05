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
      'buscoco.components.gmaps',
      'buscoco.service.getbusstation',
      'buscoco.service.getroute',
      'uiGmapgoogle-maps'
    ])
    .controller('AppController', AppController);

  AppController.$routeConfig = [
    {path: '/',       redirectTo: '/busstationselect'},
    {path: '/busstationselect',    component: 'busstationselect'},
    {path: '/bushere',   component: 'bushere'},
    {path: '/gmaps',   component: 'gmaps'}
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
