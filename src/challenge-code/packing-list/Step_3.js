export default `
import React, { Component } from "react"
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native"

const Button = props => {
  const { onButtonPress, text, styleOverride } = props
  return (
    {/*
      TODO: your Button code here
    */}
  )
}

const ListInput = props => {
  const { value, onChangeText, onAddItem, onClearItems } = props
  return (
    <View style={styles.inputRow}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={val => onChangeText(val)}
        autoFocus
      />
      {/* TODO: fill in "text" prop and "onButtonPress" functions - uncomment Buttons when ready */}
      {/* <Button text="???" onButtonPress={() => null} /> */}
      {/* <Button styleOverride={{backgroundColor: "gray"}} /> */}
    </View>
  )
}

export default class App extends Component {
  state = { inputValue: "", items: [] }

  addItem = () => this.setState({ items: [...this.state.items, this.state.inputValue] })

  render() {
    const { inputValue, items } = this.state
    return (
      <View style={styles.container}>
        <ListInput
          value={inputValue}
          // TODO: pass props to this component
        /> 
        { items.map((item, index) => 
            <Text key={index} style={styles.theValue}>{ item }</Text>
        )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  input: {
    width: "50%",
    height: 40,
    borderColor: "lightgray",
    borderWidth: 1,
    padding: 5
  },
  theValue: {
    margin: 10,
    fontSize: 18
  },
  inputRow: {
    flexDirection: "row"
  },
  addButton: {
    marginLeft: 10,
    backgroundColor: "green",
    height: 40,
    width: 40,
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    // TODO: style your button(s)
  },
  buttonText: {
    color: "white"
  }
})

`
