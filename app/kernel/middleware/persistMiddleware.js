import { LocalStorage } from '@utils'

export default function authMiddleware(store) {
  return next => action => {
    const returnValue = next(action)
    const states = store.getState()
    const whitelist = ['authData']
    let newState = {}
    for (let state in states) {
      if (state.indexOf(whitelist) >= 0) {
        newState[state] = states[state]
      }
    }
    LocalStorage._storeData('redux', newState)
    return returnValue
  }
}
