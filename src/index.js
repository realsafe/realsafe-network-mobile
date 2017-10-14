'use strict'

import React, { PureComponent } from 'react'

import {
    View,
    StyleSheet,
    Button
} from 'react-native'

import { StackNavigator } from 'react-navigation'

import ReactCalculator from './scenes/ReactCalculator'
import Explorer from './scenes/Explorer'


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10
  }
})

class Home extends PureComponent {
  static navigationOptions = {
    title: 'Welcome to Real Safe'
  }

  render(){

    const { navigate } = this.props.navigation

    return (
      <View style={ styles.container } >
        <View style={ styles.row }>
          <Button
          onPress = { () => navigate('Explorer') }
          title = 'Go to Explorer'
          color = '#aa11d0'
          />
        </View>
        <View style={ styles.row } >
          <Button
          onPress = { () => navigate('ReactCalculator') }
          title = 'Go to Calculator'
          color = '#29661f'
          />
        </View>
      </View>
    )
  }
}

const AppWithNavigation = StackNavigator({
  Home: { screen: Home },
  Explorer: { screen: Explorer },
  ReactCalculator: { screen: ReactCalculator },
})


class AppContainer extends PureComponent {
    render(){
      return ( <AppWithNavigation /> )
    }
}

export default AppContainer
