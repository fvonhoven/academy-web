export default `
import React, { Component } from "react"
import { StyleSheet, Text, View  } from "react-native" // ← TODO: Import TextInput from react-native

export default class App extends Component {
  state = { inputValue: "" }

  render() {
    return (
      <View style={styles.container}>
        {/* TODO: Put your input here */}
        <Text style={styles.hello}>Hello world!</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  hello: {
    textAlign: "center",
    color: "#333333",
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
