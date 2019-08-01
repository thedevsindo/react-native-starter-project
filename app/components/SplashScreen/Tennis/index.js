import React from 'react'
import PropTypes from 'prop-types'
import { Animated, Easing, View, SafeAreaView, Image, Text, StatusBar } from 'react-native'
import { Appearance } from '@utils'
import { Common as CommonStyles } from '@styles'
import Svg, {
    Path
} from 'react-native-svg'

class BaseBall extends React.Component {
  state = {
    spinValue: new Animated.Value(0),
    colors: [
      Appearance.Colors.Tamarillo,
      Appearance.Colors.ElectricViolet,
      Appearance.Colors.FunGreen,
      Appearance.Colors.JungleGreen,
      Appearance.Colors.PirateGold,
      Appearance.Colors.LavenderMagenta,
      Appearance.Colors.CuriousBlue,
      Appearance.Colors.Botticelli
    ]
  }

  componentDidMount() {
    this.rotate()
  }

  rotate = () => {
    this.setState({ spinValue: new Animated.Value(0) }, () => {
      Animated.timing(this.state.spinValue, {
        toValue: 1,
        duration: 3500,
        easing: Easing.linear
      }).start(() => {
        this.rotate()
      })
      this.forceUpdate()
    })
  }

  pickColor = () => {
    return this.state.colors[Math.floor(Math.random()*this.state.colors.length)]
  }

  renderSoccerIcon = ({ width, height }) => {
    return (
      <Svg width={width} height={height} id={'Tennis'} data-name={'Tennis'} xmlns={'http://www.w3.org/2000/svg'} viewBox={'0 0 47 47.07'}>
        <Path fill={this.pickColor()} d={'M54,20.78a23.5,23.5,0,0,0-18-6.53h-.11A23.06,23.06,0,0,0,22.24,20c-.42.34-.79.71-1.18,1.08a23.45,23.45,0,0,0-6.81,14.82s0,0,0,0,0,0,0,.06h0c0,6.47,1.76,12.9,6.1,17.6.23.27.48.52.72.77a23.51,23.51,0,0,0,16.62,6.9c.58,0,1.17,0,1.76-.07h0a23.35,23.35,0,0,0,14.89-6.78,14.66,14.66,0,0,0,1.06-1.14,23.1,23.1,0,0,0,5.79-13.71s0,0,0,0,0,0,0-.06h0c0-6.83-2-13.52-6.83-18.37A3.87,3.87,0,0,0,54,20.78Zm-1.93,2.29.15.15a20.49,20.49,0,0,1,6,14.69A20.57,20.57,0,0,1,44,32.35l-.46-.45a20.49,20.49,0,0,1-6-14.7A20.45,20.45,0,0,1,52,23,.52.52,0,0,0,52.09,23.07ZM23.16,52.24c-.17-.18-.36-.37-.58-.63A20.5,20.5,0,0,1,17.2,37.54a20.57,20.57,0,0,1,14.67,6,3.71,3.71,0,0,1,.27.29l.09.1a20.53,20.53,0,0,1,5.63,14.29A20.54,20.54,0,0,1,23.16,52.24Zm29.93-.91a9.14,9.14,0,0,1-.88.94A20.37,20.37,0,0,1,40.86,58a23.51,23.51,0,0,0-6.42-16.08c-.14-.17-.3-.33-.45-.48a23.49,23.49,0,0,0-16.57-6.9A20.48,20.48,0,0,1,23.17,23.2a13.2,13.2,0,0,1,1-.92,20.06,20.06,0,0,1,10.39-4.86A23.48,23.48,0,0,0,41.43,34c.19.19.38.38.57.54a23.47,23.47,0,0,0,16,6.35A20.21,20.21,0,0,1,53.09,51.33Z'} transform={'translate(-14.22 -14.19)'}/>
      </Svg>
    )
  }

  shouldComponentUpdate() {
    return false
  }

  render() {
    const { style, size } = this.props
    const spin = this.state.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    })

    const styles = [{ transform: [{ rotate: spin }] }]

    return (
      <Animated.View style={styles}>
        { this.renderSoccerIcon({ width: size, height: size }) }
      </Animated.View>
    )
  }
}

export default BaseBall
