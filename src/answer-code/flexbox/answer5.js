export default `import React, { Component } from "react"
import { AppRegistry, View } from "react-native"

class AnswerFive extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <View style={{height: 50, flexDirection: "row"}}>
          <View style={{ flex: 1, height: 50, backgroundColor: "lightBlue" }} />
          <View style={{ flex: 3, height: 50, backgroundColor: "red" }} />
        </View>
        <View style={{height: 50, flexDirection: "row"}}>
        <View style={{ flex: 1, height: 50, backgroundColor: "yellow" }} />
        <View style={{ flex: 1, height: 50, backgroundColor: "green" }} />
        </View>
        <View style={{height: 50, flexDirection: "row"}}>
          <View style={{ flex: 3, height: 50, backgroundColor: "orange" }} />
          <View style={{ flex: 1, height: 50, backgroundColor: "purple" }} />
        </View>
      </View>
    )
  }
}

AppRegistry.registerComponent("AnswerFive", () => AnswerFive)
`
