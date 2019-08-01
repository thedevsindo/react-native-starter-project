import React from 'react'
import PropTypes from 'prop-types'
import { ActivityIndicator, View } from 'react-native'
import { Appearance } from '@utils'

import { Colors, Styles } from '../utils/'

type Props = {
  type: PropTypes.string
}
class Loading extends React.Component {
  static propTypes = {
    type: PropTypes.string
  }

  render() {
    return (
      <View style={[Styles.FlexCenter, Styles.PosAbsFull, Styles.BgBlackTranscluent]}>
        <ActivityIndicator
          color={Appearance.Colors.White}
          size={'small'}
        />
      </View>
    )
  }
}

export default Loading
