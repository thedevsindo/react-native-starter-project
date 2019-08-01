import React, { Component } from 'react'
import { Animated, View, Text, TextInput, StyleSheet, TouchableHighlight, Picker } from 'react-native'

type Props = {
  label: String,
  selectedValue: String,
  containerStyle: Object,
  selectContainerStyle: Object,
  selectStyle: Object,
  autoCapitalize: String,
  containerFormStyle: Object
}
export default class FormInput extends Component<Props> {
  constructor(props) {
    super(props)
  }

  static defaultProps = {
    underlineColorAndroid: 'transparent',
    placeholderTextColor: '#fff',
    selectOptions: []
  }

  componentDidMount() {
  }

  state = {
    labelFadeAnim: new Animated.Value(30)
  }

  onFocus = (...args) => {
    const { onFocus } = this.props
    if (onFocus) {
      onFocus.call(null, ...args)
    }
  }

  onBlur = (...args) => {
    const { onBlur } = this.props
    if (onBlur) {
      onBlur.call(null, ...args)
    }
  }

  onValueChange = (...args) => {
    const { onValueChange } = this.props
    if (onValueChange) {
      onValueChange.call(null, ...args)
    }
  }

  render() {
    const {
      label,
      selectedValue,
      onValueChange,
      placeholder,
      underlineColorAndroid,
      keyboardType,
      containerStyle,
      selectContainerStyle,
      selectStyle,
      renderIcon,
      autoCapitalize,
      placeholderTextColor,
      containerFormStyle,
      selectOptions
    } = this.props
    const { labelFadeAnim } = this.state

    const options = []
    for (let i = 0; i < selectOptions.length; i++) {
      const option = selectOptions[i]
      options.push(<Picker.Item key={i} label={option.label} value={option.value} />)
    }

    return (
      <View style={[style.containerStyle, containerStyle]}>
        <View style={[style.containerFormStyle, containerFormStyle]}>
          <View style={style.iconStyle}>
            {renderIcon && renderIcon()}
          </View>
          <View style={[style.selectContainerStyle, selectContainerStyle]}>
            <Animated.View underlyColor={'transparent'} onPress={() => { }} style={{ position: 'absolute', left: 4, bottom: labelFadeAnim }}>
              <Text style={{ color: placeholderTextColor }}>{ placeholder }</Text>
            </Animated.View>
            <Picker
              selectedValue={selectedValue}
              style={[style.selectStyle, selectStyle]}
              onValueChange={this.onValueChange}>
              { options }
            </Picker>
          </View>
        </View>
      </View>
    )
  }
}

const style = StyleSheet.create({
  containerStyle: {
    justifyContent: 'flex-end',
  },
  containerFormStyle: {
    flexDirection: 'row',
    height: 40
  },
  iconStyle: {
    height: '100%',
    justifyContent: 'center'
  },
  selectContainerStyle: {
    flex: 1,
  },
  selectStyle: {
    height: 50,
    width: '100%',
    color: 'black'
  }
})
