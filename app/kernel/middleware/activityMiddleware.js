import { OnlineConnection, Application } from 'utils'

export default function authMiddleware() {
  return next => action => {
    const returnValue = next(action)
    if (action.type === '@LOCALSTORAGE/REHYDRATE') {
      OnlineConnection.initApp()
      OnlineConnection.connect()
      OnlineConnection.initData().then(() => {
        Application.emit('@APP/REHYDRATE')
      })
    }
    if (action.type === '@APP/ONLINE_CONNECTION_INIT') {
      Application.emit('@APP/ONLINE_CONNECTION_INIT')
    }
    if (action.type === '@APP/ONLINE_CONNECTION_RECONNECTING') {
      Application.emit('@APP/ONLINE_CONNECTION_RECONNECTING')
    }
    if (action.type === '@APP/ONLINE_CONNECTION_READY') {
      Application.emit('@APP/ONLINE_CONNECTION_READY')
    }
    if (action.type === 'Navigation/NAVIGATE') {
      Application.emit('@APP/NAVIGATE', action)
    }
    return returnValue
  }
}
