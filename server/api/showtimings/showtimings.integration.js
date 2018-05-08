'use strict';

var app = require('../..');
import request from 'supertest';

var newShowtimings;

describe('Showtimings API:', function() {

  describe('GET /api/showtimingss', function() {
    var showtimingss;

    beforeEach(function(done) {
      request(app)
        .get('/api/showtimingss')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          showtimingss = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      expect(showtimingss).to.be.instanceOf(Array);
    });

  });

  describe('POST /api/showtimingss', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/showtimingss')
        .send({
          name: 'New Showtimings',
          info: 'This is the brand new showtimings!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newShowtimings = res.body;
          done();
        });
    });

    it('should respond with the newly created showtimings', function() {
      expect(newShowtimings.name).to.equal('New Showtimings');
      expect(newShowtimings.info).to.equal('This is the brand new showtimings!!!');
    });

  });

  describe('GET /api/showtimingss/:id', function() {
    var showtimings;

    beforeEach(function(done) {
      request(app)
        .get('/api/showtimingss/' + newShowtimings._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          showtimings = res.body;
          done();
        });
    });

    afterEach(function() {
      showtimings = {};
    });

    it('should respond with the requested showtimings', function() {
      expect(showtimings.name).to.equal('New Showtimings');
      expect(showtimings.info).to.equal('This is the brand new showtimings!!!');
    });

  });

  describe('PUT /api/showtimingss/:id', function() {
    var updatedShowtimings;

    beforeEach(function(done) {
      request(app)
        .put('/api/showtimingss/' + newShowtimings._id)
        .send({
          name: 'Updated Showtimings',
          info: 'This is the updated showtimings!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedShowtimings = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedShowtimings = {};
    });

    it('should respond with the updated showtimings', function() {
      expect(updatedShowtimings.name).to.equal('Updated Showtimings');
      expect(updatedShowtimings.info).to.equal('This is the updated showtimings!!!');
    });

  });

  describe('DELETE /api/showtimingss/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/showtimingss/' + newShowtimings._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when showtimings does not exist', function(done) {
      request(app)
        .delete('/api/showtimingss/' + newShowtimings._id)
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
