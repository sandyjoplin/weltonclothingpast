'use strict';

describe('Controller: CamisabolsasCtrl', function () {

  // load the controller's module
  beforeEach(module('clothingApp'));

  var CamisabolsasCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CamisabolsasCtrl = $controller('CamisabolsasCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CamisabolsasCtrl.awesomeThings.length).toBe(3);
  });
});
