import { applyMiddleware, createStore } from 'redux'

import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { navMiddleware } from './router'
import authMiddleware from '@kernel/middleware/authMiddleware'
import persistMiddleware from '@kernel/middleware/persistMiddleware'
import activityMiddleware from '@kernel/middleware/activityMiddleware'
import { LocalStorage, Application, AwesomeAlert } from '@utils'

import reducers from '@store'

const middlewares = [
  thunk, __DEV__ && logger, navMiddleware, authMiddleware, persistMiddleware, activityMiddleware
].filter(Boolean)

const persistedReducer = LocalStorage.persistReducer({}, reducers)
const store = createStore(persistedReducer, applyMiddleware(...middlewares))
const persistor = LocalStorage.persistStore(store)
Application.registerStore(store)
AwesomeAlert.registerStore(store)

export default {
  store, persistor
}
