import React, { Component } from "react"
import "./Main.css"

class Home extends Component {
  render() {
    return (
      <div className="App">
        <h1>Home</h1>
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
