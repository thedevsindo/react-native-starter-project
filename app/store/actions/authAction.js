import Satellite from '@utils/Satellite'

function authenticatedAction (data) {
  return {
    type: '@APP/AUTH_AUTHENTICATION',
    data: data
  }
}

function userDataAction (data) {
  return {
    type: '@APP/AUTH_USER_DATA',
    data: data
  }
}

export function userData (userData, callback) {
  return (dispatch, getState) => {
    dispatch(userDataAction(userData))
    if (typeof (callback) === 'function') {
      setTimeout(() => {
        callback(userData, null)
      }, 10)
    }
    return getState().authData
  }
}

export function authenticated (authData, callback) {
  return (dispatch, getState) => {
    Satellite.defaults.headers.common['Authorization'] = `Bearer ${authData.oauth.access_token}`
    dispatch(authenticatedAction(authData))
    if (typeof (callback) === 'function') {
      setTimeout(() => {
        callback({}, null)
      }, 10)
    }
    return getState().authData
  }
}
