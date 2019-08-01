import React, { Component } from 'react'
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native'
import { Debounce, Appearance } from '@utils'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'

type Props = {
  label: String,
  value: String,
  style: Object,
  contentContainerStyle: Object,
  labelStyle: Object,
  iconPositionFromLabel: String,
  icon: Function
}
export default class BoxIconMenu extends Component<Props> {
  constructor(props) {
    super(props)
  }

  state = {
    contentContainerLayout: {}
  }

  static defaultProps = {
    underlayColor: Appearance.Colors.White,
    iconPositionFromLabel: 'before',
    icon: () => {}
  }

  onFocus = (...args) => {
    const { onFocus } = this.props
    if (onFocus) {
      onFocus.call(null, ...args)
    }
  }

  onPress = (...args) => {
    const { onPress } = this.props
    if (onPress) {
      onPress.call(null, ...args)
    }
  }

  render() {
    const {
      label,
      underlineColorAndroid,
      underlayColor,
      style,
      labelStyle,
      contentContainerStyle,
      icon,
      iconPositionFromLabel
    } = this.props

    return (
      <View style={[styles.containerStyle, style]}>
        <TouchableHighlight style={[{ flex: 1 }]} underlayColor={'white'} onPress={Debounce(this.onPress, 100)}>
            <View style={[contentContainerStyle]} onLayout={(e) => { this.setState({ contentContainerLayout: e.nativeEvent.layout }) }}>
              { iconPositionFromLabel !== 'after' && this.state.contentContainerLayout  ? icon({ contentContainerLayout: this.state.contentContainerLayout }) : null }
              { typeof label === 'function' ? label() : (
                <Text style={[styles.labelStyle, labelStyle]}>{ label }</Text>
              )}
              { iconPositionFromLabel === 'after' && this.state.contentContainerLayout ? icon({ contentContainerLayout: this.state.contentContainerLayout }) : null }
            </View>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    borderRadius: 2
  },
  labelStyle: {
    textAlign: 'center',
    fontSize: 12
  }
})
