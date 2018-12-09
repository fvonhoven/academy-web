import React, { Component } from "react"
import "./Navbar.css"
import { Link } from "react-router-dom"

export class Navbar extends Component {
  state = {
    activeTab: localStorage.getItem("activeTab") || "Home"
  }

  setActiveTab = activeTab => {
    this.setState({ activeTab })
    localStorage.setItem("activeTab", activeTab)
  }

  renderPackingListDropdown = () => {
    return (
      <div className="nav-content">
        <div className="nav-sub">
          <ul>
            <li>
              <Link to="/step1">Step 1</Link>
            </li>
            <li>
              <Link to="/step2">Step 2</Link>
            </li>
            <li>
              <Link to="/step3">Step 3</Link>
            </li>
          </ul>
        </div>
      </div>
    )
  }

  renderTabs = () => {
    const { activeTab } = this.state
    const TABS = ["Home", "Flexbox", "PackingList"]
    return TABS.map((tab, i) => {
      const backgroundColor = tab === activeTab ? "#30229970" : null
      const href = tab === "Home" ? "/" : `/${tab}`
      return (
        <li key={i} onClick={() => this.setActiveTab(tab)} style={{ backgroundColor }}>
          <Link className="nav-item" to={href.toLowerCase()}>
            {tab}
          </Link>
          {tab === "PackingList" && this.renderPackingListDropdown()}
        </li>
      )
    })
  }

  render() {
    return (
      <nav className="nav-main">
        <ul>
          <img className="logo" src={require("../images/logo.png")} />
          {this.renderTabs()}
        </ul>
      </nav>
    )
  }
}
