import React from 'react'
import { connect } from 'react-redux'
import { View, Text, TouchableHighlight } from 'react-native'
import { NavigationActions } from 'react-navigation'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

type Props = {
}
class SignUp extends React.Component<Props> {
  state = {
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerMode: 'screen',
      headerLeft: () => {
        return (
          <TouchableHighlight underlayColor={'transparent'} style={{ marginLeft: 25, flex: 1, flexDirection: 'row' }} onPress={() => navigation.dispatch(NavigationActions.back())}>
            <FontAwesome5 style={{ fontSize: 24 }} name={'arrow-left'} />
          </TouchableHighlight>
        )
      }
    }
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View style={{ flexDirection: 'row', marginTop: 10 }}>
          <Text>Welcome</Text>
        </View>
      </View>
    )
  }
}

export default connect((store)=>{
  return {
    nav: store.navData
  }
})(SignUp)
