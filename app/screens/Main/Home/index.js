import React, { Component } from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { Common as CommonStyles } from '@styles'
import styles from './styles'

type Props = {}
export default class Home extends Component<Props> {
  render() {
    const navigation = this.props.navigation

    return (
      <View style={[styles.container, CommonStyles.BgGray]}>
        <Text>Home</Text>
      </View>
    )
  }
}
