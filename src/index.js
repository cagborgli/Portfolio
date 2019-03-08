import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './containers/Home.js'
import About from './containers/About.js'
import Projects from './containers/Projects.js'
import { createGlobalStyle } from 'styled-components'
import img from './images/home.jpg'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    border: 0;
    padding: 0;
    background-image: url(${img});
    background-repeat: no-repeat;
    background-size: cover;
    width: 100vw;
    height: 100vh;
  }
`

const Overlay = styled.div`
  height: 100vh;
  width: 100vw;
  background: rgb(0, 0, 0, 0.8);
`

ReactDOM.render(
  <Overlay>
    <GlobalStyle />
    <Projects />
  </Overlay>,
  document.getElementById('root')
)
