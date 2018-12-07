import React, { Component } from "react"
import "./Navbar2.css"

export class Navbar2 extends Component {
  state = {
    activeTab: localStorage.getItem("activeTab") || "Home"
  }

  setActiveTab = activeTab => {
    this.setState({ activeTab })
    localStorage.setItem("activeTab", activeTab)
  }

  render() {
    return (
      <nav className="nav-main">
        <div className="logo">IR Academy Logo</div>
        <ul>
          <li className="list-item">
            <a href="/" className="nav-item">
              Home
            </a>
          </li>
          <li>
            <a href="/flexbox" className="nav-item">
              Flexbox
            </a>
          </li>
          <li>
            <a href="/packinglist" className="nav-item">
              PackingList
            </a>
            <div className="nav-content">
              <div className="nav-sub">
                <ul>
                  <li>
                    <a href="#">Step 1</a>
                  </li>
                  <li>
                    <a href="#">Step 2</a>
                  </li>
                  <li>
                    <a href="#">Step 3</a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </nav>
    )
  }
}
