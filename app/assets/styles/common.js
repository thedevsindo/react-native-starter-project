import { StyleSheet } from 'react-native'
import StyleProcessing from '@utils/StyleProcessing'
import { Appearance } from '@utils'

const Text = [12, 14, 16, 18, 20, 24, 10, 8]
const Flex = [1, 2, 3, 4, 5, 6]
const Height = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 60, 70, 80, 90, 100, 120, 140, 160, 180, 200, 240, 280, 320, 360, 400]
const HeightAspect = [{ key: 1, val: null }, { key: 2, val: 2 }, { key: 3, val: 3 }, { key: 4, val: 4 }, { key: 5, val: 5 }]
const Width = [0, 5, 7, 10, 15, 20, 25, 30, 35, 40, 45, 50, 60, 70, 80, 90, 100, 120, 140, 160, 180, 200, 240, 280, 320, 360, 400]
const WidthAspect = [{ key: 1, val: null }, { key: 2, val: 2 }, { key: 3, val: 3 }, { key: 4, val: 4 }, { key: 5, val: 5 }]
const Margin = [0, 5, 10, 15, 20, 25, 30]
const MarginV = [5, 10, 15, 20, 25, 30]
const MarginV_ = [-5, -10, -15, -20, -25, -30]
const MarginH = [5, 10, 15, 20, 25, 30]
const MarginH_ = [-5, -10, -15, -20, -25, -30]
const Padding = [0, 5, 10, 15, 20, 25, 30]
const PaddingV = [5, 10, 15, 20, 25, 30]
const PaddingV_ = [-5, -10, -15, -20, -25, -30]
const PaddingH = [5, 10, 15, 20, 25, 30]
const PaddingH_ = [-5, -10, -15, -20, -25, -30]
const Top = [0, 5, 10, 15]
const Bottom = [0, 5, 10, 15]
const Left = [0, 5, 10, 15]
const Right = [0, 5, 10, 15]
const Zindex = [1, 2, 3, 999, 9999, 99999, 999999, 9999999, 99999999, 999999999, 9999999999]
const BorderRadius = [5, 10, 15, 20]

const Common = {
  FontPrimaryBlack: {
    fontFamily: Appearance.Fonts.Roboto.Black
  },
  FontPrimaryBlackItalic: {
    fontFamily: Appearance.Fonts.Roboto.BlackItalic
  },
  FontPrimaryBold: {
    fontFamily: Appearance.Fonts.Roboto.Bold
  },
  FontPrimaryBoldItalic: {
    fontFamily: Appearance.Fonts.Roboto.BoldItalic
  },
  FontPrimaryItalic: {
    fontFamily: Appearance.Fonts.Roboto.Italic
  },
  FontPrimaryLight: {
    fontFamily: Appearance.Fonts.Roboto.Light
  },
  FontPrimaryLightItalic: {
    fontFamily: Appearance.Fonts.Roboto.LightItalic
  },
  FontPrimaryMedium: {
    fontFamily: Appearance.Fonts.Roboto.Medium
  },
  FontPrimaryMediumItalic: {
    fontFamily: Appearance.Fonts.Roboto.MediumItalic
  },
  FontPrimaryRegular: {
    fontFamily: Appearance.Fonts.Roboto.Regular
  },
  FontPrimaryThin: {
    fontFamily: Appearance.Fonts.Roboto.Thin
  },
  FontPrimaryThinItalic: {
    fontFamily: Appearance.Fonts.Roboto.ThinItalic
  },
  Text: {
    fontFamily: Appearance.Fonts.Roboto.Regular
  },
  TextBold: {
    fontFamily: Appearance.Fonts.Roboto.Bold,
    fontWeight: 'bold'
  },
  TextBlack: {
    fontFamily: Appearance.Fonts.Roboto.Black
  },
  TextLeft: {
    textAlign: 'left'
  },
  TextCenter: {
    textAlign: 'center'
  },
  TextRight: {
    textAlign: 'right'
  },
  FlexCol: {
    flexDirection: 'column'
  },
  FlexRow: {
    flexDirection: 'row'
  },
  FlexCenter: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  FlexAlignCenter: {
    alignItems: 'center'
  },
  FlexAlignStart: {
    alignItems: 'flex-start'
  },
  FlexAlignEnd: {
    alignItems: 'flex-end'
  },
  FlexContentCenter: {
    justifyContent: 'center'
  },
  FlexContentStart: {
    justifyContent: 'flex-start'
  },
  FlexContentEnd: {
    justifyContent: 'flex-end'
  },
  FlexContentBetween: {
    justifyContent: 'space-between'
  },
  FlexContentAround: {
    justifyContent: 'space-around'
  },
  FlexContentEvenly: {
    justifyContent: 'space-evenly'
  },
  FlexWrap: {
    flexWrap: 'wrap'
  },
  FlexAbs: {
    flex: 1,
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  },
  Container: {
    flexGrow: 1,
    paddingBottom: 0
  },
  ContainerGap: {
    flexGrow: 1,
    paddingBottom: 25
  },
  ContainerGap2: {
    flexGrow: 1,
    paddingBottom: 50
  },
  ContainerGap3: {
    flexGrow: 1,
    paddingBottom: 75
  },
  ContainerGap4: {
    flexGrow: 1,
    paddingBottom: 100
  },
  ContainerGap5: {
    flexGrow: 1,
    paddingBottom: 125
  },
  ContainerGap6: {
    flexGrow: 1,
    paddingBottom: 150
  },
  Border1: {
    borderWidth: 1
  },
  BorderTop1: {
    borderTopWidth: 1
  },
  BorderRight1: {
    borderRightWidth: 1
  },
  BorderBot1: {
    borderBottomWidth: 1
  },
  BorderLeft1: {
    borderLeftWidth: 1
  },
  PosRel: {
    position: 'relative'
  },
  PosAbs: {
    position: 'absolute'
  },
  PosAbsFull: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  },
  PosAbsTop: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0
  },
  PosAbsBot: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    left: 0
  },
  Hidden: {
    width: 0,
    height: 0,
    overflow: 'hidden'
  },
  OverflowHidden: {
    overflow: 'hidden'
  },
  BoxShadow: {
    elevation: 4,
    shadowOffset: { width: 5, height: 5 },
    shadowColor: Appearance.Colors.Grey,
    shadowOpacity: 0.5,
    shadowRadius: 10,
    borderColor: Appearance.Colors.Black
  },
  BorderBottomGrey: {
    shadowOffset: { width: 1, height: 1 },
    shadowColor: Appearance.Colors.Grey,
    shadowOpacity: 0.5
  },
  Transform1_: {
    transform: [{ scaleX: 0.5 }, { scaleY: 0.5 }]
  }
}

StyleProcessing.ListArr(Text, ({ key, value }) => {
  Common[`Text${key + 1}`] = { fontSize: value }
})
StyleProcessing.List(Appearance.Colors, ({ key, value }) => {
  Common[`Text${key}`] = { color: value }
})
StyleProcessing.List(Appearance.Colors, ({ key, value }) => {
  Common[`Border${key}`] = { borderColor: value }
})
StyleProcessing.List(Appearance.Colors, ({ key, value }) => {
  Common[`Bg${key}`] = { backgroundColor: value }
})
StyleProcessing.ListArr(Flex, ({ value }) => {
  Common[`Flex${value}`] = { flex: value }
})
StyleProcessing.ListArr(Height, ({ key, value }) => {
  Common[`H${key}`] = { height: value }
})
StyleProcessing.ListArr(HeightAspect, ({ value }) => {
  Common[`HA${value.key}`] = { height: !value.val ? Appearance.Aspect.Width : Appearance.Aspect.Width / value.val }
})
StyleProcessing.ListArr(Width, ({ key, value }) => {
  Common[`W${key}`] = { width: value }
})
StyleProcessing.ListArr(WidthAspect, ({ value }) => {
  Common[`WA${value.key}`] = { width: !value.val ? Appearance.Aspect.Width : Appearance.Aspect.Width / value.val }
})
StyleProcessing.ListArr(Margin, ({ key, value }) => {
  Common[`Margin${key}`] = { margin: value }
})
StyleProcessing.ListArr(MarginV, ({ key, value }) => {
  Common[`MarginV${key + 1}`] = { marginVertical: value }
})
StyleProcessing.ListArr(MarginV_, ({ key, value }) => {
  Common[`MarginV${key + 1}_`] = { marginVertical: value }
})
StyleProcessing.ListArr(MarginH, ({ key, value }) => {
  Common[`MarginH${key + 1}`] = { marginHorizontal: value }
})
StyleProcessing.ListArr(MarginH_, ({ key, value }) => {
  Common[`MarginH${key + 1}_`] = { marginHorizontal: value }
})
StyleProcessing.ListArr(Padding, ({ key, value }) => {
  Common[`Padding${key}`] = { padding: value }
})
StyleProcessing.ListArr(PaddingV, ({ key, value }) => {
  Common[`PaddingV${key + 1}`] = { paddingVertical: value }
})
StyleProcessing.ListArr(PaddingV_, ({ key, value }) => {
  Common[`PaddingV${key + 1}_`] = { paddingVertical: value }
})
StyleProcessing.ListArr(PaddingH, ({ key, value }) => {
  Common[`PaddingH${key + 1}`] = { paddingHorizontal: value }
})
StyleProcessing.ListArr(PaddingH_, ({ key, value }) => {
  Common[`PaddingH${key + 1}_`] = { paddingHorizontal: value }
})
StyleProcessing.ListArr(Top, ({ key, value }) => {
  Common[`Top${key}`] = { top: value }
})
StyleProcessing.ListArr(Bottom, ({ key, value }) => {
  Common[`Bottom${key}`] = { bottom: value }
})
StyleProcessing.ListArr(Left, ({ key, value }) => {
  Common[`Left${key}`] = { left: value }
})
StyleProcessing.ListArr(Right, ({ key, value }) => {
  Common[`Right${key}`] = { right: value }
})
StyleProcessing.ListArr(Zindex, ({ key, value }) => {
  Common[`Z${key}`] = { zIndex: value }
})
StyleProcessing.ListArr(BorderRadius, ({ key, value }) => {
  Common[`BorderRadius${key + 1}`] = { borderRadius: value }
})

export default StyleSheet.create(Common)
