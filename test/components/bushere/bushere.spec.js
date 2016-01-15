(function() {
  'use strict';

  describe('Controller: BusHereController', function() {

    beforeEach(module('buscoco.components.bushere'));

    var BusHereController;

    beforeEach(inject(function($controller) {
      BusHereController = $controller('BusHereController');
    }));

    describe('BusHereController', function() {
      it('Test Case', function() {
        BusHereController.activate();
      });
    });
  });
})();
