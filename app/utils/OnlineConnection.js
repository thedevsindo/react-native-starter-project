import LocalStorage from 'utils/LocalStorage'
import NetInfo from '@react-native-community/netinfo'

class OnlineConnection {

  initData() {
    return new Promise((resolve) => {
      resolve()
    })
  }

  initApp() {
    const store = LocalStorage.store
    const { dispatch } = store
    NetInfo.isConnected.fetch().then(isConnected => {
      dispatch({ type: '@APP/ONLINE_CONNECTION_NET_INIT', isConnected })
    })
    NetInfo.isConnected.addEventListener('connectionChange', this.handleFirstConnectivityChange.bind(this))
  }

  onlineConnectionInit() {
    const store = LocalStorage.store
    const { dispatch, getState } = store
    const state = getState()
    if (!state.connectionData.connectionInitiated) {
      dispatch({ type: '@APP/ONLINE_CONNECTION_INIT' })
    }
  }

  connect() {
  }

  handleFirstConnectivityChange(isConnected) {
    const store = LocalStorage.store
    const { dispatch } = store
    dispatch({ type: '@APP/ONLINE_CONNECTION_NET_CHANGE', isConnected })
    NetInfo.isConnected.removeEventListener('connectionChange', this.handleFirstConnectivityChange.bind(this))
  }
}

module.exports = new OnlineConnection()
