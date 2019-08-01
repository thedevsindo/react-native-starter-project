import { Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')
const Aspect = { Width: width, Height: height }

const Colors = {
  Red: '#8f1c1c',
  Cinnabar: '#EE4040',
  Orange: '#b2810a',
  Yellow: '#b88001',
  Green: '#00ff4e',
  PastelGreen: '#78DD55',
  Teal: '#007b3e',
  Blue: '#00a1d4',
  Purple: '#a102ff',
  Pink: '#ff2751',
  White: '#fff',
  WhiteDark: '#f7f7f7',
  WhiteTransparent: 'rgba(255, 255, 255, 0.5)',
  Black: '#000',
  BlackDark: '#17151b',
  BlackLight: '#28272c',
  BlackTransparent: 'rgba(0, 0, 0, 0.8)',
  Grey: '#94949e',
  GreyLight: '#ddd',
  GreyDark: '#414142',
  GoldDrop: '#f67d00',
  OxfordBlue: '#32434D',
  Scorpion: '#5D5D5D',
  CornflowerBlue: '#6195ED',
  Alto: '#D9D9D9',
  Gray: '#909090',
  Emperor: '#545454',
  Tundora: '#494949',
  Denim: '#1C72C7',
  Tamarillo: '#9B0E0E',
  Mahogany: '#5D0909',
  PersianRed: '#CC3333',
  PickledBluewood: '#0e0e0e',
  Trout: '#555862',
  DoveGray: '#6b6b6b',
  Shark: '#232428',
  Tuna: '#393b41',
  GoldenGrass: '#DEB423',
  MardiGras: '#39003C',
  MardiGras2: '#37013C',
  ElectricViolet: '#940CF1',
  Barossa: '#260128',
  ScarpaFlow: '#555763',
  Atlantis: '#74B62C',
  FunGreen: '#007A43',
  JungleGreen: '#27AE60',
  KaitokeGreen: '#003D22',
  Nobel: '#b7b7b7',
  MineShaft: '#343434',
  Limeade: '#3fba00',
  GuardsmanRed: '#BA0000',
  PirateGold: '#b99000',
  PirateGold2: '#C98300',
  DustyGray: '#959595',
  LavenderMagenta: '#F368E0',
  CuriousBlue: '#2E86DE',
  Botticelli: '#C8D6E5',
  Transparent: 'transparent',
  WhiteTranscluent: 'rgba(255, 255, 255, 0.75)',
  BlackTranscluent: 'rgba(0, 0, 0, 0.75)',
  Facebook: '#3b5998',
  Google: '#d54c3f',
  Twitter: '#1da1f2'
}

const ThemeColors = {
  Primary: Colors.GoldDrop,
  Secondary: Colors.PigmentGreen,
  Icon: {
    Normal: Colors.Scorpion
  }
}

const Fonts = {
  Roboto: {
    Black: 'Roboto-Black',
    BlackItalic: 'Roboto-BlackItalic',
    Bold: 'Roboto-Bold',
    BoldItalic: 'Roboto-BoldItalic',
    Italic: 'Roboto-Italic',
    Light: 'Roboto-Light',
    LightItalic: 'Roboto-LightItalic',
    Medium: 'Roboto-Medium',
    MediumItalic: 'Roboto-MediumItalic',
    Regular: 'Roboto-Regular',
    Thin: 'Roboto-Thin',
    ThinItalic: 'Roboto-ThinItalic'
  }
}

const UI = {
  Colors,
  ThemeColors,
  Fonts,
  Aspect
}

module.exports = UI
