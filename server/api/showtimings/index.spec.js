'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var showtimingsCtrlStub = {
  index: 'showtimingsCtrl.index',
  show: 'showtimingsCtrl.show',
  create: 'showtimingsCtrl.create',
  update: 'showtimingsCtrl.update',
  destroy: 'showtimingsCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var showtimingsIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './showtimings.controller': showtimingsCtrlStub
});

describe('Showtimings API Router:', function() {

  it('should return an express router instance', function() {
    expect(showtimingsIndex).to.equal(routerStub);
  });

  describe('GET /api/showtimingss', function() {

    it('should route to showtimings.controller.index', function() {
      expect(routerStub.get
        .withArgs('/', 'showtimingsCtrl.index')
        ).to.have.been.calledOnce;
    });

  });

  describe('GET /api/showtimingss/:id', function() {

    it('should route to showtimings.controller.show', function() {
      expect(routerStub.get
        .withArgs('/:id', 'showtimingsCtrl.show')
        ).to.have.been.calledOnce;
    });

  });

  describe('POST /api/showtimingss', function() {

    it('should route to showtimings.controller.create', function() {
      expect(routerStub.post
        .withArgs('/', 'showtimingsCtrl.create')
        ).to.have.been.calledOnce;
    });

  });

  describe('PUT /api/showtimingss/:id', function() {

    it('should route to showtimings.controller.update', function() {
      expect(routerStub.put
        .withArgs('/:id', 'showtimingsCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('PATCH /api/showtimingss/:id', function() {

    it('should route to showtimings.controller.update', function() {
      expect(routerStub.patch
        .withArgs('/:id', 'showtimingsCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('DELETE /api/showtimingss/:id', function() {

    it('should route to showtimings.controller.destroy', function() {
      expect(routerStub.delete
        .withArgs('/:id', 'showtimingsCtrl.destroy')
        ).to.have.been.calledOnce;
    });

  });

});
