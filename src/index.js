import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Overlay from '../src/components/Overlay'
import GlobalStyle from '../src/components/GlobalStyle'
import Home from './containers/Home.js'
import About from './containers/About.js'
import Projects from './containers/Projects.js'

ReactDOM.render(
  <Router>
    <Overlay>
      <GlobalStyle />
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/projects' component={Projects} />
    </Overlay>
  </Router>,
  document.getElementById('root')
)
