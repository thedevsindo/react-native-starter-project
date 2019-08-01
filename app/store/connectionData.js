import update from 'immutability-helper'

const initial = () => {
  return {
    socketId: null,
    connectionEstablished: false,
    connectionInitiated: false,
    firstNetConnected: false,
    isNetConnected: false,
    reAuthenticateActive: false
  }
}

function data(state = initial(), action) {
  switch (action.type) {
    case '@APP/AUTH_AUTHENTICATED':
      state.socketId = null
      return state
    case '@APP/ONLINE_CONNECTION_RECONNECT':
      return update(state, {
        socketId: { $set: null },
        connectionEstablished: { $set: false },
      })
    case '@APP/ONLINE_CONNECTION_ERROR':
      return update(state, {
        socketId: { $set: null },
        connectionEstablished: { $set: false },
      })
    case '@APP/ONLINE_CONNECTION_REAUTHENTICATE':
      return update(state, {
        connectionEstablished: { $set: false },
        reAuthenticateActive: { $set: true },
      })
    case '@APP/ONLINE_CONNECTION_INIT':
      return update(state, {
        connectionInitiated: { $set: false },
      })
    case '@APP/ONLINE_CONNECTION_READY':
      return update(state, {
        socketId: { $set: action.socket.id },
        connectionEstablished: { $set: true },
        connectionInitiated: { $set: true },
        reAuthenticateActive: { $set: false }
      })
    case '@APP/ONLINE_CONNECTION_NET_INIT':
      return update(state, {
        firstNetConnected: { $set: true },
        isNetConnected: { $set: action.isConnected }
      })
    case '@APP/ONLINE_CONNECTION_NET_CHANGE':
      return update(state, {
        isNetConnected: { $set: action.isConnected },
      })
    case '@APP/AUTH_SIGN_OUT':
      return update(state, {
        connectionInitiated: { $set: false }
      })
  }
  return state
}

export default data
