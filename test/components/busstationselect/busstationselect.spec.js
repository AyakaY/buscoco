(function() {
  'use strict';

  describe('Controller: BusStationSelectController', function() {

    beforeEach(module('buscoco.components.busstationselect'));

    var BusStationSelectController;

    beforeEach(inject(function($controller) {
      BusStationSelectController = $controller('BusStationSelectController');
    }));

    describe('BusStationSelectController', function() {
      it('Test Case', function() {
        BusStationSelectController.activate();
      });
    });
  });
})();
