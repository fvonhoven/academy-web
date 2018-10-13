export default `import React, { Component } from "react"
import { AppRegistry, View } from "react-native"

class AnswerFour extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <View>
          <View style={{ flex: 1, height: 50, backgroundColor: "red" }} />
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={{ flex: 1, height: 50, backgroundColor: "yellow" }} />
          <View style={{ flex: 1,  height: 50, backgroundColor: "green" }} />
        </View>
      </View>
    )
  }
}

AppRegistry.registerComponent("AnswerFour", () => AnswerFour)
`
