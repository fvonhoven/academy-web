import React, { Component } from "react"
import "./Main.css"
import WebPlayer from "react-native-web-player"
import { instructions } from "./instructions"
import answer1 from "./answer-code/flexbox/answer1"
import answer2 from "./answer-code/flexbox/answer2"
import answer3 from "./answer-code/flexbox/answer3"
import answer4 from "./answer-code/flexbox/answer4"
import answer5 from "./answer-code/flexbox/answer5"
import answer6 from "./answer-code/flexbox/answer6"

const styles = {
  webPlayer: {
    padding: "5%",
    height: 500
  }
}

class Answers extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  getTheCode(i) {
    switch (i) {
      case 1:
        return answer2
      case 2:
        return answer3
      case 3:
        return answer4
      case 4:
        return answer5
      case 5:
        return answer6
      default:
        return answer1
    }
  }
  renderChallenges() {
    const challenges = instructions.flexbox
    return challenges.map((c, i) => {
      const renderDivider = challenges.length - 1 !== i
      return (
        <div>
          <div className="AnswerHeader">
            <p className="Title">{challenges[i].title}</p>
            <p className="Subtitle">{challenges[i].text}</p>
          </div>
          <WebPlayer style={styles.webPlayer} code={this.getTheCode(i)} />
          {renderDivider && <hr />}
        </div>
      )
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Answers</h1>
        {this.renderChallenges()}
      </div>
    )
  }
}

export default Answers
