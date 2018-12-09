import React, { Component } from "react"
import "../../Main.css"
import { instructions } from "../../instructions"
import WebPlayer from "react-native-web-player"
import step_2 from "../../challenge-code/packing-list/Step_2"
import answer2 from "../../answer-code/packing-list/answer2"

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

export class Step2 extends Component {
  render() {
    const challenges = instructions.packingList
    const overview = challenges[1].overview
    return (
      <div className="App">
        <h2>{challenges[1].title}</h2>
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
              <img className="Image" src={require(`../../images/PackingList/Step2.png`)} />
            </div>
          </div>
          <WebPlayer style={styles.webPlayer} code={step_2} />
          <hr style={styles.hr} />
          <h2>Answer</h2>
          <WebPlayer style={styles.webPlayer} code={answer2} />
        </div>
      </div>
    )
  }
}
