import React from 'react'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'

// Tabs
import HomeScreen from 'screens/Tabs/Home'
import AccountScreen from 'screens/Tabs/Account'
import MessagesScreen from 'screens/Tabs/Messages'
import NotificationsScreen from 'screens/Tabs/Notifications'

// Stack
import SignInScreen from 'screens/SignIn'
import SignUpScreen from 'screens/SignUp'
import WalkthroughScreen from 'screens/Walkthrough'

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const Other = createStackNavigator({
  SignUp: {
    screen: SignUpScreen
  }
}, {
  initialRouteName: 'Caller'
})

const Main = createBottomTabNavigator({
  Home: HomeScreen,
  Messages: MessagesScreen,
  Notifications: NotificationsScreen,
  Account: AccountScreen
}, {
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state
      let iconName
      if (routeName === 'Home') {
        iconName = 'home';
      } else if (routeName === 'Messages') {
        iconName = 'comment-alt';
      } else if (routeName === 'Notifications') {
        iconName = 'globe-asia';
      } else if (routeName === 'Account') {
        iconName = 'user';
      }
      return <FontAwesome5 name={iconName} size={horizontal ? 20 : 25} color={tintColor} />
    },
  }),
  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
    style: {
      height: 70
    }
  },
})

const routes = createStackNavigator({
  Walkthrough: {
    screen: WalkthroughScreen
  },
  SignIn: {
    screen: SignInScreen
  },
  Main: {
    screen: Main
  },
  Other: {
    screen: Other
  }
}, {
  headerMode: 'none',
  initialRouteName: 'Walkthrough'
})

export default routes
