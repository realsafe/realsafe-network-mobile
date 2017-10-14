'use strict'

import React, { Component } from 'react'

import {
    Text,
    View,
    AppRegistry,
    StyleSheet
} from 'react-native'

import InputButton from './Components/InputButton'

const inputButtons = [
    [ 1, 2, 3, '/' ],
    [ 4, 5, 6, '*' ],
    [ 7, 8, 9, '-' ],
    [ 0, '.', '=', '+' ]
]

// Creating our ReactCalculator component
class ReactCalculator extends Component {

    static navigationOptions = {
      title: 'Reat Calculator'
    }


    constructor(props){
        super(props)

        this.state = {
            inputValue: 0,
            previousInputValue: 0,
            selectedSymbol: null
        }
    }

    render() {
        return (
            <View style={ Style.rootContainer }>
                <View style={ Style.displayContainer }>
                    <Text style={Style.displayText}> { this.state.inputValue } </Text>
                </View>
                <View style={ Style.inputContainer }>
                    { this._renderInputButtons() }
                </View>
            </View>
        )
    }


     _renderInputButtons() {
        let views = [];

        for (var r = 0; r < inputButtons.length; r ++) {
            let row = inputButtons[r];

            let inputRow = [];
            for (var i = 0; i < row.length; i ++) {
                let input = row[i];

                inputRow.push(
                    <InputButton
                        value={input}
                        highlight={ this.state.selectedSymbol === input }
                        onPress={ this._onInputButtonPressed.bind(this, input) }
                        key={r + "-" + i} />
                );
            }

            views.push(<View style={Style.inputRow} key={"row-" + r}>{inputRow}</View>)
        }

        return views;
    }

    _onInputButtonPressed(input) {
        switch (typeof input) {
            case 'number':
                return this._handleNumberInput(input)
            case 'string':
                return this._handleStringInput(input)
        }
    }

    _handleNumberInput(num) {
        let inputValue = (this.state.inputValue * 10) + num;

        this.setState({
            inputValue: inputValue
        })
    }

    _handleStringInput(str) {
        switch (str) {
            case '/':
            case '*':
            case '+':
            case '-':
                this.setState({
                    selectedSymbol: str,
                    previousInputValue: this.state.inputValue,
                    inputValue: 0
                });
                break
            case '=':
                let symbol = this.state.selectedSymbol,
                    inputValue = this.state.inputValue,
                    previousInputValue = this.state.previousInputValue

                if (!symbol) {
                    return
                }

                this.setState({
                    previousInputValue: 0,
                    inputValue: eval(previousInputValue + symbol + inputValue),
                    selectedSymbol: null
                })
                break
        }
    }
}


const Style = StyleSheet.create({
 rootContainer: {
    flex: 1
  },
  displayContainer: {
    flex: 2,
    backgroundColor: '#193441'
  },
  inputContainer: {
    flex: 8,
    backgroundColor: '#3E606F'
  },
  inputRow: {
      flex: 1,
      flexDirection: 'row'
  },
  displayText: {
        color: 'white',
        fontSize: 38,
        fontWeight: 'bold',
        textAlign: 'right',
        padding: 20
  }
})


export default ReactCalculator
