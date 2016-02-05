(function() {
  'use strict';

  describe('Controller: GmapsController', function() {

    beforeEach(module('buscoco.components.gmaps'));

    var GmapsController;

    beforeEach(inject(function($controller) {
      GmapsController = $controller('GmapsController');
    }));

    describe('GmapsController', function() {
      it('Test Case', function() {
        GmapsController.activate();
      });
    });
  });
})();
