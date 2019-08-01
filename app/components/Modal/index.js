import React, { Component } from 'react'
import { Modal as ModalComponent, View, Text, TouchableHighlight, StyleSheet } from 'react-native'
import TabBarHeader from '@components/TabBarHeader'

type Props = {
  visible: Boolean,
  transparent: Boolean,
  onRequestClose: Function,
  contentContainerStyle: Object
}
export default class Modal extends Component<Props> {
  state = {
  }

  static defaultProps = {
    onRequestClose: () => {},
    visible: false,
    header: false,
    transparent: false,
    headerLabel: '',
  }

  render() {
    const {
      visible,
      transparent,
      headerLabel,
      onRequestClose,
      contentContainerStyle,
      children
    } = this.props

    return (
      <ModalComponent
        animationType={'slide'}
        transparent={transparent}
        visible={visible}
        onRequestClose={onRequestClose}>
          <View style={[{ flex: 1 }, contentContainerStyle]}>
            { this.props.header &&
              <TabBarHeader style={{ backgroundColor: '#000000', flex: 1}} label={headerLabel} />
            }
            {children}
          </View>
      </ModalComponent>
    )
  }
}
