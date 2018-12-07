import React from "react"
import { Switch, Route } from "react-router-dom"
import Flexbox from "./Challenges/Flexbox"
import Home from "./Home"
import Answers from "./Answers"
import PackingList from "./Challenges/PackingList"
import { Navbar } from "./Components/Navbar"
import { Navbar2 } from "./Components/Navbar2"

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const App = () => (
  <main>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/flexbox" component={Flexbox} />
      <Route path="/answers" component={Answers} />
      <Route path="/packinglist" component={PackingList} />
    </Switch>
  </main>
)

export default App
