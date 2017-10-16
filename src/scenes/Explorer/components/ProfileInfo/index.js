'use strict'

import { StyleSheet, View, Text } from 'react-native'
import React, { PureComponent } from 'react'
import autobind from 'autobind-decorator'


const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  header: {
    height: 20,
    backgroundColor: '#f46f1a'
  },
  body: {
    flex: 1,
    backgroundColor: '#c31717'
  },
  footer: {
    height: 20,
    backgroundColor: '#c11af4'
  }
})

@autobind
class ProfileInfo extends PureComponent {

  constructor(props){
    super(props)
    this.state = {

    }
  }

  render(){
    return (
      <View style={style.container}>
        <View style={style.header}>
          <Text
            style={{
              fontSize: 14,
              textAlign: 'center'
            }}> RDAO Profile </Text>
        </View>
        <View style={style.body}>
          <Text> Pic and Name </Text>
        </View>
        <View style={style.footer}>
          <Text> Name and Token Symbol</Text>
        </View>
      </View>
    )
  }
}


export default ProfileInfo
