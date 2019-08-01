import React from 'react'
import { connect } from 'react-redux'
import { BackHandler, View } from 'react-native'
import Toast from 'react-native-easy-toast'
import { createStackNavigator, NavigationActions } from 'react-navigation'
import {
  createReduxContainer,
  createReactNavigationReduxMiddleware,
  createNavigationReducer
} from 'react-navigation-redux-helpers'
import { AwesomeAlert, LoadingApp, Browser } from '@components'
import routes from '@app/routes'
import Satellite from '@utils/Satellite'
import { NavigationActions as AppNavigationActions } from '@utils'

const AppNavigator = routes

export const navData = createNavigationReducer(AppNavigator)
export const navMiddleware = createReactNavigationReduxMiddleware(
  state => state.navData,
  'root'
)

const Layout = () => {
  const App = createReduxContainer(AppNavigator, 'root')
  const mapStateToProps = (state) => ({
    state: state.navData
  })
  const Layout = connect(mapStateToProps)(App)

  type Props = {}
  class AppLayout extends React.Component<Props> {
    constructor(props) {
      super(props)
    }

    state = {
      backPressedOnce: false
    }

    componentDidMount() {
      const { dispatch } = this.props
      BackHandler.addEventListener('hardwareBackPress', this.onBackPress)
    }

    componentWillUnmount() {
      BackHandler.removeEventListener('hardwareBackPress', this.onBackPress)
    }

    onBackPress = () => {
      const { dispatch, nav } = this.props
      if (nav.index === 0) {
        if (nav.routes.length > 0 && !nav.routes[0].index) {
          if (this.state.backPressedOnce) {
            dispatch(NavigationActions.back())
            return false
          }
          if (!this.state.backPressedOnce) {
            this.refs.toast.show('Backpress one more to quit...')
            this.setState({ backPressedOnce: true })
            return true
          }
        }
      }
      dispatch(NavigationActions.back())
      return true
    }

    render() {
      return (
        <View style={{ flex: 1 }}>
          <LoadingApp/>
          <AwesomeAlert/>
          <Browser/>
          <Layout/>
          <Toast position={'center'} ref='toast'/>
        </View>
      )
    }
  }
  return connect((state) => ({
    nav: state.navData
  }))(AppLayout)
}

export default {
  Layout
}
