/**
 * Gmaps Components module.
 *
 * @module buscoco.components.gmaps
 */
(function () {
  'use strict';

  angular
    .module('buscoco.components.gmaps', [])
    .controller('GmapsController', GmapsController);

  GmapsController.$inject = [];

  /**
   * GmapsController
   *
   * @class GmapsController
   * @constructor
   */
  function GmapsController() {
    console.log('GmapsController Constructor');
  }

  /**
   * The controller activate makes it convenient to re-use the logic
   * for a refresh for the controller/View, keeps the logic together.
   *
   * @method activate
   */
  GmapsController.prototype.activate = function() {
    console.log('GmapsController activate Method');
    vm = this;

    vm.map = {
      // マップ初期表示の中心地
      center: {
        latitude: 31.556019,
        longitude: 130.557284
      },
      // マップ初期表示の拡大
      zoom: 16
      /** はまったポイント
      *この中にmarkesの配列を作れば良いということになっていた
      **/
    };

    // マップ上に表示するマーカーの情報
    vm.markers = [
      {
        /** はまったポイント
        * この「id」という項目がなければ表示されなかった
        **/
        'id':1,
        'latitude':31.55778126,
        'longitude':130.55729961,
        'title':'ニュータウン中央'
      },
      {
        'id':2,
        'latitude':31.56047685,
        'longitude':130.55692949,
        'title':'県庁前'
      }
    ];
  };

  /**
   * Angular ViewModel
   *
   * @property vm
   * @type {Object}
   */
  var vm;
})();
