import React, { Component } from "react"
import "./Navbar2.css"

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
    )
  }

  renderTabs = () => {
    const { activeTab } = this.state
    const TABS = ["Home", "Flexbox", "PackingList", "About"]
    return TABS.map((tab, i) => {
      const backgroundColor = tab === activeTab ? "#602370" : null
      const href = tab === "Home" ? "/" : `/${tab}`
      return (
        <li
          className="list-item"
          key={i}
          onClick={() => this.setActiveTab(tab)}
          style={{ backgroundColor }}
        >
          <a className="nav-item" href={href.toLowerCase()}>
            {tab}
          </a>
          {tab === "PackingList" && this.renderPackingListDropdown()}
        </li>
      )
    })
  }

  render() {
    return (
      <nav className="nav-main">
        <ul>
          <div className="logo">IR Academy Logo</div>
          {this.renderTabs()}
        </ul>
      </nav>
    )
  }
}
