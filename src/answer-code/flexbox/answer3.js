export default `import React, { Component } from "react"
import { AppRegistry, View } from "react-native"

class AnswerThree extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View style={{ width: 100, height: 50, backgroundColor: "red" }} />
        <View style={{flexDirection: 'row'}}>
          <View style={{ width: 50, height: 50, backgroundColor: "yellow" }} />
          <View style={{ width: 50, height: 50, backgroundColor: "green" }} />
        </View>
      </View>
    )
  }
}

AppRegistry.registerComponent("AnswerThree", () => AnswerThree)
`
