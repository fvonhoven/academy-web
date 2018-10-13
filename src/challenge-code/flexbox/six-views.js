export default `import React, { Component } from "react"
import { AppRegistry, View } from "react-native"

class FlexboxSixViews extends Component {
  render() {
    return (
      <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
        <View style={{ flex: 1, height: 50, backgroundColor: "lightBlue" }} />
        <View style={{ flex: 1, height: 50, backgroundColor: "red" }} />
        <View style={{ flex: 1, height: 50, backgroundColor: "yellow" }} />
        <View style={{ flex: 1, height: 50, backgroundColor: "green" }} />
        <View style={{ flex: 1, height: 50, backgroundColor: "orange" }} />
        <View style={{ flex: 1, height: 50, backgroundColor: "purple" }} />
      </View>
    )
  }
}

AppRegistry.registerComponent("FlexboxSixViews", () => FlexboxSixViews)
`
