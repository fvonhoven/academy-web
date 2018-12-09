export default `
import React, { Component } from "react"
import { StyleSheet, Text, View  } from "react-native"

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
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
  }
})

`
