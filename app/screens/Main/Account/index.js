import React from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import { Common as CommonStyles } from '@styles'
import styles from './styles'

type Props = {}
export default class Account extends React.Component<Props> {
  render() {
    return (
      <View style={[styles.container, CommonStyles.BgGray]}>
        <Text>Account</Text>
      </View>
    )
  }
}
