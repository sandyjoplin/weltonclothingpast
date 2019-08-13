'use strict';

describe('Controller: CamisaespaldaCtrl', function () {

  // load the controller's module
  beforeEach(module('clothingApp'));

  var CamisaespaldaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CamisaespaldaCtrl = $controller('CamisaespaldaCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CamisaespaldaCtrl.awesomeThings.length).toBe(3);
  });
});
