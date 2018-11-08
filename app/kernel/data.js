import { applyMiddleware, createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import thunk from 'redux-thunk'
import { navMiddleware } from 'kernel/router'

import reducers from 'store'

const persistConfig = {
  key: 'helpmedong',
  storage,
  blacklist: ['navData']
}

const reducer = persistReducer(persistConfig, reducers)

const store = createStore(reducer, applyMiddleware(thunk, navMiddleware))
const persistor = persistStore(store)

export default {
  store,
  persistor
}
