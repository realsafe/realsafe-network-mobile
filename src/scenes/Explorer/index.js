'use strict'

import  React, { PureComponent } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import autobind from 'autobind-decorator'

const style = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  profileInfo: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#17cdc2',
    alignItems: 'center'
  },
  content: {
    flex: 2.5,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#6bc425',
    alignItems: 'center'
  }
})

@autobind
export default class Explorer extends PureComponent {

  static navigationOptions = {
    title: 'Real Safe Explorer'
  }

  render(){
    return(
      <View style={style.container}>
        <View style={style.profileInfo} >
          <Text> Here profile info! </Text>
        </View>
        <View style={style.content} >
          <Text> Here profile info! </Text>
        </View>
      </View>
    )
  }
}
