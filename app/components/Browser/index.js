import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Modal as ModalComponent, View, Text, TouchableOpacity, TouchableWithoutFeedback, StyleSheet, PanResponder } from 'react-native'
import { WebView } from 'react-native-webview'
import TabBarHeader from '@components/TabBarHeader'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'
import { DeviceHeight } from '@utils'

type Props = {
}
class Browser extends Component<Props> {
  constructor(props) {
    super(props)
    this._webView = null
    this.canTouchToMove = true
  }

  state = {
    gestureState: {},
    headerHeight: 50
  }

  onRequestClose = () => {
  }

  handleGoBack = () => {
    if (this._webView) {
      this._webView.goBack()
    }
  }

  handleGoForward = () => {
    if (this._webView) {
      this._webView.goForward()
    }
  }

  onNavigationStateChange = (navState) => {
    const { dispatch } = this.props
    dispatch({ type: '@BROWSER/NAVSTATE/UPDATE', navState })
  }

  onLoadEnd = (syntheticEvent) => {

  }

  _panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: (evt, gestureState) => {
      if (this.canTouchToMove) {
        return true
      }
      return false
    },
    onPanResponderMove: (evt, gestureState) => {
      const { moveY } = gestureState
      this.setState({ gestureState, headerHeight: moveY })
    },
    onPanResponderRelease: (evt, gestureState) => {
      const { moveY } = gestureState
      if (moveY >= DeviceHeight - 150) {
        this.props.dispatch({ type: '@BROWSER/VISIBILITY/HIDDEN' })
      }
    }
  })

  onChildPressIn = () => {
    this.canTouchToMove = false
  }

  onChildonPressOut = () => {
    this.canTouchToMove = true
  }

  render() {
    const { browserData: { visible, source, navState }, dispatch } = this.props
    const { headerHeight } = this.state

    return (
      <ModalComponent
        animationType={'slide'}
        transparent={true}
        onShow={() => { this.setState({ headerHeight: 50 }) }}
        visible={visible}
        onRequestClose={this.onRequestClose}>
          <View style={{ flex: 1, backgroundColor: 'transparent' }} {...this._panResponder.panHandlers}>
            <TouchableOpacity style={{ height: headerHeight, justifyContent: 'flex-end' }}>
              <View style={{ backgroundColor: 'transparent', height: 16, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ height: 5, width: 50, backgroundColor: 'gray', borderRadius: 5 }}></View>
              </View>
            </TouchableOpacity>
            <View style={{ flex: 1 }}>
              <TouchableWithoutFeedback>
                <View style={{ flexDirection: 'row', backgroundColor: 'white', height: 40, borderTopRightRadius: 10, borderTopLeftRadius: 10, borderBottomWidth: 1, borderBottomColor: 'gray' }}>
                  <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity onPressIn={this.onChildPressIn} onPressOut={this.onChildonPressOut} style={{ width: 40, alignItems: 'center' }} onPress={() => { dispatch({ type: '@BROWSER/VISIBILITY/HIDDEN' }) }}>
                      <FontAwesome5Icon style={[{ fontSize: 25, color: 'black' }]} name={'times'} />
                    </TouchableOpacity>
                  </View>
                  <View style={{ flexDirection: 'row', flex: 1, paddingRight: 10 }}>
                    <TouchableOpacity onPressIn={this.onChildPressIn} onPressOut={this.onChildonPressOut} style={{ width: 20, alignItems: 'center', justifyContent: 'center' }} activeOpacity={navState.canGoBack ? 0.2: 1} onPress={this.handleGoBack}>
                      <FontAwesome5Icon style={[{ fontSize: 15, color: navState.canGoBack ? 'black': 'gray' }]} name={'arrow-left'} />
                    </TouchableOpacity>
                    <View style={{ flex: 1, paddingHorizontal: 5, justifyContent: 'center', alignItems: 'center' }}>
                      <Text numberOfLines={1} style={{ color: 'gray' }}>{ source.uri }</Text>
                    </View>
                    <TouchableOpacity onPressIn={this.onChildPressIn} onPressOut={this.onChildonPressOut} style={{ width: 20, alignItems: 'center', justifyContent: 'center' }} activeOpacity={navState.canGoBack ? 0.2: 1} onPress={this.handleGoForward}>
                      <FontAwesome5Icon style={[{ fontSize: 15, color: navState.canGoForward ? 'black': 'gray' }]} name={'arrow-right'} />
                    </TouchableOpacity>
                  </View>
                  <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                  </View>
                </View>
              </TouchableWithoutFeedback>
              <WebView source={source}
                ref={component => this._webView = component}
                onLoadEnd={this.onLoadEnd}
                javaScriptEnabled={true}
                onNavigationStateChange={this.onNavigationStateChange}
              />
            </View>
          </View>
      </ModalComponent>
    )
  }
}

export default connect((store)=>{
  return {
    browserData: store.browserData
  }
})(Browser)
