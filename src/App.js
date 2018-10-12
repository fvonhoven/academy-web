import React, { Component } from "react"
import "./App.css"
import WebPlayer from "react-native-web-player"
import { instructions } from "./instructions"
import ThreeViews from "./starter-code/flexbox/three-views"
import SixViews from "./starter-code/flexbox/six-views"

const styles = {
  webPlayer: {
    padding: "5%",
    height: 500
  }
}

class App extends Component {
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
    const challenges = instructions.flexbox
    return challenges.map((c, i) => {
      const renderDivider = challenges.length - 1 !== i
      return (
        <div className="Challenge">
          <div className="Instructions">
            <div className="InstructionsWrapper">
              <p className="Title">{challenges[i].title}</p>
              <p className="Instructions">{challenges[i].text}</p>
            </div>
            <div className="ImageWrapper">
              <img
                className="Image"
                src={require(`./images/flexbox${i}.png`)}
                alt={`Flexbox ${i}`}
              />
              {!renderDivider && (
                <img
                  className="Image"
                  src={require(`./images/flexbox-cell.png`)}
                  alt={`Flexbox Cell`}
                />
              )}
            </div>
          </div>
          <WebPlayer style={styles.webPlayer} code={this.getTheCode(i)} />
          {renderDivider && <hr />}
          {!renderDivider && (
            <p onClick={() => window.alert("hey")} className="Pi">
              π
            </p>
          )}
        </div>
      )
    })
  }

  render() {
    return (
      <div className="App">
        <h1>💪 Flex Yo Stuff with Style</h1>
        {this.renderChallenges()}
      </div>
    )
  }
}

export default App
