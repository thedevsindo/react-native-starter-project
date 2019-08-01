import React from 'react'
import PropTypes from 'prop-types'
import { Animated, Easing, View, SafeAreaView, Image, Text, StatusBar } from 'react-native'
import { Appearance, DeviceWidth, DeviceHeight } from '@utils'
import { Common as CommonStyles } from '@styles'
import Svg, { Path } from 'react-native-svg'

import Soccer from '@components/SplashScreen/Soccer'
import BasketBall from '@components/SplashScreen/BasketBall'
import Tennis from '@components/SplashScreen/Tennis'
import BaseBall from '@components/SplashScreen/BaseBall'
import VolleyBall from '@components/SplashScreen/VolleyBall'

type Props = {
  navigation: PropTypes.object.isRequired
}
class SideBarMenu extends React.Component {
  state = {
    count: 0,
    icons: 5,
    activeColor: 0,
    activeIcon: 0
  }

  componentDidMount() {
    this.rotate()
  }

  rotate = () => {
    let toValue = 0
    if (this.state.count < (this.state.icons - 1)) {
      toValue = this.state.count + 1
    }
    this.timeout = setTimeout(() => {
      let toValue = 0
      if (this.state.count < (this.state.icons - 1)) {
        toValue = this.state.count + 1
      }
      this.setState({ count: toValue }, () => {
        this.rotate()
        this.forceUpdate()
      })
    }, 700)
  }

  componentWillUnmount() {
    if (this.timeout) {
      clearTimeout(this.timeout)
    }
  }

  shouldComponentUpdate() {
    return false
  }

  render() {
    return (
      <SafeAreaView style={[CommonStyles.Container, CommonStyles.BgBlack, { justifyContent: 'center', alignItems: 'center' }]}>
        <StatusBar animated={true} hidden={false} backgroundColor={Appearance.Colors.Black} barStyle={'light-content'} />
        <View style={{ position: 'absolute', top: 0, left: 0, width: DeviceWidth, height: DeviceHeight, justifyContent: 'center', alignItems: 'center', opacity: this.state.count === 0 ? 1 : 0 }}>
          <Soccer size={100}/>
        </View>
        <View style={{ position: 'absolute', top: 0, left: 0, width: DeviceWidth, height: DeviceHeight, justifyContent: 'center', alignItems: 'center', opacity: this.state.count === 1 ? 1 : 0 }}>
          <BasketBall size={100}/>
        </View>
        <View style={{ position: 'absolute', top: 0, left: 0, width: DeviceWidth, height: DeviceHeight, justifyContent: 'center', alignItems: 'center', opacity: this.state.count === 2 ? 1 : 0 }}>
          <Tennis size={100}/>
        </View>
        <View style={{ position: 'absolute', top: 0, left: 0, width: DeviceWidth, height: DeviceHeight, justifyContent: 'center', alignItems: 'center', opacity: this.state.count === 3 ? 1 : 0 }}>
          <BaseBall size={100}/>
        </View>
        <View style={{ position: 'absolute', top: 0, left: 0, width: DeviceWidth, height: DeviceHeight, justifyContent: 'center', alignItems: 'center', opacity: this.state.count === 4 ? 1 : 0 }}>
          <VolleyBall size={100}/>
        </View>
      </SafeAreaView>
    )
  }
}

export default SideBarMenu
