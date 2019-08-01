import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import { Appearance, Application, NavigationActions } from '@utils'
import styles from './styles'

type Props = {
  label: String,
  value: String,
  style: Object,
  rightIcon: Function,
  handleRightIcon: Function,
  rightIconStyle: Object,
  statusBarBackgroundColor: ''
}

class TabBarHeader extends Component<Props> {
  constructor(props) {
    super(props)
  }

  state = {
  }

  static defaultProps = {
    backIcon: false,
    menuIcon: false,
    rightIcon: null,
    statusBarBackgroundColor: Appearance.Colors.Black,
    handleRightIcon: () => {}
  }

  handleBack = () => {
    const { dispatch } = this.props
    dispatch(NavigationActions.back())
  }

  handleMenu = () => {
    Application.emit('toogleMenu')
  }

  handleRightIcon = () => {
    this.props.handleRightIcon()
  }

  render() {
    const {
      label,
      underlineColorAndroid,
      style,
      backIcon,
      menuIcon,
      rightIcon,
      rightIconStyle,
      statusBarBackgroundColor
    } = this.props

    return (
      <View style={[ styles.containerStyle, style ]}>
        <StatusBar animated={true} hidden={false} backgroundColor={statusBarBackgroundColor} barStyle={'light-content'} />
        {backIcon && (
          <View style={{ paddingRight: 15 }}>
            <TouchableOpacity onPress={this.handleBack} underlayColor={'transparent'}>
              <FontAwesome5Icon size={20} style={{ color: Appearance.Colors.White }} name={'angle-left'} />
            </TouchableOpacity>
          </View>
        )}
        {menuIcon && (
          <View style={{ marginRight: 15 }}>
            <TouchableOpacity onPress={this.handleMenu} underlayColor={'transparent'}>
              <SimpleLineIcons size={20} style={{ color: Appearance.Colors.White }} name={'menu'} />
            </TouchableOpacity>
          </View>
        )}
        { typeof label === 'function' ? label() : <Text style={{ color: Appearance.Colors.White, fontSize: 24, fontWeight: '600' }}>{ label }</Text>}
        { typeof rightIcon === 'function' && (
          <View style={[{ position: 'absolute', right: 35, top: 30 }, rightIconStyle]}>
            <TouchableOpacity onPress={this.handleRightIcon} underlayColor={'transparent'}>
              { rightIcon() }
            </TouchableOpacity>
          </View>
        )}
      </View>
    )
  }
}

export default connect((store)=>{
  return {
  }
})(TabBarHeader)
