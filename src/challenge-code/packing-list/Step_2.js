export default `
import React, { Component } from "react"
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native"

export default class App extends Component {
  state = { inputValue: null, items: [] }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          value={this.state.inputValue}
          onChangeText={val => this.setState({ inputValue: val })}
          someValueToMakeReturnKeyAddItem={this.addItem} // TODO: find this prop
        />
        <Text style={styles.theValue}>{this.state.inputValue}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF",
    justifyContent: "center",
    alignItems: "center"
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
  }
})
`
