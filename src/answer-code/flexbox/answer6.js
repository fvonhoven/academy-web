export default `import React, { Component } from "react"
import { AppRegistry, View } from "react-native"

class FinalChallenge extends Component {
  render() {
    return (
      <View>
        <View style={{flexDirection: 'row', paddingVertical: 10, backgroundColor: "mediumaquamarine"}}>
          <View style={{justifyContent: 'center', flexShrink: 1, marginLeft: 5}}>
            <View style={{backgroundColor: "lightcoral", height: 50, width: 50, borderRadius: 25}}/>
          </View>
          <View style={{flex: 1, marginHorizontal: 5}}>
            <View style={{backgroundColor: "orange", flex: 1, height: 20}}/>
            <View style={{backgroundColor: "yellow", flex: 1, height: 20}}/>
          </View>
        </View>
        <View style={{paddingHorizontal: 5, paddingVertical: 5, flexDirection: 'row', backgroundColor: 'firebrick'}}>
          <View style={{flexDirection: 'row', flex: 3, marginRight: 5}}>
            <View style={{flex: 1, marginRight: 5}}>
              <View style={{backgroundColor: "black", height: 20}}/>
              <View style={{backgroundColor: "limegreen", height: 20}}/>
            </View>
            <View style={{flex: 1, justifyContentItems: "center"}}>
              <View style={{backgroundColor: "darkturquoise", height: 20}}/>
              <View style={{backgroundColor: "gold", height: 20}}/>
            </View>
          </View>
          <View style={{flex: 1.25, alignItems: "flex-end", justifyContent: "space-between", flexDirection: "row"}}>
            <View style={{width: 20, height: 20, borderRadius: 10, backgroundColor: "aquamarine"}} />
            <View style={{width: 20, height: 20, borderRadius: 10, backgroundColor: "blanchedalmond"}} />
          </View>
        </View>
      </View>
    )
  }
}

AppRegistry.registerComponent("FinalChallenge", () => FinalChallenge)
`
