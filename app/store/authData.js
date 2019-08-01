const initial = () => {
  return {
    uuid: null,
    authenticated: false,
    email: null,
    oauth: null
  }
}

function data(state = initial(), action) {
  switch (action.type) {
    case '@APP/AUTH_UUID_INIT':
      state.uuid = action.uuid
      return state
    case '@APP/AUTH_AUTHENTICATION':
      state.authenticated = true
      state.email = action.data.email
      state.oauth = action.data.oauth
      return state
    case '@APP/AUTH_USER_DATA':
      state = Object.assign(JSON.parse(JSON.stringify(state)), action.data)
      return state
    case '@APP/AUTH_SIGN_OUT':
      state.authenticated = false
      state.email = action.data.email
      state.oauth = action.data.oauth
      return state
  }
  return state
}

export default data
