'use strict';

var app = require('../..');
import request from 'supertest';

var newMappedmovieendpoint;

describe('Mappedmovieendpoint API:', function() {

  describe('GET /api/mappedmovieendpoints', function() {
    var mappedmovieendpoints;

    beforeEach(function(done) {
      request(app)
        .get('/api/mappedmovieendpoints')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          mappedmovieendpoints = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      expect(mappedmovieendpoints).to.be.instanceOf(Array);
    });

  });

  describe('POST /api/mappedmovieendpoints', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/mappedmovieendpoints')
        .send({
          name: 'New Mappedmovieendpoint',
          info: 'This is the brand new mappedmovieendpoint!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newMappedmovieendpoint = res.body;
          done();
        });
    });

    it('should respond with the newly created mappedmovieendpoint', function() {
      expect(newMappedmovieendpoint.name).to.equal('New Mappedmovieendpoint');
      expect(newMappedmovieendpoint.info).to.equal('This is the brand new mappedmovieendpoint!!!');
    });

  });

  describe('GET /api/mappedmovieendpoints/:id', function() {
    var mappedmovieendpoint;

    beforeEach(function(done) {
      request(app)
        .get('/api/mappedmovieendpoints/' + newMappedmovieendpoint._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          mappedmovieendpoint = res.body;
          done();
        });
    });

    afterEach(function() {
      mappedmovieendpoint = {};
    });

    it('should respond with the requested mappedmovieendpoint', function() {
      expect(mappedmovieendpoint.name).to.equal('New Mappedmovieendpoint');
      expect(mappedmovieendpoint.info).to.equal('This is the brand new mappedmovieendpoint!!!');
    });

  });

  describe('PUT /api/mappedmovieendpoints/:id', function() {
    var updatedMappedmovieendpoint;

    beforeEach(function(done) {
      request(app)
        .put('/api/mappedmovieendpoints/' + newMappedmovieendpoint._id)
        .send({
          name: 'Updated Mappedmovieendpoint',
          info: 'This is the updated mappedmovieendpoint!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedMappedmovieendpoint = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedMappedmovieendpoint = {};
    });

    it('should respond with the updated mappedmovieendpoint', function() {
      expect(updatedMappedmovieendpoint.name).to.equal('Updated Mappedmovieendpoint');
      expect(updatedMappedmovieendpoint.info).to.equal('This is the updated mappedmovieendpoint!!!');
    });

  });

  describe('DELETE /api/mappedmovieendpoints/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/mappedmovieendpoints/' + newMappedmovieendpoint._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when mappedmovieendpoint does not exist', function(done) {
      request(app)
        .delete('/api/mappedmovieendpoints/' + newMappedmovieendpoint._id)
        .expect(404)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
