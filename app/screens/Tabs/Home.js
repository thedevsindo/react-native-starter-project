import React, { Component } from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import { NavigationActions } from 'react-navigation'

type Props = {}
export default class Home extends Component<Props> {
  render() {
    const navigation = this.props.navigation

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
        <Text>Home</Text>
      </View>
    )
  }
}
