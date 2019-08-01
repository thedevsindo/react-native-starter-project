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
      <Svg width={width} height={height} id={'Baseball'} data-name={'Baseball'} xmlns={'http://www.w3.org/2000/svg'} viewBox={'0 0 47.06 47.07'}>
        <Path fill={this.pickColor()} d={'M61.19,36v0a23,23,0,0,0-5.74-13.7,13.7,13.7,0,0,0-1.07-1.16,23.44,23.44,0,0,0-14.83-6.82h-.09a23.49,23.49,0,0,0-17.62,6.11,10,10,0,0,0-.75.7,23.54,23.54,0,0,0-6.84,18.36.22.22,0,0,1,0,.08,0,0,0,0,0,0,0,23.36,23.36,0,0,0,6.78,14.82c.42.42.79.76,1.13,1A23.13,23.13,0,0,0,36,61.2c.58,0,1.17.06,1.75.06A23.56,23.56,0,0,0,54.4,54.33c.1-.1.2-.2.29-.31A23.56,23.56,0,0,0,61.2,36s0,0,0-.08Zm-38-12.78c.19-.19.39-.38.63-.59a20.51,20.51,0,0,1,13.88-5.4h.18a20.18,20.18,0,0,1-.41,4.24l-.58-.11a1.5,1.5,0,0,0-.56,2.94l.34.07A20.15,20.15,0,0,1,35,27.93l-.47-.27A1.5,1.5,0,0,0,33,30.24l.26.16a18.64,18.64,0,0,1-1.34,1.48c-.1.1-.21.21-.38.36-.42.4-.85.77-1.29,1.12L29.87,33a1.5,1.5,0,0,0-2.32,1.9l.18.22a19.21,19.21,0,0,1-3.63,1.66l-.17-.49a1.5,1.5,0,0,0-2.83,1l.09.27a20.49,20.49,0,0,1-4,.35A20.5,20.5,0,0,1,23.21,23.18Zm0,29.05a20.49,20.49,0,0,1-5.73-11.35,23.83,23.83,0,0,0,4.76-.51l.31.87a1.49,1.49,0,0,0,1.41,1,1.47,1.47,0,0,0,.5-.09,1.5,1.5,0,0,0,.92-1.91l-.24-.69a23,23,0,0,0,4.54-2.15l.6.73a1.5,1.5,0,0,0,1.16.55,1.48,1.48,0,0,0,1-.34,1.5,1.5,0,0,0,.22-2.11l-.46-.56c.49-.39,1-.8,1.4-1.21L34,34a24,24,0,0,0,1.82-2.08l.8.47a1.5,1.5,0,0,0,.76.21,1.5,1.5,0,0,0,.76-2.79l-.61-.36a22.47,22.47,0,0,0,2.12-4.56l.88.16.28,0a1.5,1.5,0,0,0,.28-3L40.44,22a22.45,22.45,0,0,0,.47-4.55A20.47,20.47,0,0,1,52.26,23.2c.32.32.61.63.92,1A20.14,20.14,0,0,1,58,34.58a23.22,23.22,0,0,0-4.48.44l-.1-.56a1.51,1.51,0,0,0-1.75-1.19A1.49,1.49,0,0,0,50.49,35l.14.78A22.84,22.84,0,0,0,46,37.9l-.3-.49a1.5,1.5,0,1,0-2.58,1.52l.4.68a23.94,23.94,0,0,0-2.07,1.81,7.85,7.85,0,0,0-.58.6c-.39.42-.77.86-1.15,1.32L39.31,43a1.5,1.5,0,0,0-1.9,2.32l.61.5a22,22,0,0,0-2.17,4.6l-.55-.19a1.5,1.5,0,0,0-1,2.82l.75.27a23.18,23.18,0,0,0-.5,4.71,20.24,20.24,0,0,1-10.42-4.9C23.8,52.84,23.49,52.55,23.17,52.23ZM52.49,52a.5.5,0,0,0-.12.13l-.14.14a20.5,20.5,0,0,1-14.67,6,19.28,19.28,0,0,1,.34-3.95l.42.15a1.67,1.67,0,0,0,.49.08,1.5,1.5,0,0,0,.5-2.92l-.63-.22a19.38,19.38,0,0,1,1.68-3.68l.33.27a1.5,1.5,0,1,0,1.9-2.32l-.52-.43c.34-.42.69-.83,1.07-1.23a4.21,4.21,0,0,1,.42-.44c.49-.48,1-.93,1.52-1.36l.22.38a1.49,1.49,0,0,0,1.29.74,1.54,1.54,0,0,0,.77-.21,1.5,1.5,0,0,0,.53-2l-.35-.58a20,20,0,0,1,3.65-1.73l.08.42a1.49,1.49,0,0,0,1.47,1.23,1.33,1.33,0,0,0,.28,0,1.5,1.5,0,0,0,1.2-1.75L54.1,38a20,20,0,0,1,4.16-.38A20.62,20.62,0,0,1,52.49,52Z'} transform={'translate(-14.19 -14.19)'}/>
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
