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
      'buscoco.config',
      'buscoco.components.busstationselect',
      'buscoco.components.bushere'
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
