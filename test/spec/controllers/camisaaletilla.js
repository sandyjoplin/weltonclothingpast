'use strict';

describe('Controller: CamisaaletillaCtrl', function () {

  // load the controller's module
  beforeEach(module('clothingApp'));

  var CamisaaletillaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CamisaaletillaCtrl = $controller('CamisaaletillaCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CamisaaletillaCtrl.awesomeThings.length).toBe(3);
  });
});
