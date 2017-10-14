'use strict'

import React, { PureComponent } from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

@autobind
class Table extends PureComponent {
  constructor(props) = {
    super(props)
  }

  render(){
    return (
      <View>
        <Text> I am a table </Text>
      </View>
    )
  }
}

export default Table
