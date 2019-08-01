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
      <Svg width={width} height={height} id={'Basketball'} data-name={'Basketball'} xmlns={'http://www.w3.org/2000/svg'} viewBox={'0 0 62.42 62.81'}>
        <Path fill={this.pickColor()} d={'M59.83,15.47c-.44-.43-.95-.92-1.49-1.37L58.26,14h0A30.61,30.61,0,0,0,40.14,6.42H40a31.2,31.2,0,0,0-24.36,9,5.76,5.76,0,0,0-.41.44A31.2,31.2,0,0,0,6.59,39.78s0,.06,0,.08v0a30.64,30.64,0,0,0,7.62,18.19,20.35,20.35,0,0,0,1.42,1.54,31.29,31.29,0,0,0,19.77,9.28s.08.24.11.24h0c.74,0,1.48-.15,2.22-.15a31.1,31.1,0,0,0,21-8.28,14.19,14.19,0,0,0,1-1,31.36,31.36,0,0,0,0-44.22Zm6.22,18.36a31.2,31.2,0,0,0-21.21,7.52c-1.39-1.52-2.82-3-4.27-4.56a223,223,0,0,0,17-19.5l.34.31A30.76,30.76,0,0,1,66.05,33.83ZM15.61,55a27.6,27.6,0,0,1-5.84-13.8l.54,0A31.18,31.18,0,0,0,32,32.47c1.33,1.29,2.49,2.42,3.55,3.48l.83.83A227.37,227.37,0,0,1,15.61,55ZM34.06,30.29A31.14,31.14,0,0,0,41.49,9.58,27.79,27.79,0,0,1,55.3,15.39,221.75,221.75,0,0,1,38.48,34.64l-.81-.82C36.6,32.75,35.42,31.6,34.06,30.29Zm4.43-21a28.21,28.21,0,0,1-6.62,18.9c-4.33-4.05-8.77-7.89-13.24-11.46A28.15,28.15,0,0,1,37.71,9.32Zm-22,9.61c4.49,3.57,8.94,7.42,13.29,11.48A28.19,28.19,0,0,1,9.53,38.25,28.15,28.15,0,0,1,16.53,18.94Zm1,38.37A229.75,229.75,0,0,0,38.47,38.94c1.42,1.47,2.82,3,4.18,4.45A31.16,31.16,0,0,0,34,65.49a28,28,0,0,1-16.19-8ZM37,65.73a28.17,28.17,0,0,1,7.7-20.08c3.93,4.42,7.66,9,11.12,13.56A28.16,28.16,0,0,1,37,65.73ZM58.1,57.31c-3.51-4.65-7.28-9.26-11.26-13.73a28.2,28.2,0,0,1,19.48-6.74C66.05,44.47,63.46,51.85,58.1,57.31Z'} transform={'translate(-6.51 -6.32)'}/>
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
