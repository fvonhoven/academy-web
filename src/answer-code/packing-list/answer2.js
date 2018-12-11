export default `

import React, { Component } from "react"
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from "react-native"

export default class App extends Component {
  state = { inputValue: "", items: [] }

  addItem = () => {
    this.setState({ 
      items: [...this.state.items, this.state.inputValue] 
    })
    
    // Optionally use functional set state to get & use the previous state's values
    {/* 
      this.setState(prevState => { 
        return { items: [...prevState.items, prevState.inputValue] }
      })
    */}
  }

  render() {
    const { items } = this.state
    return (
      <View style={styles.container}>
        <View style={styles.inputRow}>
          <TextInput 
            style={styles.input}
            onChangeText={val => this.setState({inputValue: val})}
            onSubmitEditing={this.addItem}
          />
          <TouchableOpacity 
            style={styles.addButton}
            onPress={this.addItem}
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
