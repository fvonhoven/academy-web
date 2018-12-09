import React, { Component } from "react"
import "../../Main.css"

export default class PackingList extends Component {
  render() {
    return (
      <div className="App">
        <h1>Packing List App</h1>
        <div className="Instructions">
          <div style={{ width: "100%" }}>
            <img
              style={{ width: "70%" }}
              src={require(`../../images/PackingList/packing-list-app.png`)}
            />
          </div>
        </div>
      </div>
    )
  }
}
