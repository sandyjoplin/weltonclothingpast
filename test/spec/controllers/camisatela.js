'use strict';

describe('Controller: CamisatelaCtrl', function () {

  // load the controller's module
  beforeEach(module('clothingApp'));

  var CamisatelaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CamisatelaCtrl = $controller('CamisatelaCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CamisatelaCtrl.awesomeThings.length).toBe(3);
  });
});
