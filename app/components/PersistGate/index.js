import React, { Component } from 'react'
import { View } from 'react-native'
import { LocalStorage, Application } from '@utils'
import _ from 'lodash'

type Props = {
  persistor: Object,
  loading: Function
}
export default class PersistGate extends Component<Props> {
  constructor(props) {
    super(props)
  }

  static defaultProps = {
    persistor: undefined,
  }

  state = {
    socketGeneralConnected: false,
    rehydrated: false
  }

  componentDidMount() {
    const { persistor } = this.props
    const initState = JSON.stringify(LocalStorage.store.getState())
    const { dispatch } = LocalStorage.store
    LocalStorage._retrieveData('redux').then(data => {
      const newState = _.merge(JSON.parse(initState), JSON.parse(data))
      dispatch({ type: '@LOCALSTORAGE/REHYDRATE', data: newState })
    }).catch(error => {
      console.log('error', error)
    })
    Application.on('@APP/REHYDRATE', () => {
      this.setState({ rehydrated: true })
    })
  }

  render() {
    const { children, loading } = this.props
    const { rehydrated } = this.state

    let renderLoading = loading
    if (typeof renderLoading === 'function') {
      renderLoading = renderLoading()
    }

    return (
      <View style={{ flex: 1 }}>
        {rehydrated ? children : renderLoading}
      </View>
    )
  }
}
