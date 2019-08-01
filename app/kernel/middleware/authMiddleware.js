import Satellite from '@utils/Satellite'
import { NavigationActions } from '@utils'

export default function authMiddleware({ getState, dispatch }) {
  return next => action => {
    const returnValue = next(action)
    const state = getState()
    if (state.authData && state.authData.oauth && state.authData.oauth.access_token) {
      Satellite.defaults.headers.common['Authorization'] = `Bearer ${state.authData.oauth.access_token}`
    } else {
      Satellite.defaults.headers.common['Authorization'] = null
    }
    if (action.type === '@LOCALSTORAGE/REHYDRATE') {
      const data = action.data
      if (data.authData.email) {
        dispatch({ type: '@APP/AUTH_AUTHENTICATED' })
      }
    }
    if (action.type === '@APP/AUTH_AUTHENTICATION') {
      dispatch({ type: '@APP/AUTH_AUTHENTICATED' })
    }
    if (action.type === '@APP/AUTH_AUTHENTICATED') {
      dispatch(NavigationActions.goToReset('Main'))
    }
    if (action.type === '@APP/AUTH_SIGN_OUT') {
      dispatch(NavigationActions.goToReset('SignIn'))
    }
    return returnValue
  }
}
