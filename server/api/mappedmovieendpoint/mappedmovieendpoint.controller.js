/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/mappedmovieendpoints              ->  index
 * POST    /api/mappedmovieendpoints              ->  create
 * GET     /api/mappedmovieendpoints/:id          ->  show
 * PUT     /api/mappedmovieendpoints/:id          ->  update
 * DELETE  /api/mappedmovieendpoints/:id          ->  destroy
 */

'use strict';

import _ from 'lodash';
import Mappedmovieendpoint from './mappedmovieendpoint.model';

function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      res.status(statusCode).json(entity);
    }
  };
}

function saveUpdates(updates) {
  return function(entity) {
    var updated = _.merge(entity, updates);
    return updated.save()
      .then(updated => {
        return updated;
      });
  };
}

function removeEntity(res) {
  return function(entity) {
    if (entity) {
      return entity.remove()
        .then(() => {
          res.status(204).end();
        });
    }
  };
}

function handleEntityNotFound(res) {
  return function(entity) {
    if (!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

//CUSTOM  -------------------
//Gets the City Data from database based on the MovieName
export function search(req, res) {
  return Mappedmovieendpoint.find({MovieName: req.params.name}).exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets a list of Mappedmovieendpoints
export function index(req, res) {
  return Mappedmovieendpoint.find().exec()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets a single Mappedmovieendpoint from the DB
export function show(req, res) {
  return Mappedmovieendpoint.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Creates a new Mappedmovieendpoint in the DB
export function create(req, res) {
  return Mappedmovieendpoint.create(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

// Updates an existing Mappedmovieendpoint in the DB
export function update(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  return Mappedmovieendpoint.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Deletes a Mappedmovieendpoint from the DB
export function destroy(req, res) {
  return Mappedmovieendpoint.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}
