export default `import React, { Component } from "react"
import { AppRegistry, View } from "react-native"

class AnswerOne extends Component {
  render() {
    return (
      <View style={{ flex: 1, flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
        <View style={{ width: 50, height: 50, backgroundColor: "red" }} />
        <View style={{ width: 50, height: 50, backgroundColor: "yellow" }} />
        <View style={{ width: 50, height: 50, backgroundColor: "green" }} />
      </View>
    )
  }
}

AppRegistry.registerComponent("AnswerOne", () => AnswerOne)
`
