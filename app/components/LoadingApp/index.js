
import React, { Component } from 'react'
import { Modal as ModalComponent, View, Text, TouchableHighlight, StyleSheet } from 'react-native'
import Spinner from 'react-native-spinkit'
import TabBarHeader from '@components/TabBarHeader'
import { Appearance } from '@utils'

type Props = {
  visible: Boolean,
  onRequestClose: Function
}
export default class LoadingApp extends Component<Props> {
  constructor(props) {
    super(props)
  }

  state = {
  }

  static defaultProps = {
    onRequestClose: () => {},
    visible: false,
    header: false
  }

  render() {
    const {
      visible,
      onRequestClose
    } = this.props

    return (
      <ModalComponent
        animationType={'slide'}
        transparent={true}
        visible={visible}
        onRequestClose={onRequestClose}>
          <View style={{ flex: 1, backgroundColor: Appearance.Colors.BlackTransparent, alignItems: 'center', justifyContent: 'center' }}>
            <Spinner style={{ }} isVisible={true} size={100} type={'Wave'} color={'#4CAF50'}/>
          </View>
      </ModalComponent>
    )
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  labelStyle: {
    textAlign: 'left',
    color: 'white',
    fontSize: 12
  }
})
