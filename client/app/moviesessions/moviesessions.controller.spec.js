'use strict';

describe('Component: MoviesessionsComponent', function () {

  // load the controller's module
  beforeEach(module('ticketHunterApp'));

  var MoviesessionsComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    MoviesessionsComponent = $componentController('moviesessions', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
