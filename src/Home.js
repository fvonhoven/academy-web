import React, { Component } from "react"
import "./Main.css"

class Home extends Component {
  render() {
    return (
      <div className="App">
        <img
          style={{ width: "80%", marginTop: 100 }}
          src={require("./images/logo.png")}
          alt={`Flexbox 1`}
        />
        <p>Check out the tabs above for lessons</p>
        <p>Let's start with Flexbox</p>
      </div>
    )
  }
}

export default Home
