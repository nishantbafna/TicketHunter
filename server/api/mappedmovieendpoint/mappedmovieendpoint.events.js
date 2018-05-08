/**
 * Mappedmovieendpoint model events
 */

'use strict';

import {EventEmitter} from 'events';
import Mappedmovieendpoint from './mappedmovieendpoint.model';
var MappedmovieendpointEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
MappedmovieendpointEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Mappedmovieendpoint.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    MappedmovieendpointEvents.emit(event + ':' + doc._id, doc);
    MappedmovieendpointEvents.emit(event, doc);
  }
}

export default MappedmovieendpointEvents;
