import React, { Component } from "react"
import "./Navbar.css"

export class Navbar extends Component {
  state = {
    activeTab: localStorage.getItem("activeTab") || "Home"
  }

  setActiveTab = activeTab => {
    this.setState({ activeTab })
    localStorage.setItem("activeTab", activeTab)
  }

  renderTabs = () => {
    const { activeTab } = this.state
    const TABS = ["Home", "Flexbox", "Contact", "About"]
    return TABS.map((tab, i) => {
      const backgroundColor = tab === activeTab ? "#602370" : null
      const href = tab === "Home" ? "/" : `/${tab}`
      return (
        <li key={i} onClick={() => this.setActiveTab(tab)} style={{ backgroundColor }}>
          <a href={href}>{tab}</a>
        </li>
      )
    })
  }

  render() {
    return <ul className="navbar">{this.renderTabs()}</ul>
  }
}
