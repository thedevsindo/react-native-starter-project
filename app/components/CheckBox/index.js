import React, { Component } from 'react'
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native'
import { Debounce, Appearance } from '@utils'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'

type Props = {
  label: String,
  value: String,
  style: Object,
  checkedIconStyle: Object,
  checked: Boolean
}
export default class CheckBox extends Component<Props> {
  constructor(props) {
    super(props)
  }

  state = {
  }

  static defaultProps = {
    underlayColor: 'transparent',
    checked: false
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
      checked,
      checkedIconStyle
    } = this.props

    return (
      <TouchableHighlight underlayColor={underlayColor} onPress={Debounce(this.onPress, 100)} style={[styles.containerStyle, style, { borderColor: checked ? Appearance.Colors.Emperor : Appearance.Colors.Alto, backgroundColor: checked ? Appearance.Colors.Emperor : 'transparent' }]}>
        <View style={{ }}>
          { checked ? (
            <FontAwesome5Icon style={[{ fontSize: 20, color: Appearance.Colors.White }, checkedIconStyle]} name={'check'} />
          ) : null }
        </View>
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    width: 25,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
    borderWidth: 2
  },
  labelStyle: {
    textAlign: 'left',
    color: 'white',
    fontSize: 12
  }
})
