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
      <Svg width={width} height={height} id={'Soccer'} data-name={'Soccer'} xmlns={'http://www.w3.org/2000/svg'} viewBox={'0 0 64.28 64.28'}>
        <Path d={'M37.72,69.86A32.14,32.14,0,1,1,69.86,37.72,32.16,32.16,0,0,1,37.72,69.86Zm0-62.43C20.57,7.43,6.59,20.55,6.59,37.72a30.92,30.92,0,1,0,61.84-.1C68.43,20.45,54.91,7.43,37.74,7.43Z'} transform={'translate(-5.59 -5.59)'}/>
        <Path fill={this.pickColor()} d={'M68.88,34.76a30.89,30.89,0,0,0-2.81-10.37h0a30.64,30.64,0,0,0-6.13-8.73,18.44,18.44,0,0,0-1.5-1.39,30.77,30.77,0,0,0-4.75-3.47h0a28.48,28.48,0,0,0-2.83-1.48A30.63,30.63,0,0,0,42.2,6.78c-.69-.09-1.38-.17-2.09-.22s-1.2.09-1.72.08c-2,0-13.63,2.32-17,4.44-1.64,1-3.21,2.16-4.67,3.16h0v.42c-.32.28-.63.6-.93.91-.15.14-.29.31-.43.47a31.25,31.25,0,0,0-5.84,8.2c-1.4,2.91-1.92,6-2.92,9.21h0c0,1.75-.17,3.56-.11,5.4l.14,1.07a30.47,30.47,0,0,0,2,8.93h0s0,0,0,0h0c.25.67.54,1.37.9,2.12a31.33,31.33,0,0,0,4.8,7.28l.21.23c.34.4.72.82,1.13,1.23a31.71,31.71,0,0,0,6.58,5l.33.18h0A31.11,31.11,0,0,0,35.5,68.81c.73.06,1.48.09,2.22.09l1.12,0h0a30.9,30.9,0,0,0,10.13-2c.5-.19,1-.39,1.49-.61l.14-.08a30.78,30.78,0,0,0,8.27-5.44l.12-.11c.27-.23.54-.49.78-.73l-.09-.09a27.39,27.39,0,0,0,7.87-13.87h0v.32h.27a28.86,28.86,0,0,0,.72-3.32s0-.11,0-.13a30.57,30.57,0,0,0,.34-7.28C68.91,35.28,68.9,35,68.88,34.76Zm-11.08-17A27.88,27.88,0,0,1,63,25l-5.86,9.43-8.34.81-7.86-8.46,1-7.52L53.56,14.5l.16-.1a28.06,28.06,0,0,1,2.75,2.13A16.27,16.27,0,0,1,57.8,17.76Zm-35.71,32L11.22,47.1a27.49,27.49,0,0,1-1.55-7.36l-.06-1a31.73,31.73,0,0,1,.16-4l9.87-4,6.41,3.07L27.41,45ZM23,13.71a27.75,27.75,0,0,1,9.19-3.66l6.94,8.21L38,26.2,27.42,31.08,21,28l-.89-12.07a.5.5,0,0,0,0-.13A26.62,26.62,0,0,1,23,13.71Zm1.85,49L24,52.08l5.33-4.75L40.81,49.6,43.26,56l-6.12,9.86c-.47,0-1,0-1.42-.07A27.68,27.68,0,0,1,24.8,62.74ZM58.09,57.3l-12.29-3-2.25-5.93,5.68-10.19,8.37-.81,7.19,8.52A27.86,27.86,0,0,1,58.09,57.3Z'} transform={'translate(-5.59 -5.59)'}/>
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
