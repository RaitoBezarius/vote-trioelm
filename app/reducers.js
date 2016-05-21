/**
 * Combine all reducers in this file and export the combined reducers.
 * If we were to do this in store.js, reducers wouldn't be hot reloadable.
 */

import { combineReducers } from 'redux-immutable';
import { fromJS } from 'immutable';
import { LOCATION_CHANGE } from 'react-router-redux';
import { CONNECTED, DISCONNECT, RECEIVE_DATA } from 'constants/ActionTypes'

/*
 * routeReducer
 *
 * The reducer merges route location changes into our immutable state.
 * The change is necessitated by moving to react-router-redux@4
 *
 */

// Initial routing state
const routeInitialState = fromJS({
  locationBeforeTransitions: null,
});

const socketInitialState = fromJS({
  socket: null,
  votes: [],
  videos: []
})

/**
 * Merge route into the global application state
 */
function routeReducer(state = routeInitialState, action) {
  switch (action.type) {
    /* istanbul ignore next */
    case LOCATION_CHANGE:
      return state.merge({
        locationBeforeTransitions: action.payload,
      });
    default:
      return state;
  }
}

/**
 * Handle new data from WebSocket
 *
 */
function dataReducer(state = socketInitialState, action) {
  const data = action.payload.data
  console.log('TODO: do something with', data)
  console.log('hint: deserialize the data, etc...')
  return state
}

function socketReducer(state = socketInitialState, action) {
  if (action.type === CONNECTED) {
    return state.merge({
      socket: action.payload
    })
  }

  if (action.type === RECEIVE_DATA) {
    return dataReducer(state, action)
  }

  if (action.type === DISCONNECTED) {
    return state.merge({
      socket: null
    })
  }
}
      

/**
 * Creates the main reducer with the asynchronously loaded ones
 */
export default function createReducer(asyncReducers) {
  return combineReducers({
    route: routeReducer,
    ...asyncReducers,
  });
}
