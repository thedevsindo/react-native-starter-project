import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavigationActions } from 'utils'
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native'
import Swiper from 'react-native-swiper'

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

type Props = {
}
@connect((store)=>{
  return {
    nav: store.navData
  }
})
export default class Walkthrough extends Component<Props> {
  state = {
    swiperIndex: 0,
    showIndicator: true
  }

  onIndexChanged(index) {
    this.setState({ swiperIndex: index })
    if (index >= 2) {
      this.setState({ showIndicator: false })
    } else {
      this.setState({ showIndicator: true })
    }
  }

  render() {
    const { showIndicator } = this.state
    const { navigation } = this.props

    return (
      <Swiper style={styles.wrapper} loop={false} onIndexChanged={this.onIndexChanged.bind(this)} showsButtons={true} showsPagination={showIndicator}>
        <View style={styles.slide1}>
          <Text style={styles.text}>The</Text>
        </View>
        <View style={styles.slide2}>
          <Text style={styles.text}>Devs</Text>
        </View>
        <View style={styles.slide3}>
          <View>
            <Text style={styles.text}>Indonesia</Text>
          </View>
          <TouchableHighlight underlyColor={'transparent'} style={{ position: 'absolute', bottom: 0, backgroundColor: '#9b59b6', paddingVertical: 20, width: '100%', justifyContent: 'center', alignItems: 'center' }} onPress={() => navigation.dispatch(NavigationActions.goToReset('SignIn'))}>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 20, fontWeight: '600', color: '#ecf0f1' }}>Go to the app</Text>
            </View>
          </TouchableHighlight>
        </View>
      </Swiper>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
})
