import { combineReducers } from 'redux'
import AsyncStorage from '@react-native-community/async-storage'

const initial = () => {
  return {}
}

type PersistState = {
  version: number,
  rehydrated: boolean,
}
type PersistPartial = { _persist: PersistState }

class LocalStorage {
  async _storeData (key, value) {
    try {
      await AsyncStorage.setItem(`@Peruri:${key}`, JSON.stringify(value))
    } catch (error) {
      console.log('Error saving data', error)
    }
  }

  async _retrieveData (key) {
    try {
      const value = await AsyncStorage.getItem(`@Peruri:${key}`)
      if (value !== null) {
        return value
      }
      return null
    } catch (error) {
      console.log('Error retrive data', error)
    }
  }

  persistStore (store) {
    this.store = store
    return store
  }

  getState () {
    const store = this.store
    const { getState } = store
    return getState()
  }

  dispatcher () {
    const store = this.store
    const { dispatch } = store
    return dispatch
  }

  persistReducer<State: Object, Action: Object>(
    config: PersistConfig,
    baseReducer: (State, Action) => State
  ): (State, Action) => State & PersistPartial {
    const version =
    config.version !== undefined ? config.version : -1
    return (state: State, action: Action) => {
      let { _persist, ...rest } = state || {}
      let restState: State = rest
      if (action) {
        switch (action.type) {
          case '@LOCALSTORAGE/REHYDRATE':
            return action.data
        }
      }
      return {
        ...baseReducer(restState, action),
        _persist: { version, rehydrated: false },
      }
    }
  }
}

module.exports = new LocalStorage()
