import React from "react"
import { Switch, Route } from "react-router-dom"
import Flexbox from "./Challenges/Flexbox"
import Home from "./Home"
import Answers from "./Answers"
import PackingList from "./Challenges/PackingList/PackingList"
import { Step1 } from "./Challenges/PackingList/Step1"
import { Step2 } from "./Challenges/PackingList/Step2"
import { Step3 } from "./Challenges/PackingList/Step3"
import { Navbar } from "./Components/Navbar"

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
      <Route path="/step1" component={Step1} />
      <Route path="/step2" component={Step2} />
      <Route path="/step3" component={Step3} />
    </Switch>
  </main>
)

export default App
