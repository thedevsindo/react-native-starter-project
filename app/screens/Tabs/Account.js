import React, { Component } from 'react'
import { View, Text, TouchableHighlight } from 'react-native'

type Props = {}
export default class Account extends Component<Props> {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Account</Text>
      </View>
    )
  }
}
