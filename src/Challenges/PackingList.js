import React, { Component } from "react"
import "../Main.css"
import WebPlayer from "react-native-web-player"
import { instructions } from "../instructions"
import ThreeViews from "../challenge-code/flexbox/three-views"
import SixViews from "../challenge-code/flexbox/six-views"
import { Link } from "react-router-dom"

const styles = {
  webPlayer: {
    padding: "5%",
    height: 500
  }
}

class PackingList extends Component {
  getTheCode(i) {
    switch (i) {
      case 4:
        return SixViews
      case 5:
        return SixViews
      default:
        return ThreeViews
    }
  }
  renderChallenges() {
    const challenges = instructions.packingList
    return challenges.map((c, i) => {
      const renderDivider = challenges.length - 1 !== i
      return (
        <div key={i} className="Challenge">
          <div className="Instructions">
            <div className="InstructionsWrapper">
              <p className="Title">{challenges[i].title}</p>
              <p className="Instructions">{challenges[i].text}</p>
            </div>
            <div className="ImageWrapper">
              <img
                className="Image"
                src={require(`../images/flexbox${i}.png`)}
                alt={`Flexbox ${i}`}
              />
              {!renderDivider && (
                <img
                  className="Image"
                  src={require(`../images/flexbox-cell.png`)}
                  alt={`Flexbox Cell`}
                />
              )}
            </div>
          </div>
          <WebPlayer style={styles.webPlayer} code={this.getTheCode(i)} />
          {renderDivider && <hr />}
          {!renderDivider && (
            <p className="Pi">
              <Link className="Pi" to="/answers">
                π
              </Link>
            </p>
          )}
        </div>
      )
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Packing List App</h1>
        <p>Overview</p>
        <hr />
        <hr />
        {this.renderChallenges()}
      </div>
    )
  }
}

export default PackingList
