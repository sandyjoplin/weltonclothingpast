'use strict';

describe('Controller: CamisainicialesCtrl', function () {

  // load the controller's module
  beforeEach(module('clothingApp'));

  var CamisainicialesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CamisainicialesCtrl = $controller('CamisainicialesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CamisainicialesCtrl.awesomeThings.length).toBe(3);
  });
});
