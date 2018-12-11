import React, { Component } from "react"
import "../../Main.css"
import { instructions } from "../../instructions"
import WebPlayer from "react-native-web-player"
import step_1 from "../../challenge-code/packing-list/Step_1"
import answer1 from "../../answer-code/packing-list/answer1"

const styles = {
  webPlayer: {
    padding: "5%",
    height: 1000,
    marginTop: 20
  },
  li: {
    textAlign: "left",
    fontSize: 20,
    marginBottom: 20
  },
  hr: {
    marginTop: 500,
    marginBottom: 200
  }
}

export class Step1 extends Component {
  render() {
    const { title, overview, objective, importantLinks } = instructions.packingList[0]
    return (
      <div className="App">
        <h2>{title}</h2>
        <hr />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            paddingLeft: 50,
            paddingRight: 50,
            justifyContent: "center"
          }}
        >
          <div
            style={{
              display: "flex",
              flex: 0.65,
              alignItems: "center",
              flexDirection: "column",
              justifyContent: "center"
            }}
          >
            <h4>Overview</h4>
            <div style={{ width: "70%" }}>
              <p style={{ width: "100%" }}>{overview}</p>
            </div>
            <h4>Objective</h4>
            <div style={{ width: "70%" }}>
              <p>{objective}</p>
            </div>
            <div>
              <h4>Important Links</h4>
              {importantLinks.map(link => {
                const { name, url } = link
                return (
                  <ul>
                    <li>
                      <a style={{ fontSize: 20 }} href={url} target="_blank">
                        {name}
                      </a>
                    </li>
                  </ul>
                )
              })}
            </div>
          </div>
          <div className="ImageWrapper">
            <img className="Image" src={require(`../../images/PackingList/Step1.png`)} />
          </div>
        </div>
        <div className="Challenge">
          <WebPlayer style={styles.webPlayer} code={step_1} />
          <hr style={styles.hr} />
          <h2>Answer</h2>
          <WebPlayer style={styles.webPlayer} code={answer1} />
        </div>
      </div>
    )
  }
}
