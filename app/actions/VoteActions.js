import { RECEIVE_DATA, CONNECTED, DISCONNECTED } from 'constants/ActionTypes'

export function receiveData (event) {
  return {
    type: RECEIVE_DATA,
    payload: {
      data: event.data
    }
  }
}


export function connected (socket) {
  return {
    type: CONNECTED,
    payload: {
      socket
    }
  }
}

export function disconnected () {
  return {
    type: DISCONNECTED,
    payload: {}
  }
}
