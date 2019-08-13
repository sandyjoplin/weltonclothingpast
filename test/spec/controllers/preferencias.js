'use strict';

describe('Controller: PreferenciasCtrl', function () {

  // load the controller's module
  beforeEach(module('clothingApp'));

  var PreferenciasCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PreferenciasCtrl = $controller('PreferenciasCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PreferenciasCtrl.awesomeThings.length).toBe(3);
  });
});
