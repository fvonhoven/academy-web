import React, { Component } from "react"
import "../../Main.css"
import { instructions } from "../../instructions"
import WebPlayer from "react-native-web-player"
import step_3 from "../../challenge-code/packing-list/Step_3"
import answer3 from "../../answer-code/packing-list/answer3"

const styles = {
  webPlayer: {
    padding: "5%",
    height: 1500
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

export class Step3 extends Component {
  render() {
    const challenges = instructions.packingList
    const overview = challenges[2].overview
    return (
      <div className="App">
        <h2>{challenges[2].title}</h2>
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
              <img className="Image" src={require(`../../images/PackingList/Step3.gif`)} />
            </div>
          </div>
          <WebPlayer style={styles.webPlayer} code={step_3} />
          <hr style={styles.hr} />
          <h2>Answer</h2>
          <WebPlayer style={styles.webPlayer} code={answer3} />
        </div>
      </div>
    )
  }
}
