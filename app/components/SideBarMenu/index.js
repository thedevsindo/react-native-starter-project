import React from 'react'
import PropTypes from 'prop-types'
import { View, SafeAreaView, ScrollView, Image, Text, TouchableOpacity, Switch } from 'react-native'
import { Appearance } from '@utils'
import { Common as CommonStyles } from '@styles'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'

type Props = {
  navigation: PropTypes.object.isRequired
}
class SideBarMenu extends React.Component {
  state = {
    autoRefresh: true,
    infoAlert: false
  }

  render() {
    const { autoRefresh, infoAlert } = this.state
    const Dimensions = {
      Menu: {
        width: Appearance.Aspect.Width,
        height: Appearance.Aspect.Height
      },
      Section: {
        width: Appearance.Aspect.Width * 0.666
      },
      Image: {
        width: Appearance.Aspect.Width * 0.666 / 1.25,
        height: Appearance.Aspect.Width * 0.666 / 1.25 / 5.688
      },
      Icon: {
        width: 20,
        height: 20
      }
    }

    return (
      <SafeAreaView style={[CommonStyles.Container, CommonStyles.BgBlack, Dimensions.Menu]}>
        <ScrollView contentContainerStyle={[CommonStyles.ContainerGap]}>
          <View style={[CommonStyles.Section, Dimensions.Section]}>
            <View style={[CommonStyles.Flex1, CommonStyles.FlexCenter, CommonStyles.H10]}>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

export default SideBarMenu
