import React, { Component } from 'react'
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native'
import { Debounce } from '@utils'

type Props = {
  label: String,
  value: String,
  style: Object,
  leftIcon: Function,
  labelStyle: Object,
}
export default class FormInput extends Component<Props> {
  constructor(props) {
    super(props)
  }

  state = {
  }

  static defaultProps = {
    underlayColor: 'transparent',
    leftIcon: null
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
      leftIcon,
      underlineColorAndroid,
      underlayColor,
      style,
      labelStyle
    } = this.props

    return (
      <TouchableHighlight underlayColor={underlayColor} onPress={Debounce(this.onPress, 100)} style={[styles.containerStyle, style]}>
        <View style={{ flexDirection: 'row', flex: 1 }}>
          { leftIcon && leftIcon() }
          <Text style={[styles.labelStyle, labelStyle]}>{label}</Text>
        </View>
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  labelStyle: {
    color: 'white',
    // textAlign: 'left',
    // fontSize: 12
  }
})
