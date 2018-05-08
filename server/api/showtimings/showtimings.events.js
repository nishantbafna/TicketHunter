/**
 * Showtimings model events
 */

'use strict';

import {EventEmitter} from 'events';
import Showtimings from './showtimings.model';
var ShowtimingsEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
ShowtimingsEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Showtimings.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    ShowtimingsEvents.emit(event + ':' + doc._id, doc);
    ShowtimingsEvents.emit(event, doc);
  }
}

export default ShowtimingsEvents;
