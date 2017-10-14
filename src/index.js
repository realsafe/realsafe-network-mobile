'use strict'

import React from 'react'

import {
    Text,
    View,
    AppRegistry,
    StyleSheet
} from 'react-native'

import ReactCalculator from './scenes/ReactCalculator'
import Explorer from './scenes/Explorer'

class AppContainer extends React.Component{
  render(){
    return ( <Explorer></Explorer>)
    // return ( <ReactCalculator></ReactCalculator>)
  }
}

export default AppContainer
