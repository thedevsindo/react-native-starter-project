import { StyleSheet } from 'react-native'
import { Appearance } from '@utils'

export default StyleSheet.create({
  container: {
    backgroundColor: Appearance.Colors.OxfordBlue
  },
  containerMain: {
    backgroundColor: Appearance.Colors.Black,
    borderColor: Appearance.Colors.Black,
    borderBottomWidth: 1,
    height: 50,
    zIndex: 1
  },
  containerSignIn: {
    backgroundColor: Appearance.Colors.OxfordBlue,
    height: 100
  },
  containerSignUp: {
    backgroundColor: Appearance.Colors.OxfordBlue,
    height: 100
  },
  leftIcon: {
    fontSize: 20,
    color: Appearance.Colors.White
  },
  leftIconAccount: {
    fontSize: 24,
    color: Appearance.Colors.White
  }
})
