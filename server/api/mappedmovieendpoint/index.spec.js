'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var mappedmovieendpointCtrlStub = {
  index: 'mappedmovieendpointCtrl.index',
  show: 'mappedmovieendpointCtrl.show',
  create: 'mappedmovieendpointCtrl.create',
  update: 'mappedmovieendpointCtrl.update',
  destroy: 'mappedmovieendpointCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var mappedmovieendpointIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './mappedmovieendpoint.controller': mappedmovieendpointCtrlStub
});

describe('Mappedmovieendpoint API Router:', function() {

  it('should return an express router instance', function() {
    expect(mappedmovieendpointIndex).to.equal(routerStub);
  });

  describe('GET /api/mappedmovieendpoints', function() {

    it('should route to mappedmovieendpoint.controller.index', function() {
      expect(routerStub.get
        .withArgs('/', 'mappedmovieendpointCtrl.index')
        ).to.have.been.calledOnce;
    });

  });

  describe('GET /api/mappedmovieendpoints/:id', function() {

    it('should route to mappedmovieendpoint.controller.show', function() {
      expect(routerStub.get
        .withArgs('/:id', 'mappedmovieendpointCtrl.show')
        ).to.have.been.calledOnce;
    });

  });

  describe('POST /api/mappedmovieendpoints', function() {

    it('should route to mappedmovieendpoint.controller.create', function() {
      expect(routerStub.post
        .withArgs('/', 'mappedmovieendpointCtrl.create')
        ).to.have.been.calledOnce;
    });

  });

  describe('PUT /api/mappedmovieendpoints/:id', function() {

    it('should route to mappedmovieendpoint.controller.update', function() {
      expect(routerStub.put
        .withArgs('/:id', 'mappedmovieendpointCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('PATCH /api/mappedmovieendpoints/:id', function() {

    it('should route to mappedmovieendpoint.controller.update', function() {
      expect(routerStub.patch
        .withArgs('/:id', 'mappedmovieendpointCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('DELETE /api/mappedmovieendpoints/:id', function() {

    it('should route to mappedmovieendpoint.controller.destroy', function() {
      expect(routerStub.delete
        .withArgs('/:id', 'mappedmovieendpointCtrl.destroy')
        ).to.have.been.calledOnce;
    });

  });

});
