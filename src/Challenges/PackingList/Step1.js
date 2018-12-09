import React, { Component } from "react"
import "../../Main.css"
import { instructions } from "../../instructions"
import WebPlayer from "react-native-web-player"
import step_1 from "../../challenge-code/packing-list/Step_1"
import answer1 from "../../answer-code/packing-list/answer1"

const styles = {
  webPlayer: {
    padding: "5%",
    height: 1000
  },
  li: {
    textAlign: "left",
    marginBottom: 20
  },
  hr: {
    marginTop: 500,
    marginBottom: 200
  }
}

export class Step1 extends Component {
  render() {
    const challenges = instructions.packingList
    const overview = challenges[0].overview
    return (
      <div className="App">
        <h2>{challenges[0].title}</h2>
        <div className="Challenge">
          <div className="Instructions">
            <div className="InstructionsWrapper">
              <ul className="InstructionsWrapper">
                {overview.map(val => (
                  <li style={styles.li}>{val}</li>
                ))}
              </ul>
            </div>
            <div className="ImageWrapper">
              <img className="Image" src={require(`../../images/PackingList/Step1.png`)} />
            </div>
          </div>
          <WebPlayer style={styles.webPlayer} code={step_1} />
          <hr style={styles.hr} />
          <h2>Answer</h2>
          <WebPlayer style={styles.webPlayer} code={answer1} />
        </div>
      </div>
    )
  }
}
