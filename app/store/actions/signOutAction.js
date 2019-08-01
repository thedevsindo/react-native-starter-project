function signoutAction () {
  return {
    type: '@APP/AUTH_SIGN_OUT',
    data: {
      email: null,
      oauth: null
    }
  }
}

export function signout (callback) {
  return (dispatch, getState) => {
    dispatch(signoutAction())
    if (typeof (callback) === 'function') {
      setTimeout(() => {
        callback()
      }, 10)
    }
    return getState().authData
  }
}
