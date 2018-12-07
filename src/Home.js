import React, { Component } from "react"
import "./Main.css"

class Home extends Component {
  render() {
    return (
      <div className="App">
        <h2>Infinite Red Academy</h2>
        <p>Check out the tabs above for lessons</p>
        <p>Let's start with Flexbox</p>
        <img
          className="Image"
          src="https://www.tacobell.com/images/22101_crunchy_taco_supreme_269x269.jpg"
          alt={`Flexbox 1`}
        />
      </div>
    )
  }
}

export default Home
