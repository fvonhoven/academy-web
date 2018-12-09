export default `

import React, { Component } from "react"
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from "react-native"

export default class App extends Component {
  state = { items: [], inputValue: "" }

  render() {
    const { items } = this.state
    return (
      <View style={styles.container}>
        <View style={styles.inputRow}>
          <TextInput 
            style={styles.input}
            onChangeText={val => this.setState({inputValue: val})}
          />
          <TouchableOpacity 
            style={styles.addButton}
            onPress={() => this.setState({ 
              items: [...this.state.items, this.state.inputValue] 
            })}
          >
            <Text style={styles.buttonText}>ADD</Text>
          </TouchableOpacity>
        </View>
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
    flexDirection: "row",
    justifyContent: "center",
  },
  addButton: {
    marginLeft: 10,
    backgroundColor: "green",
    height: 40,
    width: 40,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: {
    color: "white"
  }
})

`
