(function() {
  'use strict';

  describe('Controller: MapController', function() {

    beforeEach(module('buscoco.components.map'));

    var MapController;

    beforeEach(inject(function($controller) {
      MapController = $controller('MapController');
    }));

    describe('MapController', function() {
      it('Test Case', function() {
        MapController.activate();
      });
    });
  });
})();
