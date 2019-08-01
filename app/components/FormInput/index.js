import React, { Component } from 'react'
import { Animated, View, Text, TextInput, StyleSheet, TouchableHighlight } from 'react-native'

type Props = {
  label: String,
  value: String,
  containerStyle: Object,
  textInputContainerStyle: Object,
  textInputStyle: Object,
  autoCapitalize: String,
  secureTextEntry: Boolean,
  containerFormStyle: Object
}
export default class FormInput extends Component<Props> {
  constructor(props) {
    super(props)
  }

  static defaultProps = {
    underlineColorAndroid: 'transparent',
    placeholderTextColor: '#fff',
    secureTextEntry: false,
    autoCapitalize: 'none'
  }

  componentDidMount() {
    const { value } = this.props
    if (value) {
      this.setState({ labelFadeAnim: new Animated.Value(30) })
    }
  }

  state = {
    labelFadeAnim: new Animated.Value(10)
  }

  onFocus = (...args) => {
    const { value, onFocus } = this.props
    if (!value) {
      Animated.timing(this.state.labelFadeAnim, { toValue: 30, duration: 0 }).start()
    }
    if (onFocus) {
      onFocus.call(null, ...args)
    }
  }

  onBlur = (...args) => {
    const { value, onBlur } = this.props
    if (!value) {
      Animated.timing(this.state.labelFadeAnim, { toValue: 10, duration: 0 }).start()
    }
    if (onBlur) {
      onBlur.call(null, ...args)
    }
  }

  UNSAFE_componentWillReceiveProps(props) {
    const { value } = this.props
    if (value !== props.value && props.value) {
      this.setState({ labelFadeAnim: new Animated.Value(30) })
    }
  }

  onChangeText = (...args) => {
    const { value, onChangeText } = this.props
    if (value) {
      this.setState({ labelFadeAnim: new Animated.Value(30) })
    }
    if (onChangeText) {
      onChangeText.call(null, ...args)
    }
  }

  render() {
    const {
      label,
      value,
      onChangeText,
      placeholder,
      underlineColorAndroid,
      keyboardType,
      containerStyle,
      textInputContainerStyle,
      textInputStyle,
      renderIcon,
      autoCapitalize,
      placeholderTextColor,
      containerFormStyle,
      secureTextEntry
    } = this.props
    const { labelFadeAnim } = this.state

    return (
      <View style={[style.containerStyle, containerStyle]}>
        <View style={[style.containerFormStyle, containerFormStyle]}>
          <View style={style.iconStyle}>
            {renderIcon && renderIcon()}
          </View>
          <View style={[style.textInputContainerStyle, textInputContainerStyle]}>
            <Animated.View underlyColor={'transparent'} onPress={() => { }} style={{ position: 'absolute', left: 4, bottom: labelFadeAnim }}>
              <Text style={{ color: placeholderTextColor }}>{ placeholder }</Text>
            </Animated.View>
            <TextInput
              ref="TextInput"
              underlineColorAndroid={underlineColorAndroid}
              keyboardType={keyboardType}
              secureTextEntry={secureTextEntry}
              onFocus={this.onFocus}
              onBlur={this.onBlur}
              style={[style.textInputStyle, textInputStyle]}
              multiline={false}
              numberOfLines ={1}
              value={value}
              autoCapitalize={autoCapitalize}
              onChangeText={this.onChangeText}/>
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
  textInputContainerStyle: {
    flex: 1,
  },
  textInputStyle: {
    height: 41,
    color: 'black'
  }
})
