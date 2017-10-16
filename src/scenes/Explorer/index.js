'use strict'

import  React, { PureComponent } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import ProfileInfo from './components/ProfileInfo'


import autobind from 'autobind-decorator'



const style = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  profileInfo: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#17cdc2',
    justifyContent: 'center',
    alignItems: 'center'
  },
  content: {
    flex: 3,
    flexDirection: 'column',
    backgroundColor: '#6bc425'
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
          <ProfileInfo />
        </View>
        <View style={style.content}>
          <ScrollView
          horizontal={false}
          pagingEnabled={false}
          scrollEnabled={true}
          showsHorizontalScrollIndicator={true}
          showsVerticalScrollIndicator={false}
          >
            <Text> Here Content info - start! </Text>
            <Text> Here Content info! </Text>
            <Text> Here Content info! </Text>
            <Text> Here Content info! </Text>
            <Text> Here Content info! </Text>
            <Text> Here Content info! </Text>
            <Text> Here Content info! </Text>
            <Text> Here Content info! </Text>
            <Text> Here Content info! </Text>
            <Text> Here Content info! </Text>
            <Text> Here Content info! </Text>
            <Text> Here Content info! </Text>
            <Text> Here Content info! </Text>
            <Text> Here Content info! </Text>
            <Text> Here Content info! </Text>
            <Text> Here Content info! </Text>
            <Text> Here Content info! </Text>
            <Text> Here Content info! </Text>
            <Text> Here Content info! </Text>
            <Text> Here Content info! </Text>
            <Text> Here Content info! </Text>
            <Text> Here Content info! </Text>
            <Text> Here Content info! </Text>
            <Text> Here Content info! </Text>
            <Text> Here Content info! </Text>
            <Text> Here Content info! </Text>
            <Text> Here Content info! </Text>
            <Text> Here Content info! </Text>
            <Text> Here Content info! </Text>
            <Text> Here Content info! </Text>
            <Text> Here Content info! </Text>
            <Text> Here Content info! </Text>
            <Text> Here Content info! </Text>
            <Text> Here Content info! </Text>
            <Text> Here Content info! </Text>
            <Text> Here Content info! </Text>
            <Text> Here Content info! </Text>
            <Text> Here Content info! </Text>
            <Text> Here Content info! </Text>
            <Text> Here Content info! </Text>
            <Text> Here Content info! </Text>
            <Text> Here Content info! </Text>
            <Text> Here Content info! </Text>
            <Text> Here Content info! </Text>
            <Text> Here Content info! </Text>
            <Text> Here Content info! </Text>
            <Text> Here Content info! </Text>
            <Text> Here Content info! </Text>
            <Text> Here Content info! </Text>
            <Text> Here Content info! </Text>
            <Text> Here Content info! </Text>
            <Text> Here Content info! </Text>
            <Text> Here Content info! </Text>
            <Text> Here Content info! </Text>
            <Text> Here Content info! </Text>
            <Text> Here Content info - end!</Text>
          </ScrollView>
        </View>
      </View>
    )
  }
}
