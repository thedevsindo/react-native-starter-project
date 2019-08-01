import React from 'react'
import { connect } from 'react-redux'
import { Text, Image } from 'react-native'
import { createBottomTabNavigator } from 'react-navigation'
import { SideBarMenu } from '@components'
import { Appearance, Application } from '@utils'
import Styles from '@styles'
import SideMenu from 'react-native-side-menu'
const { Common, MainTabNavigator } = Styles
const initialRouteName = 'Home'

// Tabs
import HomeScreen from '@screens/Main/Home'
import AccountScreen from '@screens/Main/Account'
import MessagesScreen from '@screens/Main/Messages'
import NotificationsScreen from '@screens/Main/Notifications'

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

type Props = {
  navigation: PropTypes.object.isRequired
}
class Main extends React.Component {
  state = {
    isOpen: false
  }

  UNSAFE_componentWillReceiveProps() {
    this.setState({ isOpen: false })
  }

  handleMenu() {
    this.setState({ isOpen: false || true })
  }

  componentDidMount() {
    Application.on('toogleMenu', () => {
      this.setState({ isOpen: false || true })
    })
  }

  render() {
    const { navigation, dispatch } = this.props
    const { isOpen } = this.state
    const menu = <SideBarMenu />

    return (
      <SideMenu menu={menu} isOpen={isOpen}>
        <MainTab navigation={navigation}/>
      </SideMenu>
    )
  }
}

const MainTab = createBottomTabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state
        return <FontAwesome5 name={'home'} size={horizontal ? 20 : 25} color={tintColor} />
      },
    })
  },
  Messages: {
    screen: MessagesScreen,
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state
        return <FontAwesome5 name={'comment-alt'} size={horizontal ? 20 : 25} color={tintColor} />
      },
    })
  },
  Notifications: {
    screen: NotificationsScreen,
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state
        return <FontAwesome5 name={'globe-asia'} size={horizontal ? 20 : 25} color={tintColor} />
      },
    })
  },
  Account: {
    screen: AccountScreen,
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state
        return <FontAwesome5 name={'user'} size={horizontal ? 20 : 25} color={tintColor} />
      },
    })
  }
}, {
  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
    style: {
      height: 70
    }
  },
  swipeEnabled: false,
  lazy: true,
  animationEnabled: false
})

Main.router = MainTab.router

export default connect((store)=>{
  return {
  }
})(Main)
