import React from 'react'
import { connect } from 'react-redux'
import { BackHandler, View } from 'react-native'
import Toast from 'react-native-easy-toast'
import { createStackNavigator, NavigationActions } from 'react-navigation'
import {
    reduxifyNavigator,
    createReactNavigationReduxMiddleware,
    createNavigationReducer
} from 'react-navigation-redux-helpers'
import routes from 'app/routes'

const AppNavigator = routes

export const navData = createNavigationReducer(AppNavigator)
export const navMiddleware = createReactNavigationReduxMiddleware(
    'root',
    state => state.navData
)

const Layout = () => {
    const App = reduxifyNavigator(AppNavigator, 'root')
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
            BackHandler.addEventListener('hardwareBackPress', this.onBackPress)
        }

        componentWillUnmount() {
            BackHandler.removeEventListener('hardwareBackPress', this.onBackPress)
        }

        onBackPress = () => {
            const { dispatch, nav } = this.props
            if (nav.index === 0) {
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
            dispatch(NavigationActions.back())
            return true
        }

        render() {
            return (
                <View style={{ flex: 1 }}>
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
