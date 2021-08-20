import React from 'react';
import { HashRouter, Route } from "react-router-dom"
import Home from "./routes/Home"
import About from "./routes/About"

function App() {
  return <span><HashRouter>
    <Route path="/" exact={true} component={Home} />
    <Route path="/about" component={About} />
  </HashRouter></span>
}

export default App