import { Platform, StyleSheet } from 'react-native'

const iOS = Platform.OS === 'ios'

const Colors = {
  White: '#fff',
  WhiteTransparent: 'rgba(255, 255, 255, 0.5)',
  Black: '#212121',
  BlackTransparent: 'rgba(0, 0, 0, 0.8)',
  Red: '#ed232b',
  Blue: '#0f5bab',
  BlueLight: '#4e92df',
  Grey: '#999999',
  GreyLight: '#efeef3',
  GreyLight50: '#ccc',
  GreyLight90: '#eee',
  GreyDark: '#434343',
  Yellow: '#f4efdd',
  YellowOutline: '#e5dcc3',
  YellowText: '#846f4e',
  Transparent: 'transparent',
  ForestGreen: '#2ab338'
}

const Fonts = {
  Light: 'Roboto-Light',
  Regular: 'Roboto-Regular',
  Medium: 'Roboto-Medium',
  Bold: 'Roboto-Bold',
  Black: 'Roboto-Black'
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.White
  },
  view: {
    margin: 0,
    padding: 0
  },
  viewTab: {
    paddingBottom: 60
  },
  flexCol: {
    flexDirection: 'column'
  },
  flexRow: {
    flexDirection: 'row'
  },
  flexCenter: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  flexAlignCenter: {
    alignItems: 'center'
  },
  flexAlignStart: {
    alignItems: 'flex-start'
  },
  flexAlignEnd: {
    alignItems: 'flex-end'
  },
  flexContentCenter: {
    justifyContent: 'center'
  },
  flexContentStart: {
    justifyContent: 'flex-start'
  },
  flexContentEnd: {
    justifyContent: 'flex-end'
  },
  flexOne: {
    flex: 1
  },
  flexTwo: {
    flex: 2
  },
  flexThree: {
    flex: 3
  },
  flexFour: {
    flex: 4
  },
  flexFive: {
    flex: 5
  },
  flexSix: {
    flex: 6
  },
  flexAbs: {
    flex: 1,
    position: 'absolute',
    top: iOS ? 20 : 0,
    right: 0,
    bottom: 0,
    left: 0
  },
  text: {
    fontFamily: Fonts.Regular
  },
  texts: {
    marginBottom: 10,
    fontFamily: Fonts.Regular,
    fontSize: 12
  },
  title: {
    marginBottom: 20,
    fontFamily: Fonts.Bold,
    fontSize: 14,
    textAlign: 'center'
  },
  h1: {
    marginBottom: 40,
    fontFamily: Fonts.Regular,
    fontSize: 14,
    textAlign: 'center'
  },
  h2: {
    marginBottom: 10,
    fontFamily: Fonts.Regular,
    fontSize: 14
  },
  h3: {
    marginBottom: 10,
    fontFamily: Fonts.Bold,
    fontSize: 12
  },
  textWhite: {
    color: Colors.White
  },
  textGrey: {
    color: Colors.Grey
  },
  textGreyDark: {
    color: Colors.GreyDark
  },
  textBlack: {
    color: Colors.Black
  },
  textBlue: {
    color: Colors.Blue
  },
  textRed: {
    color: Colors.Red
  },
  textBold: {
    fontFamily: Fonts.Bold
  },
  textCenter: {
    textAlign: 'center'
  },
  textError: {
    color: Colors.Red,
    paddingVertical: 5
  },
  textFont12: {
    fontSize: 12
  },
  textFont10: {
    fontSize: 10
  },
  bgWhite: {
    backgroundColor: Colors.White
  },
  bgRed: {
    backgroundColor: Colors.Red
  },
  bgGrey: {
    backgroundColor: Colors.GreyLight
  },
  bgBlue: {
    backgroundColor: Colors.Blue
  },
  bgBlueDrop: {
    backgroundColor: '#3a3b48'
  },
  bgConcrete: {
    backgroundColor: '#F2F2F2'
  },
  gap: {
    height: 20
  },
  box: {
    marginVertical: 15,
    padding: 15
  },
  boxSquare: {
    paddingRight: 30,
    paddingLeft: 30
  },
  boxSquare: {
    paddingLeft: 15,
    paddingRight: 15
  },
  boxShadow: {
    shadowOffset: { width: 1, height: 1 },
    shadowColor: Colors.Grey,
    shadowOpacity: 0.5,
    zIndex: 1,
    elevation: 4
  },
  list: {
    marginTop: -1,
    marginBottom: 40,
    borderTopColor: Colors.GreyLight
  },
  listItemBox: {
    borderBottomColor: Colors.GreyLight
  },
  label: {
    marginRight: 0,
    marginLeft: 0,
    color: Colors.Grey,
    fontSize: 12
  },
  labelHide: {
    height: 0
  },
  input: {
    paddingVertical: 0,
    paddingTop: 0,
    paddingBottom: 0,
    fontFamily: Fonts.Regular,
    color: Colors.GreyDark,
    width: '100%'
  },
  inputBox: {
    marginRight: 0,
    marginLeft: 0,
    borderBottomColor: Colors.GreyLight
  },
  inputLeftSpace: {
    paddingLeft: 40
  },
  inputRightSpace: {
    paddingRight: 40
  },
  inputIcon: {
    width: 30,
    textAlign: 'center',
    position: 'absolute',
    top: iOS ? 21 : 27,
    zIndex: 1
  },
  inputIconTextView: {
    width: 30,
    textAlign: 'center',
    position: 'absolute',
    top: iOS ? 21 : 22,
    zIndex: 1
  },
  inputLeftIcon: {
    left: 0
  },
  inputRightIcon: {
    right: 0
  },
  button: {
    marginTop: 20,
    borderRadius: 2,
    width: '100%'
  },
  buttonEdge: {
    marginLeft: 0,
    marginRight: 0
  },
  buttonFull: {
    marginLeft: -15,
    marginRight: -15,
    height: 50
  },
  buttonIcon: {
    position: 'absolute',
    left: 15
  },
  orLine: {
    width: '100%',
    height: 1,
    backgroundColor: Colors.Grey,
    bottom: -10
  },
  orLineTextBg: {
    alignItems: 'center',
    width: 80,
    backgroundColor: Colors.White
  },
  emptyView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    top: -40
  },
  emptyImg: {
    width: 120,
    height: 120
  },
  emptyImgBig: {
    width: 240,
    height: 240
  },
  headerRow: {
    paddingTop: iOS ? 20 : 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 70,
    backgroundColor: Colors.White
  },
  headerRowAbsolute: {
    marginBottom: -70,
    zIndex: 1,
    backgroundColor: Colors.Transparent
  },
  headerNav: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50
  },
  headerNavAbs: {
    position: 'absolute',
    top: iOS ? 20 : 10,
    zIndex: 99999
  },
  headerCenter: {
    flex: 1,
    zIndex: -1
  },
  headerTitle: {
    top: 1,
    fontFamily: Fonts.Bold,
    fontSize: 20,
    color: Colors.Red,
    paddingLeft: 10,
    textAlign: 'left'
  },
  headerNavRight: {
    right: 0
  },
  headerNavLeft: {
    left: 0
  },
  imgBig: {
    width: '100%',
    left: -20
  },
  paddingTop5: {
    paddingTop: 5
  },
  paddingVertical5: {
    paddingVertical: 5
  },
  borderBottomGrey: {
    shadowOffset: { width: 1, height: 1 },
    shadowColor: Colors.Grey,
    shadowOpacity: 0.5
    // zIndex: 1,
    // elevation: 4
  },
  clearIcon: {
    position: 'absolute',
    right: 10,
    top: 35
  },
  clearIconCorporate: {
    position: 'absolute',
    right: 20,
    top: 40
  }
})

const UI = {
  Colors: Colors,
  Fonts: Fonts,
  Styles: Styles
}

module.exports = UI
