import React, { Component } from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import { NavigationActions } from 'utils'

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

type Props = {}
export default class SignIn extends Component<Props> {
  render() {
    const navigation = this.props.navigation

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View style={{ flexDirection: 'row', marginTop: 10 }}>
          <TouchableHighlight onPress={() => {
            navigation.dispatch(NavigationActions.goToReset('Main'))
          }} underlayColor={'transparent'}>
            <View style={{ flexDirection: 'row', paddingHorizontal: 20, paddingVertical: 10, marginRight: 10 }}>
              <View style={{ paddingHorizontal: 5 }}>
                <FontAwesome5 name={'sign-in-alt'} size={20} color={'red'} />
              </View>
              <View style={{ paddingHorizontal: 5 }}>
                <Text>MasukA</Text>
              </View>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => {
              navigation.dispatch(NavigationActions.goToNested([]))
          }} underlayColor={'transparent'}>
            <View style={{ flexDirection: 'row', paddingHorizontal: 20, paddingVertical: 10, marginRight: 10 }}>
              <View style={{ paddingHorizontal: 5 }}>
                <FontAwesome5 name={'user-plus'} size={20} color={'red'} />
              </View>
              <View style={{ paddingHorizontal: 5 }}>
                <Text>Daftar</Text>
              </View>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}
