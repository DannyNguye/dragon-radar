import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom"
import LandingPage from './LandingPage'
import CardIndexContainer from './cards/CardIndexContainer'

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/cards" component={CardIndexContainer} />
      </Switch>
    </BrowserRouter>

  )
}

export default App
