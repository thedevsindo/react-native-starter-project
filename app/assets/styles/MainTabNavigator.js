import { StyleSheet } from 'react-native'
import { Appearance } from '@utils'

export default StyleSheet.create({
  Text: {
    fontFamily: Appearance.Fonts.Regular
  },
  Label: {
    color: Appearance.ThemeColors.Icon.Normal,
    fontSize: 10,
    fontFamily: Appearance.Fonts.Bold,
    fontWeight: '600'
  }
})
